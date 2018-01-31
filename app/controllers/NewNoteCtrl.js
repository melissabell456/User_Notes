"use strict";

angular.module("NoteApp").controller("NewNoteCtrl", function($scope, NoteFctry, $window) {

  
  $scope.addNote = () => {
    if (firebase.auth().currentUser === null) {
      $window.location.href = "#!/login";
    }
    else {
      let currentUser = firebase.auth().currentUser.uid;
      $scope.note.uid = currentUser;
      NoteFctry.addUserNote($scope.note)
      .then( () => {
        NoteFctry.getUserNotes()
        .then( (data) => {
          $window.location.href = "#!/notes";
        });
      });
    }
  };

});