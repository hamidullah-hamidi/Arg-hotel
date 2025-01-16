import './App.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  fab,
  faFacebook,
  faInstagram,
  faTelegram,
  faWhatsappSquare,
} from '@fortawesome/free-brands-svg-icons';

import { faChevronLeft, fas } from '@fortawesome/free-solid-svg-icons';

library.add(
  fab,
  fas,
  faWhatsappSquare,
  faInstagram,
  faFacebook,
  faTelegram,
  faChevronLeft
);

function App() {
  return (
    <div className='relative h-screen w-full flex justify-center  overflow-hidden'>
      <div className='background'></div>
      <div className='relative text-white text-center md:w-full'>
        <div className='h-[450px] w-[460px] md:w-full bg-red-900 rounded-b-[50%] shadow-2xl shadow-black flex justify-center items-center flex-col  '>
          <h1 className='text-4xl mt-20'>ARG HOTEL</h1>
          <img src="images/arg-logo.jpg" alt=""/>
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
            <FontAwesomeIcon icon={['fas', 'chevron-left']} className='mx-2' />
            <FontAwesomeIcon icon={['fab', 'instagram']} />
            <FontAwesomeIcon icon={['fab', 'facebook']} />
            <FontAwesomeIcon icon={['fab', 'telegram']} />
            <FontAwesomeIcon icon={['fab', 'whatsapp']} />
          </span>
          <p className=' tracking-widest text-sm'>www.arghotel.af</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
