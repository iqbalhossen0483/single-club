import React from "react";
import { Image } from "react-native";
import { Dimensions } from "react-native";
import Carousel from "react-native-snap-carousel";

const Carousal = () => {
  const width = Dimensions.get("window").width;
  const data = [
    {
      img: require("../../public/images/banner.png"),
    },
    {
      img: require("../../public/images/banner-1.png"),
    },
    {
      img: require("../../public/images/banner-2.png"),
    },
  ];

  return (
    <Carousel
      autoplay
      autoplayDelay={3000}
      loop
      data={data}
      renderItem={({ item }) => (
        <Image style={{ width: "100%", height: 71 }} source={item.img} />
      )}
      sliderWidth={width}
      itemWidth={width}
    />
  );
};

export default Carousal;
