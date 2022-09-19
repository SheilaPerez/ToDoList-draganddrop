import React, { Dispatch, SetStateAction } from 'react';

export interface OptionsContextI {
    option: string;
    setOption: Dispatch<SetStateAction<string>>;
}

const OptionContext = React.createContext<OptionsContextI | null>(null);
export const OptionContextProvider = OptionContext.Provider
export default OptionContext;