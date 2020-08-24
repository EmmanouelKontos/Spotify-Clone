//Redirect to spotify login page
export const authEndpoint = "https://accounts.spotify.com/authorize";

//Redirect back to website once logged in
const redirectUri = "http://localhost:3000/";

const clientId = "6386f0ff1921404fb1c7532d5a35df54";

//Get correct permitions for spotify
const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

//Recieve token from url
export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      let parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);

      return initial;
    }, {});
};

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
