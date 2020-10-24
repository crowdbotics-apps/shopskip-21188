import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import EmailAuth43159867Navigator from '../features/EmailAuth43159867/navigator';
import BlankScreen41159577Navigator from '../features/BlankScreen41159577/navigator';
import Maps130715Navigator from '../features/Maps130715/navigator';
import Add-Item130714Navigator from '../features/Add-Item130714/navigator';
import Maps130710Navigator from '../features/Maps130710/navigator';
import UserProfile130706Navigator from '../features/UserProfile130706/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
EmailAuth43159867: { screen: EmailAuth43159867Navigator },
BlankScreen41159577: { screen: BlankScreen41159577Navigator },
Maps130715: { screen: Maps130715Navigator },
Add-Item130714: { screen: Add-Item130714Navigator },
Maps130710: { screen: Maps130710Navigator },
UserProfile130706: { screen: UserProfile130706Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
