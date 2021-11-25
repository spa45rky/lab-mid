import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [view, setView] = React.useState("admin")
  const [users, setUsers] = React.useState(0)
  const [products, setProducts] = React.useState(0)
  const [orders, setOrders] = React.useState(0)
  const [suppliers, setSuppliers] = React.useState(0)

  function adminPanel() {
    <View>
      <Text style={styles.adminText}>Admin Panel</Text>
      <View style={styles.adminBtn}>
        <TouchableOpacity><Text>{users}</Text><Text>Users</Text></TouchableOpacity>
        <TouchableOpacity><Text>{products}</Text><Text>Products</Text></TouchableOpacity>
        <TouchableOpacity><Text>{orders}</Text><Text>Orders</Text></TouchableOpacity>
        <TouchableOpacity><Text>{suppliers}</Text><Text>Suppliers</Text></TouchableOpacity>
      </View>
    </View>
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
