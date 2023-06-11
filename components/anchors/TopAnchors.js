import React, { useState } from "react";
import { Pressable } from "react-native";
import { StyleSheet } from "react-native";
import { Text } from "react-native";
import { Image } from "react-native";
import { View } from "react-native";
import { colors } from "../../variants/colors";

const TopAnchors = ({ radio = true, color = colors.orange, dimond }) => {
  return (
    <View style={style.container}>
      <TopAnchor
        name='Hridoy Rohan'
        image={require("../../public/resources/top-user-2.png")}
        rankImage={require("../../public/resources/profile_silver.png")}
        lavelImage={require("../../public/resources/rank-1.png")}
        radio={radio}
        color={color}
        dimond={dimond}
      />
      <TopAnchor
        name='Hridoy Rohan'
        image={require("../../public/resources/top-user-1.png")}
        lavelImage={require("../../public/resources/rank-2.png")}
        rankImage={require("../../public/resources/profile_gold.png")}
        size='large'
        radio={radio}
        color={color}
        dimond={dimond}
      />
      <TopAnchor
        name='Hridoy Rohan'
        image={require("../../public/resources/top-user-3.png")}
        lavelImage={require("../../public/resources/rank-3.png")}
        rankImage={require("../../public/resources/profile_platinum.png")}
        radio={radio}
        color={color}
        dimond={dimond}
      />
    </View>
  );
};

export default TopAnchors;

function TopAnchor(props) {
  const [selected, setSelected] = useState(true);
  const {
    name,
    image,
    rankImage,
    lavelImage,
    size = "small",
    radio,
    color,
    dimond,
  } = props;
  const topUser =
    size == "large"
      ? { width: 80, height: 80, position: "absolute", top: 33, left: 32 }
      : { width: 52, height: 52, position: "absolute", top: 20, left: 20 };
  return (
    <View>
      <View>
        <Image
          style={{
            width: size == "large" ? 141 : 92,
            height: size == "large" ? 110 : 71,
          }}
          source={rankImage}
        />
        <Image style={topUser} source={image} />
        <Image style={style.silverRank} source={lavelImage} />
      </View>
      <View style={{ alignItems: "center" }}>
        <Text style={{ fontSize: 12, fontWeight: 500 }}>{name}</Text>
        <View
          style={{ flexDirection: "row", alignItems: "center", columnGap: 3 }}
        >
          <Image source={dimond} />
          <Text
            style={{
              fontSize: 15,
              fontWeight: 500,
              color,
            }}
          >
            12.75 M
          </Text>
        </View>
        {radio && (
          <Pressable onPress={() => setSelected((prev) => !prev)}>
            {selected ? (
              <Image source={require("../../public/icons/radio.png")} />
            ) : (
              <Image source={require("../../public/icons/Ellipse.png")} />
            )}
          </Pressable>
        )}
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  item: { flexDirection: "row", alignItems: "center", columnGap: 6 },
  silverRank: {
    position: "absolute",
    bottom: -6,
    left: 22,
    width: 40,
    height: 20,
  },
});
