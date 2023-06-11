import React, { useState } from "react";
import { Pressable } from "react-native";
import { StyleSheet } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";
import { colors } from "../../variants/colors";

const Menus = () => {
  const [selected, setSelected] = useState("Monthly");

  return (
    <View style={style.container}>
      {data.map((d) => (
        <Pressable onPress={() => setSelected(d)} key={d}>
          <Text
            style={{
              ...style.item,
              backgroundColor: selected === d ? colors.primary : colors.white,
              color: selected === d ? colors.white : colors.dark,
            }}
          >
            {d}
          </Text>
        </Pressable>
      ))}
    </View>
  );
};

export default Menus;

const data = ["Daily", "Weekly", "Monthly", "Last Month", "Overall"];

const style = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 14,
    paddingHorizontal: 10,
  },
  item: {
    fontSize: 12,
    fontWeight: 700,
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 50,
  },
});
