import React, { createContext, useState, ReactNode } from 'react';

export interface ContentState {
  id: number;
  header: string;
  body: React.SetStateAction<string>;
}

export interface ContentContextType {
  context: ContentState;
  setContext: React.Dispatch<React.SetStateAction<ContentState>>;
}

export const ContentContext = createContext<ContentContextType | undefined>(undefined);

export const ContentProvider = ({ children }: { children: ReactNode }) => {
  const [context, setContext] = useState<ContentState>({ id: 0, header: '', body: '' });

  console.log(context)

  return (
    <ContentContext.Provider value={{ context, setContext }}>
      {children}
    </ContentContext.Provider>
  );
};
