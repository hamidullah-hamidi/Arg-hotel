import Lists from "./Lists";
import Slider from "./Slider";
import "../App.css";

function Menu() {
  return (
    <div className="animate-fadeIn h-screen md:w-[80%] lg:w-[70%]  mx-auto overflow-hidden">
      <Slider />
      <Lists />
    </div>
  );
}

export default Menu;
