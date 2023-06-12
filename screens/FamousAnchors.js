import React, { useState } from "react";
import { Image } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";
import { colors } from "../variants/colors";
import { StyleSheet } from "react-native";
import { Pressable } from "react-native";
import Button from "../utilitize/Button";
import TopAnchors from "../components/anchors/TopAnchors";
import AnchorProfile from "../components/anchors/AnchorProfile";

const FamousAnchors = ({ navigation }) => {
  const [selected, setSelected] = useState([]);

  function handleSelect(id) {
    const isExist = selected.find((ct) => ct === id);
    if (isExist) {
      const rest = selected.filter((ct) => ct !== id);
      setSelected(rest);
    } else {
      setSelected((prev) => {
        prev.push(id);
        return [...prev];
      });
    }
  }

  return (
    <View style={{ backgroundColor: colors.secondaryGray }}>
      <View style={style.headerWrapper}>
        <Text style={style.headerText}>Famous Top 10 Anchors</Text>
        <Pressable
          onPress={() => navigation.navigate("sendRanking")}
          style={style.skipText}
        >
          <Text>Skip</Text>
          <Image
            style={{ width: 12, height: 12 }}
            source={require("../public/icons/right-arrow.png")}
            frameImage={require(`../public/icons/ruby-orange.png`)}
          />
        </Pressable>
      </View>

      <TopAnchors dimond={require(`../public/icons/ruby-orange.png`)} />

      <Pressable onPress={() => handleSelect(2)} style={style.itemConainer}>
        <AnchorProfile
          dimond={require(`../public/icons/ruby-orange.png`)}
          profile={require("../public/resources/user-1.png")}
          selected={selected}
          name='Gina Rodriquez'
          id={2}
        />
      </Pressable>
      <Pressable onPress={() => handleSelect(3)} style={style.itemConainer}>
        <AnchorProfile
          dimond={require(`../public/icons/ruby-orange.png`)}
          profile={require("../public/resources/user-2.png")}
          selected={selected}
          name='Gina Rodriquez'
          id={3}
        />
      </Pressable>
      <Pressable onPress={() => handleSelect(4)} style={style.itemConainer}>
        <AnchorProfile
          dimond={require(`../public/icons/ruby-orange.png`)}
          profile={require("../public/resources/user-3.png")}
          selected={selected}
          name='Gina Rodriquez'
          id={4}
        />
      </Pressable>
      <Pressable onPress={() => handleSelect(5)} style={style.itemConainer}>
        <AnchorProfile
          dimond={require(`../public/icons/ruby-orange.png`)}
          profile={require("../public/resources/user-4.png")}
          selected={selected}
          name='Gina Rodriquez'
          id={5}
        />
      </Pressable>
      <Pressable onPress={() => handleSelect(6)} style={style.itemConainer}>
        <AnchorProfile
          dimond={require(`../public/icons/ruby-orange.png`)}
          profile={require("../public/resources/user-1.png")}
          selected={selected}
          name='Gina Rodriquez'
          id={6}
        />
      </Pressable>
      <Pressable onPress={() => handleSelect(7)} style={style.itemConainer}>
        <AnchorProfile
          dimond={require(`../public/icons/ruby-orange.png`)}
          profile={require("../public/resources/user-5.png")}
          selected={selected}
          name='Gina Rodriquez'
          id={7}
        />
      </Pressable>

      <View style={{ marginTop: 25, paddingHorizontal: 10 }}>
        <Button
          onPress={() => navigation.navigate("sendRanking")}
          text='Done'
          primaryBtn
        />
      </View>
    </View>
  );
};

export default FamousAnchors;

const style = StyleSheet.create({
  headerWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    marginTop: 6,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 500,
    textAlign: "center",
    width: "90%",
  },
  skipText: {
    flexDirection: "row",
    alignItems: "center",
  },
  itemConainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 8,
    paddingVertical: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 6,
    elevation: 7,
  },
});
