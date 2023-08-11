import { Button } from "../../components/common/Button";
import { StyledButton } from "../../components/common/Button/style";
import { Post } from "../../components/common/Post";
import {
  StyledMainContainer,
  StyledMorePostContainer,
  StyledNavigationContainer,
  StyledPostContainer,
} from "./style";

export default function Home() {
  return (
    <>
      <StyledMainContainer>
        <StyledNavigationContainer>
          <Button text="Hot" active={true} />
          <Button text="News" active={true} />
          <Button text="Rising" active={true} />
        </StyledNavigationContainer>
        <StyledPostContainer>
          <Post />
        </StyledPostContainer>
        <StyledMorePostContainer>
          <StyledButton>+ Ver mais</StyledButton>
        </StyledMorePostContainer>
      </StyledMainContainer>
    </>
  );
}
