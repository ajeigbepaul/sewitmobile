import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import bg from "../assets/images/fashionbg2.jpg";
const App = () => {
  return (
    <SafeAreaView className="bg-black h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full h-full px-4 items-center justify-center">
          {/* <Image source={logo2} className="max-w-[400px] w-full h-[200px]" resizeMode='contain'/> */}
          <ImageBackground source={bg} className="w-full h-full justify-center ">
            <View className="p-4 w-full items-center">
              <Text className="font-bold text-white text-3xl mt-0">
                Sew-IT
              </Text>
              <Text className="text-orange-300 mt-1">
                Redefining fashion
              </Text>
            </View>
            <View className="w-full items-center mt-2">
              <TouchableOpacity onPress={()=>{router.push("/login")}} className="w-[200px] items-center bg-orange-400 p-3 rounded-lg">
                <Text className="text-white">come in with email</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>
      </ScrollView>
      <StatusBar style="light" backgroundColor="#161622" />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({});
