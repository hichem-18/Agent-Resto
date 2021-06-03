import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";

import {
  View,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  StatusBar,
  Text,
  SafeAreaView,
} from "react-native";
import vwcars from "./vwcars";
import { useFocusEffect } from "@react-navigation/native";

const Item_SIZE = 120;
const BG_COLOR = "#D9E7FF";
const SPACING = 10;
const width = 20;
const BG =
  "https://images.pexels.com/photos/5706059/pexels-photo-5706059.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
export default function OrderList({ navigation, route }) {
  const [orders, setOrders] = useState([]);
  const { token } = route.params;
  async function getOrders() {
    const token1 = (axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${token}`);
    const orderRes = await axios.get(`http://192.168.1.2:8000/vandor/orders`);
    setOrders(orderRes.data);
  }
  useEffect(() => {
    getOrders();
  }, []);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar hidden />
      <FlatList
        data={orders}
        keyExtractor={(item) => item._id}
        contentContainerStyle={{ padding: SPACING }}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("OrderDetails", { item });
              }}
            >
              {item.items.map((foods, idx) => {
                return (
                  <View style={styles.item} key={idx}>
                    <View>
                      <Text style={styles.model}>Order:{item.orderID}</Text>
                      <Text style={styles.description}>{foods.food.name}</Text>
                      <Text style={styles.description}>
                        {foods.food.description}
                      </Text>
                      <Text style={styles.price}>
                        Price:{item.totalAmount} DT
                      </Text>
                    </View>
                  </View>
                );
              })}
            </TouchableOpacity>
          );
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  item: {
    height: Item_SIZE - 30,
    borderRadius: 12,
    marginBottom: SPACING,
    padding: SPACING,
    backgroundColor: BG_COLOR,
    overflow: "hidden",
    opacity: 0.6,
  },
  model: {
    fontSize: 18,
    fontWeight: "700",
  },
  description: {
    fontSize: 12,
    opacity: 0.7,
  },
  price: {
    fontSize: 12,
    opacity: 0.7,
  },
  image: {
    height: Item_SIZE * 1.2,
    width: "100%",
    position: "absolute",
    bottom: 0,
    right: "-40%",
    resizeMode: "center",
  },
});
