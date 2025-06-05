import { create } from "zustand";
import { persist } from "zustand/middleware";
import { SimulatedStock, PriceHistory } from "@/hooks/useMockStockSimulator";

interface StockStoreState {
  simulatedList: SimulatedStock[];
  priceHistoryMap: Record<string, PriceHistory[]>;
  filteredStocks: SimulatedStock[];
  setSimulatedList: (list: SimulatedStock[]) => void;
  setPriceHistoryMap: (map: Record<string, PriceHistory[]>) => void;
  setFilteredStocks: (stocks: SimulatedStock[]) => void;
}

export const useStockStore = create<StockStoreState>()(
  persist(
    (set) => ({
      simulatedList: [],
      priceHistoryMap: {},
      filteredStocks: [],
      setSimulatedList: (list) => set({ simulatedList: list }),
      setPriceHistoryMap: (map) => set({ priceHistoryMap: map }),
      setFilteredStocks: (stocks) => set({ filteredStocks: stocks }),
    }),
    {
      name: "stock-store", // localStorage key
    }
  )
);
