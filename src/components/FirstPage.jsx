import '../App.css';
// import Slider from './components/Slider';

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
import { Link } from 'react-router-dom';

library.add(
  fab,
  fas,
  faWhatsappSquare,
  faInstagram,
  faFacebook,
  faTelegram,
  faChevronLeft,
);

function FirstPage() {
  return (
    <div className="relative h-screen w-full flex justify-center ">
      <div className="relative text-center md:w-full flex flex-col justify-between">
        <div className="h-[450px] w-[460px] md:w-full bg-red-900 rounded-b-[50%] shadow-2xl shadow-black flex justify-center items-center flex-col mx-auto  ">
          <img className="arg-logo w-[100px] select-none" src="images/logo.png" alt="" />
          <div className="container relative w-full h-screen flex justify-center items-center overflow-hidden">
            <div className="smoke">
              <img src="." alt="" />
            </div>
            <div className="image-box">
              <img src="./images/1.png" alt="Image 1" />
            </div>
            <div className="image-box">
              <img src="./images/2.png" alt="Image 2" />
            </div>
            <div className="image-box">
              <img src="./images/3.png" alt="Image 3" />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-evenly items-center h-full w-full">
          <div className=" mt-10 px-36 flex justify-center items-center flex-col animate-fadeIn">
            <h1 className="text-3xl font-semibold text-orange-500">
              خوش آمدید
            </h1>
            <p className="my-2">
              از اینکه هوتل ارگ انتخاب نمودید از شما سپاسگذاریم
            </p>
            <Link to="/menu">
              <span className="mt-3 pr-5  border h-11  text-3xl rounded-full flex justify-center items-center cursor-pointer hover:drop-shadow-2xl">
                <i className="material-icons text-5xl animate-left-right">
                  chevron_left
                </i>
                منو
              </span>
            </Link>
          </div>
          <footer className="mt-8 flex flex-col justify-center items-center">
            <span className="flex gap-1 items-center">
              <p className="pt-1">ARG Hotel</p>
              <FontAwesomeIcon
                icon={['fas', 'chevron-left']}
                className="mx-2"
              />
              <a href="https://www.instagram.com/arg_hotel_af?igsh=MW40eGk4c2F2Mm0wcA==">
                <FontAwesomeIcon icon={['fab', 'instagram']} />
              </a>
              <a href="">
                <FontAwesomeIcon
                  icon={['fab', 'facebook']}
                  href="https://www.facebook.com/ArgHotel.af/"
                />
              </a>
              <a href="">
                <FontAwesomeIcon
                  icon={['fab', 'telegram']}
                  href="https://t.me/Group_Arg_Hotel"
                />
              </a>
              <FontAwesomeIcon icon={['fab', 'whatsapp']} />
            </span>
            <p className=" tracking-widest text-sm">www.arghotel.af</p>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default FirstPage;
