import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeTabView } from './views/tabs/home/home';
import { SettingsTabView } from './views/tabs/settings/settings';
import { HistoryTabView } from './views/tabs/history/history';
import { generateScreenOptions } from './views/tabs/generate-screen-options';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={generateScreenOptions}
        tabBarOptions={{
          activeTintColor: '#4791d6',
          inactiveTintColor: '#787878',
          inactiveBackgroundColor: '#dbdbdb',
        }}>
        <Tab.Screen name="Home" component={HomeTabView} />
        <Tab.Screen name="History" component={HistoryTabView} />
        <Tab.Screen name="Settings" component={SettingsTabView} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
