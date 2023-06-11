import React, { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { companyCategory, personCategory } from "../../services/data";
import { colors } from "../../variants/colors";
import { categoryStyle } from "../../css/category";
import { Pressable } from "react-native";
import { TextInput } from "react-native";
import { Image } from "react-native";

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
        <Pressable onPress={() => setShowCategory("person")}>
          <Text style={personStyle}>Person</Text>
        </Pressable>
        <Pressable onPress={() => setShowCategory("company")}>
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

      <ScrollView style={{ marginTop: 8 }}>
        {data.map((ct, i) => (
          <Pressable
            onPress={() => addCategory(ct)}
            style={{
              ...categoryStyle.categoryItem,
              backgroundColor:
                i % 2 === 0 ? colors.white : colors.secondaryGray,
              justifyContent: "space-between",
            }}
            key={i}
          >
            <Text style={categoryStyle.categoryValue}>{ct}</Text>
            {selectedCategory.find((item) => item === ct) && (
              <Image
                style={{ width: 16, height: 16 }}
                source={require("../../public/icons/radio.png")}
              />
            )}
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
};

export default Category;
