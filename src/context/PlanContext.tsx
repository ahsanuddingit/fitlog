
'use client';

import React, { createContext, useState } from 'react';

type PlanItem = Record<string, unknown>;

interface PlanContextType {
    plan: PlanItem[];
    setPlan: React.Dispatch<React.SetStateAction<PlanItem[]>>;
    add: PlanItem[];
    setAdd: React.Dispatch<React.SetStateAction<PlanItem[]>>;
}

export const PlanContext = createContext<PlanContextType | null>(null);

const PlanProvider = ({ children }: { children: React.ReactNode }) => {
    const [plan, setPlan] = useState<PlanItem[]>([]);
    const [add, setAdd] = useState<PlanItem[]>([]);

    const sharedata: PlanContextType = {
        plan,
        setPlan,
        add,
        setAdd,
    };

    return <PlanContext.Provider value={sharedata}>{children}</PlanContext.Provider>;
};

export default PlanProvider;