import './App.css'

export default function App() {
  return (
    <div className='bg-slate-300 h-full w-full flex flex-col place-items-center'>
      <div className='flex flex-row h-1/4 w-full justify-evenly'>
        <div className='bg-sky-200 rounded-4xl h-2/5 w-1/5 m-10 shadow-xl shadow-sky-900 mx-auto place-content-center
         transition-transform hover:scale-110 hover:bg-amber-300 duration-700'>
          <h1 className='text-2xl text-center'>Market</h1>
        </div>
        <div className='bg-sky-200 rounded-4xl h-2/5 w-1/5 m-10 shadow-xl shadow-sky-900 mx-auto place-content-center
         transition-transform hover:scale-110 hover:bg-amber-300 duration-700'>
          <h1 className='text-2xl text-center'>Crafting</h1>
        </div>
        <div className='bg-sky-200 rounded-4xl h-2/5 w-1/5 m-10 shadow-xl shadow-sky-900 mx-auto place-content-center
         transition-transform hover:scale-110 hover:bg-amber-300 duration-700'>
          <h1 className='text-2xl text-center'>Battle</h1>
        </div>
      </div>
    </div>
  )
}