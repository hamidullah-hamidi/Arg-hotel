function Lists() {
  return (
    <div className='lists px-8 w-full'>
      <h1 className="text-2xl my-4">دسته بندی ها</h1>
      <ul className='flex gap-2'>
        <li className='flex w-fit py-1 px-3 rounded-lg bg-gray-500 gap-2 justify-center items-center text-lg'>
          <img src='/images/1.png' alt='' />
          <p>پیتزا</p>
        </li>
        <li className='flex w-fit py-1 px-2 rounded-lg bg-gray-500 gap-2 justify-center items-center'>
          <img src='/images/2.png' alt='' />
          <p>کباب</p>
        </li>
        <li className='flex w-fit py-1 px-2 rounded-lg bg-gray-500 gap-2 justify-center items-center'>
          <img src='/images/3.png' alt='' />
          <p>قهوه</p>
        </li>
        <li className='flex w-fit py-1 px-2 rounded-lg bg-gray-500 gap-2 justify-center items-center'>
          <img src='/images/1.png' alt='' />
          <p>ماکارونی</p>
        </li>
      </ul>
    </div>
  );
}

export default Lists;
