import { ImageSourcePropType } from 'react-native';
import { Event } from '../components/EventCard';
import moment from 'moment';

type Category = {
  name: string;
  image: ImageSourcePropType;
};

export const categories: Category[] = [
  {
    name: 'Cultural',
    image: require('../assets/images/pratham-gupta-DksFIwoPLAA-unsplash.jpg'),
  },
  {
    name: 'Deportes',
    image: require('../assets/images/tommy-boudreau-diO0a_ZEiEE-unsplash.jpg'),
  },
  {
    name: 'Conferencias',
    image: require('../assets/images/product-school-DL-yyYDDNX4-unsplash.jpg'),
  },
  {
    name: 'Entretenimiento',
    image: require('../assets/images/matty-adame-nLUb9GThIcg-unsplash.jpg'),
  },
  {
    name: 'Tecnología',
    image: require('../assets/images/uriel-soberanes-MxVkWPiJALs-unsplash.jpg'),
  },
  {
    name: 'Competencias',
    image: require('../assets/images/hassan-pasha-7SjEuEF06Zw-unsplash.jpg'),
  },
];

export const events: Event[] = [
  {
    id: 0,
    name: 'Evento 0',
    capacity: 20,
    description: 'an Empty event',
    organizer: 'Dios',
    status: 'Disponible',
    date: moment('20201031', 'YYYYMMDD').toDate(),
    maxCapacity: 31,
  },
  {
    id: 1,
    name: 'Evento 1',
    capacity: 20,
    description: 'an Empty event',
    organizer: 'Dios',
    status: 'Disponible',
    date: moment('20201031', 'YYYYMMDD').toDate(),
    maxCapacity: 31,
  },
  {
    id: 2,
    name: 'Evento 2',
    capacity: 20,
    description: 'an Empty event',
    organizer: 'Dios',
    status: 'Disponible',
    date: moment('20201031', 'YYYYMMDD').toDate(),
    maxCapacity: 31,
  },
  {
    id: 2,
    name: 'Evento 2',
    capacity: 20,
    description: 'an Empty event',
    organizer: 'Dios',
    status: 'Disponible',
    date: moment('20201031', 'YYYYMMDD').toDate(),
    maxCapacity: 31,
  },
  {
    id: 2,
    name: 'Evento 2',
    capacity: 20,
    description: 'an Empty event',
    organizer: 'Dios',
    status: 'Disponible',
    date: moment('20201031', 'YYYYMMDD').toDate(),
    maxCapacity: 31,
  },
  {
    id: 2,
    name: 'Evento 2',
    capacity: 20,
    description: 'an Empty event',
    organizer: 'Dios',
    status: 'Disponible',
    date: moment('20201031', 'YYYYMMDD').toDate(),
    maxCapacity: 31,
  },
];
