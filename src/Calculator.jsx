import { useState } from "react";


const Calculator = ()=>{
    const [value,setValue]=useState('');
    function calculate(){
        
    }
    return(
        <div className="container" >
            <div className="display">
                <input value={value} type="text" />
            </div>
            <div className="all-btn">
                <input onClick={()=>{setValue('')}} value='AC' type="button" />
                <input onClick={()=>{setValue(value.slice(0,-1))}} value='DE' type="button" />
                <input onClick={(e)=>{setValue(value+e.target.value)}} value='.' type="button" />
                <input onClick={(e)=>{setValue(value+e.target.value)}} value='+' type="button" />
                <input onClick={(e)=>{setValue(value+e.target.value)}} value='1' type="button" />
                <input onClick={(e)=>{setValue(value+e.target.value)}} value='2' type="button" />
                <input onClick={(e)=>{setValue(value+e.target.value)}} value='3' type="button" />
                <input onClick={(e)=>{setValue(value+e.target.value)}} value='-' type="button" />
                <input onClick={(e)=>{setValue(value+e.target.value)}} value='4' type="button" />
                <input onClick={(e)=>{setValue(value+e.target.value)}} value='5' type="button" />
                <input onClick={(e)=>{setValue(value+e.target.value)}} value='6' type="button" />
                <input onClick={(e)=>{setValue(value+e.target.value)}} value='*' type="button" />
                <input onClick={(e)=>{setValue(value+e.target.value)}} value='7' type="button" />
                <input onClick={(e)=>{setValue(value+e.target.value)}} value='8' type="button" />
                <input onClick={(e)=>{setValue(value+e.target.value)}} value='9' type="button" />
                <input onClick={(e)=>{setValue(value+e.target.value)}} value='/' type="button" />
                <input onClick={(e)=>{setValue(value+e.target.value)}} value='00' type="button" />
                <input onClick={(e)=>{setValue(value+e.target.value)}} value='0' type="button" />
                <input onClick={()=>{setValue(eval(value))}} className="equal" value='=' type="button" />

            </div>
        </div>
    )
}

export default Calculator;