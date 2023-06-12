import React, { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { companyCategory, personCategory } from "../../services/data";
import { colors } from "../../variants/colors";
import { categoryStyle } from "../../css/category";
import { Pressable } from "react-native";
import { TextInput } from "react-native";
import { Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { FlatList } from "react-native";

const Category = ({ selectedCategory, setSelectedCategory }) => {
  const [showCategory, setShowCategory] = useState("person");

  function addCategory(value) {
    const isExist = selectedCategory.find((ct) => ct === value);
    if (isExist) return;
    setSelectedCategory((prev) => {
      prev.push(value);
      return [...prev];
    });
  }

  const personStyle =
    showCategory === "person"
      ? categoryStyle.activeTite
      : categoryStyle.inactiveTitle;

  const companyStyle =
    showCategory === "company"
      ? categoryStyle.activeTite
      : categoryStyle.inactiveTitle;

  const data = showCategory === "person" ? personCategory : companyCategory;
  return (
    <View>
      <Text style={categoryStyle.header}>Category</Text>
      <View style={categoryStyle.titleContainer}>
        <Pressable
          style={{ width: "50%" }}
          onPress={() => setShowCategory("person")}
        >
          <Text style={personStyle}>Person</Text>
        </Pressable>
        <Pressable
          style={{ width: "50%" }}
          onPress={() => setShowCategory("company")}
        >
          <Text style={companyStyle}>Company</Text>
        </Pressable>
      </View>

      <View style={{ width: 150, alignSelf: "center" }}>
        <Image
          style={categoryStyle.searchIcon}
          source={require("../../public/icons/search-icon.png")}
        />
        <TextInput style={categoryStyle.searchInput} placeholder='Search' />
      </View>

      <FlatList
        contentContainerStyle={{ paddingBottom: 160 }}
        data={data}
        renderItem={({ item, index }) => (
          <Pressable
            onPress={() => addCategory(ct)}
            style={{
              ...categoryStyle.categoryItem,
              backgroundColor:
                index % 2 === 0 ? colors.white : colors.secondaryGray,
              justifyContent: "space-between",
            }}
          >
            <Text style={categoryStyle.categoryValue}>{item}</Text>
            {selectedCategory.find((ct) => ct === item) && (
              <Ionicons
                name='checkmark-circle'
                size={18}
                color={colors.primary}
              />
            )}
          </Pressable>
        )}
      />
    </View>
  );
};

export default Category;
