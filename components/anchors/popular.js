import { Image } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";
import { style } from "../../css/anchors";
import { colors } from "../../variants/colors";

export function TopSectionSingle({ title }) {
  return (
    <View>
      <Text style={{ textAlign: "center" }}>{title}</Text>
      <View style={style.topItemWraper}>
        <Image
          style={{ width: 25, height: 25 }}
          source={require("../../public/resources/top-user-2.png")}
        />
        <Image
          style={{ width: 31, height: 31 }}
          source={require("../../public/resources/top-user-1.png")}
        />
        <Image
          style={{ width: 25, height: 25 }}
          source={require("../../public/resources/top-user-3.png")}
        />
      </View>
    </View>
  );
}

export function StarSingle({
  star = false,
  title,
  name,
  image,
  bg,
  color,
  vs = false,
  vsImage,
  friendList,
}) {
  return (
    <View style={{ width: "49%" }}>
      {vs ? (
        <VsImageComponet image={image} vsImage={vsImage} />
      ) : (
        <Image style={style.starImg} source={image} />
      )}
      <View style={style.starItem}>
        <View
          style={{
            flexDirection: "row",
            columnGap: 7,
            paddingHorizontal: 5,
            justifyContent: "space-between",
          }}
        >
          <View style={{ ...style.starDtop, backgroundColor: bg }}>
            {star && <Image source={require("../../public/icons/star.png")} />}
            <Text style={{ fontWeight: 700, color: color, fontSize: 10 }}>
              {title}
            </Text>
          </View>
          <View style={style.starDtopR}>
            <Image source={require("../../public/icons/ruby-orange.png")} />
            <Text style={{ color: colors.white, fontWeight: 500 }}>
              12.75 M
            </Text>
          </View>
        </View>
        <View>
          {friendList && <FriendList />}
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View style={style.starDtop}>
              <Image source={require("../../public/icons/fire.png")} />
              <Text style={{ fontWeight: 700, color: colors.white }}>
                {name}
              </Text>
            </View>
            <View style={style.starDtopR}>
              <Image source={require("../../public/icons/outline-user.png")} />
              <Text style={{ color: colors.white, fontWeight: 500 }}>8461</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

export function VsImageComponet({ image, vsImage }) {
  return (
    <View style={{ flexDirection: "row" }}>
      <Image style={style.vsfristImg} source={image} />
      <View
        style={{
          borderRightWidth: 1,
          borderRightColor: colors.primary,
        }}
      />
      <Image style={style.vsSecondImg} source={vsImage} />
    </View>
  );
}

export function FriendList() {
  return (
    <View style={{ flexDirection: "row", alignSelf: "flex-end" }}>
      <Image
        style={style.friend}
        source={require("../../public/resources/user-1.png")}
      />
      <Image
        style={style.friend}
        source={require("../../public/resources/user-2.png")}
      />
      <Image
        style={style.friend}
        source={require("../../public/resources/user-3.png")}
      />
      <Image
        style={style.friend}
        source={require("../../public/resources/user-1.png")}
      />
      <Image
        style={style.friend}
        source={require("../../public/resources/user-2.png")}
      />
      <Image
        style={style.friend}
        source={require("../../public/resources/user-3.png")}
      />
    </View>
  );
}
