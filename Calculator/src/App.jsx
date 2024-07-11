import React from 'react'
import './App.css';
import Header from './Header/Header';
import Keypad from './Keypad/Keypad';
import { useState , useEffect} from 'react';

export default function App() {

  const[expression,setExpression] = useState("");
  const[result,setResult] = useState("0");
  const[history,setHistory] = useState(JSON.parse(localStorage.getItem("calc-history")) || []);

  const keys = [
    {keyCode:"clear",value:'C'},
    {keyCode:"remove",value:'D'},  
    {keyCode:"sign",value: '+/-'},
    {keyCode:"percent",value:'%'},
    {keyCode:"digit",value:'7'},
    {keyCode:"digit",value:'8'},
    {keyCode:"digit",value:'9'},
    {keyCode:"operator",value:'*'},
    {keyCode:"digit",value:'4'},
    {keyCode:"digit",value:'5'},
    {keyCode:"digit",value:'6'},
    {keyCode:"operator",value:'-'},
    {keyCode:"digit",value:'1'},
    {keyCode:"digit",value:'2'},
    {keyCode:"digit",value:'3'},
    {keyCode:"operator",value:'+'},
    {keyCode:"digit",value:'0'},
    {keyCode:"dot",value:'.'},
    {keyCode:"result",value:'='},
    {keyCode:"operator",value:'/'}
  ];

  const handleKeys =(e) => {

    // C Btn
    if( e.target.id === "clear" ){
      setExpression("");
      setResult("0");
    }
    
    // Percent Btn
    if( e.target.id === 'percent' ){
      const lastop = expression.slice(-1);
      if( !expression || lastop === '+' || lastop === '-' || lastop === '*' || lastop === '/' || lastop === '.' ){
        return;
      }
      else{
        setExpression(expression+"/100");
      }
    }

    // Sign Btn
    if( e.target.id === 'sign' ){
      const last2 = expression.slice(-2);
      if( expression === "" ){
        return;
      }
      else{
        setExpression(expression+"*-1");
      }
    }

    // Manage Operator
    if( e.target.id === "operator" ){
      if( expression.length === 0 ){
        return;
      }
    }   

    const lastChar = expression.slice(-1);
    if( e.target.id === "operator" ){
      if( lastChar === '+' || lastChar === '-' || lastChar === '*' || lastChar === '/' || lastChar === '.' ){
        return;
      }
    }

    // Manage Dot
    if( e.target.value === '.' ){
      const isDot = expression.slice(-1);
      if( expression.length === 0 ){
        return;
      }
      else if( isDot === '.' || isDot === '+' || isDot === '-' || isDot === '*' || isDot === '/'){
        return;
      }
      else{
        setExpression(expression+e.target.value);
      }
    }

    // Delete
    if( e.target.id === "remove" ){
      if( expression.length === 0 ){
        setResult("0");
        return;
      }
      else{
        // RealTime Calculation
        makeAns(expression.slice(0,-1));
        setExpression(expression.slice(0, -1));
      }
    }

    // Manage Digits
    if( e.target.id === "digit" || e.target.id === "operator" ){
      if( expression.length === 0 && e.target.value === '0' ){
        return;
      }
      else{
        //RealTime Calculation
        makeAns(expression+e.target.value);
        setExpression(expression+e.target.value);
      }
    }

    // Result Button
    if( e.target.id === "result"){

      const tempHistory = [...history];
      if( tempHistory.length > 20 ){
        tempHistory = tempHistory.splice(0,1);
      }
      tempHistory.push(expression);
      setHistory(tempHistory);

      makeAns( expression );

    }

  };

  const makeAns = (expression) => {

    // isEmpty
    if( expression === "" ){
      return;
    }

    // No operator at end of the expression
    const lastCh = expression.slice(-1);
    if( lastCh === '+' || lastCh === '*' || lastCh === '/' || lastCh === '.' || lastCh === '-' ){
      setExpression(expression.slice(0,-1));
      return;
    }

    // Final Ans
    const finalAns = eval(expression).toFixed(2)+"";
    setResult(finalAns);

  }

  // LocalStorage : History Store
  useEffect( () => {
    localStorage.setItem("calc-history" , JSON.stringify(history));
  },[history]);

  return (  
    <>
    <div className='mainContainer' data-theme="dark">
      <div className='titleBox'>
        <p className='title'>Calculator</p>
      </div>
        <div className='calContainer'>
            <Header expression={expression} result={result} history={history}/>
            <Keypad keys={keys} handleKeys={handleKeys}/>
        </div>
    </div>
    </>
  )
}