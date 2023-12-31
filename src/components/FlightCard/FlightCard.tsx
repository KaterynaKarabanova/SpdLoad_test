import React, { useEffect } from "react";
import deleted from "../assets/Delete.svg";
import heart from "../assets/Heart.svg";
import heartFav from "../assets/HeartFav.svg";
import { useRecoilState } from "recoil";
import { favourite } from "../../recoil/atoms";
import {
  CardBtnDiv,
  CardBuyBtn,
  CardDiv,
  CardFavBtn,
  CardText,
  CardTitle,
} from "./FlightCard.styled";
interface FlightCardProps {
  id: string;
  name: number;
  description: string[];
  img: string;
}
const FlightCard: React.FC<FlightCardProps> = ({
  id,
  name,
  description,
  img,
}) => {
  const [state, setState] = useRecoilState(favourite);

  useEffect(() => {
    localStorage.setItem("Favourites", JSON.stringify(state));
  }, [state]);

  const addToFav = (): void => {
    if (state.find((el) => el.id === id)) {
      deleteFromFav();
      return;
    }
    const newRocket: FlightCardProps = {
      id,
      name,
      description,
      img: img,
    };
    setState((prev) => [...prev, newRocket]);
  };

  const deleteFromFav = (): void => {
    const newState = state.filter((el) => el.id !== id);
    setState(newState);
  };

  return (
    <CardDiv id={id}>
      <img src={img} alt="" />
      <CardTitle>{name}</CardTitle>
      <CardText>{description}</CardText>
      <CardBtnDiv>
        <CardBuyBtn>BUY</CardBuyBtn>
        {window.location.href.includes("/favorites") ? (
          <CardFavBtn onClick={deleteFromFav}>
            <img src={deleted} alt="" />
          </CardFavBtn>
        ) : (
          <CardFavBtn onClick={addToFav}>
            <img
              src={state.find((el) => el.id === id) ? heartFav : heart}
              alt="heart"
            />
          </CardFavBtn>
        )}
      </CardBtnDiv>
    </CardDiv>
  );
};
export default FlightCard;
