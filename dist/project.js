//====================================================================================================================
// Module:    NoteApp
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  "use strict";



}) (angular.module ('NoteApp', ['ngRoute']));



//====================================================================================================================
// Module:    NoteApp
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  "use strict";

  module
  .config($routeProvider => {
    $routeProvider
    .when("/register", {
      templateUrl: "../partials/register.html",
      controller: "RegisterCtrl"
    })
    .when("/login", {
      templateUrl: "../partials/log-in.html",
      controller: "LoginCtrl"
    })
    .when("/notes", {
      templateUrl: "../partials/note-list.html",
      controller: "NoteCtrl"
    })
    .when("/new", {
      templateUrl: "../partials/new-note.html",
      controller: "NewNoteCtrl"
    })
    .otherwise("/");
  });

}) (angular.module ('NoteApp', ['ngRoute']));



//====================================================================================================================
// Module:    NoteApp
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  "use strict";

  module
  .constant("Firebase", "https://fir-a5a79.firebaseio.com/")
  .config($routeProvider => {
    $routeProvider
    .when("/register", {
      templateUrl: "../partials/register.html",
      controller: "RegisterCtrl"
    })
    .when("/login", {
      templateUrl: "../partials/log-in.html",
      controller: "LoginCtrl"
    })
    .when("/notes", {
      templateUrl: "../partials/note-list.html",
      controller: "NoteCtrl"
    })
    .when("/new", {
      templateUrl: "../partials/new-note.html",
      controller: "NewNoteCtrl"
    })
    .otherwise("/");
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/NoteFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("NoteFctry", function($q, $http, Firebase) {

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



}) (angular.module ('NoteApp', ['ngRoute']));



//====================================================================================================================
// Module:    NoteApp
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  "use strict";

  module
  .constant("Firebase", "https://fir-a5a79.firebaseio.com/")
  .config($routeProvider => {
    $routeProvider
    .when("/register", {
      templateUrl: "../partials/register.html",
      controller: "RegisterCtrl"
    })
    .when("/login", {
      templateUrl: "../partials/log-in.html",
      controller: "LoginCtrl"
    })
    .when("/notes", {
      templateUrl: "../partials/note-list.html",
      controller: "NoteCtrl"
    })
    .when("/new", {
      templateUrl: "../partials/new-note.html",
      controller: "NewNoteCtrl"
    })
    .otherwise("/");
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/NoteFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("NoteFctry", function($q, $http, Firebase) {

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



}) (angular.module ('NoteApp', ['ngRoute']));



//====================================================================================================================
// Module:    NoteApp
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  "use strict";

  module
  .constant("Firebase", "https://fir-a5a79.firebaseio.com/")
  .config($routeProvider => {
    $routeProvider
    .when("/register", {
      templateUrl: "../partials/register.html",
      controller: "RegisterCtrl"
    })
    .when("/login", {
      templateUrl: "../partials/log-in.html",
      controller: "LoginCtrl"
    })
    .when("/notes", {
      templateUrl: "../partials/note-list.html",
      controller: "NoteCtrl"
    })
    .when("/new", {
      templateUrl: "../partials/new-note.html",
      controller: "NewNoteCtrl"
    })
    .otherwise("/");
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/NoteFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("NoteFctry", function($q, $http, Firebase) {

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



}) (angular.module ('NoteApp', ['ngRoute']));



//====================================================================================================================
// Module:    NoteApp
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  "use strict";

  module
  .constant("Firebase", "https://fir-a5a79.firebaseio.com/")
  .config($routeProvider => {
    $routeProvider
    .when("/register", {
      templateUrl: "../partials/register.html",
      controller: "RegisterCtrl"
    })
    .when("/login", {
      templateUrl: "../partials/log-in.html",
      controller: "LoginCtrl"
    })
    .when("/notes", {
      templateUrl: "../partials/note-list.html",
      controller: "NoteCtrl"
    })
    .when("/new", {
      templateUrl: "../partials/new-note.html",
      controller: "NewNoteCtrl"
    })
    .otherwise("/");
  })
  .run(FBCreds => {
    let creds = FBCreds;
    let authConfig = {
      apiKey: creds.key,
      authDomain: creds.authDomain
    };
    firebase.initializeApp(authConfig);
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/NoteFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("NoteFctry", function($q, $http, Firebase) {

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



}) (angular.module ('NoteApp', ['ngRoute']));



//====================================================================================================================
// Module:    NoteApp
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  "use strict";

  module
  .constant("Firebase", "https://fir-a5a79.firebaseio.com/")
  .config($routeProvider => {
    $routeProvider
    .when("/register", {
      templateUrl: "../partials/register.html",
      controller: "RegisterCtrl"
    })
    .when("/login", {
      templateUrl: "../partials/log-in.html",
      controller: "LoginCtrl"
    })
    .when("/notes", {
      templateUrl: "../partials/note-list.html",
      controller: "NoteCtrl"
    })
    .when("/new", {
      templateUrl: "../partials/new-note.html",
      controller: "NewNoteCtrl"
    })
    .otherwise("/");
  })
  .run(FirebaseCreds => {
    let creds = FirebaseCreds;
    let authConfig = {
      apiKey: creds.key,
      authDomain: creds.authDomain
    };
    firebase.initializeApp(authConfig);
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/NoteFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("NoteFctry", function($q, $http, Firebase) {

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



}) (angular.module ('NoteApp', ['ngRoute']));



//====================================================================================================================
// Module:    NoteApp
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  "use strict";

  module
  .constant("Firebase", "https://fir-a5a79.firebaseio.com/")
  .config($routeProvider => {
    $routeProvider
    .when("/register", {
      templateUrl: "../partials/register.html",
      controller: "RegisterCtrl"
    })
    .when("/login", {
      templateUrl: "../partials/log-in.html",
      controller: "LoginCtrl"
    })
    .when("/notes", {
      templateUrl: "../partials/note-list.html",
      controller: "NoteCtrl"
    })
    .when("/new", {
      templateUrl: "../partials/new-note.html",
      controller: "NewNoteCtrl"
    })
    .otherwise("/");
  })
  .run(FirebaseCreds => {
    let creds = FirebaseCreds;
    let authConfig = {
      apiKey: creds.key,
      authDomain: creds.authDomain
    };
    firebase.initializeApp(authConfig);
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/NoteFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("NoteFctry", function($q, $http, Firebase) {

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



}) (angular.module ('NoteApp', ['ngRoute']));



//====================================================================================================================
// Module:    NoteApp
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  "use strict";

  module
  .constant("Firebase", "https://fir-a5a79.firebaseio.com/")
  .config($routeProvider => {
    $routeProvider
    .when("/register", {
      templateUrl: "../partials/register.html",
      controller: "RegisterCtrl"
    })
    .when("/login", {
      templateUrl: "../partials/log-in.html",
      controller: "LoginCtrl"
    })
    .when("/notes", {
      templateUrl: "../partials/note-list.html",
      controller: "NoteCtrl"
    })
    .when("/new", {
      templateUrl: "../partials/new-note.html",
      controller: "NewNoteCtrl"
    })
    .otherwise("/");
  })
  .run(Firebasecreds => {
    let creds = Firebasecreds;
    let authConfig = {
      apiKey: creds.key,
      authDomain: creds.authDomain
    };
    firebase.initializeApp(authConfig);
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/NoteFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("NoteFctry", function($q, $http, Firebase) {

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



}) (angular.module ('NoteApp', ['ngRoute']));



//====================================================================================================================
// Module:    NoteApp
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  "use strict";

  module
  .constant("Firebase", "https://fir-a5a79.firebaseio.com/")
  .config($routeProvider => {
    $routeProvider
    .when("/register", {
      templateUrl: "../partials/register.html",
      controller: "RegisterCtrl"
    })
    .when("/login", {
      templateUrl: "../partials/log-in.html",
      controller: "LoginCtrl"
    })
    .when("/notes", {
      templateUrl: "../partials/note-list.html",
      controller: "NoteCtrl"
    })
    .when("/new", {
      templateUrl: "../partials/new-note.html",
      controller: "NewNoteCtrl"
    })
    .otherwise("/");
  })
  .run(Firebasecreds => {
    let creds = Firebasecreds;
    let authConfig = {
      apiKey: creds.key,
      authDomain: creds.authDomain
    };
    firebase.initializeApp(authConfig);
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/NoteFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("NoteFctry", function($q, $http, Firebase) {

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


//--------------------------------------------------------------------------------------------------------------------
// File: ./app/values/firebaseCreds.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict"; 

  module.constant("Firebasecreds", {

    apiKey: "AIzaSyCC-X2NZWNA0doyH8I0C4ATT1A_ZLhtGIY",
    authDomain: "fir-a5a79.firebaseapp.com"

  });

}) (angular.module ('NoteApp', ['ngRoute']));



//====================================================================================================================
// Module:    NoteApp
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  "use strict";

  module
  .constant("Firebase", "https://fir-a5a79.firebaseio.com/")
  .config($routeProvider => {
    $routeProvider
    .when("/register", {
      templateUrl: "../partials/register.html",
      controller: "RegisterCtrl"
    })
    .when("/login", {
      templateUrl: "../partials/log-in.html",
      controller: "LoginCtrl"
    })
    .when("/notes", {
      templateUrl: "../partials/note-list.html",
      controller: "NoteCtrl"
    })
    .when("/new", {
      templateUrl: "../partials/new-note.html",
      controller: "NewNoteCtrl"
    })
    .otherwise("/");
  })
  .run(Firebasecreds => {
    let creds = Firebasecreds;
    let authConfig = {
      apiKey: creds.key,
      authDomain: creds.authDomain
    };
    firebase.initializeApp(authConfig);
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/NoteFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("NoteFctry", function($q, $http, Firebase) {

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


//--------------------------------------------------------------------------------------------------------------------
// File: ./app/values/firebaseCreds.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict"; 

  module.constant("Firebasecreds", {

    apiKey: "AIzaSyCC-X2NZWNA0doyH8I0C4ATT1A_ZLhtGIY",
    authDomain: "fir-a5a79.firebaseapp.com"

  });

}) (angular.module ('NoteApp', ['ngRoute']));



//====================================================================================================================
// Module:    NoteApp
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  "use strict";

  module
  .constant("Firebase", "https://fir-a5a79.firebaseio.com/")
  .config($routeProvider => {
    $routeProvider
    .when("/register", {
      templateUrl: "../partials/register.html",
      controller: "RegisterCtrl"
    })
    .when("/login", {
      templateUrl: "../partials/log-in.html",
      controller: "LoginCtrl"
    })
    .when("/notes", {
      templateUrl: "../partials/note-list.html",
      controller: "NoteCtrl"
    })
    .when("/new", {
      templateUrl: "../partials/new-note.html",
      controller: "NewNoteCtrl"
    })
    .otherwise("/");
  })
  .run(Firebasecreds => {
    let creds = Firebasecreds;
    let authConfig = {
      apiKey: creds.key,
      authDomain: creds.authDomain
    };
    firebase.initializeApp(authConfig);
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/LoginCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("LoginCtrl", function ($scope, AuthFctry) {

    $scope.login = () => {
      console.log($scope.user);
    };

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/NoteFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("NoteFctry", function($q, $http, Firebase) {

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


//--------------------------------------------------------------------------------------------------------------------
// File: ./app/values/firebaseCreds.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict"; 

  module.constant("Firebasecreds", {

    apiKey: "AIzaSyCC-X2NZWNA0doyH8I0C4ATT1A_ZLhtGIY",
    authDomain: "fir-a5a79.firebaseapp.com"

  });

}) (angular.module ('NoteApp', ['ngRoute']));



//====================================================================================================================
// Module:    NoteApp
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  "use strict";

  module
  .constant("Firebase", "https://fir-a5a79.firebaseio.com/")
  .config($routeProvider => {
    $routeProvider
    .when("/register", {
      templateUrl: "../partials/register.html",
      controller: "RegisterCtrl"
    })
    .when("/login", {
      templateUrl: "../partials/log-in.html",
      controller: "LoginCtrl"
    })
    .when("/notes", {
      templateUrl: "../partials/note-list.html",
      controller: "NoteCtrl"
    })
    .when("/new", {
      templateUrl: "../partials/new-note.html",
      controller: "NewNoteCtrl"
    })
    .otherwise("/");
  })
  .run(Firebasecreds => {
    let creds = Firebasecreds;
    let authConfig = {
      apiKey: creds.key,
      authDomain: creds.authDomain
    };
    firebase.initializeApp(authConfig);
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/LoginCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("LoginCtrl", function ($scope, AuthFctry) {

    $scope.login = () => {
      console.log($scope.user);
    };

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/AuthFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";


//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/NoteFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("NoteFctry", function($q, $http, Firebase) {

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


//--------------------------------------------------------------------------------------------------------------------
// File: ./app/values/firebaseCreds.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict"; 

  module.constant("Firebasecreds", {

    apiKey: "AIzaSyCC-X2NZWNA0doyH8I0C4ATT1A_ZLhtGIY",
    authDomain: "fir-a5a79.firebaseapp.com"

  });

}) (angular.module ('NoteApp', ['ngRoute']));



//====================================================================================================================
// Module:    NoteApp
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  "use strict";

  module
  .constant("Firebase", "https://fir-a5a79.firebaseio.com/")
  .config($routeProvider => {
    $routeProvider
    .when("/register", {
      templateUrl: "../partials/register.html",
      controller: "RegisterCtrl"
    })
    .when("/login", {
      templateUrl: "../partials/log-in.html",
      controller: "LoginCtrl"
    })
    .when("/notes", {
      templateUrl: "../partials/note-list.html",
      controller: "NoteCtrl"
    })
    .when("/new", {
      templateUrl: "../partials/new-note.html",
      controller: "NewNoteCtrl"
    })
    .otherwise("/");
  })
  .run(Firebasecreds => {
    let creds = Firebasecreds;
    let authConfig = {
      apiKey: creds.key,
      authDomain: creds.authDomain
    };
    firebase.initializeApp(authConfig);
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/LoginCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("LoginCtrl", function ($scope, AuthFctry) {

    $scope.login = () => {
      console.log($scope.user);
    };

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/AuthFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("AuthFctry", function ($q, $http) {

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/NoteFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("NoteFctry", function($q, $http, Firebase) {

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


//--------------------------------------------------------------------------------------------------------------------
// File: ./app/values/firebaseCreds.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict"; 

  module.constant("Firebasecreds", {

    apiKey: "AIzaSyCC-X2NZWNA0doyH8I0C4ATT1A_ZLhtGIY",
    authDomain: "fir-a5a79.firebaseapp.com"

  });

}) (angular.module ('NoteApp', ['ngRoute']));



//====================================================================================================================
// Module:    NoteApp
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  "use strict";

  module
  .constant("Firebase", "https://fir-a5a79.firebaseio.com/")
  .config($routeProvider => {
    $routeProvider
    .when("/register", {
      templateUrl: "../partials/register.html",
      controller: "RegisterCtrl"
    })
    .when("/login", {
      templateUrl: "../partials/log-in.html",
      controller: "LoginCtrl"
    })
    .when("/notes", {
      templateUrl: "../partials/note-list.html",
      controller: "NoteCtrl"
    })
    .when("/new", {
      templateUrl: "../partials/new-note.html",
      controller: "NewNoteCtrl"
    })
    .otherwise("/");
  })
  .run(Firebasecreds => {
    let creds = Firebasecreds;
    let authConfig = {
      apiKey: creds.key,
      authDomain: creds.authDomain
    };
    firebase.initializeApp(authConfig);
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/LoginCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("LoginCtrl", function ($scope, AuthFctry) {

    $scope.login = () => {
      console.log($scope.user);
    };

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/AuthFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("AuthFctry", function ($q, $http) {

    const authenticateUser = () => {
      console.log("infctry");
    };

    return { authenticateUser };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/NoteFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("NoteFctry", function($q, $http, Firebase) {

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


//--------------------------------------------------------------------------------------------------------------------
// File: ./app/values/firebaseCreds.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict"; 

  module.constant("Firebasecreds", {

    apiKey: "AIzaSyCC-X2NZWNA0doyH8I0C4ATT1A_ZLhtGIY",
    authDomain: "fir-a5a79.firebaseapp.com"

  });

}) (angular.module ('NoteApp', ['ngRoute']));



//====================================================================================================================
// Module:    NoteApp
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  "use strict";

  module
  .constant("Firebase", "https://fir-a5a79.firebaseio.com/")
  .config($routeProvider => {
    $routeProvider
    .when("/register", {
      templateUrl: "../partials/register.html",
      controller: "RegisterCtrl"
    })
    .when("/login", {
      templateUrl: "../partials/log-in.html",
      controller: "LoginCtrl"
    })
    .when("/notes", {
      templateUrl: "../partials/note-list.html",
      controller: "NoteCtrl"
    })
    .when("/new", {
      templateUrl: "../partials/new-note.html",
      controller: "NewNoteCtrl"
    })
    .otherwise("/");
  })
  .run(Firebasecreds => {
    let creds = Firebasecreds;
    let authConfig = {
      apiKey: creds.key,
      authDomain: creds.authDomain
    };
    firebase.initializeApp(authConfig);
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/LoginCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("LoginCtrl", function ($scope, AuthFctry) {

    $scope.login = () => {
      // console.log(clicked);
      console.log($scope.user);
    };

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/AuthFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("AuthFctry", function ($q, $http) {

    const authenticateUser = () => {
      console.log("infctry");
    };

    return { authenticateUser };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/NoteFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("NoteFctry", function($q, $http, Firebase) {

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


//--------------------------------------------------------------------------------------------------------------------
// File: ./app/values/firebaseCreds.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict"; 

  module.constant("Firebasecreds", {

    apiKey: "AIzaSyCC-X2NZWNA0doyH8I0C4ATT1A_ZLhtGIY",
    authDomain: "fir-a5a79.firebaseapp.com"

  });

}) (angular.module ('NoteApp', ['ngRoute']));



//====================================================================================================================
// Module:    NoteApp
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  "use strict";

  module
  .constant("Firebase", "https://fir-a5a79.firebaseio.com/")
  .config($routeProvider => {
    $routeProvider
    .when("/register", {
      templateUrl: "../partials/register.html",
      controller: "RegisterCtrl"
    })
    .when("/login", {
      templateUrl: "../partials/log-in.html",
      controller: "LoginCtrl"
    })
    .when("/notes", {
      templateUrl: "../partials/note-list.html",
      controller: "NoteCtrl"
    })
    .when("/new", {
      templateUrl: "../partials/new-note.html",
      controller: "NewNoteCtrl"
    })
    .otherwise("/");
  })
  .run(Firebasecreds => {
    let creds = Firebasecreds;
    let authConfig = {
      apiKey: creds.key,
      authDomain: creds.authDomain
    };
    firebase.initializeApp(authConfig);
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/LoginCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("LoginCtrl", function ($scope, AuthFctry) {

    $scope.login = () => {
      console.log($scope.user);
    };

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/AuthFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("AuthFctry", function ($q, $http) {

    const authenticateUser = () => {
      console.log("infctry");
    };

    return { authenticateUser };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/NoteFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("NoteFctry", function($q, $http, Firebase) {

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


//--------------------------------------------------------------------------------------------------------------------
// File: ./app/values/firebaseCreds.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict"; 

  module.constant("Firebasecreds", {

    apiKey: "AIzaSyCC-X2NZWNA0doyH8I0C4ATT1A_ZLhtGIY",
    authDomain: "fir-a5a79.firebaseapp.com"

  });

}) (angular.module ('NoteApp', ['ngRoute']));



//====================================================================================================================
// Module:    NoteApp
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  "use strict";

  module
  .constant("Firebase", "https://fir-a5a79.firebaseio.com/")
  .config($routeProvider => {
    $routeProvider
    .when("/register", {
      templateUrl: "../partials/register.html",
      controller: "RegisterCtrl"
    })
    .when("/login", {
      templateUrl: "../partials/log-in.html",
      controller: "LoginCtrl"
    })
    .when("/notes", {
      templateUrl: "../partials/note-list.html",
      controller: "NoteCtrl"
    })
    .when("/new", {
      templateUrl: "../partials/new-note.html",
      controller: "NewNoteCtrl"
    })
    .otherwise("/");
  })
  .run(Firebasecreds => {
    let creds = Firebasecreds;
    let authConfig = {
      apiKey: creds.key,
      authDomain: creds.authDomain
    };
    firebase.initializeApp(authConfig);
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/LoginCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("LoginCtrl", function ($scope, AuthFctry) {

    $scope.login = () => {
      // console.log($scope.user);
      // $scope.user collects email and password entered in log in form for FB authentication process
      AuthFctry.authenticateUser($scope.user);
    };

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/AuthFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("AuthFctry", function ($q, $http) {

    const authenticateUser = () => {
      console.log("infctry");
    };

    return { authenticateUser };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/NoteFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("NoteFctry", function($q, $http, Firebase) {

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


//--------------------------------------------------------------------------------------------------------------------
// File: ./app/values/firebaseCreds.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict"; 

  module.constant("Firebasecreds", {

    apiKey: "AIzaSyCC-X2NZWNA0doyH8I0C4ATT1A_ZLhtGIY",
    authDomain: "fir-a5a79.firebaseapp.com"

  });

}) (angular.module ('NoteApp', ['ngRoute']));



//====================================================================================================================
// Module:    NoteApp
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  "use strict";

  module
  .constant("Firebase", "https://fir-a5a79.firebaseio.com/")
  .config($routeProvider => {
    $routeProvider
    .when("/register", {
      templateUrl: "../partials/register.html",
      controller: "RegisterCtrl"
    })
    .when("/login", {
      templateUrl: "../partials/log-in.html",
      controller: "LoginCtrl"
    })
    .when("/notes", {
      templateUrl: "../partials/note-list.html",
      controller: "NoteCtrl"
    })
    .when("/new", {
      templateUrl: "../partials/new-note.html",
      controller: "NewNoteCtrl"
    })
    .otherwise("/");
  })
  .run(Firebasecreds => {
    let creds = Firebasecreds;
    let authConfig = {
      apiKey: creds.key,
      authDomain: creds.authDomain
    };
    firebase.initializeApp(authConfig);
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/LoginCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("LoginCtrl", function ($scope, AuthFctry) {

    $scope.login = () => {
      // console.log($scope.user);
      // $scope.user collects email and password entered in log in form for FB authentication process
      AuthFctry.authenticateUser($scope.user);
    };

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/AuthFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("AuthFctry", function ($q, $http) {

    const authenticateUser = ( { email, password } ) => {
      console.log(email, password);
    };

    return { authenticateUser };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/NoteFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("NoteFctry", function($q, $http, Firebase) {

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


//--------------------------------------------------------------------------------------------------------------------
// File: ./app/values/firebaseCreds.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict"; 

  module.constant("Firebasecreds", {

    apiKey: "AIzaSyCC-X2NZWNA0doyH8I0C4ATT1A_ZLhtGIY",
    authDomain: "fir-a5a79.firebaseapp.com"

  });

}) (angular.module ('NoteApp', ['ngRoute']));



//====================================================================================================================
// Module:    NoteApp
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  "use strict";

  module
  .constant("Firebase", "https://fir-a5a79.firebaseio.com/")
  .config($routeProvider => {
    $routeProvider
    .when("/register", {
      templateUrl: "../partials/register.html",
      controller: "RegisterCtrl"
    })
    .when("/login", {
      templateUrl: "../partials/log-in.html",
      controller: "LoginCtrl"
    })
    .when("/notes", {
      templateUrl: "../partials/note-list.html",
      controller: "NoteCtrl"
    })
    .when("/new", {
      templateUrl: "../partials/new-note.html",
      controller: "NewNoteCtrl"
    })
    .otherwise("/");
  })
  .run(Firebasecreds => {
    let creds = Firebasecreds;
    let authConfig = {
      apiKey: creds.key,
      authDomain: creds.authDomain
    };
    firebase.initializeApp(authConfig);
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/LoginCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("LoginCtrl", function ($scope, AuthFctry) {

    $scope.login = () => {
      // console.log($scope.user);
      // $scope.user collects email and password entered in log in form for FB authentication process
      AuthFctry.authenticateUser($scope.user);
    };

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/AuthFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("AuthFctry", function ($q, $http) {

    const authenticateUser = ( { email, password } ) => {
      console.log(email, password);
    };

    return { authenticateUser };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/NoteFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("NoteFctry", function($q, $http, Firebase) {

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


//--------------------------------------------------------------------------------------------------------------------
// File: ./app/values/firebaseCreds.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict"; 

  module.constant("Firebasecreds", {

    apiKey: "AIzaSyCC-X2NZWNA0doyH8I0C4ATT1A_ZLhtGIY",
    authDomain: "fir-a5a79.firebaseapp.com"

  });

}) (angular.module ('NoteApp', ['ngRoute']));



//====================================================================================================================
// Module:    NoteApp
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  "use strict";

  module
  .constant("Firebase", "https://fir-a5a79.firebaseio.com/")
  .config($routeProvider => {
    $routeProvider
    .when("/register", {
      templateUrl: "../partials/register.html",
      controller: "RegisterCtrl"
    })
    .when("/login", {
      templateUrl: "../partials/log-in.html",
      controller: "LoginCtrl"
    })
    .when("/notes", {
      templateUrl: "../partials/note-list.html",
      controller: "NoteCtrl"
    })
    .when("/new", {
      templateUrl: "../partials/new-note.html",
      controller: "NewNoteCtrl"
    })
    .otherwise("/");
  })
  .run(Firebasecreds => {
    let creds = Firebasecreds;
    let authConfig = {
      apiKey: creds.key,
      authDomain: creds.authDomain
    };
    firebase.initializeApp(authConfig);
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/LoginCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("LoginCtrl", function ($scope, AuthFctry) {

    $scope.login = () => {
      // console.log($scope.user);
      // $scope.user collects email and password entered in log in form for FB authentication process
      AuthFctry.authenticateUser($scope.user);
    };

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/AuthFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("AuthFctry", function ($q, $http) {

    const authenticateUser = ( { email, password } ) => {
      console.log(email, password);
      return firebase.auth().signInWithEmailAndPassword(email, password);
    };

    return { authenticateUser };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/NoteFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("NoteFctry", function($q, $http, Firebase) {

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


//--------------------------------------------------------------------------------------------------------------------
// File: ./app/values/firebaseCreds.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict"; 

  module.constant("Firebasecreds", {

    apiKey: "AIzaSyCC-X2NZWNA0doyH8I0C4ATT1A_ZLhtGIY",
    authDomain: "fir-a5a79.firebaseapp.com"

  });

}) (angular.module ('NoteApp', ['ngRoute']));



//====================================================================================================================
// Module:    NoteApp
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  "use strict";

  module
  .constant("Firebase", "https://fir-a5a79.firebaseio.com/")
  .config($routeProvider => {
    $routeProvider
    .when("/register", {
      templateUrl: "../partials/register.html",
      controller: "RegisterCtrl"
    })
    .when("/login", {
      templateUrl: "../partials/log-in.html",
      controller: "LoginCtrl"
    })
    .when("/notes", {
      templateUrl: "../partials/note-list.html",
      controller: "NoteCtrl"
    })
    .when("/new", {
      templateUrl: "../partials/new-note.html",
      controller: "NewNoteCtrl"
    })
    .otherwise("/");
  })
  .run(Firebasecreds => {
    let creds = Firebasecreds;
    let authConfig = {
      apiKey: creds.key,
      authDomain: creds.authDomain
    };
    firebase.initializeApp(authConfig);
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/LoginCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("LoginCtrl", function ($scope, AuthFctry) {

    $scope.login = () => {
      // console.log($scope.user);
      // $scope.user collects email and password entered in log in form for FB authentication process
      AuthFctry.authenticateUser($scope.user);
    };

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/AuthFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("AuthFctry", function ($q, $http) {

    const authenticateUser = ( { email, password } ) => {
      return firebase.auth().signInWithEmailAndPassword(email, password);
    };

    return { authenticateUser };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/NoteFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("NoteFctry", function($q, $http, Firebase) {

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


//--------------------------------------------------------------------------------------------------------------------
// File: ./app/values/firebaseCreds.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict"; 

  module.constant("Firebasecreds", {

    apiKey: "AIzaSyCC-X2NZWNA0doyH8I0C4ATT1A_ZLhtGIY",
    authDomain: "fir-a5a79.firebaseapp.com"

  });

}) (angular.module ('NoteApp', ['ngRoute']));



//====================================================================================================================
// Module:    NoteApp
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  "use strict";

  module
  .constant("Firebase", "https://fir-a5a79.firebaseio.com/")
  .config($routeProvider => {
    $routeProvider
    .when("/register", {
      templateUrl: "../partials/register.html",
      controller: "RegisterCtrl"
    })
    .when("/login", {
      templateUrl: "../partials/log-in.html",
      controller: "LoginCtrl"
    })
    .when("/notes", {
      templateUrl: "../partials/note-list.html",
      controller: "NoteCtrl"
    })
    .when("/new", {
      templateUrl: "../partials/new-note.html",
      controller: "NewNoteCtrl"
    })
    .otherwise("/");
  })
  .run(Firebasecreds => {
    let creds = Firebasecreds;
    let authConfig = {
      apiKey: creds.key,
      authDomain: creds.authDomain
    };
    firebase.initializeApp(authConfig);
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/LoginCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("LoginCtrl", function ($scope, AuthFctry) {

    $scope.login = () => {
      AuthFctry.authenticateUser($scope.user)
      .then( (returnedUser) => {
        console.log("returned user?", returnedUser);
      });
    };

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/AuthFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("AuthFctry", function ($q, $http) {

    const authenticateUser = ( { email, password } ) => {
      return firebase.auth().signInWithEmailAndPassword(email, password);
    };

    return { authenticateUser };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/NoteFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("NoteFctry", function($q, $http, Firebase) {

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


//--------------------------------------------------------------------------------------------------------------------
// File: ./app/values/firebaseCreds.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict"; 

  module.constant("Firebasecreds", {

    apiKey: "AIzaSyCC-X2NZWNA0doyH8I0C4ATT1A_ZLhtGIY",
    authDomain: "fir-a5a79.firebaseapp.com"

  });

}) (angular.module ('NoteApp', ['ngRoute']));



//====================================================================================================================
// Module:    NoteApp
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  "use strict";

  module
  .constant("Firebase", "https://fir-a5a79.firebaseio.com/")
  .config($routeProvider => {
    $routeProvider
    .when("/register", {
      templateUrl: "../partials/register.html",
      controller: "RegisterCtrl"
    })
    .when("/login", {
      templateUrl: "../partials/log-in.html",
      controller: "LoginCtrl"
    })
    .when("/notes", {
      templateUrl: "../partials/note-list.html",
      controller: "NoteCtrl"
    })
    .when("/new", {
      templateUrl: "../partials/new-note.html",
      controller: "NewNoteCtrl"
    })
    .otherwise("/");
  })
  .run(Firebasecreds => {
    let creds = Firebasecreds;
    let authConfig = {
      apiKey: creds.key,
      authDomain: creds.authDomain
    };
    firebase.initializeApp(authConfig);
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/LoginCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("LoginCtrl", function ($scope, AuthFctry) {

    $scope.login = () => {
      AuthFctry.authenticateUser($scope.user)
      .then( (returnedUser) => {
        console.log("returned user?", returnedUser);
      });
    };

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/AuthFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("AuthFctry", function ($q, $http) {

    const authenticateUser = ( { email, password } ) => {
      return firebase.auth().signInWithEmailAndPassword(email, password);
    };

    return { authenticateUser };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/NoteFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("NoteFctry", function($q, $http, Firebase) {

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


//--------------------------------------------------------------------------------------------------------------------
// File: ./app/values/firebaseCreds.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict"; 

  module.constant("Firebasecreds", {

    apiKey: "AIzaSyCC-X2NZWNA0doyH8I0C4ATT1A_ZLhtGIY",
    authDomain: "fir-a5a79.firebaseapp.com"

  });

}) (angular.module ('NoteApp', ['ngRoute']));



//====================================================================================================================
// Module:    NoteApp
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  "use strict";

  module
  .constant("Firebase", "https://fir-a5a79.firebaseio.com/")
  .config($routeProvider => {
    $routeProvider
    .when("/register", {
      templateUrl: "../partials/register.html",
      controller: "RegisterCtrl"
    })
    .when("/login", {
      templateUrl: "../partials/log-in.html",
      controller: "LoginCtrl"
    })
    .when("/notes", {
      templateUrl: "../partials/note-list.html",
      controller: "NoteCtrl"
    })
    .when("/new", {
      templateUrl: "../partials/new-note.html",
      controller: "NewNoteCtrl"
    })
    .otherwise("/");
  })
  .run(Firebasecreds => {
    let creds = Firebasecreds;
    let authConfig = {
      apiKey: creds.key,
      authDomain: creds.authDomain
    };
    firebase.initializeApp(authConfig);
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/LoginCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("LoginCtrl", function ($scope, AuthFctry) {

    $scope.login = () => {
      AuthFctry.authenticateUser($scope.user)
      .then( (returnedUser) => {
        console.log("returned user?", returnedUser);
      });
    };

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/AuthFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("AuthFctry", function ($q, $http) {

    const authenticateUser = ( { email, password } ) => {
      return firebase.auth().signInWithEmailAndPassword(email, password);
    };

    return { authenticateUser };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/NoteFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("NoteFctry", function($q, $http, Firebase) {

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


//--------------------------------------------------------------------------------------------------------------------
// File: ./app/values/firebaseCreds.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict"; 

  module.constant("Firebasecreds", {

    apiKey: "AIzaSyCC-X2NZWNA0doyH8I0C4ATT1A_ZLhtGIY",
    authDomain: "fir-a5a79.firebaseapp.com"

  });

}) (angular.module ('NoteApp', ['ngRoute']));



//====================================================================================================================
// Module:    NoteApp
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  "use strict";

  module
  .constant("Firebase", "https://fir-a5a79.firebaseio.com/")
  .config($routeProvider => {
    $routeProvider
    .when("/register", {
      templateUrl: "../partials/register.html",
      controller: "RegisterCtrl"
    })
    .when("/login", {
      templateUrl: "../partials/log-in.html",
      controller: "LoginCtrl"
    })
    .when("/notes", {
      templateUrl: "../partials/note-list.html",
      controller: "NoteCtrl"
    })
    .when("/new", {
      templateUrl: "../partials/new-note.html",
      controller: "NewNoteCtrl"
    })
    .otherwise("/");
  })
  .run(Firebasecreds => {
    let creds = Firebasecreds;
    let authConfig = {
      apiKey: creds.key,
      authDomain: creds.authDomain
    };
    firebase.initializeApp(authConfig);
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/LoginCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("LoginCtrl", function ($scope, AuthFctry) {

    $scope.login = () => {
      AuthFctry.authenticateUser($scope.user)
      .then( (returnedUser) => {
        console.log("returned user?", returnedUser);
      });
    };

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/AuthFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("AuthFctry", function ($q, $http) {

    const authenticateUser = ( { email, password } ) => {
      return firebase.auth().signInWithEmailAndPassword(email, password);
    };

    return { authenticateUser };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/NoteFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("NoteFctry", function($q, $http, Firebase) {

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


//--------------------------------------------------------------------------------------------------------------------
// File: ./app/values/firebaseCreds.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict"; 

  module.constant("Firebasecreds", {

    key: "AIzaSyCC-X2NZWNA0doyH8I0C4ATT1A_ZLhtGIY",
    authDomain: "fir-a5a79.firebaseapp.com"

  });

}) (angular.module ('NoteApp', ['ngRoute']));



//====================================================================================================================
// Module:    NoteApp
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  "use strict";

  module
  .constant("Firebase", "https://fir-a5a79.firebaseio.com/")
  .config($routeProvider => {
    $routeProvider
    .when("/register", {
      templateUrl: "../partials/register.html",
      controller: "RegisterCtrl"
    })
    .when("/login", {
      templateUrl: "../partials/log-in.html",
      controller: "LoginCtrl"
    })
    .when("/notes", {
      templateUrl: "../partials/note-list.html",
      controller: "NoteCtrl"
    })
    .when("/new", {
      templateUrl: "../partials/new-note.html",
      controller: "NewNoteCtrl"
    })
    .otherwise("/");
  })
  .run(Firebasecreds => {
    let creds = Firebasecreds;
    let authConfig = {
      apiKey: creds.key,
      authDomain: creds.authDomain
    };
    firebase.initializeApp(authConfig);
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/LoginCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("LoginCtrl", function ($scope, AuthFctry) {

    $scope.loginUser = () => {
      AuthFctry.authenticateUser($scope.user)
      .then( (returnedUser) => {
        console.log("returned user?", returnedUser);
      });
    };

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/AuthFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("AuthFctry", function ($q, $http) {

    const authenticateUser = ( { email, password } ) => {
      return firebase.auth().signInWithEmailAndPassword(email, password);
    };

    return { authenticateUser };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/NoteFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("NoteFctry", function($q, $http, Firebase) {

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


//--------------------------------------------------------------------------------------------------------------------
// File: ./app/values/firebaseCreds.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict"; 

  module.constant("Firebasecreds", {

    key: "AIzaSyCC-X2NZWNA0doyH8I0C4ATT1A_ZLhtGIY",
    authDomain: "fir-a5a79.firebaseapp.com"

  });

}) (angular.module ('NoteApp', ['ngRoute']));



//====================================================================================================================
// Module:    NoteApp
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  "use strict";

  module
  .constant("Firebase", "https://fir-a5a79.firebaseio.com/")
  .config($routeProvider => {
    $routeProvider
    .when("/register", {
      templateUrl: "../partials/register.html",
      controller: "RegisterCtrl"
    })
    .when("/login", {
      templateUrl: "../partials/log-in.html",
      controller: "LoginCtrl"
    })
    .when("/notes", {
      templateUrl: "../partials/note-list.html",
      controller: "NoteCtrl"
    })
    .when("/new", {
      templateUrl: "../partials/new-note.html",
      controller: "NewNoteCtrl"
    })
    .otherwise("/");
  })
  .run(Firebasecreds => {
    let creds = Firebasecreds;
    let authConfig = {
      apiKey: creds.key,
      authDomain: creds.authDomain
    };
    firebase.initializeApp(authConfig);
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/LoginCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("LoginCtrl", function ($scope, AuthFctry) {

    $scope.loginUser = () => {
      AuthFctry.authenticateUser($scope.user)
      .then( (returnedUser) => {
        console.log("returned user?", returnedUser);
      });
    };

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/AuthFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("AuthFctry", function ($q, $http) {

    const authenticateUser = ( { email, password } ) => {
      return firebase.auth().signInWithEmailAndPassword(email, password);
    };

    const registerUser = ( { email, password } ) => {
      console.log(email, password);
      // return firebase.auth().createUserWithEmailAndPassword(email, password);
    };

    return { authenticateUser };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/NoteFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("NoteFctry", function($q, $http, Firebase) {

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


//--------------------------------------------------------------------------------------------------------------------
// File: ./app/values/firebaseCreds.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict"; 

  module.constant("Firebasecreds", {

    key: "AIzaSyCC-X2NZWNA0doyH8I0C4ATT1A_ZLhtGIY",
    authDomain: "fir-a5a79.firebaseapp.com"

  });

}) (angular.module ('NoteApp', ['ngRoute']));



//====================================================================================================================
// Module:    NoteApp
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  "use strict";

  module
  .constant("Firebase", "https://fir-a5a79.firebaseio.com/")
  .config($routeProvider => {
    $routeProvider
    .when("/register", {
      templateUrl: "../partials/register.html",
      controller: "RegisterCtrl"
    })
    .when("/login", {
      templateUrl: "../partials/log-in.html",
      controller: "LoginCtrl"
    })
    .when("/notes", {
      templateUrl: "../partials/note-list.html",
      controller: "NoteCtrl"
    })
    .when("/new", {
      templateUrl: "../partials/new-note.html",
      controller: "NewNoteCtrl"
    })
    .otherwise("/");
  })
  .run(Firebasecreds => {
    let creds = Firebasecreds;
    let authConfig = {
      apiKey: creds.key,
      authDomain: creds.authDomain
    };
    firebase.initializeApp(authConfig);
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/LoginCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("LoginCtrl", function ($scope, AuthFctry) {

    $scope.loginUser = () => {
      AuthFctry.authenticateUser($scope.user)
      .then( (returnedUser) => {
        console.log("returned user?", returnedUser);
      });
    };

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/AuthFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("AuthFctry", function ($q, $http) {

    const authenticateUser = ( { email, password } ) => {
      return firebase.auth().signInWithEmailAndPassword(email, password);
    };

    const registerUser = ( { email, password } ) => {
      console.log(email, password);
      // return firebase.auth().createUserWithEmailAndPassword(email, password);
    };

    return { authenticateUser, registerUser };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/NoteFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("NoteFctry", function($q, $http, Firebase) {

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


//--------------------------------------------------------------------------------------------------------------------
// File: ./app/values/firebaseCreds.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict"; 

  module.constant("Firebasecreds", {

    key: "AIzaSyCC-X2NZWNA0doyH8I0C4ATT1A_ZLhtGIY",
    authDomain: "fir-a5a79.firebaseapp.com"

  });

}) (angular.module ('NoteApp', ['ngRoute']));



//====================================================================================================================
// Module:    NoteApp
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  "use strict";

  module
  .constant("Firebase", "https://fir-a5a79.firebaseio.com/")
  .config($routeProvider => {
    $routeProvider
    .when("/register", {
      templateUrl: "../partials/register.html",
      controller: "RegisterCtrl"
    })
    .when("/login", {
      templateUrl: "../partials/log-in.html",
      controller: "LoginCtrl"
    })
    .when("/notes", {
      templateUrl: "../partials/note-list.html",
      controller: "NoteCtrl"
    })
    .when("/new", {
      templateUrl: "../partials/new-note.html",
      controller: "NewNoteCtrl"
    })
    .otherwise("/");
  })
  .run(Firebasecreds => {
    let creds = Firebasecreds;
    let authConfig = {
      apiKey: creds.key,
      authDomain: creds.authDomain
    };
    firebase.initializeApp(authConfig);
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/LoginCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("LoginCtrl", function ($scope, AuthFctry) {

    $scope.loginUser = () => {
      AuthFctry.authenticateUser($scope.user)
      .then( (returnedUser) => {
        console.log("returned user?", returnedUser);
      });
    };

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/RegisterCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("RegisterCtrl", function($scope, AuthFctry) {

    $scope.registerUser = () => {
      AuthFctry.registerUserCreds($scope.user);
    };

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/AuthFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("AuthFctry", function ($q, $http) {

    const authenticateUser = ( { email, password } ) => {
      return firebase.auth().signInWithEmailAndPassword(email, password);
    };

    const registerUserCreds = ( { email, password } ) => {
      console.log(email, password);
      // return firebase.auth().createUserWithEmailAndPassword(email, password);
    };

    return { authenticateUser, registerUserCreds };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/NoteFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("NoteFctry", function($q, $http, Firebase) {

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


//--------------------------------------------------------------------------------------------------------------------
// File: ./app/values/firebaseCreds.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict"; 

  module.constant("Firebasecreds", {

    key: "AIzaSyCC-X2NZWNA0doyH8I0C4ATT1A_ZLhtGIY",
    authDomain: "fir-a5a79.firebaseapp.com"

  });

}) (angular.module ('NoteApp', ['ngRoute']));



//====================================================================================================================
// Module:    NoteApp
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  "use strict";

  module
  .constant("Firebase", "https://fir-a5a79.firebaseio.com/")
  .config($routeProvider => {
    $routeProvider
    .when("/register", {
      templateUrl: "../partials/register.html",
      controller: "RegisterCtrl"
    })
    .when("/login", {
      templateUrl: "../partials/log-in.html",
      controller: "LoginCtrl"
    })
    .when("/notes", {
      templateUrl: "../partials/note-list.html",
      controller: "NoteCtrl"
    })
    .when("/new", {
      templateUrl: "../partials/new-note.html",
      controller: "NewNoteCtrl"
    })
    .otherwise("/");
  })
  .run(Firebasecreds => {
    let creds = Firebasecreds;
    let authConfig = {
      apiKey: creds.key,
      authDomain: creds.authDomain
    };
    firebase.initializeApp(authConfig);
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/LoginCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("LoginCtrl", function ($scope, AuthFctry) {

    $scope.loginUser = () => {
      AuthFctry.authenticateUser($scope.user)
      .then( (returnedUser) => {
        console.log("returned user?", returnedUser);
      });
    };

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/RegisterCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("RegisterCtrl", function($scope, AuthFctry) {

    $scope.registerUser = () => {
      AuthFctry.registerUserCreds($scope.user);
    };

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/AuthFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("AuthFctry", function ($q, $http) {

    const authenticateUser = ( { email, password } ) => {
      return firebase.auth().signInWithEmailAndPassword(email, password);
    };

    const registerUserCreds = ( { email, password } ) => {
      return firebase.auth().createUserWithEmailAndPassword(email, password);
    };

    return { authenticateUser, registerUserCreds };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/NoteFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("NoteFctry", function($q, $http, Firebase) {

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


//--------------------------------------------------------------------------------------------------------------------
// File: ./app/values/firebaseCreds.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict"; 

  module.constant("Firebasecreds", {

    key: "AIzaSyCC-X2NZWNA0doyH8I0C4ATT1A_ZLhtGIY",
    authDomain: "fir-a5a79.firebaseapp.com"

  });

}) (angular.module ('NoteApp', ['ngRoute']));



//====================================================================================================================
// Module:    NoteApp
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  "use strict";

  module
  .constant("Firebase", "https://fir-a5a79.firebaseio.com/")
  .config($routeProvider => {
    $routeProvider
    .when("/register", {
      templateUrl: "../partials/register.html",
      controller: "RegisterCtrl"
    })
    .when("/login", {
      templateUrl: "../partials/log-in.html",
      controller: "LoginCtrl"
    })
    .when("/notes", {
      templateUrl: "../partials/note-list.html",
      controller: "NoteCtrl"
    })
    .when("/new", {
      templateUrl: "../partials/new-note.html",
      controller: "NewNoteCtrl"
    })
    .otherwise("/");
  })
  .run(Firebasecreds => {
    let creds = Firebasecreds;
    let authConfig = {
      apiKey: creds.key,
      authDomain: creds.authDomain
    };
    firebase.initializeApp(authConfig);
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/LoginCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("LoginCtrl", function ($scope, AuthFctry) {

    $scope.loginUser = () => {
      AuthFctry.authenticateUser($scope.user)
      .then( (returnedUser) => {
        console.log("returned user?", returnedUser);
      });
    };

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/RegisterCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("RegisterCtrl", function($scope, AuthFctry) {

    $scope.registerUser = () => {
      AuthFctry.registerUserCreds($scope.user)
      .then( (returnedUser) => {
        console.log("user?", returnedUser);
      });
    };

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/AuthFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("AuthFctry", function ($q, $http) {

    const authenticateUser = ( { email, password } ) => {
      return firebase.auth().signInWithEmailAndPassword(email, password);
    };

    const registerUserCreds = ( { email, password } ) => {
      return firebase.auth().createUserWithEmailAndPassword(email, password);
    };

    return { authenticateUser, registerUserCreds };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/NoteFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("NoteFctry", function($q, $http, Firebase) {

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


//--------------------------------------------------------------------------------------------------------------------
// File: ./app/values/firebaseCreds.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict"; 

  module.constant("Firebasecreds", {

    key: "AIzaSyCC-X2NZWNA0doyH8I0C4ATT1A_ZLhtGIY",
    authDomain: "fir-a5a79.firebaseapp.com"

  });

}) (angular.module ('NoteApp', ['ngRoute']));



//====================================================================================================================
// Module:    NoteApp
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  "use strict";

  module
  .constant("Firebase", "https://fir-a5a79.firebaseio.com/")
  .config($routeProvider => {
    $routeProvider
    .when("/register", {
      templateUrl: "../partials/register.html",
      controller: "RegisterCtrl"
    })
    .when("/login", {
      templateUrl: "../partials/log-in.html",
      controller: "LoginCtrl"
    })
    .when("/notes", {
      templateUrl: "../partials/note-list.html",
      controller: "NoteCtrl"
    })
    .when("/new", {
      templateUrl: "../partials/new-note.html",
      controller: "NewNoteCtrl"
    })
    .otherwise("/");
  })
  .run(Firebasecreds => {
    let creds = Firebasecreds;
    let authConfig = {
      apiKey: creds.key,
      authDomain: creds.authDomain
    };
    firebase.initializeApp(authConfig);
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/LoginCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("LoginCtrl", function ($scope, AuthFctry) {

    $scope.loginUser = () => {
      AuthFctry.authenticateUser($scope.user)
      .then( (returnedUser) => {
        console.log("returned user?", returnedUser);
      });
    };

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/RegisterCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("RegisterCtrl", function($scope, AuthFctry, $window) {

    $scope.registerUser = () => {
      AuthFctry.registerUserCreds($scope.user)
      .then( (returnedUser) => {
        console.log("user?", returnedUser);
      });
    };

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/AuthFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("AuthFctry", function ($q, $http) {

    const authenticateUser = ( { email, password } ) => {
      return firebase.auth().signInWithEmailAndPassword(email, password);
    };

    const registerUserCreds = ( { email, password } ) => {
      return firebase.auth().createUserWithEmailAndPassword(email, password);
    };

    return { authenticateUser, registerUserCreds };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/NoteFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("NoteFctry", function($q, $http, Firebase) {

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


//--------------------------------------------------------------------------------------------------------------------
// File: ./app/values/firebaseCreds.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict"; 

  module.constant("Firebasecreds", {

    key: "AIzaSyCC-X2NZWNA0doyH8I0C4ATT1A_ZLhtGIY",
    authDomain: "fir-a5a79.firebaseapp.com"

  });

}) (angular.module ('NoteApp', ['ngRoute']));



//====================================================================================================================
// Module:    NoteApp
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  "use strict";

  module
  .constant("Firebase", "https://fir-a5a79.firebaseio.com/")
  .config($routeProvider => {
    $routeProvider
    .when("/register", {
      templateUrl: "../partials/register.html",
      controller: "RegisterCtrl"
    })
    .when("/login", {
      templateUrl: "../partials/log-in.html",
      controller: "LoginCtrl"
    })
    .when("/notes", {
      templateUrl: "../partials/note-list.html",
      controller: "NoteCtrl"
    })
    .when("/new", {
      templateUrl: "../partials/new-note.html",
      controller: "NewNoteCtrl"
    })
    .otherwise("/");
  })
  .run(Firebasecreds => {
    let creds = Firebasecreds;
    let authConfig = {
      apiKey: creds.key,
      authDomain: creds.authDomain
    };
    firebase.initializeApp(authConfig);
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/LoginCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("LoginCtrl", function ($scope, AuthFctry) {

    $scope.loginUser = () => {
      AuthFctry.authenticateUser($scope.user)
      .then( (returnedUser) => {
        console.log("returned user?", returnedUser);
      });
    };

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/RegisterCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("RegisterCtrl", function($scope, AuthFctry, $window) {

    $scope.registerUser = () => {
      AuthFctry.registerUserCreds($scope.user)
      .then( (returnedUser) => {
        console.log("user?", returnedUser);
        $window.location.href="#!/notes";
      });
    };

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/AuthFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("AuthFctry", function ($q, $http) {

    const authenticateUser = ( { email, password } ) => {
      return firebase.auth().signInWithEmailAndPassword(email, password);
    };

    const registerUserCreds = ( { email, password } ) => {
      return firebase.auth().createUserWithEmailAndPassword(email, password);
    };

    return { authenticateUser, registerUserCreds };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/NoteFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("NoteFctry", function($q, $http, Firebase) {

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


//--------------------------------------------------------------------------------------------------------------------
// File: ./app/values/firebaseCreds.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict"; 

  module.constant("Firebasecreds", {

    key: "AIzaSyCC-X2NZWNA0doyH8I0C4ATT1A_ZLhtGIY",
    authDomain: "fir-a5a79.firebaseapp.com"

  });

}) (angular.module ('NoteApp', ['ngRoute']));



//====================================================================================================================
// Module:    NoteApp
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  "use strict";

  module
  .constant("Firebase", "https://fir-a5a79.firebaseio.com/")
  .config($routeProvider => {
    $routeProvider
    .when("/register", {
      templateUrl: "../partials/register.html",
      controller: "RegisterCtrl"
    })
    .when("/login", {
      templateUrl: "../partials/log-in.html",
      controller: "LoginCtrl"
    })
    .when("/notes", {
      templateUrl: "../partials/note-list.html",
      controller: "NoteCtrl"
    })
    .when("/new", {
      templateUrl: "../partials/new-note.html",
      controller: "NewNoteCtrl"
    })
    .otherwise("/");
  })
  .run(Firebasecreds => {
    let creds = Firebasecreds;
    let authConfig = {
      apiKey: creds.key,
      authDomain: creds.authDomain
    };
    firebase.initializeApp(authConfig);
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/LoginCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("LoginCtrl", function ($scope, AuthFctry) {

    $scope.loginUser = () => {
      AuthFctry.authenticateUser($scope.user)
      .then( (returnedUser) => {
        console.log("returned user?", returnedUser);
      });
    };

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/RegisterCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("RegisterCtrl", function($scope, AuthFctry, $window) {

    $scope.registerUser = () => {
      AuthFctry.registerUserCreds($scope.user)
      .then( (returnedUser) => {
        console.log("user?", returnedUser);
        $window.location.href="#!/new";
      });
    };

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/AuthFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("AuthFctry", function ($q, $http) {

    const authenticateUser = ( { email, password } ) => {
      return firebase.auth().signInWithEmailAndPassword(email, password);
    };

    const registerUserCreds = ( { email, password } ) => {
      return firebase.auth().createUserWithEmailAndPassword(email, password);
    };

    return { authenticateUser, registerUserCreds };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/NoteFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("NoteFctry", function($q, $http, Firebase) {

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


//--------------------------------------------------------------------------------------------------------------------
// File: ./app/values/firebaseCreds.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict"; 

  module.constant("Firebasecreds", {

    key: "AIzaSyCC-X2NZWNA0doyH8I0C4ATT1A_ZLhtGIY",
    authDomain: "fir-a5a79.firebaseapp.com"

  });

}) (angular.module ('NoteApp', ['ngRoute']));



//====================================================================================================================
// Module:    NoteApp
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  "use strict";

  module
  .constant("Firebase", "https://fir-a5a79.firebaseio.com/")
  .config($routeProvider => {
    $routeProvider
    .when("/register", {
      templateUrl: "../partials/register.html",
      controller: "RegisterCtrl"
    })
    .when("/login", {
      templateUrl: "../partials/log-in.html",
      controller: "LoginCtrl"
    })
    .when("/notes", {
      templateUrl: "../partials/note-list.html",
      controller: "NoteCtrl"
    })
    .when("/new", {
      templateUrl: "../partials/new-note.html",
      controller: "NewNoteCtrl"
    })
    .otherwise("/");
  })
  .run(Firebasecreds => {
    let creds = Firebasecreds;
    let authConfig = {
      apiKey: creds.key,
      authDomain: creds.authDomain
    };
    firebase.initializeApp(authConfig);
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/LoginCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("LoginCtrl", function ($scope, AuthFctry) {

    $scope.loginUser = () => {
      AuthFctry.authenticateUser($scope.user)
      .then( (returnedUser) => {
        console.log("returned user?", returnedUser);
      });
    };

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/RegisterCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("RegisterCtrl", function($scope, AuthFctry, $window) {

    $scope.registerUser = () => {
      AuthFctry.registerUserCreds($scope.user)
      .then( (returnedUser) => {
        $window.location.href="#!/new";
      });
    };

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/AuthFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("AuthFctry", function ($q, $http) {

    const authenticateUser = ( { email, password } ) => {
      return firebase.auth().signInWithEmailAndPassword(email, password);
    };

    const registerUserCreds = ( { email, password } ) => {
      return firebase.auth().createUserWithEmailAndPassword(email, password);
    };

    return { authenticateUser, registerUserCreds };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/NoteFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("NoteFctry", function($q, $http, Firebase) {

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


//--------------------------------------------------------------------------------------------------------------------
// File: ./app/values/firebaseCreds.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict"; 

  module.constant("Firebasecreds", {

    key: "AIzaSyCC-X2NZWNA0doyH8I0C4ATT1A_ZLhtGIY",
    authDomain: "fir-a5a79.firebaseapp.com"

  });

}) (angular.module ('NoteApp', ['ngRoute']));



//====================================================================================================================
// Module:    NoteApp
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  "use strict";

  module
  .constant("Firebase", "https://fir-a5a79.firebaseio.com/")
  .config($routeProvider => {
    $routeProvider
    .when("/register", {
      templateUrl: "../partials/register.html",
      controller: "RegisterCtrl"
    })
    .when("/login", {
      templateUrl: "../partials/log-in.html",
      controller: "LoginCtrl"
    })
    .when("/notes", {
      templateUrl: "../partials/note-list.html",
      controller: "NoteCtrl"
    })
    .when("/new", {
      templateUrl: "../partials/new-note.html",
      controller: "NewNoteCtrl"
    })
    .otherwise("/");
  })
  .run(Firebasecreds => {
    let creds = Firebasecreds;
    let authConfig = {
      apiKey: creds.key,
      authDomain: creds.authDomain
    };
    firebase.initializeApp(authConfig);
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/RegisterCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("RegisterCtrl", function($scope, AuthFctry, $window) {

    $scope.registerUser = () => {
      AuthFctry.registerUserCreds($scope.user)
      .then( (returnedUser) => {
        $window.location.href="#!/new";
      });
    };

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/UserStateCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("LoginCtrl", function ($scope, AuthFctry) {

    $scope.loginUser = () => {
      AuthFctry.authenticateUser($scope.user)
      .then( (returnedUser) => {
        console.log("returned user?", returnedUser);
      });
    };

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/AuthFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("AuthFctry", function ($q, $http) {

    const authenticateUser = ( { email, password } ) => {
      return firebase.auth().signInWithEmailAndPassword(email, password);
    };

    const registerUserCreds = ( { email, password } ) => {
      return firebase.auth().createUserWithEmailAndPassword(email, password);
    };

    return { authenticateUser, registerUserCreds };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/NoteFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("NoteFctry", function($q, $http, Firebase) {

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


//--------------------------------------------------------------------------------------------------------------------
// File: ./app/values/firebaseCreds.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict"; 

  module.constant("Firebasecreds", {

    key: "AIzaSyCC-X2NZWNA0doyH8I0C4ATT1A_ZLhtGIY",
    authDomain: "fir-a5a79.firebaseapp.com"

  });

}) (angular.module ('NoteApp', ['ngRoute']));



//====================================================================================================================
// Module:    NoteApp
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  "use strict";

  module
  .constant("Firebase", "https://fir-a5a79.firebaseio.com/")
  .config($routeProvider => {
    $routeProvider
    .when("/register", {
      templateUrl: "../partials/register.html",
      controller: "RegisterCtrl"
    })
    .when("/login", {
      templateUrl: "../partials/log-in.html",
      controller: "LoginCtrl"
    })
    .when("/notes", {
      templateUrl: "../partials/note-list.html",
      controller: "NoteCtrl"
    })
    .when("/new", {
      templateUrl: "../partials/new-note.html",
      controller: "NewNoteCtrl"
    })
    .otherwise("/");
  })
  .run(Firebasecreds => {
    let creds = Firebasecreds;
    let authConfig = {
      apiKey: creds.key,
      authDomain: creds.authDomain
    };
    firebase.initializeApp(authConfig);
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/RegisterCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("UserStateCtrl", function($scope, AuthFctry, $window) {

    $scope.registerUser = () => {
      AuthFctry.registerUserCreds($scope.user)
      .then( (returnedUser) => {
        $window.location.href="#!/new";
      });
    };

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/UserStateCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("LoginCtrl", function ($scope, AuthFctry) {

    $scope.loginUser = () => {
      AuthFctry.authenticateUser($scope.user)
      .then( (returnedUser) => {
        console.log("returned user?", returnedUser);
      });
    };

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/AuthFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("AuthFctry", function ($q, $http) {

    const authenticateUser = ( { email, password } ) => {
      return firebase.auth().signInWithEmailAndPassword(email, password);
    };

    const registerUserCreds = ( { email, password } ) => {
      return firebase.auth().createUserWithEmailAndPassword(email, password);
    };

    return { authenticateUser, registerUserCreds };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/NoteFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("NoteFctry", function($q, $http, Firebase) {

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


//--------------------------------------------------------------------------------------------------------------------
// File: ./app/values/firebaseCreds.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict"; 

  module.constant("Firebasecreds", {

    key: "AIzaSyCC-X2NZWNA0doyH8I0C4ATT1A_ZLhtGIY",
    authDomain: "fir-a5a79.firebaseapp.com"

  });

}) (angular.module ('NoteApp', ['ngRoute']));



//====================================================================================================================
// Module:    NoteApp
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  "use strict";

  module
  .constant("Firebase", "https://fir-a5a79.firebaseio.com/")
  .config($routeProvider => {
    $routeProvider
    .when("/register", {
      templateUrl: "../partials/register.html",
      controller: "RegisterCtrl"
    })
    .when("/login", {
      templateUrl: "../partials/log-in.html",
      controller: "UserStateCtrl"
    })
    .when("/notes", {
      templateUrl: "../partials/note-list.html",
      controller: "NoteCtrl"
    })
    .when("/new", {
      templateUrl: "../partials/new-note.html",
      controller: "NewNoteCtrl"
    })
    .otherwise("/");
  })
  .run(Firebasecreds => {
    let creds = Firebasecreds;
    let authConfig = {
      apiKey: creds.key,
      authDomain: creds.authDomain
    };
    firebase.initializeApp(authConfig);
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/RegisterCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("UserStateCtrl", function($scope, AuthFctry, $window) {

    $scope.registerUser = () => {
      AuthFctry.registerUserCreds($scope.user)
      .then( (returnedUser) => {
        $window.location.href="#!/new";
      });
    };

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/UserStateCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("LoginCtrl", function ($scope, AuthFctry) {

    $scope.loginUser = () => {
      AuthFctry.authenticateUser($scope.user)
      .then( (returnedUser) => {
        console.log("returned user?", returnedUser);
      });
    };

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/AuthFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("AuthFctry", function ($q, $http) {

    const authenticateUser = ( { email, password } ) => {
      return firebase.auth().signInWithEmailAndPassword(email, password);
    };

    const registerUserCreds = ( { email, password } ) => {
      return firebase.auth().createUserWithEmailAndPassword(email, password);
    };

    return { authenticateUser, registerUserCreds };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/NoteFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("NoteFctry", function($q, $http, Firebase) {

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


//--------------------------------------------------------------------------------------------------------------------
// File: ./app/values/firebaseCreds.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict"; 

  module.constant("Firebasecreds", {

    key: "AIzaSyCC-X2NZWNA0doyH8I0C4ATT1A_ZLhtGIY",
    authDomain: "fir-a5a79.firebaseapp.com"

  });

}) (angular.module ('NoteApp', ['ngRoute']));


