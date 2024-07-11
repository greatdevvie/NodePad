import { useContext } from "react";
import { ContentContext, ContentContextType } from "../context/ContentProvider";

export const useContent = (): ContentContextType => {
    const context = useContext(ContentContext);
    if (context === undefined) {
      throw new Error('useContent может быть использован совместно с ContentProvider');
    }
    return context;
};