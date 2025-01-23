import { useState } from 'react';
import Food from './Food';

function Lists() {
  const [selecetedCatagory, setSelectedCatagory] = useState('pizza');

  function handleClick(catagory) {
    setSelectedCatagory(catagory);
    console.log('clicked');
  }

  const list =
    'flex w-fit py-1 px-3 rounded-lg  bg-opacity-60 gap-2 justify-center items-center text-lg cursor-pointer active:scale-75 transition-all duration-500 ';

  return (
    <div className="lists px-8 h-screen flex flex-col slide-down ">
      <h1 className="text-2xl my-4 text-right">دسته بندی ها</h1>
      <ul className="first flex gap-2 justify-center items-center  ">
        <li
          className={`${list} ${
            selecetedCatagory === 'coffee' ? 'bg-red-900' : 'bg-gray-500'
          }`}
          onClick={() => handleClick('coffee')}
        >
          <img src="/images/1.png" alt="" />
          <p>قهوه</p>
        </li>
        <li
          className={`${list} ${
            selecetedCatagory === 'spaghetii' ? 'bg-red-900' : 'bg-gray-500'
          }`}
          onClick={() => handleClick('spaghetii')}
        >
          <img src="/images/2.png" alt="" />
          <p>ماکارونی</p>
        </li>
        <li
          className={`${list} ${
            selecetedCatagory === 'steak' ? 'bg-red-900' : 'bg-gray-500'
          }`}
          onClick={() => handleClick('steak')}
        >
          <img src="/images/3.png" alt="" />
          <p>کباب</p>
        </li>
        <li
          className={`${list} ${
            selecetedCatagory === 'pizza' ? 'bg-red-900' : 'bg-gray-500'
          }`}
          onClick={() => handleClick('pizza')}
        >
          <img src="/images/1.png" alt="" />
          <p>پیتزا</p>
        </li>
      </ul>
      <div className="overflow-hidden">
        <Food selecetedCatagory={selecetedCatagory} />
      </div>
    </div>
  );
}

export default Lists;
