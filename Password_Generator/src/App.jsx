import { useState , useCallback, useEffect, useRef } from 'react'

function App() {

  // make variables
  const [length, setLength] = useState(8);
  const [numberAllowed , setNumberAllowed] = useState(false);
  const [charAllowed , setCharAllowed] = useState(false);
  const [password , setPassword] = useState("");
  const passREF = useRef(null);

  // main logic 
  const passwordGenerator = useCallback( () => {

    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    // for add numbers
    if(numberAllowed){
      str += "0123456789";
    }
    // for add characters
    if(charAllowed){
      str += "!@#$%^&*(){}[]~`':;<,>.?/|\+_=-";
    }

    // make str of {length}
    for( let i = 1 ; i <= length ; i++ ){
      let Char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(Char);
    }

    // set pass string on UI with set method
    setPassword(pass);

  } , [length , numberAllowed , charAllowed , setPassword ]);

  // If we direct call passwordGenerator(); then it give error , Bcz of so many time re-renderings.

  // calling this function
  // useEffect( () => {passwordGenerator()} , [ length , numberAllowed , charAllowed , passwordGenerator ]);

  // useRef hook
  function passwordRef(){
    passREF.current?.select(); // select everything
    // passREF.current?.setSelectionRange(0,5); // select based on ur length
    window.navigator.clipboard.writeText(password);
  }

  return (
    <>
    <div className=' bg-slate-900 w-screen h-screen flex justify-center items-start flex-col gap-9 sm:pl-20 pl-8 pr-8 sm:pr-20'>

      <div className='flex flex-col gap-2'>
        <span className='font-sans sm:text-5xl text-white text-3xl'>Generate a </span>
        <span className='font-sans sm:text-5xl border-b-4 sm:border-b-4 text-yellow-500 border-yellow-500 text-3xl'>Random Password</span>
      </div>

      <div className='flex flex-row gap-3'>
        <input readOnly placeholder='Password' type="text" name="" id="" className='bg-white border-y-0 border-x-0 text-1xl sm:text-2xl h-12 pl-2 text-start font-sans w-70 sm:w-96 font-medium text-red-700 outline-none' value={password} ref={passREF}/>
        <button id='copyBTN' className='bg-yellow-500 text-black text-2xl font-mono h-12 hover:bg-yellow-400 w-auto pl-3 pr-3 duration-200' onClick={() => {passwordRef()}} > Copy </button>
      </div>

      <div className='flex flex-col gap-3'>

        <div className='flex flex-row gap-4'>
          <input type="range" name="" id="" className=' w-32 sm:w-48 h-8 cursor-pointer' min={6} max={20} value={length} onChange={(e) => {setLength(e.target.value)}}/>
          <span className='font-sans text-xl sm:text-2xl text-white'>Length : ({length})</span>
        </div>

        <div className='flex flex-row gap-3'>
          <input type="checkbox" name="" id='' defaultChecked={numberAllowed} onChange={() => {
            setNumberAllowed((prev) => !prev);
          }}/>
          <span className='font-sans text-xl sm:text-2xl text-white'>Numbers</span>
        </div>

        <div className='flex flex-row gap-3'>
          <input type="checkbox" name="" id="" defaultChecked={charAllowed} onChange={() => {
            setCharAllowed((prev) => !prev)
          }}/>
          <span className='font-sans text-xl sm:text-2xl text-white'>Characters</span>
        </div>

      </div>

      <button className='bg-yellow-500 text-black text-2xl font-mono h-12 hover:bg-yellow-400 duration-200 w-40' onClick={()=>{passwordGenerator()}}> Generate</button>

    </div>
    </>
  )
}

export default App