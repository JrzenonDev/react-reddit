import { Button } from "../../components/common/Button";
import { StyledMainContainer, StyledNavigationContainer } from "./style";

export default function Home() {
  return (
    <>
      <StyledMainContainer>
        <StyledNavigationContainer>
          <Button text="Hot" active={true} />
          <Button text="News" active={true} />
          <Button text="Rising" active={true} />
        </StyledNavigationContainer>
      </StyledMainContainer>
      <h1>Home page</h1>
    </>
  );
}
