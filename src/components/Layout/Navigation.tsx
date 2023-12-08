import { NavigationDiv, StyledNsvLink } from "./Navigation.styled";
const Navigation = () => {
  return (
    <NavigationDiv>
      <StyledNsvLink key={"/"} to={"/"}>
        Home
      </StyledNsvLink>
      <StyledNsvLink
        key={"/tours"}
        to={"/tours"}
        onClick={(e) => e.preventDefault()}
      >
        tours
      </StyledNsvLink>
      <StyledNsvLink
        key={"/about"}
        to={"/about"}
        onClick={(e) => e.preventDefault()}
      >
        about
      </StyledNsvLink>
      <StyledNsvLink
        key={"/help"}
        to={"/help"}
        onClick={(e) => e.preventDefault()}
      >
        help
      </StyledNsvLink>
    </NavigationDiv>
  );
};
export default Navigation;
