"use strict";

angular.module("NoteApp").controller("NewNoteCtrl", function($scope, NoteFctry) {

  $scope.addNote = () => {
    $scope.note.uid = firebase.auth().currentUser.uid;
    NoteFctry.addUserNote($scope.note);
  };

});