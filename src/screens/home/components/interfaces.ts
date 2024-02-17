export interface UserHoldingDataProps {
  data: {
    userHolding: {
      symbol: string;
      quantity: number;
      ltp: number;
      avgPrice: number;
      close: number;
    }[];
  };
}
