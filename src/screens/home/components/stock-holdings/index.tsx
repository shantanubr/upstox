import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {UserHoldingDataProps} from '../interfaces';

const StockHoldings: React.FC<UserHoldingDataProps> = ({data}) => {
  const profitAndLoss = (ltp: number, avgPrice: number, quantity: number) => {
    const result = ltp * quantity - avgPrice * quantity;
    return Intl.NumberFormat('en-IN').format(Number(result.toFixed(2)));
  };
  return (
    <FlatList
      data={data.userHolding}
      renderItem={({item, index}) => (
        <View style={styles.holdingItemContainer} key={index}>
          <View style={styles.holdingItem}>
            <Text style={styles.symbol}>{item.symbol.toUpperCase()}</Text>
            <Text style={styles.amountLabel}>
              {`LTP: ₹ `}
              <Text style={styles.amount}>{item.ltp}</Text>
            </Text>
          </View>
          <View style={styles.holdingItem}>
            <Text>{item.quantity}</Text>

            <Text style={styles.amountLabel}>
              {`P&L: ₹ `}
              <Text style={styles.amount}>
                {profitAndLoss(item.ltp, item.avgPrice, item.quantity)}
              </Text>
            </Text>
          </View>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  holdingItemContainer: {
    padding: 14,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
  },
  holdingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 2,
  },
  symbol: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 16,
  },
  amount: {
    fontWeight: '500',
    color: 'black',
  },
  amountLabel: {
    color: 'black',
  },
});

export default StockHoldings;
