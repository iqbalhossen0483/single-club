import React, { useEffect, useState } from "react";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import { Image } from "react-native";
import { Dimensions } from "react-native";
import { View } from "react-native";
import OrSeparator from "../utilitize/OrSeparator";
import { colors } from "../variants/colors";
import { Text } from "react-native";
import InputFeild from "../utilitize/InputWithIcon";
import { Pressable } from "react-native";
import { Keyboard } from "react-native";
import { ScrollView } from "react-native";
import Button from "../utilitize/Button";

const LoginWithNumber = ({ navigation }) => {
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [avoidKeybaord, setAboidKeyboard] = useState(false);

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

  const dimensions = Dimensions.get("window");
  return (
    <ScrollView
      style={{ position: "relative", marginBottom: avoidKeybaord ? 100 : 0 }}
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
          top: 223,
          left: 120,
        }}
      >
        {/* bare */}
        <Image
          style={{ width: 180, height: 179, alignSelf: "center" }}
          source={require("../public/images/bare.png")}
        />

        {/* inputs */}
        <View style={{ rowGap: 8, marginTop: 34 }}>
          <InputFeild
            placeholder='ID/ Number'
            icon={require("../public/icons/ic_phone.png")}
            keyboardType='phone-pad'
          />
          <InputFeild
            placeholder='Password'
            icon={require("../public/icons/arcticons_nc-passwords.png")}
            secondIcon
          />

          <Button
            onPress={() => navigation.navigate("profile")}
            text='Login'
            primaryBtn
          />
        </View>

        <OrSeparator style={{ marginTop: 52, marginBottom: 32 }} />

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
    </ScrollView>
  );
};

export default LoginWithNumber;
