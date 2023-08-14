import {
  StyledMainContainer,
  StyledThumbnailContainer,
  StyledPostContentContainer,
  StyledLink,
  StyledImage,
} from "./style";
import reddit from "../../../assets/images/reddit.png";

interface PostProps {
  thumbnail: string;
  title: string;
  author: string;
  created_utc: string;
  url: string;
}

export function Post({
  thumbnail,
  title,
  author,
  created_utc,
  url,
}: PostProps) {
  let imageUrl;

  if (thumbnail === "default" || thumbnail === "self") {
    imageUrl = reddit;
  } else {
    imageUrl = thumbnail;
  }

  return (
    <StyledMainContainer>
      <StyledThumbnailContainer>
        <StyledImage src={imageUrl} alt={`Post ${title}`} />
      </StyledThumbnailContainer>
      <StyledPostContentContainer>
        <h4>{title}</h4>
        <p>
          enviado há {created_utc} horas por{" "}
          <a href={`https://www.reddit.com/user/${author}`} target="_blank">
            {author}
          </a>
        </p>
        <StyledLink href={url} target="_blank">
          {url}
        </StyledLink>
      </StyledPostContentContainer>
    </StyledMainContainer>
  );
}
