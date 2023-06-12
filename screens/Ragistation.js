import React, { useEffect, useState } from "react";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import { Image } from "react-native";
import { Dimensions } from "react-native";
import { View } from "react-native";
import Button from "../utilitize/Button";
import OrSeparator from "../utilitize/OrSeparator";
import { Pressable } from "react-native";
import { Text } from "react-native";
import { colors } from "../variants/colors";
import { TextInput } from "react-native";
import { common } from "../css/common";
import { Keyboard } from "react-native";
import { ScrollView } from "react-native";
import Modal from "react-native-modal";
import ScreenHeader from "../utilitize/ScreenHeader";

const Ragistation = ({ navigation }) => {
  const [avoidKeybaord, setAboidKeyboard] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const dimensions = Dimensions.get("window");

  useEffect(() => {
    const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
      setAboidKeyboard(true);
    });
    const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
      setAboidKeyboard(false);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  return (
    <ScrollView
      style={{ position: "relative", marginBottom: avoidKeybaord ? 150 : 0 }}
    >
      {/* background image */}
      <Image
        source={require("../public/images/love-wall.png")}
        resizeMode='cover'
        style={{
          width: dimensions.width,
          height: dimensions.height,
        }}
      />

      {/* contant start */}
      <View
        style={{
          position: "absolute",
          top: 150,
          left: 120,
        }}
      >
        {/* logo and image */}
        <Image
          style={{ width: 207, height: 243 }}
          source={require("../public/images/love-with-logo.png")}
        />

        <View style={{ marginBottom: 35, rowGap: 15, marginTop: 15 }}>
          <View
            style={{
              ...varifyView,
              width: "auto",
              paddingHorizontal: 20,
              marginLeft: -40,
            }}
          >
            <Pressable
              onPress={() => setShowModal(true)}
              style={{
                flexDirection: "row",
                alignItems: "center",
                columnGap: 3,
              }}
            >
              <Image
                style={{ width: 20, height: 20 }}
                source={require("../public/icons/Bangla.png")}
              />
              <Image source={require("../public/icons/Polygon.png")} />
            </Pressable>
            <TextInput style={countryCode} value='+88' editable={false} />
            <TextInput
              style={{
                ...common.input,
                borderTopLeftRadius: 0,
                borderBottomLeftRadius: 0,
              }}
              placeholder='Phone Number'
              keyboardType='phone-pad'
            />
            <Text style={{ fontSize: 12, fontWeight: 700 }}>Send</Text>
          </View>
          <View style={varifyView}>
            <TextInput
              style={common.input}
              placeholder='Verification Cod'
              keyboardType='phone-pad'
            />
            <Text style={{ fontSize: 12, fontWeight: 700 }}>Varify</Text>
          </View>
        </View>

        <Button
          onPress={() => navigation.navigate("profile")}
          text='Sign Up/Login with Phone'
          primaryBtn
        />

        <OrSeparator style={{ marginTop: 13, marginBottom: 32 }} />

        {/* social icon */}
        <View
          style={{ flexDirection: "row", columnGap: 28, alignSelf: "center" }}
        >
          <Image
            style={{ width: 38, height: 38 }}
            source={require("../public/icons/tw_c.png")}
          />
          <Image
            style={{ width: 38, height: 38 }}
            source={require("../public/icons/instagram.png")}
          />
          <Image
            style={{ width: 38, height: 38 }}
            source={require("../public/icons/mac.png")}
          />
        </View>

        {/* terms and condition  */}
        <View
          style={{
            flexDirection: "row",
            columnGap: 5,
            width: 233,
            marginTop: 32,
          }}
        >
          {agreeTerms ? (
            <AntDesign name='checkcircle' size={20} color={colors.primary} />
          ) : (
            <MaterialCommunityIcons
              name='radiobox-blank'
              size={20}
              color={colors.secondary}
            />
          )}
          <Pressable onPress={() => setAgreeTerms((prev) => !prev)}>
            <Text
              style={{
                fontSize: 12,
                fontWeight: 500,
                color: agreeTerms ? colors.primary : colors.secondary,
              }}
            >
              Login Means You Agree To Terms of Use Privacy Policy Powered by
              Single Club
            </Text>
          </Pressable>
        </View>
      </View>

      <Modal
        isVisible={showModal}
        onBackButtonPress={() => setShowModal(false)}
        coverScreen
        hasBackdrop
        style={{ ...common.modal, width: "100%" }}
      >
        <View style={{ flex: 1 }}>
          <ScreenHeader action={() => setShowModal(false)} title='OTP' />
          <View style={{ paddingHorizontal: 15 }}>
            <View>
              <Image
                style={{
                  position: "absolute",
                  zIndex: 100,
                  right: 10,
                  top: 10,
                }}
                source={require("../public/icons/search-icon.png")}
              />
              <TextInput
                style={{ ...common.input, borderRadius: 20 }}
                placeholder='Search'
              />
            </View>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

export default Ragistation;

const varifyView = {
  flexDirection: "row",
  alignItems: "center",
  columnGap: 8,
  backgroundColor: colors.white,
  paddingHorizontal: 10,
  borderRadius: 7,
  paddingVertical: 2,
  width: 190,
  shadowColor: "#000000",
  shadowOffset: {
    width: 0,
    height: 4,
  },
  shadowOpacity: 0.19,
  shadowRadius: 5.62,
  elevation: 6,
};

const countryCode = {
  backgroundColor: colors.secondaryGray,
  borderBottomLeftRadius: 5,
  borderBottomRightRadius: 5,
  paddingVertical: 5,
  paddingHorizontal: 15,
  marginRight: -10,
};
