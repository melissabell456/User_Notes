"use strict";

angular.module("NoteApp").controller("NavCtrl", function($scope, AuthFctry, $window) {

  $scope.logoutUser = () => {
    console.log("clicked");
    AuthFctry.logoutUserCreds()
    .then( (returnedUser) => {
      console.log("logged out", firebase.auth().currentUser);
      $window.location.href = "#!/login";
    });
  };

});