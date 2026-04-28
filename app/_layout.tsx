import React from 'react';
import { Stack } from 'expo-router';
import { CartProvider } from '../context/CartContext';

export default function RootLayout() {
  return (
    <CartProvider>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="index" />
        <Stack.Screen name="product-detail" />
        <Stack.Screen name="cart" />
      </Stack>
    </CartProvider>
  );
}
