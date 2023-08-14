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
        console.log("data: ", data);
        setArticles(data.data.children);
        console.log("articles: ", articles);
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
          {articles.map((article: any) => {
            const { thumbnail, id, title, author, created_utc, url } =
              article.data;

            return (
              <Post
                thumbnail={thumbnail}
                key={id}
                title={title}
                author={author}
                created_utc={created_utc}
                url={url}
              />
            );
          })}
        </StyledPostContainer>
        <StyledMorePostContainer>
          <StyledButton>+ Ver mais</StyledButton>
        </StyledMorePostContainer>
      </StyledMainContainer>
    </>
  );
}
