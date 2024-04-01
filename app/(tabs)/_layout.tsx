import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable, TouchableOpacity, View } from 'react-native';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';
import { IconTabBar } from '@/components/atoms';
import {
  HomeIcon,
  DocumentTextIcon,
  ArchiveBoxIcon,
  UserIcon,
  FingerPrintIcon,
} from 'react-native-heroicons/solid';
import { Text } from '@/components/Themed';

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'dark'].tint,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
        lazy: true,
        freezeOnBlur: true,
        tabBarHideOnKeyboard: true,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          headerShown: false,
          tabBarShowLabel: true,
          tabBarIcon: ({ color }) => <HomeIcon color={color} />,
        }}
      />

      <Tabs.Screen
        name="Timesheet"
        options={{
          title: 'Timesheet',
          tabBarShowLabel: true,
          tabBarIcon: ({ color }) => <DocumentTextIcon color={color} />,
        }}
      />
      <Tabs.Screen
        name="Test"
        options={{
          title: 'Test',
          headerShown: false,
          tabBarShowLabel: true,
          tabBarIcon: ({ color }) => <HomeIcon color={color} />,
          tabBarButton(props) {
            return (
              <TouchableOpacity activeOpacity={0.8} {...props}>
                <View className="-top-1 bg-blue-100 shadow-xl rounded-full flex h-16 w-16 justify-center items-center">
                  <FingerPrintIcon height={40} width={40} className="-mr-2" />
                </View>
                <Text>Check In</Text>
              </TouchableOpacity>
            );
          },
        }}
      />

      <Tabs.Screen
        name="TimeOff"
        options={{
          title: 'TimeOff',
          tabBarShowLabel: true,
          tabBarIcon: ({ color }) => <ArchiveBoxIcon color={color} />,
        }}
      />
      <Tabs.Screen
        name="Profile"
        options={{
          title: 'Profile',
          tabBarShowLabel: true,
          tabBarIcon: ({ color }) => <UserIcon color={color} />,
        }}
      />
    </Tabs>
  );
}
