import React, { useState } from "react";
import { View } from "react-native";
import Header from "../components/anchors/Header";
import { colors } from "../variants/colors";
import Carousal from "../components/anchors/Carousal";
import Footer from "../components/anchors/Footer";
import { ScrollView } from "react-native";
import { style } from "../css/anchors";
import Modal from "react-native-modal";
import { StarSingle, TopSectionSingle } from "../components/anchors/popular";
import { common } from "../css/common";
import Filter from "../components/anchors/Filter";
import Notification from "../components/anchors/Notification";

const PopularAnchors = () => {
  const [showNotification, setShowNotification] = useState(false);
  const [showFilter, setShowFilter] = useState(false);

  return (
    <View>
      <Header
        setShowNotification={setShowNotification}
        setShowFilter={setShowFilter}
      />
      <ScrollView style={{ marginBottom: 90 }}>
        <Carousal />

        {/* top section */}
        <View style={style.topWrapper}>
          <TopSectionSingle title='Top Sender' />
          <TopSectionSingle title='Top Receiver' />
          <TopSectionSingle title='Top Winner' />
        </View>

        {/* star section */}
        <View style={style.starWrapper}>
          <StarSingle
            image={require("../public/resources/star-6.png")}
            title='Super Star'
            name=' King Of King’s'
            bg={colors.white}
            color={colors.primary}
            star
          />
          <StarSingle
            image={require("../public/resources/start-1.png")}
            title='V/S HOUSE'
            name='King Of Queen'
            bg={"#0051A0"}
            color={colors.white}
          />
          <StarSingle
            image={require("../public/resources/start-2.png")}
            title='LIVE HOUSING'
            name='Sutki Kiya'
            bg={colors.primary}
            color={colors.white}
          />
          <StarSingle
            image={require("../public/resources/star-3.png")}
            title='Can You Be My Top'
            name='Tanu Pakhi'
            bg={"rgba(126, 112, 119, 0.25)"}
            color={colors.white}
          />
          <StarSingle
            image={require("../public/resources/star-4.png")}
            title='Please Support Me'
            bg='transparent'
            name='Safu Chowdhury'
            color={colors.white}
          />
          <StarSingle
            image={require("../public/resources/star-5.png")}
            title='V/S'
            name='Maria Sheikdar'
            color={colors.white}
            bg={"#A00000"}
            vs={true}
            vsImage={require("../public/resources/start-1.png")}
          />
          <StarSingle
            image={require("../public/resources/start-2.png")}
            title='LIVE HOUSING'
            name='Sutki Kiya'
            bg={colors.primary}
            color={colors.white}
          />
          <StarSingle
            image={require("../public/resources/star-6.png")}
            title='Super Star'
            name=' King Of King’s'
            bg={colors.white}
            color={colors.primary}
            star
          />
        </View>
      </ScrollView>
      <Footer />

      {/* filter modal */}
      <Modal
        isVisible={showFilter}
        onBackButtonPress={() => setShowFilter(false)}
        coverScreen
        hasBackdrop
        animationIn='slideInRight'
        animationOut='slideOutRight'
        onBackdropPress={() => setShowFilter(false)}
        style={{
          ...common.modal,
          top: 35,
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
        }}
      >
        <View style={{ flex: 1 }}>
          <Filter />
        </View>
      </Modal>

      {/* Notification */}
      <Modal
        isVisible={showNotification}
        onBackButtonPress={() => setShowNotification(false)}
        coverScreen
        hasBackdrop
        animationIn='slideInRight'
        animationOut='slideOutRight'
        onBackdropPress={() => setShowNotification(false)}
        style={{
          ...common.modal,
          top: -20,
        }}
      >
        <View style={{ flex: 1 }}>
          <Notification />
        </View>
      </Modal>
    </View>
  );
};

export default PopularAnchors;
