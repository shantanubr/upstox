import React, {useEffect} from 'react';
import {View, Text, StyleSheet, StatusBar, BackHandler} from 'react-native';

const HomeScreen: React.FC<{navigation: any}> = ({navigation}) => {
  BackHandler.addEventListener('hardwareBackPress', () => {
    BackHandler.exitApp();
    return true;
  });
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Welcome to the Home Screen!</Text>
        {/* Add your components and content here */}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});

export default HomeScreen;
