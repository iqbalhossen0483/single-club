import { Text } from "react-native";
import { Dimensions } from "react-native";
import { Image, View } from "react-native";
import Button from "../utilitize/Button";
import OrSeparator from "../utilitize/OrSeparator";
import { colors } from "../variants/colors";
import { useState } from "react";
import { Pressable } from "react-native";

const Login = ({ navigation }) => {
  const [agreeTerms, setAgreeTerms] = useState(false);
  const dimensions = Dimensions.get("window");
  return (
    <View style={{ position: "relative" }}>
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

        {/* social button */}
        <View style={{ rowGap: 8, marginTop: 34 }}>
          <Button
            icon={require("../public/icons/ic_facebook.png")}
            text='Facebook'
          />
          <Button
            onPress={() => navigation.navigate("ragistation")}
            icon={require("../public/icons/ic_google.png")}
            text='Google'
          />
          <Button
            onPress={() => navigation.navigate("loginNumber")}
            icon={require("../public/icons/ic_phone.png")}
            text='Phone'
          />
        </View>

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
            <Image
              style={{ width: 15, height: 15 }}
              source={require("../public/icons/radio.png")}
            />
          ) : (
            <Image
              style={{ width: 15, height: 15 }}
              source={require("../public/icons/plan-radio.png")}
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
    </View>
  );
};

export default Login;
