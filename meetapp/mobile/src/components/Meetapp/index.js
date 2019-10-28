import React from 'react';
import {Platform} from 'react-native';
import {useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';

import {
  Container,
  Content,
  Banner,
  Title,
  Info,
  InfoText,
  ViewButtom,
  SubmitButton,
} from './styles';

export default function Meetapp({data, handleSubscribe, handleUninscribe}) {
  const userId = useSelector(store => store.user.profile.id);

  let localIPFrom = 'localhost';
  let localIPTo = '10.0.2.2';

  if (Platform.OS === 'ios') {
    localIPFrom = '10.0.2.2';
    localIPTo = 'localhost';
  }

  return (
    <Container
      style={{
        opacity: !data.canceled_at && !data.past ? 1 : 0.5,
      }}>
      <Banner
        source={{
          uri:
            data.banner &&
            data.banner.url.replace(`${localIPFrom}`, `${localIPTo}`),
        }}
      />
      <Content>
        <Title>{data.title}</Title>
        <Info>
          <Icon name="event" size={15} color="#999" />
          <InfoText>{data.formattedDate}</InfoText>
        </Info>
        <Info>
          <Icon name="location-on" size={15} color="#999" />
          <InfoText>{data.location}</InfoText>
        </Info>
        <Info>
          <Icon name="person" size={15} color="#999" />
          <InfoText>Organizado por: {data.owner.name}</InfoText>
        </Info>
        {!data.past &&
          (userId !== data.owner.id && (
            <ViewButtom>
              {!data.past &&
                (data.canSubscribe ? (
                  <SubmitButton icon="check" onPress={handleSubscribe}>
                    Inscrever-se
                  </SubmitButton>
                ) : (
                  <SubmitButton icon="close" onPress={handleUninscribe}>
                    Cancelar inscrição
                  </SubmitButton>
                ))}
            </ViewButtom>
          ))}
      </Content>
    </Container>
  );
}

Meetapp.propTypes = {
  data: PropTypes.oneOfType([PropTypes.object]).isRequired,
  handleSubscribe: PropTypes.func,
  handleUninscribe: PropTypes.func,
};

Meetapp.defaultProps = {
  handleSubscribe: null,
  handleUninscribe: null,
};
