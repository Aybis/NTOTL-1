import { View, Text } from 'react-native';
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';

export default function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}
