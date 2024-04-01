import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Animated,
  Dimensions,
  Image,
} from 'react-native';
import PagerView, {
  PagerViewOnPageScrollEventData,
} from 'react-native-pager-view';

import {
  ScalingDot,
  SlidingBorder,
  ExpandingDot,
  SlidingDot,
} from 'react-native-animated-pagination-dots';
import { LinearGradient } from 'expo-linear-gradient';

const AnimatedPagerView = Animated.createAnimatedComponent(PagerView);

const INTRO_DATA = [
  {
    key: '1',
    title: 'App showcase ✨',
    image:
      'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmF0dXJlfGVufDB8fDB8fHww',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    key: '2',
    title: 'Introduction screen 🎉',
    image:
      'https://plus.unsplash.com/premium_photo-1675368244123-082a84cf3072?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bmF0dXJlfGVufDB8fDB8fHww',
    description:
      "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. ",
  },
  {
    key: '3',
    title: 'And can be anything 🎈',
    image:
      'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bmF0dXJlfGVufDB8fDB8fHww',
    description:
      'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. ',
  },
  {
    key: '4',
    title: 'And can be anything 🎈',
    image:
      'https://plus.unsplash.com/premium_photo-1673002094173-b16f2b946780?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D',
    description:
      'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. ',
  },
];

export default function Carousel() {
  const width = Dimensions.get('window').width;
  const ref = React.useRef<PagerView>(null);
  const scrollOffsetAnimatedValue = React.useRef(new Animated.Value(0)).current;
  const positionAnimatedValue = React.useRef(new Animated.Value(0)).current;
  const inputRange = [0, INTRO_DATA.length];
  const scrollX = Animated.add(
    scrollOffsetAnimatedValue,
    positionAnimatedValue,
  ).interpolate({
    inputRange,
    outputRange: [0, INTRO_DATA.length * width],
  });

  const onPageScroll = React.useMemo(
    () =>
      Animated.event<PagerViewOnPageScrollEventData>(
        [
          {
            nativeEvent: {
              offset: scrollOffsetAnimatedValue,
              position: positionAnimatedValue,
            },
          },
        ],
        {
          useNativeDriver: false,
        },
      ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  return (
    // <View className="flex">
    <View testID="safe-area-view" style={styles.flex}>
      <AnimatedPagerView
        testID="pager-view"
        initialPage={0}
        ref={ref}
        style={styles.PagerView}
        onPageScroll={onPageScroll}
      >
        {INTRO_DATA.map((item, key) => (
          <View
            testID={`pager-view-data-${key}`}
            key={key}
            className="relative mx-2"
            // style={styles.center}
          >
            <Image
              className="h-full w-full rounded-xl"
              src={item.image}
              resizeMode="cover"
              loadingIndicatorSource={{
                uri: 'https://via.placeholder.com/160',
              }}
            />
            <LinearGradient
              className="absolute bottom-0 w-full px-2 pb-1 rounded-b-xl"
              // Button Linear Gradient
              colors={['transparent', 'rgba(0,0,0,1)']}
            >
              <Text className="text-zinc-50 text-sm font-medium">
                {item.title}
              </Text>
              <Text className="text-zinc-100 text-xs font-light">
                {item.description.slice(0, 100) + '...'}
              </Text>
            </LinearGradient>
          </View>
        ))}
      </AnimatedPagerView>
      <View>
        <View style={styles.dotsContainer}>
          <ExpandingDot
            testID={'expanding-dot'}
            data={INTRO_DATA}
            expandingDotWidth={30}
            //@ts-ignore
            scrollX={scrollX}
            inActiveDotOpacity={0.6}
            dotStyle={{
              width: 10,
              height: 10,
              backgroundColor: '#347af0',
              borderRadius: 5,
              marginHorizontal: 5,

              zIndex: 100,
            }}
            containerStyle={{
              top: 15,
            }}
          />
        </View>
        {/* <View style={styles.dotContainer}>
          <Text>Scaling Dot</Text>
          <ScalingDot
            testID={'scaling-dot'}
            data={INTRO_DATA}
            //@ts-ignore
            scrollX={scrollX}
            containerStyle={{
              top: 30,
            }}
          />
        </View>

        <View style={styles.dotContainer}>
          <Text>Sliding Border</Text>
          <SlidingBorder
            testID={'sliding-border'}
            containerStyle={{ top: 30 }}
            data={INTRO_DATA}
            //@ts-ignore
            scrollX={scrollX}
            dotSize={24}
          />
        </View>
        <View style={styles.dotContainer}>
          <Text>Sliding Dot</Text>
          <SlidingDot
            testID={'sliding-dot'}
            marginHorizontal={3}
            containerStyle={{ top: 30 }}
            data={INTRO_DATA}
            //@ts-ignore
            scrollX={scrollX}
            dotSize={12}
          />
        </View> */}
      </View>
    </View>
    // </View>
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  PagerView: {
    flex: 1,
  },
  container: {
    flexDirection: 'row',
    backgroundColor: '#63a4ff',
  },
  progressContainer: { flex: 0.1, backgroundColor: '#63a4ff' },
  center: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    // padding: 20,
  },
  text: {
    fontSize: 30,
  },
  separator: {
    paddingVertical: 16,
    paddingHorizontal: 10,
  },
  touchableTitle: {
    textAlign: 'center',
    color: '#000',
  },
  touchableTitleActive: {
    color: '#fff',
  },
  dotsContainer: {
    // flex: 1,
    justifyContent: 'space-evenly',
  },
  dotContainer: {
    justifyContent: 'center',
    alignSelf: 'center',
  },
  contentSlider: {
    flex: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  dots: {
    flex: 1,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 310,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    margin: 5,
  },
});
