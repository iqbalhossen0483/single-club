import React, { useState } from "react";
import { Image } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";
import { colors } from "../variants/colors";
import { StyleSheet } from "react-native";
import { FlatList } from "react-native";
import { topAnchors } from "../services/data";
import { Pressable } from "react-native";
import Button from "../utilitize/Button";
import TopAnchors from "../components/anchors/TopAnchors";
import AnchorProfile from "../components/anchors/AnchorProfile";

const FamousAnchors = ({ navigation }) => {
  const [selected, setSelected] = useState([]);

  function handleSelect(value) {
    const isExist = selected.find((ct) => ct === value);
    if (isExist) {
      const rest = selected.filter((ct) => ct !== value);
      setSelected(rest);
    } else {
      setSelected((prev) => {
        prev.push(value);
        return [...prev];
      });
    }
  }

  return (
    <View style={{ backgroundColor: colors.white }}>
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

      <FlatList
        data={topAnchors}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={() => (
          <TopAnchors dimond={require(`../public/icons/ruby-orange.png`)} />
        )}
        renderItem={({ item, index }) => (
          <Pressable
            onPress={() => handleSelect(item.name)}
            style={{
              ...style.itemConainer,
              backgroundColor:
                index % 2 === 0 ? colors.white : colors.secondaryGray,
            }}
          >
            <AnchorProfile
              dimond={require(`../public/icons/ruby-orange.png`)}
              selected={selected}
              item={item}
            />
          </Pressable>
        )}
      />

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
    marginHorizontal: 5,
  },
});
