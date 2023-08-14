import axios from "axios";

export const fetchRedditPosts = async (subreddit: string) => {
  const clientId = import.meta.env.VITE_REACT_APP_CLIENT_ID;
  const clientSecret = import.meta.env.VITE_REACT_APP_CLIENT_SECRET;

  try {
    const response = await axios.post(
      "https://www.reddit.com/api/v1/access_token",
      `grant_type=client_credentials`,
      {
        auth: {
          username: clientId,
          password: clientSecret,
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    const accessToken = response.data.access_token;

    const res = await axios.get(
      `https://oauth.reddit.com/r/${subreddit}.json`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    return res.data;
  } catch (error) {
    throw new Error("Erro na requisição: " + error);
  }
};
