import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';
import {UserHoldingDataProps} from '../interfaces';
import {
  getRupeeValue,
  getTodaysProfitAndLoss,
  getTotalCurrentValue,
  getTotalInvestment,
  getTotalProfitAndLoss,
} from '../../../../misc/util';
import {upstoxPrimaryColor} from '../../../../constants/colors';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const PortfolioSummary: React.FC<UserHoldingDataProps> = props => {
  const [isSummaryVisible, setIsSummaryVisible] = useState(false);
  return (
    <TouchableHighlight
      activeOpacity={0.1}
      underlayColor={Colors.lighter}
      onPress={() => setIsSummaryVisible(!isSummaryVisible)}
      style={styles.touchable}>
      <>
        {isSummaryVisible ? (
          <View style={styles.summaryTable}>
            <Text style={styles.arrow}>{`▼`}</Text>
            <View style={styles.summaryContainer}>
              <Text style={styles.summaryLabel}>{`Current Value:`}</Text>
              <Text style={styles.summaryValue}>
                {getRupeeValue(getTotalCurrentValue(props.data.userHolding))}
              </Text>
            </View>
            <View style={styles.summaryContainer}>
              <Text style={styles.summaryLabel}>{`Total Investment:`}</Text>
              <Text style={styles.summaryValue}>
                {getRupeeValue(getTotalInvestment(props.data.userHolding))}
              </Text>
            </View>
            <View style={styles.summaryContainer}>
              <Text style={styles.summaryLabel}>{`Today's Profit & Loss`}</Text>
              <Text style={styles.summaryValue}>
                {getTodaysProfitAndLoss(props.data.userHolding)}
              </Text>
            </View>
          </View>
        ) : (
          <Text style={styles.arrow}>{`▲`}</Text>
        )}

        <View style={styles.portfolioContainer}>
          <Text style={styles.summaryLabel}>{`Profit & Loss:`}</Text>
          <Text style={styles.summaryValue}>
            {getTotalProfitAndLoss(props.data.userHolding)}
          </Text>
        </View>
      </>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  arrow: {
    color: upstoxPrimaryColor,
  },
  touchable: {
    alignItems: 'center',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingTop: 10,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 24,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
  },
  portfolioContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 14,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
    width: '100%',
  },
  summaryLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  summaryValue: {
    fontSize: 16,
    fontWeight: '400',
    color: 'black',
  },
  summaryContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 14,
    paddingVertical: 8,
    width: '100%',
  },
  summaryTable: {
    alignItems: 'center',
  },
});

export default PortfolioSummary;
