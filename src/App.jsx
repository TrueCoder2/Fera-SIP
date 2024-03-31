import React, { useState } from 'react';

function getValueForYear(x, g, year) {
    let currentValue = x;
    const c = Math.pow(1 + g / 100, year);
    currentValue *= c;
    return currentValue.toFixed(5);
}

function App() {
    const [x, setX] = useState('');
    const [growthRate, setGrowthRate] = useState('');
    const [year, setYear] = useState('');
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const calculatedValue = getValueForYear(parseFloat(x), parseFloat(growthRate), parseInt(year));
        setValue(calculatedValue);
    };

    return (
      <div className="h-screen bg-gray-800 flex justify-center items-center w-full">
        <div className='flex flex-col justify-center items-center bg-gray-600 w-3/5 p-4 space-y-3 rounded-2xl'>
            <h1 className='text-3xl text-white my-4'>FE₹A SIP Calculator</h1>
            <form onSubmit={handleSubmit}>
                <div className='text-2xl text-white my-2 flex justify-between'>
                   SIP Amount :
                    <input className='rounded-xl bg-gray-100 ml-4 text-black p-1 pl-4 text-center border-2 border-gray-500 focus:border-green-500 focus:outline-none' type="number" value={x} onChange={(e) => setX(e.target.value)} />
                </div>
                <br />
                <div className='text-2xl text-white my-2 flex justify-between'>
                    Annual Growth Rate (%):
                    <input className='rounded-xl bg-gray-100 ml-4 text-black p-1 pl-4 text-center border-2 border-gray-500 focus:border-green-500 focus:outline-none' type="number" value={growthRate} onChange={(e) => setGrowthRate(e.target.value)} />
                </div>
                <br />
                <div className='text-2xl text-white my-2 flex justify-between'>
                    Year:
                    <input className='rounded-xl bg-gray-100 ml-4 text-black p-1 pl-4 text-center border-2 border-gray-500 focus:border-green-500 focus:outline-none' type="number" value={year} onChange={(e) => setYear(e.target.value)} />
               </div>
                <br />
                <div className='text-center'>
                <button className='bg-blue-400 px-16 py-2 rounded-xl  my-8 text-white font-semibold text-xl' type="submit">Calculate</button>
                </div>
            </form>
            {value && <p className='text-2xl text-white my-2'>The value of R.Earning for year {year} is  <span className='text-2xl text-white ml-1'> ₹ {value} </span></p>}
        </div>
        </div>
    );
}

export default App;