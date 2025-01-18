import { useEffect, useState } from "react";
import { slides } from "../data/slide";

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // تغییر اسلاید به جلو
  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    } else setCurrentSlide(0);
  };

  // تغییر اسلاید به عقب
  const prevSlide = () => {
    if (currentSlide) {
      setCurrentSlide((prev) => (prev - 1) % slides.length);
    }
  };

  useEffect(() => {
    function changeSlide() {
      setInterval(nextSlide, 1000);
    }
    return () => clearInterval(changeSlide);
  }, []);

  const currentItem = slides[currentSlide];

  return (
    <div className="slider  w-full px-4 py-4 md:pt-0">
      <header className="flex justify-between m-4  items-center">
        <div className=" w-[90px] -mt-3">
          <img src="/images/logo.png" alt="" />
        </div>
        <div>
          <h1 className=" text-2xl">لذت های طعم دار</h1>
          <p className=" text-stone-200 tracking-wider">
            انتخاب کنید و امتحان کنید
          </p>
        </div>
      </header>

      {/* *******-slider-***** */}

      <div className="relative bg-gray-500 rounded-2xl bg-opacity-60 h-[140px]  flex justify-between md:justify-around items-center px-4">
        <div className=" h-full py-4 pl-4">
          <p className=" mb-6 text-gray-300 text-lg ">{currentItem.text}</p>
          <h1 className=" text-2xl font-extrabold ">{currentItem.title}</h1>
          <div className=" flex gap-5 text-sm">
            <p className="text-gray-200">{currentItem.text_l}</p>
            <p className="text-gray-200">{currentItem.text_r}</p>
          </div>
        </div>
        <div className=" pr-4">
          <img
            key={currentItem.id}
            src={currentItem.img}
            alt={"loading..."}
            className="w-[120px] object-cover"
          />
        </div>

        {/* bouttons */}
        <button
          onClick={prevSlide}
          className="absolute left-0 bg-stone-700 text-white p-2 rounded-full"
        >
          &lt;
        </button>
        <button
          onClick={nextSlide}
          className="absolute  right-0 bg-stone-700 text-white p-2 rounded-full"
        >
          &gt;
        </button>
      </div>
    </div>
  );
}

export default Slider;
