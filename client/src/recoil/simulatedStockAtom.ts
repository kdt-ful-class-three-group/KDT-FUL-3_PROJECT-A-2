import { atom } from "recoil";
import { SimulatedStock } from "@/hooks/useMockStockSimulator";

const STORAGE_KEY = "simulatedStockMap";

export const simulatedStockAtom = atom<SimulatedStock[]>({
  key: "simulatedStockAtom",
  default: [],
  effects: [
    ({ setSelf, onSet }) => {
      if (typeof window !== "undefined") {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) setSelf(JSON.parse(saved));
      }
      onSet((newValue) => {
        if (typeof window !== "undefined") {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(newValue));
        }
      });
    },
  ],
});
