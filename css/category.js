import { StyleSheet } from "react-native";
import { colors } from "../variants/colors";

export const categoryStyle = StyleSheet.create({
  header: {
    fontSize: 20,
    fontWeight: 700,
    textAlign: "center",
    color: colors.primary,
    marginTop: 10,
    marginBottom: 8,
  },
  titleContainer: {
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 20,
    alignSelf: "center",
    flexDirection: "row",
  },
  inactiveTitle: {
    fontSize: 13,
    fontWeight: 700,
    color: colors.primary,
    paddingVertical: 5,
    paddingHorizontal: 20,
  },
  activeTite: {
    backgroundColor: colors.primary,
    color: colors.white,
    fontSize: 13,
    fontWeight: 700,
    paddingVertical: 5,
    borderRadius: 20,
    paddingHorizontal: 20,
  },
  categoryItem: {
    paddingVertical: 4,
    paddingHorizontal: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 10,
    flexDirection: "row",
  },
  categoryValue: {
    fontSize: 14,
    fontWeight: 500,
    width: "50%",
  },
  searchInput: {
    borderRadius: 7,
    borderWidth: 1,
    borderColor: colors.gray,
    marginTop: 9,
    paddingVertical: 3,
    paddingLeft: 25,
    paddingRight: 10,
  },
  searchIcon: {
    width: 20,
    height: 20,
    position: "absolute",
    left: 5,
    top: 17,
  },
});
