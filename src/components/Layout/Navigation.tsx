import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <NavLink key={"/"} to={"/"}>
        Home
      </NavLink>
      <NavLink key={"/favorites"} to={"/favorites"}>
        Favorite
      </NavLink>
    </div>
  );
};
export default Navigation;
