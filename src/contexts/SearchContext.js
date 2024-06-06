import { createContext, useState } from "react";

export  const searchContext = createContext ();
export function SearchProvider ({children})
{
    const [searchTerm, setSearchTerm] = useState("");
    function SearchValue (title){
        setSearchTerm(title);
    }
    return (<searchContext.Provider value={{searchTerm, SearchValue}}> {children}</searchContext.Provider>)
}
