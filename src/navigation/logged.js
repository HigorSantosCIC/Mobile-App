import * as React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DashboardScreen from '../screens/DashboardScreen';
import DrawerContent from '../components/DrawerContent';
import MyAnimals from '../screens/MyAnimals';
import Notifications from '../screens/Notifications';
import RoomsScreen from '../screens/Chat/RoomsScreen';
import RoomScreen from '../screens/Chat/RoomScreen';
import { FontAwesome } from '@expo/vector-icons';
import AddRoomScreen from '../screens/Chat/AddRoomScreen';

const Drawer = createDrawerNavigator();

const LoggedNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Dashboard"
      drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{ title: 'Menu' }}
      />
      <Drawer.Screen
        name="MyAnimals"
        component={MyAnimals}
        options={{ title: 'Meus animais' }}
      />
      <Drawer.Screen
        name="Notifications"
        component={Notifications}
        options={{ title: 'Notificações' }}
      />
      <Drawer.Screen
        name="Rooms"
        component={RoomsScreen}
        options={({ navigation }) => ({
          headerRight: () => (
            <View style={{ paddingRight: 10 }}>
              <TouchableOpacity onPress={() => navigation.navigate('AddRoom')}>
                <FontAwesome size={26} name="plus" />
              </TouchableOpacity>
            </View>
          ),
          title: 'Chat',
        })}
      />
      <Drawer.Screen
        name="AddRoom"
        component={AddRoomScreen}
        options={{ drawerItemStyle: { height: 0 }, title: 'Adicionar chat' }}
      />
      <Drawer.Screen
        name="Room"
        component={RoomScreen}
        options={{
          drawerItemStyle: { height: 0 },
          title: 'Conversa',
        }}
      />
    </Drawer.Navigator>
  );
};

export default LoggedNavigator;
