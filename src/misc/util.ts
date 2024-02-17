import {
  UserHoldingDataProps,
  UserHoldingProps,
} from '../screens/home/components/interfaces';

export const getRupeeValue = (value: number): string => {
  return `₹ ${Intl.NumberFormat('en-IN').format(Number(value.toFixed(2)))}`;
};

export const getTotalCurrentValue = (data: UserHoldingProps[]): number => {
  const userHolding = [...data];
  const totalCurrentValue: number = userHolding.reduce((acc, item) => {
    return acc + item.ltp * item.quantity;
  }, 0);
  return totalCurrentValue;
};

export const getTotalInvestment = (data: UserHoldingProps[]): number => {
  const userHolding = [...data];
  const totalInvestment: number = userHolding.reduce((acc, item) => {
    return acc + item.avgPrice * item.quantity;
  }, 0);
  return totalInvestment;
};

export const getTodaysProfitAndLoss = (data: UserHoldingProps[]): string => {
  const userHolding = [...data];
  const todaysProfitAndLoss: number = userHolding.reduce((acc, item) => {
    return acc + (item.ltp - item.close) * item.quantity;
  }, 0);
  return getRupeeValue(todaysProfitAndLoss);
};

export const getTotalProfitAndLoss = (data: UserHoldingProps[]): string => {
  const totalCurrentValue: number = getTotalCurrentValue(data);
  const totalInvestment: number = getTotalInvestment(data);
  const totalProfitAndLoss = totalCurrentValue - totalInvestment;
  return getRupeeValue(totalProfitAndLoss);
};
