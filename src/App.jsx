import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './App.css';

function App() {
  return (
    <div className='relative h-screen w-full flex justify-center  overflow-hidden'>
      <div className='background'></div>
      <div className='relative text-white text-center'>
        <div className='h-[470px] w-[490px] bg-red-900 rounded-b-[50%] shadow-2xl shadow-black flex justify-center items-center flex-col  '>
          <h1 className='text-4xl mt-20'>ARG HOTEL</h1>
          <div className='container relative w-full h-screen flex justify-center items-center overflow-hidden'>
            <div className='smoke'>
              <img src='.' alt='' />
            </div>
            <div className='image-box'>
              <img src='./images/1.png' alt='Image 1' />
            </div>
            <div className='image-box'>
              <img src='./images/2.png' alt='Image 2' />
            </div>
            <div className='image-box'>
              <img src='./images/3.png' alt='Image 3' />
            </div>
          </div>
        </div>
        <div className=' mt-10 px-36 flex justify-center items-center flex-col animate-fadeIn'>
          <h1 className='text-3xl font-semibold text-orange-500'>خوش آمدید</h1>
          <p className='my-2'>از اینکه هوتل ارگ انتخاب نمودید از شما سپاسگذاریم</p>
          <span className='mt-3 pr-5  border h-11 text-white text-3xl rounded-full flex justify-center items-center '>
            <i className='material-icons text-5xl left-right'>chevron_left</i>
            منو
          </span>
        </div>
        <footer className='mt-8 flex flex-col justify-center items-center'>
          <span className='flex gap-1 '>
            ARG Hotel
            <i className='fa-solid fa-chevron-left mx-2'></i>
            <i className='fa-brands fa-instagram'></i>
            <i className='fa-brands fa-facebook'></i>
            <i className='fa-brands fa-telegram'></i>
            {/* <i className='fa-brands fa-whatsapp'></i> */}
            <FontAwesomeIcon icon='fa-brands fa-whatsapp' />
          </span>
          <p className=' tracking-widest text-sm'>www.arghotel.af</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
