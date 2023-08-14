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
  const [visiblePosts, setVisiblePosts] = useState(10);
  const [allPostsLoaded, setAllPostsLoaded] = useState(false);

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

  function loadMorePosts() {
    const newVisiblePosts = visiblePosts + 10;

    if (newVisiblePosts >= articles.length) {
      setAllPostsLoaded(true);
    }

    setVisiblePosts(newVisiblePosts);
  }

  return (
    <>
      <StyledMainContainer>
        <StyledNavigationContainer>
          <Button text="Hot" active={true} />
          <Button text="News" active={true} />
          <Button text="Rising" active={true} />
        </StyledNavigationContainer>
        <StyledPostContainer>
          {articles.slice(0, visiblePosts).map((article: any) => {
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
          <StyledButton onClick={loadMorePosts}>
            {allPostsLoaded
              ? "Sem mais posts a serem carregados"
              : "+ Ver mais"}
          </StyledButton>
        </StyledMorePostContainer>
      </StyledMainContainer>
    </>
  );
}
