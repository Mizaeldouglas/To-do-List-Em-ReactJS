import { useState } from "react";
import { Item } from "./types/Item";
import * as C from './App.style'
import { ListItem } from "./components/ListItem";
import { AddArea } from "./components/AddArea";
import {HeaderBlackWhite} from "./components/HeaderBlackWhite";
import { ThemeProvider,DefaultTheme } from "styled-components";
import light from "./styles/themes/ligtht";
import dark from "./styles/themes/dark";
import { usePersistedState } from "./utilis/usePersistedState";


const App = () => {
  const[theme,setTheme] = usePersistedState<DefaultTheme>('theme',light);
  const toggleTheme = () => {
    setTheme(theme.title ==='light' ? dark : light)
  }




  const[list,setList]= useState <Item[]> ([]);
  const handleAddTask =  (taskName:string) => {
    let newList = [...list]
    newList.push({
      id:list.length + 1,
      name:taskName,
      done:false
    })
    setList(newList)
  }



  return(
    <ThemeProvider theme={theme}>  
      <C.Container>
        <HeaderBlackWhite toggleTheme={toggleTheme} />
        <C.Area>
          <C.Header />
          <AddArea onEnter={handleAddTask} />

          {list.map((item, index)=>(
            <ListItem key={index} item={item}/>
          ))}
          
        </C.Area>
      </C.Container>
  </ThemeProvider>    
)
}

export default App;