import {
  StyledMainContainer,
  StyledThumbnailContainer,
  StyledPostContentContainer,
  StyledLink,
} from "./style";

export function Post() {
  return (
    <StyledMainContainer>
      <StyledThumbnailContainer>
        <img src="https://placehold.co/77x77" alt="" />
      </StyledThumbnailContainer>
      <StyledPostContentContainer>
        <h4>Título do post</h4>
        <p>
          enviado há 6 horas por{" "}
          <a href="" target="_blank">
            usuário_nickname
          </a>
        </p>
        <StyledLink href="" target="_blank">
          dominio.io
        </StyledLink>
      </StyledPostContentContainer>
    </StyledMainContainer>
  );
}
