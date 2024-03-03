import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable } from 'react-native';
// import SwiperCore, { Swiper, SwiperSlide } from 'swiper';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();
 
  return (
    // <Swiper>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
          // Disable the static render of the header on web
          // to prevent a hydration error in React Navigation v6.
          headerShown: false,//useClientOnlyValue(false, false),
        }}>
        {/* <SwiperSlide> */}
        <Tabs.Screen
          name="index"
          options={{
            title: 'Scores',
            tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
            // headerRight: () => (
            //   <Link href="/modal" asChild>
            //     <Pressable>
            //       {({ pressed }) => (
            //         <FontAwesome
            //           name="info-circle"
            //           size={25}
            //           color={Colors[colorScheme ?? 'light'].text}
            //           style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
            //         />
            //       )}
            //     </Pressable>
            //   </Link>
            // ),
          }}
        />
{/* </SwiperSlide>
<SwiperSlide> */}
        <Tabs.Screen
          name="two"
          options={{
            title: 'Attention...',
            tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          }}
        />
        {/* </SwiperSlide>
<SwiperSlide> */}
        <Tabs.Screen
          name="three"
          options={{
            title: 'Hymnes',
            tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          }}
        />
        {/* </SwiperSlide>
<SwiperSlide> */}
        <Tabs.Screen
          name="four"
          options={{
            title: 'Caucus',
            tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          }}
        />
        {/* </SwiperSlide>
<SwiperSlide> */}
        <Tabs.Screen
          name="five"
          options={{
            title: 'Entracte',
            tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          }}
        />
        {/* </SwiperSlide>
<SwiperSlide> */}
        <Tabs.Screen
          name="six"
          options={{
            title: 'Votes',
            tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          }}
        />
        {/* </SwiperSlide>
<SwiperSlide> */}
        <Tabs.Screen
          name="seven"
          options={{
            title: 'Pénalité',
            tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          }}
        />
        {/* </SwiperSlide>
<SwiperSlide> */}

        <Tabs.Screen
          name="eight"
          options={{
            title: 'Expulsion',
            tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          }}
        />
        {/* </SwiperSlide>
<SwiperSlide> */}
        <Tabs.Screen
          name="nine"
          options={{
            title: 'Fusillade',
            tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          }}
        />
        {/* </SwiperSlide>
<SwiperSlide> */}
        <Tabs.Screen
          name="ten"
          options={{
            title: 'Podium',
            tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          }}
        />
{/* </SwiperSlide> */}
      </Tabs>
    // </Swiper>
  );
}
