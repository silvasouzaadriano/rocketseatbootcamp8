/* MODULES */
import React, { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { format, subMonths, addMonths, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';
import {
  MdAddCircleOutline,
  MdChevronLeft,
  MdChevronRight,
  MdSentimentDissatisfied,
} from 'react-icons/md';

import api from '~/services/api';
import history from '~/services/history';

import { Container, NoMeetapps, MeetappCard } from './styles';

export default function Dashboard() {
  const [meetapps, setMeetapps] = useState([]);
  const [date, setDate] = useState(new Date());

  const dateFormatted = useMemo(
    () => format(date, 'yyyy MMMM', { locale: pt }),
    [date]
  );

  useEffect(() => {
    async function loadMeetapps() {
      const response = await api.get('meetapps', { params: { date } });
      const data = response.data.map(m => ({
        ...m,
        formattedDate: format(parseISO(m.date), "d ' de ' MMMM', às' hh'h'mm", {
          locale: pt,
        }),
      }));
      setMeetapps(data);
    }
    loadMeetapps();
  }, [date]);

  function handlePrevDay() {
    setDate(subMonths(date, 1));
  }

  function handleNextDay() {
    setDate(addMonths(date, 1));
  }

  return (
    <Container>
      <header>
        <strong>Meetups</strong>
        <button type="button" onClick={() => history.push('/meetapp-new')}>
          <MdAddCircleOutline />
          Novo Meetup
        </button>
      </header>

      {meetapps.length > 0 ? (
        <ul>
          {meetapps.map(meetapp => (
            <MeetappCard
              key={String(meetapp.id)}
              style={{
                opacity: !meetapp.canceled_at && !meetapp.past ? 1 : 0.5,
              }}
            >
              <Link to={`meetapp-details/${meetapp.id}`}>
                {!meetapp.canceled_at ? (
                  <strong>{meetapp.title}</strong>
                ) : (
                  <span>
                    <strike>{meetapp.title}</strike>
                  </span>
                )}
                <time>{meetapp.formattedDate}</time>
                <MdChevronRight size={24} color="#fff" />
              </Link>
            </MeetappCard>
          ))}
        </ul>
      ) : (
        <NoMeetapps>
          <MdSentimentDissatisfied color="#fff" size={40} />
          <span>Não há meetapps para esse mês!</span>
        </NoMeetapps>
      )}
      <footer>
        <button type="button" onClick={handlePrevDay}>
          <MdChevronLeft size={36} color="#fff" />
        </button>
        <strong>{dateFormatted}</strong>
        <button type="button" onClick={handleNextDay}>
          <MdChevronRight size={36} color="#fff" />
        </button>
      </footer>
    </Container>
  );
}
