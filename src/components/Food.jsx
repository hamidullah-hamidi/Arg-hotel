const food =
  " w-40 h-44 mt-6  bg-gray-500 bg-opacity-40 flex flex-col justify-center items-center rounded-3xl ";

function Food() {
  return (
    <li className={food}>
      <img src="/images/1.png" alt="" />
      <h1 className=" text-2xl my-2">پیتزا</h1>
      <p className=" text-yellow-500">&lt; &lt; &lt; &gt; &gt; &gt;</p>
      <p className="text-sm">زمان: 30 دقیقه</p>
    </li>
  );
}

export default Food;
