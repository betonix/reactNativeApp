import { Navigation } from 'react-native-navigation';

import Login from './screens/login';

Navigation.registerComponent('picplay', () => Login);

Navigation.startSingleScreenApp({
	screen : {
		screen : 'picplay'
	}
});