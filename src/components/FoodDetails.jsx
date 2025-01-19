function FoodDetails() {
  return (
    <div className=" h-screen flex flex-col justify-center items-center ">
      <div className="  h-[450px] my-8 flex items-center">
        <img className="w-[350px]" src="/images/mix-pliter.png" alt="" />
      </div>
      <div className=" bg-gray-400 bg-opacity-40 rounded-t-[20%] w-full h-full flex flex-col justify-center items-center gap-8 ">
        <div className=" border p-2 rounded-full text-2xl">
          <h1>میکس پلیتر مخصوص ارگ</h1>
        </div>
        <div className=" flex justify-center items-center gap-8 text-lg">
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
        <ul className="more-foods flex justify-center items-center gap-2">
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
