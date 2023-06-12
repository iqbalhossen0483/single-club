import React from "react";
import { View } from "react-native";
import ScreenHeader from "../utilitize/ScreenHeader";
import { colors } from "../variants/colors";
import { Image } from "react-native";
import { Text } from "react-native";
import { StyleSheet } from "react-native";
import { MaterialCommunityIcons, FontAwesome5 } from "@expo/vector-icons";

const Visitors = ({ navigation }) => {
  return (
    <View>
      <ScreenHeader
        color={colors.secondaryGray}
        action={() => navigation.goBack()}
        title='Visitor'
      />

      <View style={style.visitorWrap}>
        <View style={style.visitorFirstE}>
          <Text style={{ ...style.visitorAmount, textAlign: "left" }}>
            1.03K
          </Text>
          <Text style={style.visitorTitle}>Total Visitor</Text>
        </View>
        <View>
          <Text style={style.visitorAmount}>10</Text>
          <Text style={style.visitorTitle}>Today's Visitor</Text>
        </View>
      </View>

      <View style={style.titleWrapper}>
        <Text style={{ fontSize: 18, fontWeight: 500 }}>Last 100 visitor</Text>
        <Text style={{ fontSize: 18, fontWeight: 500 }}>Today</Text>
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

export default Visitors;

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
  visitorWrap: {
    marginBottom: 13,
    backgroundColor: colors.white,
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 12,
    paddingHorizontal: 25,
    paddingVertical: 7,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.655,
    elevation: 6,
  },
  visitorAmount: {
    fontSize: 38,
    textAlign: "center",
    marginTop: 30,
  },
  visitorTitle: {
    fontSize: 16,
    color: "rgba(0, 0, 0, 0.7)",
    marginTop: 15,
    marginBottom: 30,
  },
  visitorFirstE: {
    borderRightWidth: 1,
    borderRightColor: colors.dark,
    width: "50%",
  },
  titleWrapper: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 11,
  },
});
