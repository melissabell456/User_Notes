"use strict";

angular.module("NoteApp").factory("NoteFctry", function($q, $http, Firebase) {

  const getUserNotes = () => {
    return $q( (resolve, reject) => {
      $http
      .get(`${Firebase}/notes.json`)
      .then( ({ data }) => {
        console.log("in ctrl, this is { data }", data);
      })
      .catch( (err) => {
        console.log("firebase data err", err);
      });
    });
  };

  return { getUserNotes };

});

