export const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:process.env.REACT_APP_TMDB_AUTHORIZATION_KEY
    }
  };

  export const MOVIE_IMG_CDN="https://image.tmdb.org/t/p/w440_and_h660_face/";

  export const OPENAI_KEY=process.env.REACT_APP_OPENAI_KEY