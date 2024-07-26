import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native";
import icons from "../constants/icons";
const Input = ({
  title,
  value,
  handleChangeText,
  otherStyles,
  keyboardType,
  placeholder,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View className={`space-y-3 w-full ${otherStyles}`}>
      <Text className="text-gray-100">{title}</Text>
      <View className="bg-gray-800 w-full rounded-md px-2 border-[.5px] border-gray-50 focus:border-orange-400 items-center flex-row">
        <TextInput
          value={value}
          className="p-3 text-white flex-1"
          placeholder={placeholder}
          placeholderTextColor="#d0c6c6"
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" && !showPassword}
        />
        {title === "Password" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={!showPassword ? icons.view: icons.hide}
              resizeMode="contain"
              className="w-6 h-6"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default Input;
