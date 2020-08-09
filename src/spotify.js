// Documnetation url

//https://developer.spotify.com/documentation/web-playback-sdk/quick-start/

// Spotify end point-->Login <a> takes me here.

export const authEndpoint = "https://accounts.spotify.com/authorize";

// After that we go to the redirectURL

const redirectUri = "http://localhost:3000/";


// https://developer.spotify.com/dashboard/applications/5ceed003f88845d0a2562055f72158af
// Got the client id from spotify account.

const clientId = "5ceed003f88845d0a2562055f72158af";

// Persmission to to do things on the app.

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state"
];

export const getTokenFromUrl = () => {
    return window.location.hash
        .substring(1).split("&")
        .reduce((initial, item) => {
            // #accessToken=mysupersecretkey&name=sonny&.
            let parts = item.split("=");
            initial[parts[0]] = decodeURIComponent(parts[1]);
            return initial
    }, {})
}

// using all the stuff to create a login url ,%20 Ascii for space , after authentication give me token.

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;

