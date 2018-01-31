"use strict";

angular.module("NoteApp").controller("UserStateCtrl", function($scope, AuthFctry, $window) {

  $scope.registerUser = () => {
    AuthFctry.registerUserCreds($scope.user)
    .then( (returnedUser) => {
      $window.location.href="#!/new";
    });
  };

});