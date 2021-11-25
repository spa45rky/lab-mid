import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [view, setView] = React.useState(1)
  const [users, setUsers] = React.useState(0)
  const [products, setProducts] = React.useState(0)
  const [orders, setOrders] = React.useState(0)
  const [suppliers, setSuppliers] = React.useState(0)

  const [name, setName] = React.useState("")
  const [desig, setDesig] = React.useState("")
  const [salary, setSalary] = React.useState(0)

  const [list, setList] = React.useState([])

  function adminPanel() {
    // layout for the admin panel (initial screen)
    return(
    <View style={styles.container}>
      <Text style={styles.adminText}>Admin Panel</Text>
      <View style={styles.btnArea}>
        <TouchableOpacity style={styles.adminBtn} onPress={() => setView(2)}><Text style={styles.btnText}>{users}</Text><Text style={styles.btnText}>Users</Text></TouchableOpacity>
        <TouchableOpacity style={styles.adminBtn}><Text style={styles.btnText}>{products}</Text><Text style={styles.btnText}>Products</Text></TouchableOpacity>
        </View>
        <View style={styles.btnArea}>
        <TouchableOpacity style={styles.adminBtn}><Text style={styles.btnText}>{orders}</Text><Text style={styles.btnText}>Orders</Text></TouchableOpacity>
        <TouchableOpacity style={styles.adminBtn}><Text style={styles.btnText}>{suppliers}</Text><Text style={styles.btnText}>Suppliers</Text></TouchableOpacity>
      </View>
    </View>
    )
  }

  function addUser() {
    return(
      // layout for adding a user
    <View style={styles.container}>
      <Text style={styles.adminText}>Add a User</Text>
      <Text style={styles.userText}>Name:</Text>
      <TextInput value={name} onChangeText={setName} style={styles.inputText}/>
      <Text style={styles.userText}>Designation: </Text>
      <TextInput value={desig} onChangeText={setDesig} style={styles.inputText}/>
      <Text style={styles.userText}>Salary: </Text>
      <TextInput value={salary} onChangeText={setSalary} style={styles.inputText}/>
      <TouchableOpacity style={styles.userBtn} onPress={() => addToList()}><Text>Add</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => setView(1)} style={styles.userBtn}><Text>Back</Text></TouchableOpacity>
    </View>
    )
  }

  function addToList(){
    // adding an object to list and then clearing the input field hooks for addUser
    let temp = {'Name': name, 'Designation': desig, 'Salary': salary}
    setList([...list, temp])
    setUsers(users+1)
    setName("")
    setDesig("")
    setSalary(0)
    setView(3)
  }

  function viewUsers(){
    return(
      <View style={styles.container}>
      <ScrollView>
      // mapping through the list array that we initialized with an empty array at the beginning using a hook
        {list.map((i) => <View style={styles.container}><Text style={styles.viewText}>Name: {i.Name}~{"\n"}Designation: {i.Designation}~{"\n"}Salary: {i.Salary}</Text></View>)}
      </ScrollView>
      <TouchableOpacity style={styles.userBtn} onPress={() => setView(1)}><Text>Back</Text></TouchableOpacity>
      </View>
    )
  }

  return (
    // ternary operator for screen switching
    <View style={styles.container}>
      {view === 1 ? adminPanel() : (view === 2 ? addUser() : viewUsers())}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  adminText: {
    fontSize: 35,
    color: 'blue'
  },
  btnArea: {
    width: 400,
    display: 'flex',
    flexDirection: 'row',
  },
  adminBtn: {
    flex: 1,
    backgroundColor: 'skyblue',
    borderRadius: 20,
    padding: 20,
    width: 90,
    margin: 20,
    alignItems: 'center'
  },
  btnText: {
    fontSize: 20
  },
  userText: {
    fontSize: 20,
    color: 'blue',
    margin: 10
  },
  inputText: {
    backgroundColor: 'grey',
    width: 200
  },
  userBtn: {
    alignItems: 'center',
    backgroundColor: 'skyblue',
    borderRadius: 20,
    width: 100,
    height: 50,
    padding: 10,
    margin: 20
  },
  viewText: {
    fontSize: 20,
    color: 'blue',
    backgroundColor: 'grey',
    margin: 10
  }
});
