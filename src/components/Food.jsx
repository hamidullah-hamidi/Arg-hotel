import { Link } from 'react-router-dom';
import { foods } from '../data/foods';

const foodStyle =
  'w-36 h-44 mt-8 bg-gray-500 bg-opacity-40 flex flex-col justify-center items-center rounded-3xl cursor-pointer hover:shadow-2xl hover:bg-opacity-50';

function Food() {
  return (
    <ul className="second mt-3 py-6 w-full h-full overflow-y-auto flex flex-wrap justify-center items-center gap-8 md:gap-8">
      {foods.map((food) => (
        <Link to="/menu/food" key={food.id}>
          <li className={foodStyle} key={food.id}>
            <img src={food.img} alt="" />
            <h1 className=" text-2xl my-2">{food.title}</h1>
            <p className=" text-yellow-500">{food.star}</p>
            <p className="text-sm">{food.time}</p>
          </li>
        </Link>
      ))}
    </ul>
  );
}

export default Food;
