import { Text } from "react-native";
import { View } from "react-native";
import { colors } from "../../variants/colors";
import { Image } from "react-native";
import {
  MaterialCommunityIcons,
  AntDesign,
  FontAwesome5,
} from "@expo/vector-icons";

const AnchorProfile = ({
  selected,
  color = colors.orange,
  dimond,
  name,
  group,
  sendRequest,
  user,
  id,
  profile,
}) => {
  const itemStyle = {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 6,
  };

  return (
    <View
      style={{
        shadowColor: "#000000",
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.19,
        shadowRadius: 4,
        elevation: 4,
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        backgroundColor: colors.white,
        paddingHorizontal: 4,
        paddingVertical: 5,
        marginVertical: -4.1,
      }}
    >
      <View style={itemStyle}>
        <Text style={{ fontSize: 14, fontWeight: 700 }}>{id}</Text>
        <Image
          style={{ width: 45, height: 45, borderRadius: 100 }}
          source={profile}
        />
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontSize: 15, fontWeight: 500 }}>{name}</Text>
          <Image source={require(`../../public/resources/rank-1.png`)} />
        </View>
      </View>
      <View style={itemStyle}>
        <Image source={dimond} />
        <Text style={{ fontSize: 15, fontWeight: 500, color }}>12.75 M</Text>
        {selected && (
          <View>
            {selected.find((ct) => ct === id) ? (
              <MaterialCommunityIcons
                name='radiobox-blank'
                size={20}
                color={colors.primary}
              />
            ) : (
              <AntDesign name='checkcircle' size={20} color={colors.primary} />
            )}
          </View>
        )}
        {sendRequest && (
          <MaterialCommunityIcons
            name='signal-variant'
            size={20}
            color={colors.primary}
          />
        )}
        {user && (
          <FontAwesome5 name='user-alt' size={20} color={colors.primary} />
        )}
        {group && (
          <FontAwesome5 name='user-friends' size={16} color={colors.primary} />
        )}
      </View>
    </View>
  );
};

export default AnchorProfile;
