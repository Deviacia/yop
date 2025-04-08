import { createContext } from "react";

export type SubscriptionDataT = {
  email?: string
  id?: number;
  something?: object;
};

export type SubscriptionFormT = {
  [step: number]: SubscriptionDataT;
};

type StepsContextT = {
  stepsNumber: number;
  currentStep: number;
  nextStep: () => void;
  subscriptionFormData: SubscriptionFormT;
  updateSubscriptionFormData: (step: number, patch: Partial<SubscriptionDataT>) => void;
  canGoToNextStep: boolean
};

export const StepsContext = createContext<StepsContextT | undefined>(undefined);

