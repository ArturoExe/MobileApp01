import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { baseStyles } from "../styles/baseStyles";
export default function ScreenHeaderBtn({ iconUrl, dimension, handlePress }) {
  return (
    <TouchableOpacity onPress={handlePress} style={baseStyles.btnContainer}>
      <Image
        source={iconUrl}
        resizeMode="cover"
        style={baseStyles.btnImg(dimension)}
      />
    </TouchableOpacity>
  );
}
