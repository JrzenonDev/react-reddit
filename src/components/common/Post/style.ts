import styles from "styled-components";

export const StyledMainContainer = styles.div`
  display: flex;
  border-top: 1px solid #4C5667;
  padding-top: 15px;
`;

export const StyledThumbnailContainer = styles.div`
  margin-right: 13px;
  img {
    border-radius: 8px;
  }
`;

export const StyledPostContentContainer = styles.div`
  font-family: 'Mulish', sans-serif;

  h4 {
    font-size: 20px;
    font-weight: 600;
    color: #000;
  }

  p {
    margin-bottom: 10px;
    font-size: 16px;
    font-weight: 400;
    color: #4c5667;
  }

  a {
    color: #6324c6;
    text-decoration: none;
    transition: 0.7s;

    &:hover {
      opacity: 0.7;
    }
  }
`;

export const StyledLink = styles.a`
  font-weight: 700;
  font-size: 16px;
  color: #000 !important;
`;
