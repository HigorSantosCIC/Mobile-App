import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DashboardScreen from '../screens/DashboardScreen';
import DrawerContent from '../components/DrawerContent';
import MyAnimals from '../screens/MyAnimals';
import Notifications from '../screens/Notifications';
import RoomsScreen from '../screens/Chat/RoomsScreen';
import RoomScreen from '../screens/Chat/RoomScreen';

const Drawer = createDrawerNavigator();

const LoggedNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Dashboard"
      drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen name="Dashboard" component={DashboardScreen} />
      <Drawer.Screen name="MyAnimals" component={MyAnimals} />
      <Drawer.Screen name="Notifications" component={Notifications} />
      <Drawer.Screen name="Rooms" component={RoomsScreen} />
      <Drawer.Screen name="Room" component={RoomScreen} />
    </Drawer.Navigator>
  );
};

export default LoggedNavigator;
