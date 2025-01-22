import Food from './Food';

function Lists() {
  const list =
    'flex w-fit py-1 px-3 rounded-lg bg-gray-500 bg-opacity-60 gap-2 justify-center items-center text-lg';

  return (
    <div className="lists px-8 h-screen flex flex-col ">
      <h1 className="text-2xl my-4 text-right">دسته بندی ها</h1>
      <ul className="first flex gap-2 justify-center items-center ">
        <li className={list}>
          <img src="/images/1.png" alt="" />
          <p>آش</p>
        </li>
        <li className={list}>
          <img src="/images/2.png" alt="" />
          <p>کباب</p>
        </li>
        <li className={list}>
          <img src="/images/3.png" alt="" />
          <p>قهوه</p>
        </li>
        <li className={list}>
          <img src="/images/1.png" alt="" />
          <p>پیتزا</p>
        </li>
      </ul>
      <div className="overflow-hidden">
        <Food />
      </div>
    </div>
  );
}

export default Lists;
