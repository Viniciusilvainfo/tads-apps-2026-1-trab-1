import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
  Text,
  SafeAreaView,
} from 'react-native';
import { useRouter } from 'expo-router';
import { Header } from '../components/Header';
import { ProductCard } from '../components/ProductCard';
import { PRODUCTS } from '../data/products';
import { useCart } from '../context/CartContext';

export default function HomeScreen() {
  const router = useRouter();
  const { cart } = useCart();
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  const handleProductPress = (productId: string) => {
    router.push({
      pathname: '/product-detail',
      params: { productId },
    });
  };

  const handleCartPress = () => {
    router.push('/cart');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="MercadoTech"
        rightText={`🛒 ${cartCount}`}
        rightAction={handleCartPress}
      />
      <FlatList
        data={PRODUCTS}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item }) => (
          <ProductCard
            product={item}
            onPress={() => handleProductPress(item.id)}
          />
        )}
        columnWrapperStyle={styles.columnWrapper}
        contentContainerStyle={styles.list}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  columnWrapper: {
    justifyContent: 'space-between',
    paddingHorizontal: 8,
  },
  list: {
    paddingVertical: 8,
  },
});
