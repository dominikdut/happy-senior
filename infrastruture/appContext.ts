import React, { createContext } from 'react';

export interface IAppContext {
    aboutCompany: React.RefObject<HTMLDivElement>,
    contact: React.RefObject<HTMLDivElement>,
}

const AppContext = createContext<IAppContext>({
    aboutCompany: React.createRef<HTMLDivElement>(),
    contact: React.createRef<HTMLDivElement>(),
});

export default AppContext;

export const { Provider } = AppContext;
