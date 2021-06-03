import React from "react";
import {
  SafeAreaView,
  Image,
  StyleSheet,
  View,
  Text,
  ScrollView,
  Button,
  ImageBackground,
} from "react-native";
import * as Animatable from "react-native-animatable";

import { AntDesign } from "@expo/vector-icons";
const width = 20;
const SPACING = 20;
const animation = {
  0: { opacity: 0, translateX: 50 },
  1: { opacity: 1, translateX: 0 },
};

const OrderDetails = ({ navigation, route }) => {
  const { item } = route.params;
  return (
    <ImageBackground
      source={require("../assets/back.png")}
      style={{ width: "100%", height: "100%" }}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <AntDesign
          name="close"
          size={28}
          style={{
            padding: 12,
            position: "absolute",
            top: SPACING,
            right: 0,
            zIndex: 2,
          }}
          color={"#333"}
          onPress={() => {
            navigation.goBack();
          }}
        />

        <View style={styles.meta}>
          <Text style={styles.title} numberOfLines={1}>
            Order ID : {item.orderID}
          </Text>
        </View>

        <Animatable.View
          style={{ marginTop: "90%" }}
          useNativeDriver
          animation={animation}
          delay={300 + 1 * 200}
        >
          {item.items.map((foods, idx) => {
            return (
              <View
                key={idx}
                style={{
                  flex: 1,
                  alignItems: "center",
                }}
              >
                <Text style={styles.ingredients}>{foods.food.name}:</Text>
                <Text style={styles.ingredients}>{foods.food.description}</Text>
              </View>
            );
          })}
        </Animatable.View>
        <Animatable.View
          style={styles.status}
          useNativeDriver
          animation={animation}
          delay={300 + 3 * 200}
        >
          <Text style={styles.price}>Price:{item.totalAmount} DT</Text>

          <Text style={styles.state}>{item.affect}</Text>
        </Animatable.View>
      </SafeAreaView>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  meta: {
    position: "absolute",
    top: SPACING * 4,
    left: SPACING * 3,
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
    color: "#000",
  },

  price: {
    fontSize: 30,
    color: "#202020",
  },
  state: {
    fontSize: 30,
    color: "#202020",
  },
  ingredients: {
    color: "#034a90",
    fontSize: 20,
  },
  status: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default OrderDetails;
