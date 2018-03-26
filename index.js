import { Navigation } from 'react-native-navigation';

import Login from './screens/login';
import Loginn from './screens/Loginn';

Navigation.registerComponent('Login', () => Login);
Navigation.registerComponent('Loginn', () => Loginn);

Navigation.startSingleScreenApp({
	screen : {
		screen : 'Login',
		title : 'Login'
	}
});
