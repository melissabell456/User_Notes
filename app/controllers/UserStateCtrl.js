"use strict";

angular.module("NoteApp").controller("LoginCtrl", function ($scope, AuthFctry) {

  $scope.loginUser = () => {
    AuthFctry.authenticateUser($scope.user)
    .then( (returnedUser) => {
      console.log("returned user?", returnedUser);
    });
  };

});