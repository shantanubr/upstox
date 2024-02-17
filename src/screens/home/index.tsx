import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  BackHandler,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import StockHoldings from './components/stock-holdings';
import PortfolioSummary from './components/portfolio-summary';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {upstoxPrimaryColor} from '../../constants/colors';
import useGetHoldingsData from '../../hooks/useGetHoldingsData';

const HomeScreen: React.FC<{navigation: any}> = ({navigation}) => {
  BackHandler.addEventListener('hardwareBackPress', () => {
    BackHandler.exitApp();
    return true;
  });

  const {data, loading, error} = useGetHoldingsData();

  if (loading) {
    return (
      <View style={styles.nonDataContainer}>
        <ActivityIndicator size="large" color={upstoxPrimaryColor} />
      </View>
    );
  } else if (error) {
    return (
      <View style={styles.nonDataContainer}>
        <Text>{error}</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Your Holdings</Text>
      </View>
      <View style={styles.divider} />
      <StockHoldings data={data ?? {userHolding: []}} />
      <View style={styles.portfolioSummary}>
        <PortfolioSummary data={data ?? {userHolding: []}} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'darkgrey',
  },
  title: {
    fontSize: 18,
    color: 'black',
    fontWeight: '600',
  },
  titleContainer: {
    padding: 12,
    backgroundColor: Colors.lighter,
  },
  divider: {
    height: 1,
    backgroundColor: 'lightgrey',
  },
  portfolioSummary: {
    position: 'absolute',
    bottom: 0,
  },
  nonDataContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
