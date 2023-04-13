import logo from './logo.svg';
import './App.css';
import Button from './components/button';
import { useState, useEffect } from 'react';

function App() {
  const [displayNumber1, setDisplayNumber1] = useState('')
  const [displayNumber2, setDisplayNumber2] = useState('')
  const [activeOperation, setActiveOperation] = useState('')
  const [result, setResult] = useState('')
  const symbols = [
    [
      {
        symbol: 'AC',
        operation: () => {
          console.log("AC")
          setDisplayNumber1('')
          setDisplayNumber2('')
          setActiveOperation('')
          setResult('')
        }
      },
      {
        symbol: '+/-',
        operation: () => {
          console.log("+/-")
          if(displayNumber1 && activeOperation === ''){
            setActiveOperation('+/-')
          } else {
              console.log("+/-")
          }
        }
      },
      {
        symbol: '%',
        operation: () => {
          console.log("%")
          if(displayNumber1 && activeOperation === ''){
            setActiveOperation('%')
          } else {
              console.log("%")
          }
        }
      },
      {
        symbol: '÷',
        operation: () => {
          console.log("÷")
          if(displayNumber1 && activeOperation === ''){
            setActiveOperation('÷')
          } else {
              console.log("÷")
          }
        }
      },
    ],

    [
      {
        symbol: '7',
        operation: () => {
          console.log("7")
          if(activeOperation){
            setDisplayNumber2(displayNumber2.concat('7'))
          } else {
            setDisplayNumber1(displayNumber1.concat('7'))
          }
        }
      },
      {
        symbol: '8',
        operation: () => {
          console.log("8")
          if(activeOperation){
            setDisplayNumber2(displayNumber2.concat('8'))
          } else {
            setDisplayNumber1(displayNumber1.concat('8'))
          }
        }
      },
      {
        symbol: '9',
        operation: () => {
          console.log("9")
          if(activeOperation){
            setDisplayNumber2(displayNumber2.concat('9'))
          } else {
            setDisplayNumber1(displayNumber1.concat('9'))
          }
        }
      },
      {
        symbol: 'x',
        operation: () => {
          console.log("x")
          if(displayNumber1 && activeOperation === ''){
            setActiveOperation('x')
          } else {
              console.log("x")
          }
        }
      },
    ],

    [
      {
        symbol: '4',
        operation: () => {
          console.log("4")
          if(activeOperation){
            setDisplayNumber2(displayNumber2.concat('4'))
          } else {
            setDisplayNumber1(displayNumber1.concat('4'))
          }
        }
      },
      {
        symbol: '5',
        operation: () => {
          console.log("5")
          if(activeOperation){
            setDisplayNumber2(displayNumber2.concat('5'))
          } else {
            setDisplayNumber1(displayNumber1.concat('5'))
          }
        }
      },
      {
        symbol: '6',
        operation: () => {
          console.log("6")
          if(activeOperation){
            setDisplayNumber2(displayNumber2.concat('6'))
          } else {
            setDisplayNumber1(displayNumber1.concat('6'))
          }
        }
      },
      {
        symbol: '-',
        operation: () => {
          console.log("-")
          if(displayNumber1 && activeOperation === ''){
            setActiveOperation('-')
          } else {
              console.log("-")
          }
        }
      },
    ],

    [
      {
        symbol: '1',
        operation: () => {
          console.log("1")
          if(activeOperation){
            setDisplayNumber2(displayNumber2.concat('1'))
          } else {
            setDisplayNumber1(displayNumber1.concat('1'))
          }
        }
      },
      {
        symbol: '2',
        operation: () => {
          console.log("2")
          if(activeOperation){
            setDisplayNumber2(displayNumber2.concat('2'))
          } else {
            setDisplayNumber1(displayNumber1.concat('2'))
          }
        }
      },
      {
        symbol: '3',
        operation: () => {
          console.log("3")
          if(activeOperation){
            setDisplayNumber2(displayNumber2.concat('3'))
          } else {
            setDisplayNumber1(displayNumber1.concat('3'))
          }
        }
      },
      {
        symbol: '+',
        operation: () => {
          console.log("+")
          if(displayNumber1 && activeOperation === ''){
            setActiveOperation('+')
          } else {
              console.log("+")
          }
        }
      },
    ],

    [
      {
        symbol: '0',
        operation: () => {
          console.log("0")
          if(activeOperation){
            setDisplayNumber2(displayNumber2.concat('0'))
          } else {
            setDisplayNumber1(displayNumber1.concat('0'))
          }
        }
      },
      {
        symbol: '00',
        operation: () => {
          console.log("9")
          if(activeOperation){
            setDisplayNumber2(displayNumber2.concat('00'))
          } else {
            setDisplayNumber1(displayNumber1.concat('00'))
          }
        }
      },
      {
        symbol: '.',
        operation: () => {
          console.log(".")
          if(activeOperation){
            setDisplayNumber2(displayNumber2.concat('.'))
          } else {
            setDisplayNumber1(displayNumber1.concat('.'))
          }
        }
      },
      {
        symbol: '=',
        operation: () => {
          switch (activeOperation) {
            case "+":
              setDisplayNumber1((parseFloat(displayNumber1) + parseFloat(displayNumber2)).toString())
              setDisplayNumber2('')
              setActiveOperation('')
              //setDisplayNumber1(result.toString())
              break;
            case "-":
              setDisplayNumber1((parseFloat(displayNumber1) - parseFloat(displayNumber2)).toString())
              setDisplayNumber2('')
              setActiveOperation('')
              //setDisplayNumber1(result.toString())
              break;
            case "x":
              setDisplayNumber1((parseFloat(displayNumber1) * parseFloat(displayNumber2)).toString())
              setDisplayNumber2('')
              setActiveOperation('')
              //setDisplayNumber1(result.toString())
              break;
            case "÷":
              setDisplayNumber1((parseFloat(displayNumber1) / parseFloat(displayNumber2)).toString())
              setDisplayNumber2('')
              setActiveOperation('')
              //setDisplayNumber1(result.toString())
              break;
            case "%":
              setDisplayNumber1((parseFloat(displayNumber1) % parseFloat(displayNumber2)).toString())
              setDisplayNumber2('')
              setActiveOperation('')
              //setDisplayNumber1(result.toString())
              break;
            default:
              console.log("Invalid operator");
              break;
          }          
        }
      },
    ],
  ]

  return (
    <div className="App">
      <div className="container">
      
        <div className='screen'>
          {displayNumber1 === '' 
            ? 0
            : activeOperation 
            ? displayNumber1 + ' ' + activeOperation + ' ' + displayNumber2 
            : displayNumber1}
        </div>

        <div className='button-container'>
          <div className='buttons'>
            {symbols.map((symbols)=>
                <div className='buttons-row'>
                {symbols.map((symbols)=><Button
                  key={symbols.symbol}
                  symbol={symbols.symbol}
                  operation={symbols.operation}
                />)}
              </div>
            )}
            
            
          </div>
        </div>

      </div>
        
    </div>
  );
}

export default App;
