import React, { useState } from 'react'
import Input from './Components/Input'
import useCurrencyInfo from './Hooks/UseCurrencyInfo'

export default function App() {

  // Hooks
  const [amount,setAmount] = useState(0);
  const [from,setFrom] = useState("usd");
  const [to,setTo] = useState("inr");
  const [convertedAmount,setConvertedAmount] = useState(0);

  // Custom Hook Called
  const currencyInfo = useCurrencyInfo(from);

  // To Get All Keys Of Object
  const options = Object.keys(currencyInfo);

  // Swap Button
  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  }

  // Convert Button
  const handleConvert = () => {
    setConvertedAmount(amount*currencyInfo[to]);
  }

  return (
    <>
    <div className="w-full h-screen flex flex-wrap justify-center items-center bg-no-repeat bg-cover"
        style={{
            backgroundImage: `url('https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
        }}
    >
        <div className="md:w-[500px] shadow-xl sm:w-[400px] w-[300px]">

            <div className="md:w-[500px] sm:w-[400px] w-[300px] border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">

                <form onSubmit={(e) => { e.preventDefault(); }}>

                    <div className="w-full mb-1">
                        <Input 
                        label="From" 
                        amount={amount}
                        currencyOptions={options}
                        onAmountChange={(amount) => {setAmount(amount)}}
                        onCurrencyChange={(currency) => {setFrom(currency)}}
                        selectCurrency={from}
                        />
                        
                    </div>

                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5" onClick={swap}>
                            swap
                        </button>
                    </div>

                    <div className="w-full mt-1 mb-4">
                        <Input 
                        label="To"
                        amount={convertedAmount}
                        currencyOptions={options}
                        onCurrencyChange={(currency) => {setTo(currency)}}
                        selectCurrency={to}
                        amountDisable
                        />
                    </div>

                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg" onClick={handleConvert}>
                      Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>

                </form>

            </div>

        </div>

    </div>
    </>
  )
}