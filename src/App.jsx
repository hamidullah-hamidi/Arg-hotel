import './App.css';

function App() {
  return (
    <div className='relative h-screen w-full'>
      <div className='background'></div>
      <div className='relative text-white'>
        <div className='h-[470px] w-[] bg-red-900 rounded-b-[50%] shadow-2xl shadow-black flex justify-center items-center flex-col gap-10 '>
          <h1 className='text-4xl '>ARG HOTEL</h1>
          <div className='relative w-full h-screen flex justify-center items-center overflow-hidden'>
            <div className='slide fadeIn delay-700'>
              <img
                src='./images/3.png'
                alt='Hotel'
                className='object-cover w-full h-full'
              />
            </div>
            <div className='slide fadeIn delay-[5s]'>
              <img
                src='./images/1.png'
                alt='Hotel'
                className='object-cover w-full h-full'
              />
            </div>
            <div className='slide fadeIn delay-[7s]'>
              <img
                src='./images/2.png'
                alt='Hotel'
                className='object-cover w-full h-full'
              />
            </div>
          </div>
        </div>
        <div>
          <h1 className='text-2xl'>خوش آمیدید</h1>
          <p className='text-lg'>از اینکه هوتل ارگ انتخاب نمودید از شما سپاسگذاریم</p>
          <button className='mt-4 py-2 px-4 bg-blue-500 text-white rounded'>منو</button>
        </div>
        <footer className='mt-6'>
          <h1 className='text-xl'>ARG HOTEL (آیکن ها)</h1>
          <p className='text-lg'>www.arghotel.af</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
