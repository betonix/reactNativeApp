import { Navigation } from 'react-native-navigation';

import Login from './screens/login';
import TypeGames from './screens/typeGames';
import Game1 from './screens/game1';
import Principal from './screens/principal';


Navigation.registerComponent('Login', () => Login);
Navigation.registerComponent('TypeGames', () => TypeGames);
Navigation.registerComponent('Game1', () => Game1);
Navigation.registerComponent('Principal', () => Principal);


Navigation.startSingleScreenApp({
	screen : {
		screen : 'Principal',
		title : 'Principal'
	}
});
