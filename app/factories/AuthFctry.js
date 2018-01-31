"use strict";

angular.module("NoteApp").factory("AuthFctry", function ($q, $http) {

  const authenticateUser = ( { email, password } ) => {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  };

  const registerUserCreds = ( { email, password } ) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password);
  };

  return { authenticateUser, registerUserCreds };
});