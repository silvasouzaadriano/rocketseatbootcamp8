import React, {useState, useEffect, useMemo} from 'react';
import PropTypes from 'prop-types';
import {format, subMonths, addMonths, parseISO} from 'date-fns';
import pt from 'date-fns/locale/pt-BR';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {withNavigationFocus} from 'react-navigation';
import {errorMessage, successMessage} from '~/util/Message';

import api from '~/services/api';

import {
  Container,
  ContainerHeader,
  List,
  ButtonDate,
  TextDate,
  NoMeetapps,
  NoMeetappsText,
} from './styles';

import Background from '~/components/Background';
import Header from '~/components/Header';
import Meetapp from '~/components/Meetapp';

function Dashboard({isFocused}) {
  const [meetapps, setMeetapps] = useState([]);
  const [date, setDate] = useState(new Date());
  const [refreshing] = useState(false);
  const [noMeetapps] = useState([1]);

  const dateFormatted = useMemo(
    () => format(date, "MMMM ' de ' yyyy", {locale: pt}),
    [date]
  );

  useEffect(() => {
    async function loadMeetapps() {
      try {
        const response = await api.get('meetapps', {params: {date}});
        const data = response.data.map(m => ({
          ...m,
          formattedDate: format(
            parseISO(m.date),
            "d ' de ' MMMM ', às' hh'h'mm",
            {
              locale: pt,
            }
          ),
        }));
        setMeetapps(data);
      } catch (e) {
        errorMessage(e);
      }
    }
    if (isFocused) {
      loadMeetapps();
    }
  }, [date, isFocused]);

  function handlePrevDay() {
    setDate(subMonths(date, 1));
  }

  function handleNextDay() {
    setDate(addMonths(date, 1));
  }
  function handleRefresh() {
    setDate(subMonths(date, 0));
  }
  async function handleSubscribe(id) {
    try {
      await api.post(`subscriptions/${id}`);
      handleRefresh();
      successMessage('Você foi inscrito para esse meetup!');
    } catch (e) {
      errorMessage(e);
    }
  }

  async function handleUninscribe(id) {
    try {
      await api.delete(`subscriptions/${id}`);
      handleRefresh();
      successMessage('Meetup cancelado com sucesso successfully canceled');
    } catch (e) {
      errorMessage(e);
    }
  }

  return (
    <>
      <Background>
        <Header />
        <Container>
          <ContainerHeader>
            <ButtonDate onPress={handlePrevDay}>
              <Icon name="navigate-before" size={36} color="#fff" />
            </ButtonDate>
            <TextDate>{dateFormatted}</TextDate>
            <ButtonDate onPress={handleNextDay}>
              <Icon name="navigate-next" size={36} color="#fff" />
            </ButtonDate>
          </ContainerHeader>
          {meetapps.length > 0 ? (
            <List
              data={meetapps}
              keyExtractor={item => String(item.id)}
              renderItem={({item}) => (
                <Meetapp
                  data={item}
                  handleSubscribe={() => handleSubscribe(item.id)}
                  handleUninscribe={() => handleUninscribe(item.id)}
                />
              )}
              onRefresh={handleRefresh}
              refreshing={refreshing}
            />
          ) : (
            <List
              data={noMeetapps}
              keyExtractor={item => String(item)}
              renderItem={() => (
                <NoMeetapps>
                  <Icon name="sentiment-dissatisfied" size={40} color="#fff" />
                  <NoMeetappsText>Não há meetups para esse mês!</NoMeetappsText>
                </NoMeetapps>
              )}
              onRefresh={handleRefresh}
              refreshing={refreshing}
            />
          )}
        </Container>
      </Background>
    </>
  );
}

function IconTab({tintColor}) {
  return <Icon name="event" size={20} color={tintColor} />;
}

IconTab.propTypes = {
  tintColor: PropTypes.string.isRequired,
};

Dashboard.propTypes = {
  isFocused: PropTypes.bool.isRequired,
};

Dashboard.navigationOptions = {
  tabBarLabel: 'Meetupps',
  tabBarIcon: IconTab,
};

export default withNavigationFocus(Dashboard);
