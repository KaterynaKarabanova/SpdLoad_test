import { atom } from "recoil";
interface rocketTypes {
  id: string;
  name: number;
  description: string[];
  img?: string;
}

export const favourite = atom<rocketTypes[]>({
  key: "favourite",
  default: [], // Initial value of your state
});
export const rockets = atom<rocketTypes[]>({
  key: "rockets",
  default: [], // Initial value of your state
});
