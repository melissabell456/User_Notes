"use strict";

angular.module("NoteApp").factory("NoteFctry", function($q, $http, Firebase) {

  const getUserNotes = () => {
    return $q( (resolve, reject) => {
      $http
      .get(`${Firebase}/notes.json?orderBy="uid"&equalTo="${firebase.auth().currentUser.uid}"`)
      .then( ({ data }) => {
        resolve(data);
      })
      .catch( (err) => {
        console.log("firebase data err", err);
      });
    });
  };

  const addUserNote = ( newNote ) => {
    return $q( (resolve, reject ) => {
      $http
      .post(`${Firebase}/notes.json`, JSON.stringify(newNote))
      .then( (noteAdded) => {
        resolve(noteAdded);
      })
      .catch( (err) => {
        console.log(err);
      });
    });
  };

  return { getUserNotes, addUserNote };

});

