import { Button } from "../../components/common/Button";
import { Post } from "../../components/common/Post";
import {
  StyledMainContainer,
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
      </StyledMainContainer>
    </>
  );
}
