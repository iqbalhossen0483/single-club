import { View } from "react-native";
import Header from "../components/anchors/Header";
import { colors } from "../variants/colors";
import Carousal from "../components/anchors/Carousal";
import Footer from "../components/anchors/Footer";
import { ScrollView } from "react-native";
import { StarSingle, TopSectionSingle } from "../components/anchors/popular";
import { useState } from "react";
import Modal from "react-native-modal";
import { common } from "../css/common";
import Filter from "../components/anchors/Filter";
import Notification from "../components/anchors/Notification";

const PopularMultiAnchors = () => {
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
        <View style={topWrapper}>
          <TopSectionSingle title='Top Sender' />
          <TopSectionSingle title='Top Receiver' />
          <TopSectionSingle title='Top Winner' />
        </View>

        {/* star section */}
        <View style={starWrapper}>
          <StarSingle
            image={require("../public/resources/star-6.png")}
            title='Can You Be My Top'
            name=' King Of King’s'
            bg={"rgba(126, 112, 119, 0.25)"}
            color={colors.white}
            friendList
          />
          <StarSingle
            image={require("../public/resources/start-1.png")}
            title='Can You Be My Top'
            name='King Of Queen'
            bg={"rgba(126, 112, 119, 0.25)"}
            color={colors.white}
            friendList
          />
          <StarSingle
            image={require("../public/resources/start-2.png")}
            title='Can You Be My Top'
            name='Sutki Kiya'
            bg={"rgba(126, 112, 119, 0.25)"}
            color={colors.white}
            friendList
          />
          <StarSingle
            image={require("../public/resources/star-3.png")}
            title='Can You Be My Top'
            name='Tanu Pakhi'
            bg={"rgba(126, 112, 119, 0.25)"}
            color={colors.white}
            friendList
          />
          <StarSingle
            image={require("../public/resources/star-4.png")}
            title='Can You Be My Top'
            name='Safu Chowdhury'
            bg={"rgba(126, 112, 119, 0.25)"}
            color={colors.white}
            friendList
          />
          <StarSingle
            image={require("../public/resources/star-5.png")}
            title='Can You Be My Top'
            name='Maria Sheikdar'
            bg={"rgba(126, 112, 119, 0.25)"}
            color={colors.white}
            friendList
          />
          <StarSingle
            image={require("../public/resources/start-2.png")}
            title='Can You Be My Top'
            name='Sutki Kiya'
            bg={"rgba(126, 112, 119, 0.25)"}
            color={colors.white}
            friendList
          />
          <StarSingle
            image={require("../public/resources/star-6.png")}
            title='Can You Be My Top'
            name=' King Of King’s'
            bg={"rgba(126, 112, 119, 0.25)"}
            color={colors.white}
            friendList
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

export default PopularMultiAnchors;

const starWrapper = {
  paddingHorizontal: 5,
  paddingTop: 5,
  flexDirection: "row",
  justifyContent: "space-between",
  columnGap: 5,
  backgroundColor: colors.white,
  flexWrap: "wrap",
  rowGap: 5,
  paddingBottom: 5,
};
const topWrapper = {
  flexDirection: "row",
  justifyContent: "space-between",
  paddingHorizontal: 5,
  paddingVertical: 5,
  backgroundColor: colors.white,
};
