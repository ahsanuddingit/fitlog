'use client';

import React, { createContext, useState } from 'react';

export type PlanItem = {
  id?: string | number;
  _id?: string | number;
  name?: string;
  duration?: number | string;
  caloriesBurned?: number | string;
  image?: string;
  equipment?: string;
  description?: string;
  rating?: number | string;
  [key: string]: unknown;
};

interface PlanContextType {
  plan: PlanItem[];
  setPlan: React.Dispatch<React.SetStateAction<PlanItem[]>>;
  add: PlanItem[];
  setAdd: React.Dispatch<React.SetStateAction<PlanItem[]>>;
  removeFromPlan: (id: string | number) => void;
  removeItem: (id: string | number, tab: string) => void;
}

export const PlanContext = createContext<PlanContextType | null>(null);

const PlanProvider = ({ children }: { children: React.ReactNode }) => {
  const [plan, setPlan] = useState<PlanItem[]>([]);
  const [add, setAdd] = useState<PlanItem[]>([]);

  // Helper to safely match item IDs across various key names (id vs _id)
  const getItemId = (item: PlanItem) => item.id ?? item._id;

  // "Mark as Done" handler: removes item from "Today's Plan" (add array)
  const removeFromPlan = (id: string | number) => {
    setAdd((prev) => prev.filter((item) => getItemId(item) !== id));
  };

  // "Remove" handler: deletes from whichever tab is currently active
  const removeItem = (id: string | number, tab: string) => {
    if (tab === 'today') {
      setAdd((prev) => prev.filter((item) => getItemId(item) !== id));
    } else {
      setPlan((prev) => prev.filter((item) => getItemId(item) !== id));
    }
  };

  const sharedata: PlanContextType = {
    plan,
    setPlan,
    add,
    setAdd,
    removeFromPlan,
    removeItem,
  };

  return <PlanContext.Provider value={sharedata}>{children}</PlanContext.Provider>;
};

export default PlanProvider;