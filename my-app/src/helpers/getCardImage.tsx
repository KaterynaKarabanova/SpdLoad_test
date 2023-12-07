import cardImageOne from "../components/assets/cardImage1.jpg";
import cardImageTwo from "../components/assets/cardImage2.jpg";
import cardImageThree from "../components/assets/cardImage3.jpg";
export const getImage = (index: number): string => {
  const newIndex = index + 1;
  if (newIndex / 3 === 1) {
    return cardImageThree;
  } else if (newIndex / 2 === 1) {
    return cardImageTwo;
  } else {
    return cardImageOne;
  }
};
