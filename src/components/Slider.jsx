import "../App.css";

function Slider() {
  return (
    <div className="slider h-[40%] w-full px-4 pt-4 md:pt-0">
      <header className="flex justify-between m-4 items-center">
        <div>
          <h1 className=" text-2xl">لذت های طعم دار</h1>
          <p className=" text-stone-500 tracking-wider">
            انتخاب کنید و امتحان کنید
          </p>
        </div>
        <div className=" w-[90px]">
          <img src="/images/logo.png" alt="" />
        </div>
      </header>
      <main className="bg-gray-500 rounded-2xl bg-opacity-60 h-[140px] flex justify-between md:justify-around items-center px-4">
        <div className=" h-full py-4">
          <p className=" mb-6 text-gray-300 text-lg ">پیشنهاد ارگ</p>
          <h1 className=" text-2xl font-extrabold ">میکس پلیتر</h1>
          <div className=" flex gap-5 text-sm">
            <p className="text-gray-200">مخصوص</p>
            <p className="text-gray-200">زمان: 30 دقیقه</p>
          </div>
        </div>
        <div>
          <img src="/images/1.png" alt="" />
        </div>
      </main>
    </div>
  );
}

export default Slider;
