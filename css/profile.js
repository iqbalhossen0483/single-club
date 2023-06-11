import { StyleSheet } from "react-native";
import { colors } from "../variants/colors";

export const profile = StyleSheet.create({
  profile: {
    width: 117,
    height: 117,
    borderRadius: 100,
    borderWidth: 4,
    borderColor: colors.white,
    backgroundColor: colors.gray,
    justifyContent: "center",
    alignItems: "center",
  },
  profileCameraIcon: {
    width: 15,
    height: 15,
    position: "absolute",
    top: 10,
    right: 10,
    zIndex: 100,
  },
  profileContainer: {
    width: 117,
    height: 117,
    borderRadius: 100,
    alignSelf: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 5,
    justifyContent: "center",
    alignItems: "center",
    marginTop: -60,
  },
  coverImage: {
    height: 188,
    backgroundColor: colors.gray,
    justifyContent: "center",
    alignItems: "center",
  },
  profileText: {
    fontSize: 16,
    fontWeight: 500,
    color: colors.white,
    textAlign: "center",
  },
});
