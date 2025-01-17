import Lists from "./Lists";
import Slider from "./Slider";
import "../App.css";

function Menu() {
  return (
    <div className=" h-screen overflow-hidden">
      <Slider />
      <Lists />
    </div>
  );
}

export default Menu;
