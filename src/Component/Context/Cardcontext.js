import React from "react";
import { createContext } from "react";
import useCardcontext from "../Hooks/useCardcontext";

const CardContext = createContext({
  movies: [],
  setMovies() {},
  children: null,
  api:"",
  setApi(){},
});

function CardProvider({ children }) {
  const { movies, setMovies,api,setApi} = useCardcontext();
  return (
    <CardContext.Provider value={{ movies, setMovies ,api,setApi}}>
      {children}
    </CardContext.Provider>
  );
}

export { CardContext, CardProvider };
