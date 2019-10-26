import React, {useMemo, useState, useEffect} from 'react';
import {parseISO, formatRelative} from 'date-fns';
import pt from 'date-fns/locale/pt';

import {TouchableOpacity, Platform} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';

import {Container, Left, Avatar, Info, Name, Time} from './styles';

export default function Appointment({data, onCancel}) {
  const [localIPFrom, setLocalIPFrom] = useState('localhost');
  const [localIPTo, setLocalIPTo] = useState('10.0.2.2');

  useEffect(() => {
    if (Platform.OS === 'ios') {
      setLocalIPFrom('10.0.2.2');
      setLocalIPTo('localhost');
    } else {
      setLocalIPFrom('localhost');
      setLocalIPTo('10.0.2.2');
    }
  }, [localIPFrom, localIPTo]);

  const dateParsed = useMemo(() => {
    return formatRelative(parseISO(data.date), new Date(), {
      locale: pt,
      addSuffix: true,
    });
  }, [data.date]);

  return (
    <Container past={data.past}>
      <Left>
        <Avatar
          source={{
            uri: data.provider.avatar
              ? data.provider.avatar.url.replace(
                  `${localIPFrom}`,
                  `${localIPTo}`
                )
              : `https://api.adorable.io/avatar/50/${data.provider.name}.png`,
          }}
        />

        <Info>
          <Name>{data.provider.name}</Name>
          <Time>{dateParsed}</Time>
        </Info>
      </Left>

      {data.cancelable && !data.canceled_at && (
        <TouchableOpacity onPress={onCancel}>
          <Icon name="event-busy" size={20} color="#f64c75" />
        </TouchableOpacity>
      )}
    </Container>
  );
}

Appointment.propTypes = {
  data: PropTypes.shape({
    provider: PropTypes.object.isRequired,
    date: PropTypes.any.isRequired,
    past: PropTypes.bool.isRequired,
    cancelable: PropTypes.bool.isRequired,
    canceled_at: PropTypes.any,
  }).isRequired,
  onCancel: PropTypes.func.isRequired,
};
