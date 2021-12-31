import { useState,KeyboardEvent } from 'react';
import * as C from './style';

type Props ={
    onEnter:(taskName:string) => void
}
export const AddArea = ({onEnter}:Props) => {  
    const [inputText,setInpuTtext] = useState('')

    const handleKeyUp = (e:KeyboardEvent) => {
      if (e.code=== 'Enter' && inputText !==''){
        onEnter(inputText)
        setInpuTtext('')
      }
      
    }
    return(
        <C.Container>
            <div className="image">+</div>
            <input 
                type="text"
                placeholder='Adicione Uma tarefa'
                value={inputText}
                onChange={e =>setInpuTtext(e.target.value)}
                onKeyUp={handleKeyUp}
            
            />
        </C.Container>
    )
}
