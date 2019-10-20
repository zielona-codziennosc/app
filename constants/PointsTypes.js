import { faLeaf, faTint, faSmog } from '@fortawesome/free-solid-svg-icons';
import Colors from './Colors';

export default {
  leaves: {
    icon: faLeaf,
    backgroundColor: Colors.greenLight
  },
  water: {
    icon: faTint,
    backgroundColor: Colors.azure
  },
  pollution: {
    icon: faSmog,
    backgroundColor: Colors.olive
  }
};
