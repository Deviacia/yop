import { useContext } from "react";
import { StepsContext } from "../model/context";

export const useStepsContext = () => {
  const context = useContext(StepsContext);

  if (context === undefined) {
    throw new Error('useStepsContext must be used within a StepsProvider');
  }

  return context;
};
