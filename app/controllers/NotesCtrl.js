"use strict";

angular.module("NoteApp").controller("NoteCtrl", function($scope, NoteFctry) { 

  NoteFctry.getUserNotes()
  .then( (userNotes) => {
    console.log(userNotes, "for printing");
  });

});