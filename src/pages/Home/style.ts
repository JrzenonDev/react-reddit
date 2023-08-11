import styles from "styled-components";

export const StyledMainContainer = styles.div`
`;

export const StyledNavigationContainer = styles.div`
  display: flex;
  justify-content: center;
  padding: 30px 0;

  @media (max-width: 767px) {
    flex-wrap: wrap;
  }
`;
