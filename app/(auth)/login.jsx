import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import loginlogo from "../../assets/images/fashionlogo.png";
import Input from "../../components/Input";
import { Link } from "expo-router";
const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [isSubmitting, SetIsSubmitting] = useState(false)
  const handleSubmit =()=>{}
  return (
    <SafeAreaView className="w-full bg-gray-900 h-full">
      <ScrollView>
        <View className="w-full items-center justify-center min-h-[85vh] px-4 my-6">
          <Image
            source={loginlogo}
            resizeMode="contain"
            className="w-[250px] h-[150px]"
          />
          <Text className="text-3xl text-white font-semibold">
            Log-in
          </Text>
          <Input
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
            placeholder="Enter a valid email"

          />
          <Input
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-7"
            placeholder="Enter a password"
          />
          <TouchableOpacity className="w-full p-3 bg-orange-400 mt-6 rounded-md" onPress={handleSubmit}>
           <Text className="text-center font-medium text-lg text-white">{isSubmitting ? "Submitting...":"Sign In"}</Text>
          </TouchableOpacity>
          <View className="mt-7 flex-row justify-center">
            <Text className="text-gray-100">Don't have an account ?</Text>
            <Link href="/register" className="text-orange-300"> Register</Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
