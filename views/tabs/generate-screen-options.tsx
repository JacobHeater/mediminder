import React from 'react';
import { Ionicons } from '@expo/vector-icons';

export function generateScreenOptions({ route }) {
  return {
    tabBarIcon({ focused, color, size }) {
      let iconName: string;

      switch (route.name) {
        case 'Home':
          iconName = 'ios-home';
          break;
        case 'History':
          iconName = 'ios-time';
          break;
        case 'Settings':
          iconName = 'ios-cog';
          break;
        default:
          throw new Error(`Invalid route name: ${route.name}`);
      }

      return <Ionicons name={iconName} size={size} color={color} />;
    }
  };
}
