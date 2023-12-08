import React from "react";
import { favourite } from "../../recoil/atoms";
import { useRecoilState } from "recoil";
import FlightCard from "../../components/FlightCard/FlightCard";
import {
  FavBack,
  FavBanner,
  FavClearBtn,
  FavouriteList,
  FavouriteTitle,
  NoFlightDiv,
  NoFlightImg,
  NoFlightTitle,
} from "./Favorite.styled";
import { Container } from "../Home/Home.styled";
import rocketImg from "../../components/assets/rocket.webp";
const Favorites: React.FC = () => {
  const [state, setState] = useRecoilState(favourite);
  console.log(setState);
  const clearAll = () => {
    setState([]);
  };
  return (
    <div>
      <FavBack>
        <Container>
          <FavBanner>
            <FavouriteTitle>Favorites</FavouriteTitle>
          </FavBanner>
        </Container>
      </FavBack>
      <Container>
        <FavClearBtn onClick={clearAll}>Clear all</FavClearBtn>
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
            <NoFlightDiv>
              <NoFlightTitle>No favourite Flights</NoFlightTitle>
              <NoFlightImg src={rocketImg} alt="" />
            </NoFlightDiv>
          )}
        </FavouriteList>
      </Container>
    </div>
  );
};
export default Favorites;
