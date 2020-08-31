export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  //remove after developing...
  //token:
  //  "BQDRu1cLu4XUKj1S3Bz4XX5kRNDSChlEQ7VN3Tu4i2FczDKPEd…L1QZzQgeQcUB2miSTfWaELRAOpOIk8p5WwP-7FqoXMm_PvVJ6",
};

const reducer = (state, action) => {
  console.log(action);
  //Action -> type, [payload]
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    default:
      return state;
  }
};

export default reducer;
