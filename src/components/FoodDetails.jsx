import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';

function FoodDetails() {
  const navigate = useNavigate();

  return (
    <div className="animate-fadeIn h-screen flex flex-col justify-center items-center ">
      <div className="  h-[480px] my-8 flex items-center">
        <FontAwesomeIcon
          icon={['fas', 'chevron-left']}
          className=" absolute top-5 left-5  text-2xl p-4 "
          onClick={() => navigate(-1)}
        />
        <img className="w-[270px] mt-4" src="/images/2.png" alt="" />
      </div>
      <div className=" bg-gray-300 bg-opacity-40 rounded-t-[20%] w-full h-full flex flex-col justify-center items-center gap-8 ">
        <div className=" border py-2 px-4 rounded-full text-2xl">
          <h1>مرغ بریان مخصوص ارگ</h1>
        </div>
        <div className=" flex justify-center items-center gap-10 text-lg">
          <ul className=" flex flex-col justify-center items-center">
            <li>🕘</li>
            <li>30 دقیقه</li>
            <li>پخت و پز</li>
          </ul>
          <ul className=" flex flex-col justify-center items-center">
            <li>⭐</li>
            <li>رتبه بندی</li>
            <li>کیفیت</li>
          </ul>
          <ul className=" flex flex-col justify-center items-center">
            <li>💰</li>
            <li>600 افغانی</li>
            <li>مناسب</li>
          </ul>
        </div>
        <ul className="more-foods flex justify-center items-center gap-3">
          <li className=" text-center bg-gray-400 rounded-2xl py-1">
            <img src="/images/pipcie.png" alt="" />
            <p className="text-gray-700 ">نوشابه</p>
          </li>
          <li className=" text-center bg-gray-400 rounded-2xl py-2">
            <img src="/images/salad.png" alt="" />
            <p className="text-gray-700 ">سالاد</p>
          </li>
          <li className=" text-center bg-gray-400 rounded-2xl py-2">
            <img src="/images/rice.png" alt="" />
            <p className="text-gray-700 ">برنج</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default FoodDetails;
