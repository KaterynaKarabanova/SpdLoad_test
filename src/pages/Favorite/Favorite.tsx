import React from "react";
import { favourite } from "../../recoil/atoms";
import { useRecoilState } from "recoil";
import FlightCard from "../../components/FlightCard/FlightCard";
import { FavouriteList } from "./Favorite.styled";

const Favorites: React.FC = () => {
  const [state, setState] = useRecoilState(favourite);
  console.log(setState);

  return (
    <div>
      <h1>Favorites</h1>
      <FavouriteList>
        {state.length ? (
          state.map(({ id, name, description, img }, index) => {
            return (
              <FlightCard
                key={id}
                id={id}
                name={name}
                description={description}
                img={img ? img : ""}
              />
            );
          })
        ) : (
          <h2>No favourites Flight</h2>
        )}
      </FavouriteList>
    </div>
  );
};
export default Favorites;
