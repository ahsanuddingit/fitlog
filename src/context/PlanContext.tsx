'use client';

import React, { createContext, useState } from 'react';
import { Workout } from '@/types/workout';

interface PlanContextType {
  plan: Workout[];
  add: Workout[];
  addToToday: (item: Workout) => void;
  saveForLater: (item: Workout) => void;
  removeFromPlan: (id: string | number) => void;
  removeItem: (id: string | number, tab: string) => void;
}

export const PlanContext = createContext<PlanContextType | null>(null);

const PlanProvider = ({ children }: { children: React.ReactNode }) => {
  const [plan, setPlan] = useState<Workout[]>([]);
  const [add, setAdd] = useState<Workout[]>([]);

  const getItemId = (item: Workout) => item.id ?? item._id;

  const addToToday = (item: Workout) => {
    setAdd((prev) => {
      const exists = prev.some((i) => getItemId(i) === getItemId(item));
      return exists ? prev : [...prev, item];
    });
  };

  const saveForLater = (item: Workout) => {
    setPlan((prev) => {
      const exists = prev.some((i) => getItemId(i) === getItemId(item));
      return exists ? prev : [...prev, item];
    });
  };

  const removeFromPlan = (id: string | number) => {
    setAdd((prev) => prev.filter((item) => getItemId(item) !== id));
  };

  const removeItem = (id: string | number, tab: string) => {
    if (tab === 'today') {
      setAdd((prev) => prev.filter((item) => getItemId(item) !== id));
    } else {
      setPlan((prev) => prev.filter((item) => getItemId(item) !== id));
    }
  };

  return (
    <PlanContext.Provider
      value={{
        plan,
        add,
        addToToday,
        saveForLater,
        removeFromPlan,
        removeItem,
      }}
    >
      {children}
    </PlanContext.Provider>
  );
};

export default PlanProvider;