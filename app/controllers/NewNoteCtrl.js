"use strict";

angular.module("NoteApp").controller("NewNoteCtrl", function($scope, NoteFctry) {

  $scope.addNote = () => {
    console.log($scope.note);
  };

});