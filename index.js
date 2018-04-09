import { Navigation } from 'react-native-navigation';

import Login from './screens/login';
import TypeGames from './screens/typeGames';
import Game1 from './screens/game1';


Navigation.registerComponent('Login', () => Login);
Navigation.registerComponent('TypeGames', () => TypeGames);
Navigation.registerComponent('Game1', () => Game1);

Navigation.startSingleScreenApp({
	screen : {
		screen : 'Game1',
		title : 'Game1'
	}
});
