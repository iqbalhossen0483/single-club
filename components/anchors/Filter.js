import React, { useState } from "react";
import { Pressable } from "react-native";
import { View } from "react-native";
import { categoryStyle } from "../../css/category";
import { Text } from "react-native";
import { Image } from "react-native";
import { colors } from "../../variants/colors";
import {
  MaterialIcons,
  Entypo,
  MaterialCommunityIcons,
  Octicons,
} from "@expo/vector-icons";

const Filter = () => {
  const [showAdmin, setShowAdmin] = useState("viewer");

  const viewerStyle =
    showAdmin === "viewer"
      ? categoryStyle.activeTite
      : categoryStyle.inactiveTitle;

  const adminStyle =
    showAdmin === "admin"
      ? categoryStyle.activeTite
      : categoryStyle.inactiveTitle;
  return (
    <View>
      <View style={{ ...categoryStyle.titleContainer, marginTop: 20 }}>
        <Pressable
          style={{ width: "50%" }}
          onPress={() => setShowAdmin("viewer")}
        >
          <Text style={viewerStyle}>Viewers</Text>
        </Pressable>
        <Pressable
          style={{ width: "50%" }}
          onPress={() => setShowAdmin("admin")}
        >
          <Text style={adminStyle}>Admin</Text>
        </Pressable>
      </View>

      <View style={{ marginTop: 22 }}>
        <List
          vip
          id={2}
          name='Gina Rodriquez'
          profile={require("../../public/resources/start-1.png")}
        />
        <List
          vip
          id={3}
          name='Javier Robertson'
          profile={require("../../public/resources/start-2.png")}
        />
        <List
          id={4}
          admin
          name='Scarlett'
          profile={require("../../public/resources/user-1.png")}
        />
        <List
          vip
          id={5}
          name='Mary Reid'
          profile={require("../../public/resources/user-3.png")}
        />
        <List
          admin
          id={6}
          name='Shakib Islam'
          profile={require("../../public/resources/user-2.png")}
        />
      </View>
    </View>
  );
};

export default Filter;

function List({ profile, id, vip, admin, name }) {
  const [showControl, setShowControl] = useState(false);

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: colors.white,
        shadowColor: "#000000",
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.19,
        shadowRadius: 5.62,
        elevation: 6,
        padding: 5,
      }}
    >
      <View
        style={{ flexDirection: "row", alignItems: "center", columnGap: 3 }}
      >
        <Text style={{ fontSize: 12, fontWeight: 700 }}>{id}</Text>
        <View>
          <Image
            style={{ width: 38, height: 38, borderRadius: 50 }}
            source={profile}
          />
          {admin && (
            <MaterialIcons
              style={{
                position: "absolute",
                top: -7,
                right: -18,
              }}
              name='admin-panel-settings'
              size={22}
              color={colors.primary}
            />
          )}
        </View>
        <Text style={{ fontSize: 12, fontWeight: 500 }}>{name}</Text>
        <Image
          style={{ width: 20, height: 17 }}
          source={require("../../public/icons/rank-1.png")}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          columnGap: 5,
        }}
      >
        {vip && (
          <Image
            style={{ width: 17, height: 22 }}
            source={require("../../public/icons/vip-with-text.png")}
          />
        )}
        <Pressable onPress={() => setShowControl((prev) => !prev)}>
          <Entypo name='dots-three-vertical' size={20} color={colors.primary} />
        </Pressable>
      </View>
      <View
        style={{
          flexDirection: "row",
          columnGap: 3,
          position: "absolute",
          right: 30,
          backgroundColor: colors.white,
          opacity: showControl ? 1 : 0,
        }}
      >
        <Octicons name='mute' size={22} color={colors.primary} />
        <Image
          source={require("../../public/icons/game-icons_high-kick.png")}
        />
        {admin ? (
          <MaterialCommunityIcons
            name='shield-off'
            size={22}
            color={colors.primary}
          />
        ) : (
          <MaterialIcons
            name='admin-panel-settings'
            size={26}
            color={colors.primary}
          />
        )}
      </View>
    </View>
  );
}
