import { useEffect, useState } from "react";
import { Button } from "../../components/common/Button";
import { StyledButton } from "../../components/common/Button/style";
import { Post } from "../../components/common/Post";
import {
  StyledMainContainer,
  StyledMorePostContainer,
  StyledNavigationContainer,
  StyledPostContainer,
} from "./style";
import { fetchRedditPosts } from "../../api/redditApi";

export default function Home() {
  const [articles, setArticles] = useState([]);
  const [subreddit, setSubreddit] = useState("reactjs");

  useEffect(() => {
    fetchRedditPosts(subreddit)
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [subreddit]);

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
