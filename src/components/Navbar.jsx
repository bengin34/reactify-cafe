import "../App";
import Locations from "./Locations";
import { locations } from "../mock/data";
const Navbar = () => {
  return (
    <div>
      <nav class="vertical-navbar">
        <h1>REACTIFY CAFE</h1>
        <Locations locations={locations}/>

      </nav>
    </div>
  );
};

export default Navbar;
