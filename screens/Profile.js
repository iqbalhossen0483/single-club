import React, { useEffect, useState } from "react";
import { Image, Keyboard, Pressable, ScrollView, Text } from "react-native";
import { View } from "react-native";
import ScreenHeader from "../utilitize/ScreenHeader";
import { common } from "../css/common";
import { profile } from "../css/profile";
import { TextInput } from "react-native";
import Button from "../utilitize/Button";
import { colors } from "../variants/colors";
import { gender, Relationship } from "../services/data";
import RadioForm from "react-native-simple-radio-button";
import Modal from "react-native-modal";
import Category from "../components/profile/Category";

const Profile = ({ navigation }) => {
  const [selectedGender, setSelectedGender] = useState("");
  const [relationship, setRelationship] = useState("");
  const [avoidKeybaord, setAboidKeyboard] = useState(false);
  const [showCategory, setShowCategory] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState([]);

  function removeCategory(value) {
    const rest = selectedCategory.filter((ct) => ct !== value);
    setSelectedCategory(rest);
  }

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
    <ScrollView style={{ marginBottom: avoidKeybaord ? 300 : 0 }}>
      <ScreenHeader
        action={() => navigation.goBack()}
        title='Add Personal Details'
      />
      <View style={{ ...common.container, paddingBottom: 50 }}>
        <View>
          <Image
            style={profile.profileCameraIcon}
            source={require("../public/icons/ic_round-photo-camera.png")}
          />
          <View style={profile.coverImage}>
            <Text
              style={{ fontSize: 16, fontWeight: 500, color: colors.white }}
            >
              Add Cover Photo
            </Text>
          </View>
        </View>
        <View style={profile.profileContainer}>
          <Image
            style={profile.profileCameraIcon}
            source={require("../public/icons/ic_round-photo-camera.png")}
          />
          <View style={profile.profile}>
            <Text style={profile.profileText}>Add Profile Photo</Text>
          </View>
        </View>

        <View style={{ marginTop: 42, paddingHorizontal: 20, rowGap: 14 }}>
          <Text style={{ fontSize: 12, fontWeight: 500 }}>
            Enter the name you use in real life
          </Text>

          <View style={{ flexDirection: "row", columnGap: 8 }}>
            <TextInput
              style={{ ...common.input, width: "50%" }}
              placeholder='First Name'
            />
            <TextInput
              style={{ ...common.input, width: "50%" }}
              placeholder='Last Name'
            />
          </View>

          <View style={{ flexDirection: "row", columnGap: 8 }}>
            <View style={{ width: "50%" }}>
              <Text style={{ fontSize: 12, fontWeight: 500 }}>
                Date of Birth
              </Text>
              <TextInput
                style={{ ...common.input, width: "100%" }}
                placeholder='D/M/Y'
              />
            </View>
            <View style={{ width: "50%" }}>
              <Text style={{ fontSize: 12, fontWeight: 500 }}>Gender</Text>
              <View style={{ marginTop: 10 }}>
                <RadioForm
                  radio_props={gender}
                  initial={0}
                  formHorizontal
                  labelHorizontal={true}
                  buttonColor={colors.primary}
                  onPress={(value) => setSelectedGender(value)}
                  buttonSize={8}
                  labelStyle={{ left: -5 }}
                />
              </View>
            </View>
          </View>

          <View>
            <Pressable onPress={() => setShowCategory(true)}>
              <Text style={{ fontSize: 12, fontWeight: 500, marginBottom: 8 }}>
                Category
              </Text>
            </Pressable>
            <View
              style={{ flexDirection: "row", columnGap: 15, flexWrap: "wrap" }}
            >
              {selectedCategory.map((ct, i) => (
                <Pressable
                  onPress={() => removeCategory(ct)}
                  style={{ flexDirection: "row", columnGap: 2 }}
                  key={i}
                >
                  <Image
                    style={{ width: 19, height: 19 }}
                    source={require("../public/icons/material-symbols_cancel-outline.png")}
                  />
                  <Text>{ct}</Text>
                </Pressable>
              ))}
            </View>
          </View>

          <View>
            <TextInput
              multiline
              numberOfLines={3}
              style={{ ...common.input, width: "100%" }}
              placeholder='You can add a short bio to tell people more about yourself.'
            />
          </View>

          <TextInput
            style={{ ...common.input, width: "50%" }}
            placeholder='Country'
          />

          <View>
            <Text style={{ fontSize: 12, fontWeight: 500, marginBottom: 8 }}>
              RelationShip
            </Text>
            <RadioForm
              radio_props={Relationship}
              initial={0}
              formHorizontal
              labelHorizontal={true}
              buttonColor={colors.primary}
              onPress={(value) => setRelationship(value)}
              buttonSize={8}
              labelStyle={{ left: -5 }}
            />
          </View>

          <Button
            onPress={() => navigation.navigate("famousAnchors")}
            text='Save'
            primaryBtn
          />
        </View>
      </View>

      <Modal
        isVisible={showCategory}
        onBackButtonPress={() => setShowCategory(false)}
        coverScreen
        hasBackdrop
        animationIn='slideInRight'
        animationOut='slideOutRight'
        onBackdropPress={() => setShowCategory(false)}
        style={{
          ...common.modal,
          top: 35,
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
        }}
      >
        <View style={{ flex: 1 }}>
          <Category
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </View>
      </Modal>
    </ScrollView>
  );
};

export default Profile;
