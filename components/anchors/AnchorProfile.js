import { Text } from "react-native";
import { View } from "react-native";
import { colors } from "../../variants/colors";
import { Image } from "react-native";

const AnchorProfile = ({
  item,
  selected,
  icon = null,
  color = colors.orange,
  dimond,
}) => {
  const itemStyle = {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 6,
  };

  return (
    <>
      <View style={itemStyle}>
        <Text style={{ fontSize: 14, fontWeight: 700 }}>{item.id}</Text>
        <Image
          style={{ width: 45, height: 45, borderRadius: 100 }}
          source={require(`../../public/resources/user-1.png`)}
        />
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontSize: 15, fontWeight: 500 }}>{item.name}</Text>
          <Image source={require(`../../public/resources/rank-1.png`)} />
        </View>
      </View>
      <View style={itemStyle}>
        <Image source={dimond} />
        <Text style={{ fontSize: 15, fontWeight: 500, color }}>
          {item.amount} M
        </Text>
        {selected && (
          <View>
            {selected.find((ct) => ct === item.name) ? (
              <Image source={require("../../public/icons/Ellipse.png")} />
            ) : (
              <Image source={require("../../public/icons/radio.png")} />
            )}
          </View>
        )}
        {icon && (
          <View>
            {item.id == 4 ? (
              <Image
                style={{ width: 17, height: 16 }}
                source={require("../../public/icons/send-request.png")}
              />
            ) : item.id == 6 ? (
              <Image
                style={{ width: 17, height: 16 }}
                source={require("../../public/icons/user.png")}
              />
            ) : (
              <Image
                style={{ width: 17, height: 16 }}
                source={require("../../public/icons/double-user.png")}
              />
            )}
          </View>
        )}
      </View>
    </>
  );
};

export default AnchorProfile;
