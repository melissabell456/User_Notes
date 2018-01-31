"use strict";

angular.module("NoteApp").factory("AuthFctry", function ($q, $http) {

  const authenticateUserCreds = ( { email, password } ) => {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  };

  const registerUserCreds = ( { email, password } ) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password);
  };

  const logoutUserCreds = () => {
    return firebase.auth().signOut();
  };

  return { authenticateUserCreds, registerUserCreds, logoutUserCreds };
});