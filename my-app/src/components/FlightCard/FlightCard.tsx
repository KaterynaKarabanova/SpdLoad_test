import React from "react";
import deleted from "../assets/Delete.svg";
import heart from "../assets/Heart.svg";
import heartFav from "../assets/HeartFav.svg";
import { useRecoilState } from "recoil";
import { favourite } from "../../recoil/atoms";
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
  console.log(state);

  return (
    <div id={id}>
      <img src={img} alt="" />
      <h3>{name}</h3>
      <p>{description}</p>
      <div>
        <button>BUY</button>
        {window.location.href.includes("/favorites") ? (
          <button onClick={deleteFromFav}>
            <img src={deleted} alt="" />
          </button>
        ) : (
          <button onClick={addToFav}>
            <img
              src={state.find((el) => el.id === id) ? heartFav : heart}
              alt="heart"
            />
          </button>
        )}
      </div>
    </div>
  );
};
export default FlightCard;
