import Slider from 'react-slick';

function Slide() {
  let settings = {
    dots: true,
    infinite: true,
    // autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <Slider {...settings}>
      <div className="Slider relative bg-gray-500 rounded-2xl bg-opacity-60  flex justify-between md:justify-around items-center px-4  ">
        <div className=" h-full py-4 pl-4">
          <p className=" mb-6 text-gray-300 text-lg ">پیشنهاد ارگ</p>
          <h1 className=" text-2xl font-extrabold ">پیتزا</h1>
          <div className=" flex gap-5 text-sm">
            <p className="text-gray-200">مخصوص</p>
            <p className="text-gray-200">زمان: 30 دقیقه</p>
          </div>
        </div>
        <div className=" absolute top-0 right-0 w-[150px] pr-4">
          <img src="/images/3.png" alt={'loading...'} />
        </div>
      </div>
      <div className="relative bg-gray-500 rounded-2xl bg-opacity-60 h-[140px]  flex justify-between md:justify-around items-center px-4">
        <div className=" h-full py-4 pl-4">
          <p className=" mb-6 text-gray-200 text-lg font-bold ">پیشنهاد ارگ</p>
          <h1 className=" text-2xl font-extrabold ">پلیتر</h1>
          <div className=" flex gap-5 text-sm">
            <p className="text-gray-200">مخصوص</p>
            <p className="text-gray-200">زمان: 45 دقیقه</p>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-[150px] pr-4">
          <img src="/images/1.png" alt={'loading...'} />
        </div>
      </div>
      <div className="relative bg-gray-500 rounded-2xl bg-opacity-60 h-[140px]  flex justify-between md:justify-around items-center px-4">
        <div className=" h-full py-4 pl-4">
          <p className=" mb-6 text-gray-300 text-lg ">پیشنهاد ارگ</p>
          <h1 className=" text-2xl font-extrabold ">کباب</h1>
          <div className=" flex gap-5 text-sm">
            <p className="text-gray-200">مخصوص</p>
            <p className="text-gray-200">زمان: 50 دقیقه</p>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-[150px] pr-4">
          <img src="/images/2.png" alt={'loading...'} />
        </div>
      </div>
    </Slider>
  );
}

export default Slide;
