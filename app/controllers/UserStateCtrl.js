"use strict";

angular.module("NoteApp").controller("UserStateCtrl", function ($scope, AuthFctry) {

  $scope.loginUser = () => {
    AuthFctry.authenticateUserCreds($scope.user)
    .then( (returnedUser) => {
      console.log("returned user?", returnedUser);
    });
  };

});