import React from "react";
import { View } from "react-native";
import ScreenHeader from "../utilitize/ScreenHeader";
import { TextInput } from "react-native";
import { colors } from "../variants/colors";
import { Image } from "react-native";
import { Text } from "react-native";
import { StyleSheet } from "react-native";
import {
  AntDesign,
  MaterialCommunityIcons,
  FontAwesome5,
} from "@expo/vector-icons";

const Friends = ({ navigation }) => {
  return (
    <View style={{ backgroundColor: colors.white }}>
      <ScreenHeader action={() => navigation.goBack()} title='Friend' />

      <View style={{ marginBottom: 13 }}>
        <TextInput style={style.searchInput} placeholder='Search' />

        <AntDesign
          style={{ position: "absolute", top: 13, left: 40 }}
          name='search1'
          size={24}
          color='#6b6868'
        />
      </View>

      <Profile
        request
        id={2}
        image={require("../public/resources/user-1.png")}
      />
      <Profile id={3} user image={require("../public/resources/user-2.png")} />
      <Profile id={4} group image={require("../public/resources/user-3.png")} />
      <Profile
        id={5}
        request
        image={require("../public/resources/user-4.png")}
      />
      <Profile
        id={6}
        request
        image={require("../public/resources/user-5.png")}
      />
      <Profile id={7} group image={require("../public/resources/user-6.png")} />
    </View>
  );
};

export default Friends;

function Profile({ image, id, request, user, group }) {
  return (
    <View style={style.itemWrap}>
      <View
        style={{ flexDirection: "row", alignItems: "center", columnGap: 3 }}
      >
        <Text style={{ fontSize: 14, fontWeight: 700 }}>{id}</Text>
        <Image style={{ width: 45, height: 45 }} source={image} />
        <View style={style.nameNlavel}>
          <Text style={{ fontSize: 15, fontWeight: 500 }}>Gina Rodriquez</Text>
          <Image
            style={{ width: 20, height: 17 }}
            source={require("../public/icons/rank-1.png")}
          />
        </View>
      </View>
      <View
        style={{ flexDirection: "row", alignItems: "center", columnGap: 20 }}
      >
        <Text style={{ fontSize: 10, color: "#706C6C" }}>Join 25/Feb/2022</Text>
        {request && (
          <MaterialCommunityIcons
            name='signal-variant'
            size={24}
            color={colors.primary}
          />
        )}
        {user && (
          <FontAwesome5 name='user-friends' size={20} color={colors.primary} />
        )}
        {group && (
          <FontAwesome5 name='user-alt' size={20} color={colors.primary} />
        )}
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  searchInput: {
    paddingLeft: 50,
    paddingVertical: 10,
    backgroundColor: "#EEEEEE",
    marginHorizontal: 20,
    borderRadius: 30,
  },
  itemWrap: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 3,
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: colors.white,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  nameNlavel: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 3,
  },
  timeWrap: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 10,
    marginLeft: 18,
  },
});
