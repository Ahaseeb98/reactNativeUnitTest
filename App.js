import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Header from './Components/Header';
import TextField from './Components/TextField';
const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={styles.container}>
          <Header text="Todo App" />
          <View style={styles.inputContainer}>
            <View style={styles.input}>
              <TextField placeholder="Add Todo" />
            </View>
            <View>
              <TouchableOpacity style={styles.addBtn}>
                <Text style={styles.addBtnText}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  input: {
    flex: 1,
    marginRight: 10,
  },
  addBtn: {
    paddingVertical: 8,
    width: 50,
    backgroundColor: 'gold',
    alignItems: 'center',
    borderRadius: 10,
  },
  addBtnText: {
    fontSize: 24,

    color: '#222',
  },
});
