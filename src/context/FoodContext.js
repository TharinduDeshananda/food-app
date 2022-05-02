import { createContext } from "react";

export const FoodContext = createContext();

export const FoodProvider = FoodContext.Provider;
export const FoodConsumer = FoodContext.Consumer;
