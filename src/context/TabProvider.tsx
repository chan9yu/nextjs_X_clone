'use client';

import { Dispatch, SetStateAction, createContext, useState } from 'react';

import type { ChildrenProps } from '../@types/common';
import { HOME_TAB } from '../constants/home-constants';

type TabContextType = {
	tab: HOME_TAB;
	setTab: Dispatch<SetStateAction<HOME_TAB>>;
};

export const TabContext = createContext<TabContextType>({
	tab: HOME_TAB.REC,
	setTab: () => {}
});

/** @TODO 상태관리 통합? */
export default function TabProvider({ children }: ChildrenProps) {
	const [tab, setTab] = useState<HOME_TAB>(HOME_TAB.REC);

	return <TabContext.Provider value={{ tab, setTab }}>{children}</TabContext.Provider>;
}
