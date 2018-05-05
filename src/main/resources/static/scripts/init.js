var config = {
  
  clientId:
    "682572018798-4rulmci9ecq7h6nmp2ljo3v3doomaq88.apps.googleusercontent.com",
  scopes: ["email", "profile", "https://www.googleapis.com/auth/calendar"],
  discoveryDocs: [
    "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"
  ]
};
firebase.initializeApp(config);

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    if (typeof login != "undefined") login(user);
  } else {
    if (typeof logout != "undefined") logout();
  }
});
