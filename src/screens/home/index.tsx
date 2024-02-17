import React, {useEffect} from 'react';
import {View, Text, StyleSheet, BackHandler, SafeAreaView} from 'react-native';
import StockHoldings from './components/stock-holdings';
import PortfolioSummary from './components/portfolio-summary';

const HomeScreen: React.FC<{navigation: any}> = ({navigation}) => {
  BackHandler.addEventListener('hardwareBackPress', () => {
    BackHandler.exitApp();
    return true;
  });

  const data = {
    userHolding: [
      {
        symbol: 'TCS',
        quantity: 10,
        ltp: 3250.5,
        avgPrice: 2480.3,
        close: 3312,
      },
      {
        symbol: 'Wipro',
        quantity: 80,
        ltp: 550.2,
        avgPrice: 380.3,
        close: 580,
      },
      {
        symbol: 'SBI',
        quantity: 12,
        ltp: 650.5,
        avgPrice: 680.3,
        close: 613,
      },
      {
        symbol: 'TataMotors',
        quantity: 100,
        ltp: 650.5,
        avgPrice: 280.3,
        close: 780,
      },
      {
        symbol: 'Reliance',
        quantity: 10,
        ltp: 2887.1,
        avgPrice: 2780.3,
        close: 2610,
      },
    ],
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Your Holdings</Text>
      </View>
      <View style={styles.divider} />
      <StockHoldings data={data} />
      <PortfolioSummary data={data} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    color: 'black',
    fontWeight: '600',
  },
  titleContainer: {
    padding: 12,
  },
  divider: {
    height: 1,
    backgroundColor: 'lightgrey',
  },
});

export default HomeScreen;
