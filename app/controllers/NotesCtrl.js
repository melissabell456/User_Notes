"use strict";

angular.module("NoteApp").controller("NoteCtrl", function($scope, NoteFctry) { 

  NoteFctry.getUserNotes()
  .then( (userNotes) => {
    $scope.notes = Object.keys(userNotes).map( (noteID) => {
      userNotes[noteID].fbID = noteID;
      return userNotes[noteID];
    });
    console.log($scope.notes, "for printing");
  });

});