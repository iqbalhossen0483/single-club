import { StyleSheet } from "react-native";
import { colors } from "../variants/colors";
import { Dimensions } from "react-native";

export const common = StyleSheet.create({
  button: {
    flexDirection: "row",
    backgroundColor: colors.white,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
    columnGap: 42,
    shadowColor: "rgba(0, 0, 0, 0.0861833)",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 5,
    alignItems: "center",
  },
  container: {
    padding: 10,
    backgroundColor: colors.white,
  },
  input: {
    backgroundColor: colors.secondaryGray,
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 15,
  },
  modal: {
    position: "absolute",
    right: -20,
    top: -22,
    backgroundColor: "#fff",
    width: "60%",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.19,
    shadowRadius: 5.62,
    elevation: 6,
    paddingBottom: 20,
    zIndex: 50,
    height: Dimensions.get("window").height,
  },
});
