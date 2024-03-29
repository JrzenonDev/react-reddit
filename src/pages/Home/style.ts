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

export const StyledPostContainer = styles.div`
  margin-bottom: 20px;
`;

export const StyledMorePostContainer = styles.div`
  display: flex;
  justify-content: center;
`;
