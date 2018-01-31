"use strict";

angular.module("NoteApp", ["ngRoute"])
.constant("Firebase", "https://fir-a5a79.firebaseio.com/")
.config($routeProvider => {
  $routeProvider
  .when("/register", {
    templateUrl: "../partials/register.html",
    controller: "RegisterCtrl"
  })
  .when("/login", {
    templateUrl: "../partials/log-in.html",
    controller: "UserStateCtrl"
  })
  .when("/notes", {
    templateUrl: "../partials/note-list.html",
    controller: "NoteCtrl"
  })
  .when("/new", {
    templateUrl: "../partials/new-note.html",
    controller: "NewNoteCtrl"
  })
  .otherwise("/");
})
.run(Firebasecreds => {
  let creds = Firebasecreds;
  let authConfig = {
    apiKey: creds.key,
    authDomain: creds.authDomain
  };
  firebase.initializeApp(authConfig);
});