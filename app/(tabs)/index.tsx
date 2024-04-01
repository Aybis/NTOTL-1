import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TextInput,
  Touchable,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { FontAwesome, FontAwesome6 } from '@expo/vector-icons';
import { SparklesIcon, MapPinIcon } from 'react-native-heroicons/solid';
import { BellIcon } from 'react-native-heroicons/outline';
import { Carousel, HeadphonesCarousel } from '@/components/organisms';

export default function TabOneScreen() {
  const numberDay = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];

  return (
    <SafeAreaView className="bg-zinc-50 dark:bg-zinc-900 pt-4 flex-1">
      <ScrollView className="px-4">
        {/* Section User Info */}
        <View className="pt-2 flex-row justify-between flex gap-x-2 items-start">
          <View className="flex flex-row gap-x-2">
            <Image
              src="https://www.w3schools.com/howto/img_avatar.png"
              height={20}
              width={20}
              className="rounded-md h-12 w-12"
            />
            <View className="bg-transparent">
              <Text className="text-sm">Welcome back,</Text>
              <Text className="font-semibold text-lg -mt-1">
                Robert Johnson Astiago
              </Text>
            </View>
          </View>

          {/* Inbox */}
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => console.log('test')}
            className="relative"
          >
            <BellIcon className="h-4 w-5" />
            <View className="absolute top-0 right-0.5 h-2.5 w-2.5 bg-red-500 rounded-full" />
          </TouchableOpacity>
        </View>

        {/* Section Jumbotron */}
        <View className="h-44 mt-8 rounded-lg">
          <Carousel />
        </View>

        {/* Features */}
        <View className="mt-12">
          <Text className="font-medium text-lg"> Our Core Features</Text>
          <View className="flex flex-row gap-3 justify-center flex-wrap bg-transparent mt-4">
            {Array.from({ length: 8 }).map((_, index) => (
              <View
                key={index}
                className="flex flex-col gap-y-2 items-center border border-zinc-300"
              >
                <BellIcon className="h-12 w-12" />

                <Text className="font-medium text-lg">
                  Featuressss {index + 1}
                </Text>
              </View>
            ))}
          </View>
        </View>

        {/* Section Timesheet */}
        <View className="p-4 hidden flex-row justify-between items-start mx-4 -mt-8 rounded-lg h-fit">
          <View className="flex flex-col flex-1">
            <Text>Project</Text>
            <Text className="text-xl font-medium">PT PINS Indonesia</Text>

            <View className="bg-transparent flex flex-row items-center mt-2">
              <MapPinIcon color={'red'} style={{ marginLeft: '-2%' }} />
              <Text className="text-xs font-extralight">
                -6.175110, 106.865036
              </Text>
            </View>
            {/* <View> */}
            <Text className="mt-0.5 font-light text-sm">
              ID, Jakarta, Jakarta Utara, Kelapa Gading
            </Text>
            {/* </View> */}
          </View>

          {/* Role Section */}
          <View className="flex flex-col justify-between relative">
            <View className="flex flex-col gap-y-1">
              <Text>Role</Text>
              <Text className="text-xl font-medium">Admin</Text>
            </View>

            <TouchableHighlight className="px-4 py-2 rounded-md bg-transparent mt-6 border-green-500 border">
              <Text className="text-green-400">Check In</Text>
            </TouchableHighlight>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
