import { View, Text, Image } from "react-native";
import React from "react";
import { Tabs, Redirect } from "expo-router";
import icons from "../../constants/icons";
const TabIcon = ({ icon, color, focused, name }) => {
  return (
    <View className="items-center justify-center gap-1">
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        className="w-6 h-6"
      />
      <Text
        className={`${focused ? "font-roboto" : "font-medium"} text-xs`}
        style={{ color: color }}
      >
        {name}
      </Text>
    </View>
  );
};
const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: "orange",
          tabBarInactiveTintColor: "grey",
          // tabBarStyle: { backgroundColor: "#161622", borderTopWidth:1, borderTopColor:'#232533', height:84, },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.home}
                color={color}
                name="Home"
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="feed"
          options={{
            title: "Feed",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.feed}
                color={color}
                name="Feed"
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="categories"
          options={{
            title: "Category",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.category}
                color={color}
                name="Category"
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="account"
          options={{
            title: "Account",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.account}
                color={color}
                name="Account"
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="help"
          options={{
            title: "Help",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.help}
                color={color}
                name="Help"
                focused={focused}
              />
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default TabsLayout;
