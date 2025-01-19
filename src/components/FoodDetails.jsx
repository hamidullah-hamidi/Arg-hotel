function FoodDetails() {
  return (
    <div className=" h-screen flex flex-col justify-center items-center">
      <div className=" w-[250px] my-8">
        <img src="/images/1.png" alt="" />
      </div>
      <div className=" bg-gray-400 bg-opacity-40 rounded-t-[20%] w-full flex flex-col justify-center items-center gap-8 py-8">
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
        <ul className='more-foods flex justify-center items-center gap-2'>
          <li>
            <img src="images/1.png" alt="" />
            <p>آش</p>
          </li>
          <li>
            <img src="images/2.png" alt="" />
            <p>کباب</p>
          </li>
          <li>
            <img src="images/3.png" alt="" />
            <p>پیتزا</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default FoodDetails;
