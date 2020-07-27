import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import SearchScreen from './src/screens/SearchScreen';
import ResultsShowScreen from './src/screens/ResultsShowScreen';

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    Results: ResultsShowScreen,
  },
  {
    initialRouteName: 'Search',
    defaultNavigationOptions: {
      title: 'Food App',

      headerTitleStyle: {
        fontWeight: '500',
        fontSize: 24,
        marginTop: 5,
        alignSelf: 'center',
      },
    },
  }
);

export default createAppContainer(navigator);
