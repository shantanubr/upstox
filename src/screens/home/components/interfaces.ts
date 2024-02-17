export interface UserHoldingDataProps {
  data: {
    userHolding: UserHoldingProps[];
  };
}

export interface UserHoldingProps {
  symbol: string;
  quantity: number;
  ltp: number;
  avgPrice: number;
  close: number;
}
