import { CustomMap } from './CustomMap';
import { User } from './User';

const user = new User();

const customMap = new CustomMap('map');
customMap.addUserMarker(user);
