import styles from "styled-components";

export const StyledHeader = styles.header`
  display: flex;
  justify-content: center;
  background: #6324C6;

  h2 {
    font-family: 'Mulish', sans-serif;
    font-size: 36px;
    font-weight: 700;
    color: #fff;
    text-transform: uppercase;
    line-height: 45.18px;
    padding: 20px 0;
    transition: 0.5s;
    
    span {
      color: #ffb800;
    }

    &:hover {
      opacity: 0.7;
    }

  }
`;
