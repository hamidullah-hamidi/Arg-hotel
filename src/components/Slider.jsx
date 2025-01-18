import Slide from './Slide';

function Slider() {
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

      <Slide />
    </div>
  );
}

export default Slider;
