import React, { useState } from "react";
import { Pressable } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";
import { categoryStyle } from "../../css/category";
import { Image } from "react-native";
import { colors } from "../../variants/colors";
import { StyleSheet } from "react-native";

const Notification = () => {
  const [showOption, setShowOption] = useState("moments");

  const liveStyle =
    showOption === "live"
      ? categoryStyle.activeTite
      : categoryStyle.inactiveTitle;

  const monentyStyle =
    showOption === "moments"
      ? categoryStyle.activeTite
      : categoryStyle.inactiveTitle;
  return (
    <View>
      <Text style={categoryStyle.header}>Notification</Text>
      <View style={{ ...categoryStyle.titleContainer, marginBottom: 9 }}>
        <Pressable
          style={{ width: "50%" }}
          onPress={() => setShowOption("live")}
        >
          <Text style={liveStyle}>Live</Text>
        </Pressable>
        <Pressable
          style={{ width: "50%" }}
          onPress={() => setShowOption("moments")}
        >
          <Text style={monentyStyle}>Moments</Text>
        </Pressable>
      </View>

      {showOption === "moments" ? <Moments /> : <Live />}
    </View>
  );
};

export default Notification;

function Live() {
  return (
    <View>
      <LiveList
        name='Gina Rodriquez'
        recomended
        image={require("../../public/resources/user-2.png")}
      />
      <LiveList
        name='Gina Rodriquez'
        call
        image={require("../../public/resources/user-1.png")}
      />
      <LiveList
        name='Gina Rodriquez'
        group
        image={require("../../public/resources/user-4.png")}
      />
    </View>
  );
}

function LiveList({ image, name, group, call, recomended }) {
  const [selected, setSelected] = useState(false);
  return (
    <Pressable
      onPress={() => setSelected((prev) => !prev)}
      style={{
        ...style.liveItemContainer,
        backgroundColor: selected ? "#E7EFEB" : colors.white,
      }}
    >
      <View
        style={{ flexDirection: "row", alignItems: "center", columnGap: 5 }}
      >
        <Image
          style={{ width: 52, height: 52, borderRadius: 50 }}
          source={image}
        />
        <View>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontSize: 13, fontWeight: 500 }}>{name}</Text>
            <Image
              style={{ width: 20, height: 17, marginLeft: 3 }}
              source={require("../../public/icons/rank-1.png")}
            />
          </View>

          <View style={{ flexDirection: "row", columnGap: 2 }}>
            <Image
              style={{ width: 91, height: 30 }}
              source={require("../../public/icons/barchart.png")}
            />
            {recomended && (
              <View
                style={{
                  flexDirection: "row",
                  columnGap: 5,
                  borderWidth: 1,
                  borderColor: "#1877F2",
                  borderRadius: 4,
                  padding: 2,
                }}
              >
                <Image
                  style={{ width: 19, height: 19, borderRadius: 30 }}
                  source={require("../../public/resources/user-9.png")}
                />
                <View>
                  <Text style={{ fontSize: 9, color: "#9E9E9E" }}>
                    Recommend
                  </Text>
                  <View style={{ flexDirection: "row", columnGap: 2 }}>
                    <Text style={{ fontSize: 8 }}>Aarohi</Text>
                    <Image
                      style={{ width: 11, height: 11 }}
                      source={require("../../public/icons/love-emoji.png")}
                    />
                    <Image
                      style={{ width: 11, height: 11 }}
                      source={require("../../public/icons/love-emoji.png")}
                    />
                  </View>
                </View>
              </View>
            )}
          </View>
        </View>
      </View>

      <View
        style={{ flexDirection: "row", alignItems: "center", columnGap: 4 }}
      >
        <View style={{ alignItems: "center" }}>
          {call ? (
            <Image
              style={{ width: 12, height: 9 }}
              source={require("../../public/icons/video_call.png")}
            />
          ) : group ? (
            <Image
              style={{ width: 12, height: 9 }}
              source={require("../../public/icons/group-user.png")}
            />
          ) : (
            <Image
              style={{ width: 12, height: 9 }}
              source={require("../../public/icons/sound.png")}
            />
          )}

          <Text style={{ color: "#777777", marginTop: 10, marginBottom: -15 }}>
            23s
          </Text>
        </View>
      </View>
    </Pressable>
  );
}

function Moments() {
  return (
    <View>
      <MonentList
        name='Gina Rodriquez'
        title='React In Your Post'
        like
        image={require("../../public/resources/user-2.png")}
        gallery={require("../../public/resources/gallery-1.png")}
      />
      <MonentList
        name='Javier Robertson'
        title='Comment In Your Post'
        comment
        image={require("../../public/resources/user-1.png")}
        gallery={require("../../public/resources/gallery-2.png")}
      />
      <MonentList
        name='Scarlett'
        title='Share Your Post'
        share
        image={require("../../public/resources/user-3.png")}
        gallery={require("../../public/resources/gallery-3.png")}
      />
      <MonentList
        name='Gina Rodriquez'
        title='Gift In Your Post'
        gift
        image={require("../../public/resources/user-4.png")}
        gallery={require("../../public/resources/gallery-1.png")}
      />
    </View>
  );
}

function MonentList(props) {
  const [selected, setSelected] = useState(false);
  const { image, like, comment, gift, name, title, gallery, share } = props;

  return (
    <Pressable
      onPress={() => setSelected((prev) => !prev)}
      style={{
        ...style.monmentItemContainer,
        backgroundColor: selected ? "#E7EFEB" : colors.white,
      }}
    >
      <View
        style={{ flexDirection: "row", alignItems: "center", columnGap: 5 }}
      >
        <Image
          style={{ width: 40, height: 40, borderRadius: 50 }}
          source={image}
        />
        <View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={{ fontSize: 13, fontWeight: 500 }}>{name}</Text>
            <Image
              style={{ width: 20, height: 17, marginLeft: 3 }}
              source={require("../../public/icons/rank-1.png")}
            />
          </View>
          <Text style={{ fontSize: 10, color: "#706C6C", marginLeft: 5 }}>
            {title}
          </Text>
        </View>
      </View>
      <View
        style={{ flexDirection: "row", alignItems: "center", columnGap: 4 }}
      >
        <View>
          {like && (
            <Image
              style={{ width: 18, height: 18 }}
              source={require("../../public/icons/like.png")}
            />
          )}
          {comment && (
            <Image
              style={{ width: 18, height: 18 }}
              source={require("../../public/icons/message.png")}
            />
          )}
          {gift && (
            <Image
              style={{ width: 18, height: 18 }}
              source={require("../../public/icons/gift.png")}
            />
          )}
          {share && (
            <Image
              style={{ width: 18, height: 18 }}
              source={require("../../public/icons/share.png")}
            />
          )}
          <Text style={{ color: colors.primary }}>23s</Text>
        </View>
        <Image style={{ width: 44, height: 40 }} source={gallery} />
      </View>
    </Pressable>
  );
}

const style = StyleSheet.create({
  monmentItemContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    paddingHorizontal: 5,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 3,
    shadowRadius: 7,
    elevation: 8,
    paddingVertical: 5,
  },
  liveItemContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    paddingHorizontal: 5,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 3,
    shadowRadius: 7,
    elevation: 8,
    paddingVertical: 5,
  },
});
