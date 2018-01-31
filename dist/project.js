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
// File: ./app/controllers/NavCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("NavCtrl", function($scope, AuthFctry) {

    $scope.logoutUser = () => {
      console.log("clicked");
    };

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
// File: ./app/controllers/NavCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("NavCtrl", function($scope, AuthFctry) {

    $scope.logoutUser = () => {
      console.log("clicked");
      AuthFctry.logoutUserCreds();
    };

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
// File: ./app/controllers/NavCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("NavCtrl", function($scope, AuthFctry) {

    $scope.logoutUser = () => {
      console.log("clicked");
      AuthFctry.logoutUserCreds();
    };

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
      AuthFctry.authenticateUserCreds($scope.user)
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

    const authenticateUserCreds = ( { email, password } ) => {
      return firebase.auth().signInWithEmailAndPassword(email, password);
    };

    const registerUserCreds = ( { email, password } ) => {
      return firebase.auth().createUserWithEmailAndPassword(email, password);
    };

    const logoutUserCreds = () => {
      return firebase.auth().signOut();
    };

    return { authenticateUserCreds, registerUserCreds, logoutUserCreds };
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
// File: ./app/controllers/NavCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("NavCtrl", function($scope, AuthFctry) {

    $scope.logoutUser = () => {
      console.log("clicked");
      AuthFctry.logoutUserCreds();
    };

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
      AuthFctry.authenticateUserCreds($scope.user)
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

    const authenticateUserCreds = ( { email, password } ) => {
      return firebase.auth().signInWithEmailAndPassword(email, password);
    };

    const registerUserCreds = ( { email, password } ) => {
      return firebase.auth().createUserWithEmailAndPassword(email, password);
    };

    const logoutUserCreds = () => {
      return firebase.auth().signOut();
    };

    return { authenticateUserCreds, registerUserCreds, logoutUserCreds };
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
// File: ./app/controllers/NavCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("NavCtrl", function($scope, AuthFctry, $window) {

    $scope.logoutUser = () => {
      console.log("clicked");
      AuthFctry.logoutUserCreds()
      .then( (returnedUser) => {
        console.log("logged out", returnedUser);
        $window.location.href = "#~/login";
      });
    };

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
      AuthFctry.authenticateUserCreds($scope.user)
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

    const authenticateUserCreds = ( { email, password } ) => {
      return firebase.auth().signInWithEmailAndPassword(email, password);
    };

    const registerUserCreds = ( { email, password } ) => {
      return firebase.auth().createUserWithEmailAndPassword(email, password);
    };

    const logoutUserCreds = () => {
      return firebase.auth().signOut();
    };

    return { authenticateUserCreds, registerUserCreds, logoutUserCreds };
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
// File: ./app/controllers/NavCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("NavCtrl", function($scope, AuthFctry, $window) {

    $scope.logoutUser = () => {
      console.log("clicked");
      AuthFctry.logoutUserCreds()
      .then( (returnedUser) => {
        console.log("logged out", returnedUser);
        $window.location.href = "#!/login";
      });
    };

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
      AuthFctry.authenticateUserCreds($scope.user)
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

    const authenticateUserCreds = ( { email, password } ) => {
      return firebase.auth().signInWithEmailAndPassword(email, password);
    };

    const registerUserCreds = ( { email, password } ) => {
      return firebase.auth().createUserWithEmailAndPassword(email, password);
    };

    const logoutUserCreds = () => {
      return firebase.auth().signOut();
    };

    return { authenticateUserCreds, registerUserCreds, logoutUserCreds };
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
// File: ./app/controllers/NavCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("NavCtrl", function($scope, AuthFctry, $window) {

    $scope.logoutUser = () => {
      console.log("clicked");
      AuthFctry.logoutUserCreds()
      .then( (returnedUser) => {
        console.log("logged out", returnedUser);
        $window.location.href = "#!/login";
      });
    };

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
      AuthFctry.authenticateUserCreds($scope.user)
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

    const authenticateUserCreds = ( { email, password } ) => {
      return firebase.auth().signInWithEmailAndPassword(email, password);
    };

    const registerUserCreds = ( { email, password } ) => {
      return firebase.auth().createUserWithEmailAndPassword(email, password);
    };

    const logoutUserCreds = () => {
      return firebase.auth().signOut();
    };

    return { authenticateUserCreds, registerUserCreds, logoutUserCreds };
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
// File: ./app/controllers/NavCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("NavCtrl", function($scope, AuthFctry, $window) {

    $scope.logoutUser = () => {
      console.log("clicked");
      AuthFctry.logoutUserCreds()
      .then( (returnedUser) => {
        console.log("logged out", returnedUser);
        $window.location.href = "#!/login";
      });
    };

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

  module.controller("UserStateCtrl", function ($scope, AuthFctry) {

    $scope.loginUser = () => {
      AuthFctry.authenticateUserCreds($scope.user)
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

    const authenticateUserCreds = ( { email, password } ) => {
      return firebase.auth().signInWithEmailAndPassword(email, password);
    };

    const registerUserCreds = ( { email, password } ) => {
      return firebase.auth().createUserWithEmailAndPassword(email, password);
    };

    const logoutUserCreds = () => {
      return firebase.auth().signOut();
    };

    return { authenticateUserCreds, registerUserCreds, logoutUserCreds };
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
// File: ./app/controllers/NavCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("NavCtrl", function($scope, AuthFctry, $window) {

    $scope.logoutUser = () => {
      console.log("clicked");
      AuthFctry.logoutUserCreds()
      .then( (returnedUser) => {
        console.log("logged out", returnedUser);
        $window.location.href = "#!/login";
      });
    };

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

  module.controller("UserStateCtrl", function ($scope, AuthFctry) {

    $scope.loginUser = () => {
      AuthFctry.authenticateUserCreds($scope.user)
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

    const authenticateUserCreds = ( { email, password } ) => {
      return firebase.auth().signInWithEmailAndPassword(email, password);
    };

    const registerUserCreds = ( { email, password } ) => {
      return firebase.auth().createUserWithEmailAndPassword(email, password);
    };

    const logoutUserCreds = () => {
      return firebase.auth().signOut();
    };

    return { authenticateUserCreds, registerUserCreds, logoutUserCreds };
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
// File: ./app/controllers/NavCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("NavCtrl", function($scope, AuthFctry, $window) {

    $scope.logoutUser = () => {
      console.log("clicked");
      AuthFctry.logoutUserCreds()
      .then( (returnedUser) => {
        console.log("logged out", firebase.auth().currentUser.uid);
        $window.location.href = "#!/login";
      });
    };

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

  module.controller("UserStateCtrl", function ($scope, AuthFctry) {

    $scope.loginUser = () => {
      AuthFctry.authenticateUserCreds($scope.user)
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

    const authenticateUserCreds = ( { email, password } ) => {
      return firebase.auth().signInWithEmailAndPassword(email, password);
    };

    const registerUserCreds = ( { email, password } ) => {
      return firebase.auth().createUserWithEmailAndPassword(email, password);
    };

    const logoutUserCreds = () => {
      return firebase.auth().signOut();
    };

    return { authenticateUserCreds, registerUserCreds, logoutUserCreds };
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
// File: ./app/controllers/NavCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("NavCtrl", function($scope, AuthFctry, $window) {

    $scope.logoutUser = () => {
      console.log("clicked");
      AuthFctry.logoutUserCreds()
      .then( (returnedUser) => {
        console.log("logged out", firebase.auth().currentUser);
        $window.location.href = "#!/login";
      });
    };

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

  module.controller("UserStateCtrl", function ($scope, AuthFctry) {

    $scope.loginUser = () => {
      AuthFctry.authenticateUserCreds($scope.user)
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

    const authenticateUserCreds = ( { email, password } ) => {
      return firebase.auth().signInWithEmailAndPassword(email, password);
    };

    const registerUserCreds = ( { email, password } ) => {
      return firebase.auth().createUserWithEmailAndPassword(email, password);
    };

    const logoutUserCreds = () => {
      return firebase.auth().signOut();
    };

    return { authenticateUserCreds, registerUserCreds, logoutUserCreds };
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
// File: ./app/controllers/NavCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("NavCtrl", function($scope, AuthFctry, $window) {

    $scope.logoutUser = () => {
      console.log("clicked");
      AuthFctry.logoutUserCreds()
      .then( (returnedUser) => {
        console.log("logged out", firebase.auth().currentUser);
        $window.location.href="#!/login";
      });
    };

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

  module.controller("UserStateCtrl", function ($scope, AuthFctry) {

    $scope.loginUser = () => {
      AuthFctry.authenticateUserCreds($scope.user)
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

    const authenticateUserCreds = ( { email, password } ) => {
      return firebase.auth().signInWithEmailAndPassword(email, password);
    };

    const registerUserCreds = ( { email, password } ) => {
      return firebase.auth().createUserWithEmailAndPassword(email, password);
    };

    const logoutUserCreds = () => {
      return firebase.auth().signOut();
    };

    return { authenticateUserCreds, registerUserCreds, logoutUserCreds };
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
// File: ./app/controllers/NavCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("NavCtrl", function($scope, AuthFctry, $window) {

    $scope.logoutUser = () => {
      console.log("clicked");
      AuthFctry.logoutUserCreds()
      .then( (returnedUser) => {
        console.log("logged out", firebase.auth().currentUser);
        $window.location.href="#!/login";
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
// File: ./app/controllers/UserStateCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("UserStateCtrl", function ($scope, AuthFctry) {

    $scope.loginUser = () => {
      AuthFctry.authenticateUserCreds($scope.user)
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

    const authenticateUserCreds = ( { email, password } ) => {
      return firebase.auth().signInWithEmailAndPassword(email, password);
    };

    const registerUserCreds = ( { email, password } ) => {
      return firebase.auth().createUserWithEmailAndPassword(email, password);
    };

    const logoutUserCreds = () => {
      return firebase.auth().signOut();
    };

    return { authenticateUserCreds, registerUserCreds, logoutUserCreds };
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
// File: ./app/controllers/NavCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("NavCtrl", function($scope, AuthFctry, $window) {

    $scope.logoutUser = () => {
      console.log("clicked");
      AuthFctry.logoutUserCreds()
      .then( (returnedUser) => {
        console.log("logged out", firebase.auth().currentUser);
        $window.location.href="#!/login";
      });
    };

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/NotesCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("NotesCtrl", function($scope, NoteFctry) { 

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

  module.controller("UserStateCtrl", function ($scope, AuthFctry) {

    $scope.loginUser = () => {
      AuthFctry.authenticateUserCreds($scope.user)
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

    const authenticateUserCreds = ( { email, password } ) => {
      return firebase.auth().signInWithEmailAndPassword(email, password);
    };

    const registerUserCreds = ( { email, password } ) => {
      return firebase.auth().createUserWithEmailAndPassword(email, password);
    };

    const logoutUserCreds = () => {
      return firebase.auth().signOut();
    };

    return { authenticateUserCreds, registerUserCreds, logoutUserCreds };
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
// File: ./app/controllers/NavCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("NavCtrl", function($scope, AuthFctry, $window) {

    $scope.logoutUser = () => {
      console.log("clicked");
      AuthFctry.logoutUserCreds()
      .then( (returnedUser) => {
        console.log("logged out", firebase.auth().currentUser);
        $window.location.href="#!/login";
      });
    };

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/NotesCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("NotesCtrl", function($scope, NoteFctry) { 

    NoteFctry.getUserNotes()
    .then( (userNotes) => {
      console.log(userNotes, "for printing");
    });

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

  module.controller("UserStateCtrl", function ($scope, AuthFctry) {

    $scope.loginUser = () => {
      AuthFctry.authenticateUserCreds($scope.user)
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

    const authenticateUserCreds = ( { email, password } ) => {
      return firebase.auth().signInWithEmailAndPassword(email, password);
    };

    const registerUserCreds = ( { email, password } ) => {
      return firebase.auth().createUserWithEmailAndPassword(email, password);
    };

    const logoutUserCreds = () => {
      return firebase.auth().signOut();
    };

    return { authenticateUserCreds, registerUserCreds, logoutUserCreds };
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
// File: ./app/controllers/NavCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("NavCtrl", function($scope, AuthFctry, $window) {

    $scope.logoutUser = () => {
      console.log("clicked");
      AuthFctry.logoutUserCreds()
      .then( (returnedUser) => {
        console.log("logged out", firebase.auth().currentUser);
        $window.location.href="#!/login";
      });
    };

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/NotesCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("NotesCtrl", function($scope, NoteFctry) { 

    NoteFctry.getUserNotes()
    .then( (userNotes) => {
      console.log(userNotes, "for printing");
    });

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

  module.controller("UserStateCtrl", function ($scope, AuthFctry) {

    $scope.loginUser = () => {
      AuthFctry.authenticateUserCreds($scope.user)
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

    const authenticateUserCreds = ( { email, password } ) => {
      return firebase.auth().signInWithEmailAndPassword(email, password);
    };

    const registerUserCreds = ( { email, password } ) => {
      return firebase.auth().createUserWithEmailAndPassword(email, password);
    };

    const logoutUserCreds = () => {
      return firebase.auth().signOut();
    };

    return { authenticateUserCreds, registerUserCreds, logoutUserCreds };
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
// File: ./app/controllers/NavCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("NavCtrl", function($scope, AuthFctry, $window) {

    $scope.logoutUser = () => {
      console.log("clicked");
      AuthFctry.logoutUserCreds()
      .then( (returnedUser) => {
        console.log("logged out", firebase.auth().currentUser);
        $window.location.href="#!/login";
      });
    };

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/NotesCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("NoteCtrl", function($scope, NoteFctry) { 

    NoteFctry.getUserNotes()
    .then( (userNotes) => {
      console.log(userNotes, "for printing");
    });

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

  module.controller("UserStateCtrl", function ($scope, AuthFctry) {

    $scope.loginUser = () => {
      AuthFctry.authenticateUserCreds($scope.user)
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

    const authenticateUserCreds = ( { email, password } ) => {
      return firebase.auth().signInWithEmailAndPassword(email, password);
    };

    const registerUserCreds = ( { email, password } ) => {
      return firebase.auth().createUserWithEmailAndPassword(email, password);
    };

    const logoutUserCreds = () => {
      return firebase.auth().signOut();
    };

    return { authenticateUserCreds, registerUserCreds, logoutUserCreds };
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
// File: ./app/controllers/NavCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("NavCtrl", function($scope, AuthFctry, $window) {

    $scope.logoutUser = () => {
      console.log("clicked");
      AuthFctry.logoutUserCreds()
      .then( (returnedUser) => {
        console.log("logged out", firebase.auth().currentUser);
        $window.location.href="#!/login";
      });
    };

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/NotesCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("NoteCtrl", function($scope, NoteFctry) { 

    NoteFctry.getUserNotes()
    .then( (userNotes) => {
      console.log(userNotes, "for printing");
    });

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

  module.controller("UserStateCtrl", function ($scope, AuthFctry) {

    $scope.loginUser = () => {
      AuthFctry.authenticateUserCreds($scope.user)
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

    const authenticateUserCreds = ( { email, password } ) => {
      return firebase.auth().signInWithEmailAndPassword(email, password);
    };

    const registerUserCreds = ( { email, password } ) => {
      return firebase.auth().createUserWithEmailAndPassword(email, password);
    };

    const logoutUserCreds = () => {
      return firebase.auth().signOut();
    };

    return { authenticateUserCreds, registerUserCreds, logoutUserCreds };
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
          resolve(data);
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
// File: ./app/controllers/NavCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("NavCtrl", function($scope, AuthFctry, $window) {

    $scope.logoutUser = () => {
      console.log("clicked");
      AuthFctry.logoutUserCreds()
      .then( (returnedUser) => {
        console.log("logged out", firebase.auth().currentUser);
        $window.location.href="#!/login";
      });
    };

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/NotesCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("NoteCtrl", function($scope, NoteFctry) { 

    NoteFctry.getUserNotes()
    .then( (userNotes) => {
      console.log(userNotes, "for printing");
    });

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

  module.controller("UserStateCtrl", function ($scope, AuthFctry) {

    $scope.loginUser = () => {
      AuthFctry.authenticateUserCreds($scope.user)
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

    const authenticateUserCreds = ( { email, password } ) => {
      return firebase.auth().signInWithEmailAndPassword(email, password);
    };

    const registerUserCreds = ( { email, password } ) => {
      return firebase.auth().createUserWithEmailAndPassword(email, password);
    };

    const logoutUserCreds = () => {
      return firebase.auth().signOut();
    };

    return { authenticateUserCreds, registerUserCreds, logoutUserCreds };
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
          resolve(data);
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
// File: ./app/controllers/NavCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("NavCtrl", function($scope, AuthFctry, $window) {

    $scope.logoutUser = () => {
      console.log("clicked");
      AuthFctry.logoutUserCreds()
      .then( (returnedUser) => {
        console.log("logged out", firebase.auth().currentUser);
        $window.location.href="#!/login";
      });
    };

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/NewNoteCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("NewNoteCtrl", function($scope, NoteFctry) {

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/NotesCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("NoteCtrl", function($scope, NoteFctry) { 

    NoteFctry.getUserNotes()
    .then( (userNotes) => {
      console.log(userNotes, "for printing");
    });

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

  module.controller("UserStateCtrl", function ($scope, AuthFctry) {

    $scope.loginUser = () => {
      AuthFctry.authenticateUserCreds($scope.user)
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

    const authenticateUserCreds = ( { email, password } ) => {
      return firebase.auth().signInWithEmailAndPassword(email, password);
    };

    const registerUserCreds = ( { email, password } ) => {
      return firebase.auth().createUserWithEmailAndPassword(email, password);
    };

    const logoutUserCreds = () => {
      return firebase.auth().signOut();
    };

    return { authenticateUserCreds, registerUserCreds, logoutUserCreds };
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
          resolve(data);
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
// File: ./app/controllers/NavCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("NavCtrl", function($scope, AuthFctry, $window) {

    $scope.logoutUser = () => {
      console.log("clicked");
      AuthFctry.logoutUserCreds()
      .then( (returnedUser) => {
        console.log("logged out", firebase.auth().currentUser);
        $window.location.href="#!/login";
      });
    };

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/NewNoteCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("NewNoteCtrl", function($scope, NoteFctry) {

    $scope.addNote = () => {
      console.log($scope.note);
    };

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/NotesCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("NoteCtrl", function($scope, NoteFctry) { 

    NoteFctry.getUserNotes()
    .then( (userNotes) => {
      console.log(userNotes, "for printing");
    });

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

  module.controller("UserStateCtrl", function ($scope, AuthFctry) {

    $scope.loginUser = () => {
      AuthFctry.authenticateUserCreds($scope.user)
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

    const authenticateUserCreds = ( { email, password } ) => {
      return firebase.auth().signInWithEmailAndPassword(email, password);
    };

    const registerUserCreds = ( { email, password } ) => {
      return firebase.auth().createUserWithEmailAndPassword(email, password);
    };

    const logoutUserCreds = () => {
      return firebase.auth().signOut();
    };

    return { authenticateUserCreds, registerUserCreds, logoutUserCreds };
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
          resolve(data);
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
// File: ./app/controllers/NavCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("NavCtrl", function($scope, AuthFctry, $window) {

    $scope.logoutUser = () => {
      console.log("clicked");
      AuthFctry.logoutUserCreds()
      .then( (returnedUser) => {
        console.log("logged out", firebase.auth().currentUser);
        $window.location.href="#!/login";
      });
    };

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/NewNoteCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("NewNoteCtrl", function($scope, NoteFctry) {

    $scope.addNote = () => {
      console.log(firebase.auth().currentUser);
      console.log($scope.note);
    };

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/NotesCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("NoteCtrl", function($scope, NoteFctry) { 

    NoteFctry.getUserNotes()
    .then( (userNotes) => {
      console.log(userNotes, "for printing");
    });

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

  module.controller("UserStateCtrl", function ($scope, AuthFctry) {

    $scope.loginUser = () => {
      AuthFctry.authenticateUserCreds($scope.user)
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

    const authenticateUserCreds = ( { email, password } ) => {
      return firebase.auth().signInWithEmailAndPassword(email, password);
    };

    const registerUserCreds = ( { email, password } ) => {
      return firebase.auth().createUserWithEmailAndPassword(email, password);
    };

    const logoutUserCreds = () => {
      return firebase.auth().signOut();
    };

    return { authenticateUserCreds, registerUserCreds, logoutUserCreds };
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
          resolve(data);
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
// File: ./app/controllers/NavCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("NavCtrl", function($scope, AuthFctry, $window) {

    $scope.logoutUser = () => {
      console.log("clicked");
      AuthFctry.logoutUserCreds()
      .then( (returnedUser) => {
        console.log("logged out", firebase.auth().currentUser);
        $window.location.href="#!/login";
      });
    };

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/NewNoteCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("NewNoteCtrl", function($scope, NoteFctry) {

    $scope.addNote = () => {
      console.log(firebase.auth().currentUser.uid);
      console.log($scope.note);
    };

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/NotesCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("NoteCtrl", function($scope, NoteFctry) { 

    NoteFctry.getUserNotes()
    .then( (userNotes) => {
      console.log(userNotes, "for printing");
    });

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

  module.controller("UserStateCtrl", function ($scope, AuthFctry) {

    $scope.loginUser = () => {
      AuthFctry.authenticateUserCreds($scope.user)
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

    const authenticateUserCreds = ( { email, password } ) => {
      return firebase.auth().signInWithEmailAndPassword(email, password);
    };

    const registerUserCreds = ( { email, password } ) => {
      return firebase.auth().createUserWithEmailAndPassword(email, password);
    };

    const logoutUserCreds = () => {
      return firebase.auth().signOut();
    };

    return { authenticateUserCreds, registerUserCreds, logoutUserCreds };
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
          resolve(data);
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
// File: ./app/controllers/NavCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("NavCtrl", function($scope, AuthFctry, $window) {

    $scope.logoutUser = () => {
      console.log("clicked");
      AuthFctry.logoutUserCreds()
      .then( (returnedUser) => {
        console.log("logged out", firebase.auth().currentUser);
        $window.location.href="#!/login";
      });
    };

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/NewNoteCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("NewNoteCtrl", function($scope, NoteFctry) {

    $scope.addNote = () => {
      $scope.note.uid = firebase.auth().currentUser.uid;
      console.log($scope.note);
    };

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/NotesCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("NoteCtrl", function($scope, NoteFctry) { 

    NoteFctry.getUserNotes()
    .then( (userNotes) => {
      console.log(userNotes, "for printing");
    });

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

  module.controller("UserStateCtrl", function ($scope, AuthFctry) {

    $scope.loginUser = () => {
      AuthFctry.authenticateUserCreds($scope.user)
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

    const authenticateUserCreds = ( { email, password } ) => {
      return firebase.auth().signInWithEmailAndPassword(email, password);
    };

    const registerUserCreds = ( { email, password } ) => {
      return firebase.auth().createUserWithEmailAndPassword(email, password);
    };

    const logoutUserCreds = () => {
      return firebase.auth().signOut();
    };

    return { authenticateUserCreds, registerUserCreds, logoutUserCreds };
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
          resolve(data);
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
// File: ./app/controllers/NavCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("NavCtrl", function($scope, AuthFctry, $window) {

    $scope.logoutUser = () => {
      console.log("clicked");
      AuthFctry.logoutUserCreds()
      .then( (returnedUser) => {
        console.log("logged out", firebase.auth().currentUser);
        $window.location.href="#!/login";
      });
    };

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/NewNoteCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("NewNoteCtrl", function($scope, NoteFctry) {

    $scope.addNote = () => {
      $scope.note.uid = firebase.auth().currentUser.uid;
      console.log($scope.note);
    };

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/NotesCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("NoteCtrl", function($scope, NoteFctry) { 

    NoteFctry.getUserNotes()
    .then( (userNotes) => {
      console.log(userNotes, "for printing");
    });

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

  module.controller("UserStateCtrl", function ($scope, AuthFctry) {

    $scope.loginUser = () => {
      AuthFctry.authenticateUserCreds($scope.user)
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

    const authenticateUserCreds = ( { email, password } ) => {
      return firebase.auth().signInWithEmailAndPassword(email, password);
    };

    const registerUserCreds = ( { email, password } ) => {
      return firebase.auth().createUserWithEmailAndPassword(email, password);
    };

    const logoutUserCreds = () => {
      return firebase.auth().signOut();
    };

    return { authenticateUserCreds, registerUserCreds, logoutUserCreds };
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
          resolve(data);
        })
        .catch( (err) => {
          console.log("firebase data err", err);
        });
      });
    };

    const addUserNote = ( newNote ) => {
      console.log(newNote);
      // return $q( (resolve, reject ) => {
      //   $http
      //   .post(`${Firebase}/notes.json`, JSON.stringify(newNote))
      // })
    };

    return { getUserNotes, addUserNote };

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
// File: ./app/controllers/NavCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("NavCtrl", function($scope, AuthFctry, $window) {

    $scope.logoutUser = () => {
      console.log("clicked");
      AuthFctry.logoutUserCreds()
      .then( (returnedUser) => {
        console.log("logged out", firebase.auth().currentUser);
        $window.location.href="#!/login";
      });
    };

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/NewNoteCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("NewNoteCtrl", function($scope, NoteFctry) {

    $scope.addNote = () => {
      $scope.note.uid = firebase.auth().currentUser.uid;
      NoteFctry.addNote($scope.note);
    };

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/NotesCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("NoteCtrl", function($scope, NoteFctry) { 

    NoteFctry.getUserNotes()
    .then( (userNotes) => {
      console.log(userNotes, "for printing");
    });

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

  module.controller("UserStateCtrl", function ($scope, AuthFctry) {

    $scope.loginUser = () => {
      AuthFctry.authenticateUserCreds($scope.user)
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

    const authenticateUserCreds = ( { email, password } ) => {
      return firebase.auth().signInWithEmailAndPassword(email, password);
    };

    const registerUserCreds = ( { email, password } ) => {
      return firebase.auth().createUserWithEmailAndPassword(email, password);
    };

    const logoutUserCreds = () => {
      return firebase.auth().signOut();
    };

    return { authenticateUserCreds, registerUserCreds, logoutUserCreds };
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
          resolve(data);
        })
        .catch( (err) => {
          console.log("firebase data err", err);
        });
      });
    };

    const addUserNote = ( newNote ) => {
      console.log(newNote);
      // return $q( (resolve, reject ) => {
      //   $http
      //   .post(`${Firebase}/notes.json`, JSON.stringify(newNote))
      // })
    };

    return { getUserNotes, addUserNote };

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
// File: ./app/controllers/NavCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("NavCtrl", function($scope, AuthFctry, $window) {

    $scope.logoutUser = () => {
      console.log("clicked");
      AuthFctry.logoutUserCreds()
      .then( (returnedUser) => {
        console.log("logged out", firebase.auth().currentUser);
        $window.location.href="#!/login";
      });
    };

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/NewNoteCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("NewNoteCtrl", function($scope, NoteFctry) {

    $scope.addNote = () => {
      $scope.note.uid = firebase.auth().currentUser.uid;
      NoteFctry.addUserNote($scope.note);
    };

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/NotesCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("NoteCtrl", function($scope, NoteFctry) { 

    NoteFctry.getUserNotes()
    .then( (userNotes) => {
      console.log(userNotes, "for printing");
    });

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

  module.controller("UserStateCtrl", function ($scope, AuthFctry) {

    $scope.loginUser = () => {
      AuthFctry.authenticateUserCreds($scope.user)
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

    const authenticateUserCreds = ( { email, password } ) => {
      return firebase.auth().signInWithEmailAndPassword(email, password);
    };

    const registerUserCreds = ( { email, password } ) => {
      return firebase.auth().createUserWithEmailAndPassword(email, password);
    };

    const logoutUserCreds = () => {
      return firebase.auth().signOut();
    };

    return { authenticateUserCreds, registerUserCreds, logoutUserCreds };
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
          resolve(data);
        })
        .catch( (err) => {
          console.log("firebase data err", err);
        });
      });
    };

    const addUserNote = ( newNote ) => {
      console.log(newNote);
      // return $q( (resolve, reject ) => {
      //   $http
      //   .post(`${Firebase}/notes.json`, JSON.stringify(newNote))
      // })
    };

    return { getUserNotes, addUserNote };

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
// File: ./app/controllers/NavCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("NavCtrl", function($scope, AuthFctry, $window) {

    $scope.logoutUser = () => {
      console.log("clicked");
      AuthFctry.logoutUserCreds()
      .then( (returnedUser) => {
        console.log("logged out", firebase.auth().currentUser);
        $window.location.href="#!/login";
      });
    };

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/NewNoteCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("NewNoteCtrl", function($scope, NoteFctry) {

    $scope.addNote = () => {
      $scope.note.uid = firebase.auth().currentUser.uid;
      NoteFctry.addUserNote($scope.note);
    };

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/NotesCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("NoteCtrl", function($scope, NoteFctry) { 

    NoteFctry.getUserNotes()
    .then( (userNotes) => {
      console.log(userNotes, "for printing");
    });

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

  module.controller("UserStateCtrl", function ($scope, AuthFctry) {

    $scope.loginUser = () => {
      AuthFctry.authenticateUserCreds($scope.user)
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

    const authenticateUserCreds = ( { email, password } ) => {
      return firebase.auth().signInWithEmailAndPassword(email, password);
    };

    const registerUserCreds = ( { email, password } ) => {
      return firebase.auth().createUserWithEmailAndPassword(email, password);
    };

    const logoutUserCreds = () => {
      return firebase.auth().signOut();
    };

    return { authenticateUserCreds, registerUserCreds, logoutUserCreds };
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
          resolve(data);
        })
        .catch( (err) => {
          console.log("firebase data err", err);
        });
      });
    };

    const addUserNote = ( newNote ) => {
      console.log(newNote);
      return $q( (resolve, reject ) => {
        $http
        .post(`${Firebase}/notes.json`, JSON.stringify(newNote))
        .then( (noteAdded) => {
          console.log(noteAdded);
          resolve(noteAdded);
        });
      });
    };

    return { getUserNotes, addUserNote };

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
// File: ./app/controllers/NavCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("NavCtrl", function($scope, AuthFctry, $window) {

    $scope.logoutUser = () => {
      console.log("clicked");
      AuthFctry.logoutUserCreds()
      .then( (returnedUser) => {
        console.log("logged out", firebase.auth().currentUser);
        $window.location.href="#!/login";
      });
    };

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/NewNoteCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("NewNoteCtrl", function($scope, NoteFctry) {

    $scope.addNote = () => {
      $scope.note.uid = firebase.auth().currentUser.uid;
      NoteFctry.addUserNote($scope.note);
    };

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/NotesCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("NoteCtrl", function($scope, NoteFctry) { 

    NoteFctry.getUserNotes()
    .then( (userNotes) => {
      console.log(userNotes, "for printing");
    });

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

  module.controller("UserStateCtrl", function ($scope, AuthFctry) {

    $scope.loginUser = () => {
      AuthFctry.authenticateUserCreds($scope.user)
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

    const authenticateUserCreds = ( { email, password } ) => {
      return firebase.auth().signInWithEmailAndPassword(email, password);
    };

    const registerUserCreds = ( { email, password } ) => {
      return firebase.auth().createUserWithEmailAndPassword(email, password);
    };

    const logoutUserCreds = () => {
      return firebase.auth().signOut();
    };

    return { authenticateUserCreds, registerUserCreds, logoutUserCreds };
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
          resolve(data);
        })
        .catch( (err) => {
          console.log("firebase data err", err);
        });
      });
    };

    const addUserNote = ( newNote ) => {
      // console.log(newNote);
      return $q( (resolve, reject ) => {
        $http
        .post(`${Firebase}/notes.json`, JSON.stringify(newNote))
        .then( (noteAdded) => {
          console.log(noteAdded);
          resolve(noteAdded);
        });
      });
    };

    return { getUserNotes, addUserNote };

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
// File: ./app/controllers/NavCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("NavCtrl", function($scope, AuthFctry, $window) {

    $scope.logoutUser = () => {
      console.log("clicked");
      AuthFctry.logoutUserCreds()
      .then( (returnedUser) => {
        console.log("logged out", firebase.auth().currentUser);
        $window.location.href="#!/login";
      });
    };

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/NewNoteCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("NewNoteCtrl", function($scope, NoteFctry) {

    $scope.addNote = () => {
      $scope.note.uid = firebase.auth().currentUser.uid;
      NoteFctry.addUserNote($scope.note);
    };

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/NotesCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("NoteCtrl", function($scope, NoteFctry) { 

    NoteFctry.getUserNotes()
    .then( (userNotes) => {
      console.log(userNotes, "for printing");
    });

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

  module.controller("UserStateCtrl", function ($scope, AuthFctry) {

    $scope.loginUser = () => {
      AuthFctry.authenticateUserCreds($scope.user)
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

    const authenticateUserCreds = ( { email, password } ) => {
      return firebase.auth().signInWithEmailAndPassword(email, password);
    };

    const registerUserCreds = ( { email, password } ) => {
      return firebase.auth().createUserWithEmailAndPassword(email, password);
    };

    const logoutUserCreds = () => {
      return firebase.auth().signOut();
    };

    return { authenticateUserCreds, registerUserCreds, logoutUserCreds };
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
          console.log(noteAdded);
          resolve(noteAdded);
        });
      });
    };

    return { getUserNotes, addUserNote };

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
// File: ./app/controllers/NavCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("NavCtrl", function($scope, AuthFctry, $window) {

    $scope.logoutUser = () => {
      console.log("clicked");
      AuthFctry.logoutUserCreds()
      .then( (returnedUser) => {
        console.log("logged out", firebase.auth().currentUser);
        $window.location.href="#!/login";
      });
    };

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/NewNoteCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("NewNoteCtrl", function($scope, NoteFctry) {

    $scope.addNote = () => {
      $scope.note.uid = firebase.auth().currentUser.uid;
      NoteFctry.addUserNote($scope.note);
    };

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/NotesCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("NoteCtrl", function($scope, NoteFctry) { 

    NoteFctry.getUserNotes()
    .then( (userNotes) => {
      console.log(userNotes, "for printing");
    });

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

  module.controller("UserStateCtrl", function ($scope, AuthFctry) {

    $scope.loginUser = () => {
      AuthFctry.authenticateUserCreds($scope.user)
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

    const authenticateUserCreds = ( { email, password } ) => {
      return firebase.auth().signInWithEmailAndPassword(email, password);
    };

    const registerUserCreds = ( { email, password } ) => {
      return firebase.auth().createUserWithEmailAndPassword(email, password);
    };

    const logoutUserCreds = () => {
      return firebase.auth().signOut();
    };

    return { authenticateUserCreds, registerUserCreds, logoutUserCreds };
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
// File: ./app/controllers/NavCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("NavCtrl", function($scope, AuthFctry, $window) {

    $scope.logoutUser = () => {
      console.log("clicked");
      AuthFctry.logoutUserCreds()
      .then( (returnedUser) => {
        console.log("logged out", firebase.auth().currentUser);
        $window.location.href="#!/login";
      });
    };

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/NewNoteCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("NewNoteCtrl", function($scope, NoteFctry, $window) {

    $scope.addNote = () => {
      $scope.note.uid = firebase.auth().currentUser.uid;
      NoteFctry.addUserNote($scope.note)
      .then( () => {
        $window.location.href = "#!/note-list.html";
      });
    };

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/NotesCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("NoteCtrl", function($scope, NoteFctry) { 

    NoteFctry.getUserNotes()
    .then( (userNotes) => {
      console.log(userNotes, "for printing");
    });

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

  module.controller("UserStateCtrl", function ($scope, AuthFctry) {

    $scope.loginUser = () => {
      AuthFctry.authenticateUserCreds($scope.user)
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

    const authenticateUserCreds = ( { email, password } ) => {
      return firebase.auth().signInWithEmailAndPassword(email, password);
    };

    const registerUserCreds = ( { email, password } ) => {
      return firebase.auth().createUserWithEmailAndPassword(email, password);
    };

    const logoutUserCreds = () => {
      return firebase.auth().signOut();
    };

    return { authenticateUserCreds, registerUserCreds, logoutUserCreds };
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
// File: ./app/controllers/NavCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("NavCtrl", function($scope, AuthFctry, $window) {

    $scope.logoutUser = () => {
      console.log("clicked");
      AuthFctry.logoutUserCreds()
      .then( (returnedUser) => {
        console.log("logged out", firebase.auth().currentUser);
        $window.location.href="#!/login";
      });
    };

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/NewNoteCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("NewNoteCtrl", function($scope, NoteFctry, $window) {

    $scope.addNote = () => {
      $scope.note.uid = firebase.auth().currentUser.uid;
      NoteFctry.addUserNote($scope.note)
      .then( () => {
        NoteFctry.
        $window.location.href = "#!/note-list.html";
      });
    };

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/NotesCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("NoteCtrl", function($scope, NoteFctry) { 

    NoteFctry.getUserNotes()
    .then( (userNotes) => {
      console.log(userNotes, "for printing");
    });

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

  module.controller("UserStateCtrl", function ($scope, AuthFctry) {

    $scope.loginUser = () => {
      AuthFctry.authenticateUserCreds($scope.user)
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

    const authenticateUserCreds = ( { email, password } ) => {
      return firebase.auth().signInWithEmailAndPassword(email, password);
    };

    const registerUserCreds = ( { email, password } ) => {
      return firebase.auth().createUserWithEmailAndPassword(email, password);
    };

    const logoutUserCreds = () => {
      return firebase.auth().signOut();
    };

    return { authenticateUserCreds, registerUserCreds, logoutUserCreds };
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
// File: ./app/controllers/NavCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("NavCtrl", function($scope, AuthFctry, $window) {

    $scope.logoutUser = () => {
      console.log("clicked");
      AuthFctry.logoutUserCreds()
      .then( (returnedUser) => {
        console.log("logged out", firebase.auth().currentUser);
        $window.location.href="#!/login";
      });
    };

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/NewNoteCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("NewNoteCtrl", function($scope, NoteFctry, $window) {

    let currentUser = firebase.auth().currentUser.uid;

    $scope.addNote = () => {
      $scope.note.uid = currentUser;
      NoteFctry.addUserNote($scope.note)
      .then( () => {
        NoteFctry.getUserNotes(currentUser);
        $window.location.href = "#!/note-list.html";
      });
    };

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/NotesCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("NoteCtrl", function($scope, NoteFctry) { 

    NoteFctry.getUserNotes()
    .then( (userNotes) => {
      console.log(userNotes, "for printing");
    });

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

  module.controller("UserStateCtrl", function ($scope, AuthFctry) {

    $scope.loginUser = () => {
      AuthFctry.authenticateUserCreds($scope.user)
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

    const authenticateUserCreds = ( { email, password } ) => {
      return firebase.auth().signInWithEmailAndPassword(email, password);
    };

    const registerUserCreds = ( { email, password } ) => {
      return firebase.auth().createUserWithEmailAndPassword(email, password);
    };

    const logoutUserCreds = () => {
      return firebase.auth().signOut();
    };

    return { authenticateUserCreds, registerUserCreds, logoutUserCreds };
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
// File: ./app/controllers/NavCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("NavCtrl", function($scope, AuthFctry, $window) {

    $scope.logoutUser = () => {
      console.log("clicked");
      AuthFctry.logoutUserCreds()
      .then( (returnedUser) => {
        console.log("logged out", firebase.auth().currentUser);
        $window.location.href="#!/login";
      });
    };

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/NewNoteCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("NewNoteCtrl", function($scope, NoteFctry, $window) {

    let currentUser = firebase.auth().currentUser.uid;

    $scope.addNote = () => {
      $scope.note.uid = currentUser;
      NoteFctry.addUserNote($scope.note)
      .then( () => {
        NoteFctry.getUserNotes(currentUser);
        $window.location.href = "#!/note-list.html";
      });
    };

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/NotesCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("NoteCtrl", function($scope, NoteFctry) { 

    NoteFctry.getUserNotes()
    .then( (userNotes) => {
      console.log(userNotes, "for printing");
    });

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

  module.controller("UserStateCtrl", function ($scope, AuthFctry) {

    $scope.loginUser = () => {
      AuthFctry.authenticateUserCreds($scope.user)
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

    const authenticateUserCreds = ( { email, password } ) => {
      return firebase.auth().signInWithEmailAndPassword(email, password);
    };

    const registerUserCreds = ( { email, password } ) => {
      return firebase.auth().createUserWithEmailAndPassword(email, password);
    };

    const logoutUserCreds = () => {
      return firebase.auth().signOut();
    };

    return { authenticateUserCreds, registerUserCreds, logoutUserCreds };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/NoteFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("NoteFctry", function($q, $http, Firebase) {

    const getUserNotes = (currentUserID) => {
      return $q( (resolve, reject) => {
        $http
        .get(`${Firebase}/notes.json`)
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
// File: ./app/controllers/NavCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("NavCtrl", function($scope, AuthFctry, $window) {

    $scope.logoutUser = () => {
      console.log("clicked");
      AuthFctry.logoutUserCreds()
      .then( (returnedUser) => {
        console.log("logged out", firebase.auth().currentUser);
        $window.location.href="#!/login";
      });
    };

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/NewNoteCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("NewNoteCtrl", function($scope, NoteFctry, $window) {

    let currentUser = firebase.auth().currentUser.uid;

    $scope.addNote = () => {
      $scope.note.uid = currentUser;
      NoteFctry.addUserNote($scope.note)
      .then( () => {
        NoteFctry.getUserNotes(currentUser);
        $window.location.href = "#!/note-list.html";
      });
    };

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/NotesCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("NoteCtrl", function($scope, NoteFctry) { 

    NoteFctry.getUserNotes()
    .then( (userNotes) => {
      console.log(userNotes, "for printing");
    });

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

  module.controller("UserStateCtrl", function ($scope, AuthFctry) {

    $scope.loginUser = () => {
      AuthFctry.authenticateUserCreds($scope.user)
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

    const authenticateUserCreds = ( { email, password } ) => {
      return firebase.auth().signInWithEmailAndPassword(email, password);
    };

    const registerUserCreds = ( { email, password } ) => {
      return firebase.auth().createUserWithEmailAndPassword(email, password);
    };

    const logoutUserCreds = () => {
      return firebase.auth().signOut();
    };

    return { authenticateUserCreds, registerUserCreds, logoutUserCreds };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/NoteFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("NoteFctry", function($q, $http, Firebase) {

    const getUserNotes = (currentUserID) => {
      return $q( (resolve, reject) => {
        $http
        .get(`${Firebase}/notes.json?`)
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
// File: ./app/controllers/NavCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("NavCtrl", function($scope, AuthFctry, $window) {

    $scope.logoutUser = () => {
      console.log("clicked");
      AuthFctry.logoutUserCreds()
      .then( (returnedUser) => {
        console.log("logged out", firebase.auth().currentUser);
        $window.location.href="#!/login";
      });
    };

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/NewNoteCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("NewNoteCtrl", function($scope, NoteFctry, $window) {

    let currentUser = firebase.auth().currentUser.uid;

    $scope.addNote = () => {
      $scope.note.uid = currentUser;
      NoteFctry.addUserNote($scope.note)
      .then( () => {
        NoteFctry.getUserNotes(currentUser);
        $window.location.href = "#!/note-list.html";
      });
    };

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/NotesCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("NoteCtrl", function($scope, NoteFctry) { 

    NoteFctry.getUserNotes()
    .then( (userNotes) => {
      console.log(userNotes, "for printing");
    });

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

  module.controller("UserStateCtrl", function ($scope, AuthFctry) {

    $scope.loginUser = () => {
      AuthFctry.authenticateUserCreds($scope.user)
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

    const authenticateUserCreds = ( { email, password } ) => {
      return firebase.auth().signInWithEmailAndPassword(email, password);
    };

    const registerUserCreds = ( { email, password } ) => {
      return firebase.auth().createUserWithEmailAndPassword(email, password);
    };

    const logoutUserCreds = () => {
      return firebase.auth().signOut();
    };

    return { authenticateUserCreds, registerUserCreds, logoutUserCreds };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/NoteFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("NoteFctry", function($q, $http, Firebase) {

    const getUserNotes = (currentUserID) => {
      return $q( (resolve, reject) => {
        $http
        .get(`${Firebase}/notes.json?orderBy`)
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
// File: ./app/controllers/NavCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("NavCtrl", function($scope, AuthFctry, $window) {

    $scope.logoutUser = () => {
      console.log("clicked");
      AuthFctry.logoutUserCreds()
      .then( (returnedUser) => {
        console.log("logged out", firebase.auth().currentUser);
        $window.location.href="#!/login";
      });
    };

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/NewNoteCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("NewNoteCtrl", function($scope, NoteFctry, $window) {

    let currentUser = firebase.auth().currentUser.uid;

    $scope.addNote = () => {
      $scope.note.uid = currentUser;
      NoteFctry.addUserNote($scope.note)
      .then( () => {
        NoteFctry.getUserNotes(currentUser);
        $window.location.href = "#!/note-list.html";
      });
    };

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/NotesCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("NoteCtrl", function($scope, NoteFctry) { 

    NoteFctry.getUserNotes()
    .then( (userNotes) => {
      console.log(userNotes, "for printing");
    });

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

  module.controller("UserStateCtrl", function ($scope, AuthFctry) {

    $scope.loginUser = () => {
      AuthFctry.authenticateUserCreds($scope.user)
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

    const authenticateUserCreds = ( { email, password } ) => {
      return firebase.auth().signInWithEmailAndPassword(email, password);
    };

    const registerUserCreds = ( { email, password } ) => {
      return firebase.auth().createUserWithEmailAndPassword(email, password);
    };

    const logoutUserCreds = () => {
      return firebase.auth().signOut();
    };

    return { authenticateUserCreds, registerUserCreds, logoutUserCreds };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/NoteFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("NoteFctry", function($q, $http, Firebase) {

    const getUserNotes = (currentUserID) => {
      return $q( (resolve, reject) => {
        $http
        .get(`${Firebase}/notes.json?orderBy="uid"`)
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
// File: ./app/controllers/NavCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("NavCtrl", function($scope, AuthFctry, $window) {

    $scope.logoutUser = () => {
      console.log("clicked");
      AuthFctry.logoutUserCreds()
      .then( (returnedUser) => {
        console.log("logged out", firebase.auth().currentUser);
        $window.location.href="#!/login";
      });
    };

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/NewNoteCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("NewNoteCtrl", function($scope, NoteFctry, $window) {

    let currentUser = firebase.auth().currentUser.uid;

    $scope.addNote = () => {
      $scope.note.uid = currentUser;
      NoteFctry.addUserNote($scope.note)
      .then( () => {
        NoteFctry.getUserNotes(currentUser);
        $window.location.href = "#!/note-list.html";
      });
    };

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/NotesCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("NoteCtrl", function($scope, NoteFctry) { 

    NoteFctry.getUserNotes()
    .then( (userNotes) => {
      console.log(userNotes, "for printing");
    });

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

  module.controller("UserStateCtrl", function ($scope, AuthFctry) {

    $scope.loginUser = () => {
      AuthFctry.authenticateUserCreds($scope.user)
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

    const authenticateUserCreds = ( { email, password } ) => {
      return firebase.auth().signInWithEmailAndPassword(email, password);
    };

    const registerUserCreds = ( { email, password } ) => {
      return firebase.auth().createUserWithEmailAndPassword(email, password);
    };

    const logoutUserCreds = () => {
      return firebase.auth().signOut();
    };

    return { authenticateUserCreds, registerUserCreds, logoutUserCreds };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/NoteFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("NoteFctry", function($q, $http, Firebase) {

    const getUserNotes = (currentUserID) => {
      return $q( (resolve, reject) => {
        $http
        .get(`${Firebase}/notes.json?orderBy="uid"&equalTo`)
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
// File: ./app/controllers/NavCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("NavCtrl", function($scope, AuthFctry, $window) {

    $scope.logoutUser = () => {
      console.log("clicked");
      AuthFctry.logoutUserCreds()
      .then( (returnedUser) => {
        console.log("logged out", firebase.auth().currentUser);
        $window.location.href="#!/login";
      });
    };

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/NewNoteCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("NewNoteCtrl", function($scope, NoteFctry, $window) {

    let currentUser = firebase.auth().currentUser.uid;

    $scope.addNote = () => {
      $scope.note.uid = currentUser;
      NoteFctry.addUserNote($scope.note)
      .then( () => {
        NoteFctry.getUserNotes(currentUser);
        $window.location.href = "#!/note-list.html";
      });
    };

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/NotesCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("NoteCtrl", function($scope, NoteFctry) { 

    NoteFctry.getUserNotes()
    .then( (userNotes) => {
      console.log(userNotes, "for printing");
    });

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

  module.controller("UserStateCtrl", function ($scope, AuthFctry) {

    $scope.loginUser = () => {
      AuthFctry.authenticateUserCreds($scope.user)
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

    const authenticateUserCreds = ( { email, password } ) => {
      return firebase.auth().signInWithEmailAndPassword(email, password);
    };

    const registerUserCreds = ( { email, password } ) => {
      return firebase.auth().createUserWithEmailAndPassword(email, password);
    };

    const logoutUserCreds = () => {
      return firebase.auth().signOut();
    };

    return { authenticateUserCreds, registerUserCreds, logoutUserCreds };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/NoteFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("NoteFctry", function($q, $http, Firebase) {

    const getUserNotes = (currentUserID) => {
      return $q( (resolve, reject) => {
        $http
        .get(`${Firebase}/notes.json?orderBy="uid"&equalTo="${currentUserID}`)
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
// File: ./app/controllers/NavCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("NavCtrl", function($scope, AuthFctry, $window) {

    $scope.logoutUser = () => {
      console.log("clicked");
      AuthFctry.logoutUserCreds()
      .then( (returnedUser) => {
        console.log("logged out", firebase.auth().currentUser);
        $window.location.href="#!/login";
      });
    };

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/NewNoteCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("NewNoteCtrl", function($scope, NoteFctry, $window) {

    let currentUser = firebase.auth().currentUser.uid;

    $scope.addNote = () => {
      $scope.note.uid = currentUser;
      NoteFctry.addUserNote($scope.note)
      .then( () => {
        NoteFctry.getUserNotes(currentUser);
        $window.location.href = "#!/note-list.html";
      });
    };

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/NotesCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("NoteCtrl", function($scope, NoteFctry) { 

    NoteFctry.getUserNotes()
    .then( (userNotes) => {
      console.log(userNotes, "for printing");
    });

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

  module.controller("UserStateCtrl", function ($scope, AuthFctry) {

    $scope.loginUser = () => {
      AuthFctry.authenticateUserCreds($scope.user)
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

    const authenticateUserCreds = ( { email, password } ) => {
      return firebase.auth().signInWithEmailAndPassword(email, password);
    };

    const registerUserCreds = ( { email, password } ) => {
      return firebase.auth().createUserWithEmailAndPassword(email, password);
    };

    const logoutUserCreds = () => {
      return firebase.auth().signOut();
    };

    return { authenticateUserCreds, registerUserCreds, logoutUserCreds };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/NoteFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("NoteFctry", function($q, $http, Firebase) {

    const getUserNotes = (currentUserID) => {
      return $q( (resolve, reject) => {
        $http
        .get(`${Firebase}/notes.json?orderBy="uid"&equalTo="${currentUserID}`)
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
// File: ./app/controllers/NavCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("NavCtrl", function($scope, AuthFctry, $window) {

    $scope.logoutUser = () => {
      console.log("clicked");
      AuthFctry.logoutUserCreds()
      .then( (returnedUser) => {
        console.log("logged out", firebase.auth().currentUser);
        $window.location.href="#!/login";
      });
    };

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/NewNoteCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("NewNoteCtrl", function($scope, NoteFctry, $window) {

    let currentUser = firebase.auth().currentUser.uid;

    $scope.addNote = () => {
      $scope.note.uid = currentUser;
      NoteFctry.addUserNote($scope.note)
      .then( () => {
        NoteFctry.getUserNotes(currentUser);
        $window.location.href = "#!/note-list.html";
      });
    };

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/NotesCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("NoteCtrl", function($scope, NoteFctry) { 

    NoteFctry.getUserNotes()
    .then( (userNotes) => {
      console.log(userNotes, "for printing");
    });

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

  module.controller("UserStateCtrl", function ($scope, AuthFctry) {

    $scope.loginUser = () => {
      AuthFctry.authenticateUserCreds($scope.user)
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

    const authenticateUserCreds = ( { email, password } ) => {
      return firebase.auth().signInWithEmailAndPassword(email, password);
    };

    const registerUserCreds = ( { email, password } ) => {
      return firebase.auth().createUserWithEmailAndPassword(email, password);
    };

    const logoutUserCreds = () => {
      return firebase.auth().signOut();
    };

    return { authenticateUserCreds, registerUserCreds, logoutUserCreds };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/NoteFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("NoteFctry", function($q, $http, Firebase) {

    let currentUser = firebase.auth().currentUser.uid;

    const getUserNotes = (currentUserID) => {
      return $q( (resolve, reject) => {
        $http
        .get(`${Firebase}/notes.json?orderBy="uid"&equalTo="${currentUserID}`)
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
// File: ./app/controllers/NavCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("NavCtrl", function($scope, AuthFctry, $window) {

    $scope.logoutUser = () => {
      console.log("clicked");
      AuthFctry.logoutUserCreds()
      .then( (returnedUser) => {
        console.log("logged out", firebase.auth().currentUser);
        $window.location.href="#!/login";
      });
    };

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/NewNoteCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("NewNoteCtrl", function($scope, NoteFctry, $window) {

    let currentUser = firebase.auth().currentUser.uid;

    $scope.addNote = () => {
      $scope.note.uid = currentUser;
      NoteFctry.addUserNote($scope.note)
      .then( () => {
        NoteFctry.getUserNotes(currentUser);
        $window.location.href = "#!/note-list.html";
      });
    };

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/NotesCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("NoteCtrl", function($scope, NoteFctry) { 

    NoteFctry.getUserNotes()
    .then( (userNotes) => {
      console.log(userNotes, "for printing");
    });

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

  module.controller("UserStateCtrl", function ($scope, AuthFctry) {

    $scope.loginUser = () => {
      AuthFctry.authenticateUserCreds($scope.user)
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

    const authenticateUserCreds = ( { email, password } ) => {
      return firebase.auth().signInWithEmailAndPassword(email, password);
    };

    const registerUserCreds = ( { email, password } ) => {
      return firebase.auth().createUserWithEmailAndPassword(email, password);
    };

    const logoutUserCreds = () => {
      return firebase.auth().signOut();
    };

    return { authenticateUserCreds, registerUserCreds, logoutUserCreds };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/NoteFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("NoteFctry", function($q, $http, Firebase) {

    let currentUser = firebase.auth().currentUser.uid;

    const getUserNotes = (currentUser) => {
      return $q( (resolve, reject) => {
        $http
        .get(`${Firebase}/notes.json?orderBy="uid"&equalTo="${currentUser}`)
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
// File: ./app/controllers/NavCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("NavCtrl", function($scope, AuthFctry, $window) {

    $scope.logoutUser = () => {
      console.log("clicked");
      AuthFctry.logoutUserCreds()
      .then( (returnedUser) => {
        console.log("logged out", firebase.auth().currentUser);
        $window.location.href="#!/login";
      });
    };

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/NewNoteCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("NewNoteCtrl", function($scope, NoteFctry, $window) {

    let currentUser = firebase.auth().currentUser.uid;

    $scope.addNote = () => {
      $scope.note.uid = currentUser;
      NoteFctry.addUserNote($scope.note)
      .then( () => {
        NoteFctry.getUserNotes(currentUser);
        $window.location.href = "#!/note-list.html";
      });
    };

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/NotesCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("NoteCtrl", function($scope, NoteFctry) { 

    NoteFctry.getUserNotes()
    .then( (userNotes) => {
      console.log(userNotes, "for printing");
    });

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

  module.controller("UserStateCtrl", function ($scope, AuthFctry) {

    $scope.loginUser = () => {
      AuthFctry.authenticateUserCreds($scope.user)
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

    const authenticateUserCreds = ( { email, password } ) => {
      return firebase.auth().signInWithEmailAndPassword(email, password);
    };

    const registerUserCreds = ( { email, password } ) => {
      return firebase.auth().createUserWithEmailAndPassword(email, password);
    };

    const logoutUserCreds = () => {
      return firebase.auth().signOut();
    };

    return { authenticateUserCreds, registerUserCreds, logoutUserCreds };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/NoteFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("NoteFctry", function($q, $http, Firebase) {

    const getUserNotes = () => {
      return $q( (resolve, reject) => {
        $http
        .get(`${Firebase}/notes.json?orderBy="uid"&equalTo="${firebase.auth().currentUser.uid}`)
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
// File: ./app/controllers/NavCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("NavCtrl", function($scope, AuthFctry, $window) {

    $scope.logoutUser = () => {
      console.log("clicked");
      AuthFctry.logoutUserCreds()
      .then( (returnedUser) => {
        console.log("logged out", firebase.auth().currentUser);
        $window.location.href="#!/login";
      });
    };

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/NewNoteCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("NewNoteCtrl", function($scope, NoteFctry, $window) {

    let currentUser = firebase.auth().currentUser.uid;

    $scope.addNote = () => {
      $scope.note.uid = currentUser;
      NoteFctry.addUserNote($scope.note)
      .then( () => {
        NoteFctry.getUserNotes();
        $window.location.href = "#!/note-list.html";
      });
    };

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/NotesCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("NoteCtrl", function($scope, NoteFctry) { 

    NoteFctry.getUserNotes()
    .then( (userNotes) => {
      console.log(userNotes, "for printing");
    });

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

  module.controller("UserStateCtrl", function ($scope, AuthFctry) {

    $scope.loginUser = () => {
      AuthFctry.authenticateUserCreds($scope.user)
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

    const authenticateUserCreds = ( { email, password } ) => {
      return firebase.auth().signInWithEmailAndPassword(email, password);
    };

    const registerUserCreds = ( { email, password } ) => {
      return firebase.auth().createUserWithEmailAndPassword(email, password);
    };

    const logoutUserCreds = () => {
      return firebase.auth().signOut();
    };

    return { authenticateUserCreds, registerUserCreds, logoutUserCreds };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/NoteFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("NoteFctry", function($q, $http, Firebase) {

    const getUserNotes = () => {
      return $q( (resolve, reject) => {
        $http
        .get(`${Firebase}/notes.json?orderBy="uid"&equalTo="${firebase.auth().currentUser.uid}`)
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
// File: ./app/controllers/NavCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("NavCtrl", function($scope, AuthFctry, $window) {

    $scope.logoutUser = () => {
      console.log("clicked");
      AuthFctry.logoutUserCreds()
      .then( (returnedUser) => {
        console.log("logged out", firebase.auth().currentUser);
        $window.location.href="#!/login";
      });
    };

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/NewNoteCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("NewNoteCtrl", function($scope, NoteFctry, $window) {

    let currentUser = firebase.auth().currentUser.uid;

    $scope.addNote = () => {
      $scope.note.uid = currentUser;
      NoteFctry.addUserNote($scope.note)
      .then( () => {
        NoteFctry.getUserNotes();
        $window.location.href = "#!/note-list.html";
      });
    };

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/NotesCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("NoteCtrl", function($scope, NoteFctry) { 

    NoteFctry.getUserNotes()
    .then( (userNotes) => {
      console.log(userNotes, "for printing");
    });

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

  module.controller("UserStateCtrl", function ($scope, AuthFctry) {

    $scope.loginUser = () => {
      AuthFctry.authenticateUserCreds($scope.user)
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

    const authenticateUserCreds = ( { email, password } ) => {
      return firebase.auth().signInWithEmailAndPassword(email, password);
    };

    const registerUserCreds = ( { email, password } ) => {
      return firebase.auth().createUserWithEmailAndPassword(email, password);
    };

    const logoutUserCreds = () => {
      return firebase.auth().signOut();
    };

    return { authenticateUserCreds, registerUserCreds, logoutUserCreds };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/NoteFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("NoteFctry", function($q, $http, Firebase) {

    const getUserNotes = () => {
      return $q( (resolve, reject) => {
        $http
        .get(`${Firebase}/notes.json?orderBy="uid"&equalTo="${firebase.auth().currentUser.uid}`)
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
// File: ./app/controllers/NavCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("NavCtrl", function($scope, AuthFctry, $window) {

    $scope.logoutUser = () => {
      console.log("clicked");
      AuthFctry.logoutUserCreds()
      .then( (returnedUser) => {
        console.log("logged out", firebase.auth().currentUser);
        $window.location.href="#!/login";
      });
    };

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/NewNoteCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("NewNoteCtrl", function($scope, NoteFctry, $window) {

    let currentUser = firebase.auth().currentUser.uid;

    $scope.addNote = () => {
      if (currentUser === null) {
        $window.location.href = "#!/login";
      }
      else {
        $scope.note.uid = currentUser;
        NoteFctry.addUserNote($scope.note)
        .then( () => {
          NoteFctry.getUserNotes();
          $window.location.href = "#!/note-list.html";
        });
      }
    };

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/NotesCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("NoteCtrl", function($scope, NoteFctry) { 

    NoteFctry.getUserNotes()
    .then( (userNotes) => {
      console.log(userNotes, "for printing");
    });

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

  module.controller("UserStateCtrl", function ($scope, AuthFctry) {

    $scope.loginUser = () => {
      AuthFctry.authenticateUserCreds($scope.user)
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

    const authenticateUserCreds = ( { email, password } ) => {
      return firebase.auth().signInWithEmailAndPassword(email, password);
    };

    const registerUserCreds = ( { email, password } ) => {
      return firebase.auth().createUserWithEmailAndPassword(email, password);
    };

    const logoutUserCreds = () => {
      return firebase.auth().signOut();
    };

    return { authenticateUserCreds, registerUserCreds, logoutUserCreds };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/NoteFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("NoteFctry", function($q, $http, Firebase) {

    const getUserNotes = () => {
      return $q( (resolve, reject) => {
        $http
        .get(`${Firebase}/notes.json?orderBy="uid"&equalTo="${firebase.auth().currentUser.uid}`)
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
// File: ./app/controllers/NavCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("NavCtrl", function($scope, AuthFctry, $window) {

    $scope.logoutUser = () => {
      console.log("clicked");
      AuthFctry.logoutUserCreds()
      .then( (returnedUser) => {
        console.log("logged out", firebase.auth().currentUser);
        $window.location.href="#!/login";
      });
    };

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/NewNoteCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("NewNoteCtrl", function($scope, NoteFctry, $window) {


    $scope.addNote = () => {
      let currentUser = firebase.auth().currentUser.uid;
      if (currentUser === null) {
        $window.location.href = "#!/login";
      }
      else {
        $scope.note.uid = currentUser;
        NoteFctry.addUserNote($scope.note)
        .then( () => {
          NoteFctry.getUserNotes();
          $window.location.href = "#!/note-list.html";
        });
      }
    };

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/NotesCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("NoteCtrl", function($scope, NoteFctry) { 

    NoteFctry.getUserNotes()
    .then( (userNotes) => {
      console.log(userNotes, "for printing");
    });

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

  module.controller("UserStateCtrl", function ($scope, AuthFctry) {

    $scope.loginUser = () => {
      AuthFctry.authenticateUserCreds($scope.user)
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

    const authenticateUserCreds = ( { email, password } ) => {
      return firebase.auth().signInWithEmailAndPassword(email, password);
    };

    const registerUserCreds = ( { email, password } ) => {
      return firebase.auth().createUserWithEmailAndPassword(email, password);
    };

    const logoutUserCreds = () => {
      return firebase.auth().signOut();
    };

    return { authenticateUserCreds, registerUserCreds, logoutUserCreds };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/NoteFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("NoteFctry", function($q, $http, Firebase) {

    const getUserNotes = () => {
      return $q( (resolve, reject) => {
        $http
        .get(`${Firebase}/notes.json?orderBy="uid"&equalTo="${firebase.auth().currentUser.uid}`)
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
// File: ./app/controllers/NavCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("NavCtrl", function($scope, AuthFctry, $window) {

    $scope.logoutUser = () => {
      console.log("clicked");
      AuthFctry.logoutUserCreds()
      .then( (returnedUser) => {
        console.log("logged out", firebase.auth().currentUser);
        $window.location.href="#!/login";
      });
    };

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/NewNoteCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("NewNoteCtrl", function($scope, NoteFctry, $window) {


    $scope.addNote = () => {
      let currentUser = firebase.auth().currentUser;
      if (currentUser === null) {
        $window.location.href = "#!/login";
      }
      else {
        $scope.note.uid = currentUser;
        NoteFctry.addUserNote($scope.note)
        .then( () => {
          NoteFctry.getUserNotes();
          $window.location.href = "#!/note-list.html";
        });
      }
    };

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/NotesCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("NoteCtrl", function($scope, NoteFctry) { 

    NoteFctry.getUserNotes()
    .then( (userNotes) => {
      console.log(userNotes, "for printing");
    });

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

  module.controller("UserStateCtrl", function ($scope, AuthFctry) {

    $scope.loginUser = () => {
      AuthFctry.authenticateUserCreds($scope.user)
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

    const authenticateUserCreds = ( { email, password } ) => {
      return firebase.auth().signInWithEmailAndPassword(email, password);
    };

    const registerUserCreds = ( { email, password } ) => {
      return firebase.auth().createUserWithEmailAndPassword(email, password);
    };

    const logoutUserCreds = () => {
      return firebase.auth().signOut();
    };

    return { authenticateUserCreds, registerUserCreds, logoutUserCreds };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/NoteFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("NoteFctry", function($q, $http, Firebase) {

    const getUserNotes = () => {
      return $q( (resolve, reject) => {
        $http
        .get(`${Firebase}/notes.json?orderBy="uid"&equalTo="${firebase.auth().currentUser.uid}`)
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
// File: ./app/controllers/NavCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("NavCtrl", function($scope, AuthFctry, $window) {

    $scope.logoutUser = () => {
      console.log("clicked");
      AuthFctry.logoutUserCreds()
      .then( (returnedUser) => {
        console.log("logged out", firebase.auth().currentUser);
        $window.location.href="#!/login";
      });
    };

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/NewNoteCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("NewNoteCtrl", function($scope, NoteFctry, $window) {


    $scope.addNote = () => {
      if (firebase.auth().currentUser.uid === null) {
        $window.location.href = "#!/login";
      }
      else {
        let currentUser = firebase.auth().currentUser.uid;
        $scope.note.uid = currentUser;
        NoteFctry.addUserNote($scope.note)
        .then( () => {
          NoteFctry.getUserNotes();
          $window.location.href = "#!/note-list.html";
        });
      }
    };

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/NotesCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("NoteCtrl", function($scope, NoteFctry) { 

    NoteFctry.getUserNotes()
    .then( (userNotes) => {
      console.log(userNotes, "for printing");
    });

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

  module.controller("UserStateCtrl", function ($scope, AuthFctry) {

    $scope.loginUser = () => {
      AuthFctry.authenticateUserCreds($scope.user)
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

    const authenticateUserCreds = ( { email, password } ) => {
      return firebase.auth().signInWithEmailAndPassword(email, password);
    };

    const registerUserCreds = ( { email, password } ) => {
      return firebase.auth().createUserWithEmailAndPassword(email, password);
    };

    const logoutUserCreds = () => {
      return firebase.auth().signOut();
    };

    return { authenticateUserCreds, registerUserCreds, logoutUserCreds };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/NoteFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("NoteFctry", function($q, $http, Firebase) {

    const getUserNotes = () => {
      return $q( (resolve, reject) => {
        $http
        .get(`${Firebase}/notes.json?orderBy="uid"&equalTo="${firebase.auth().currentUser.uid}`)
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
// File: ./app/controllers/NavCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("NavCtrl", function($scope, AuthFctry, $window) {

    $scope.logoutUser = () => {
      console.log("clicked");
      AuthFctry.logoutUserCreds()
      .then( (returnedUser) => {
        console.log("logged out", firebase.auth().currentUser);
        $window.location.href="#!/login";
      });
    };

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/NewNoteCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("NewNoteCtrl", function($scope, NoteFctry, $window) {


    $scope.addNote = () => {
      if (firebase.auth().currentUser === null) {
        $window.location.href = "#!/login";
      }
      else {
        let currentUser = firebase.auth().currentUser.uid;
        $scope.note.uid = currentUser;
        NoteFctry.addUserNote($scope.note)
        .then( () => {
          NoteFctry.getUserNotes();
          $window.location.href = "#!/note-list.html";
        });
      }
    };

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/NotesCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("NoteCtrl", function($scope, NoteFctry) { 

    NoteFctry.getUserNotes()
    .then( (userNotes) => {
      console.log(userNotes, "for printing");
    });

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

  module.controller("UserStateCtrl", function ($scope, AuthFctry) {

    $scope.loginUser = () => {
      AuthFctry.authenticateUserCreds($scope.user)
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

    const authenticateUserCreds = ( { email, password } ) => {
      return firebase.auth().signInWithEmailAndPassword(email, password);
    };

    const registerUserCreds = ( { email, password } ) => {
      return firebase.auth().createUserWithEmailAndPassword(email, password);
    };

    const logoutUserCreds = () => {
      return firebase.auth().signOut();
    };

    return { authenticateUserCreds, registerUserCreds, logoutUserCreds };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/NoteFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("NoteFctry", function($q, $http, Firebase) {

    const getUserNotes = () => {
      return $q( (resolve, reject) => {
        $http
        .get(`${Firebase}/notes.json?orderBy="uid"&equalTo="${firebase.auth().currentUser.uid}`)
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
// File: ./app/controllers/NavCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("NavCtrl", function($scope, AuthFctry, $window) {

    $scope.logoutUser = () => {
      console.log("clicked");
      AuthFctry.logoutUserCreds()
      .then( (returnedUser) => {
        console.log("logged out", firebase.auth().currentUser);
        $window.location.href="#!/login";
      });
    };

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/NewNoteCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("NewNoteCtrl", function($scope, NoteFctry, $window) {


    $scope.addNote = () => {
      if (firebase.auth().currentUser === null) {
        $window.location.href = "#!/login";
      }
      else {
        console.log(firebase.auth().currentUser);
        // let currentUser = firebase.auth().currentUser.uid;
        // $scope.note.uid = currentUser;
        // NoteFctry.addUserNote($scope.note)
        // .then( () => {
        //   NoteFctry.getUserNotes();
        //   $window.location.href = "#!/note-list.html";
        // });
      }
    };

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/NotesCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("NoteCtrl", function($scope, NoteFctry) { 

    NoteFctry.getUserNotes()
    .then( (userNotes) => {
      console.log(userNotes, "for printing");
    });

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

  module.controller("UserStateCtrl", function ($scope, AuthFctry) {

    $scope.loginUser = () => {
      AuthFctry.authenticateUserCreds($scope.user)
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

    const authenticateUserCreds = ( { email, password } ) => {
      return firebase.auth().signInWithEmailAndPassword(email, password);
    };

    const registerUserCreds = ( { email, password } ) => {
      return firebase.auth().createUserWithEmailAndPassword(email, password);
    };

    const logoutUserCreds = () => {
      return firebase.auth().signOut();
    };

    return { authenticateUserCreds, registerUserCreds, logoutUserCreds };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/NoteFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("NoteFctry", function($q, $http, Firebase) {

    const getUserNotes = () => {
      return $q( (resolve, reject) => {
        $http
        .get(`${Firebase}/notes.json?orderBy="uid"&equalTo="${firebase.auth().currentUser.uid}`)
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
// File: ./app/controllers/NavCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("NavCtrl", function($scope, AuthFctry, $window) {

    $scope.logoutUser = () => {
      console.log("clicked");
      AuthFctry.logoutUserCreds()
      .then( (returnedUser) => {
        console.log("logged out", firebase.auth().currentUser);
        $window.location.href="#!/login";
      });
    };

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/NewNoteCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("NewNoteCtrl", function($scope, NoteFctry, $window) {


    $scope.addNote = () => {
      if (firebase.auth().currentUser === null) {
        $window.location.href = "#!/login";
      }
      else {
        let currentUser = firebase.auth().currentUser.uid;
        $scope.note.uid = currentUser;
        NoteFctry.addUserNote($scope.note)
        .then( () => {
          NoteFctry.getUserNotes();
          $window.location.href = "#!/note-list.html";
        });
      }
    };

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/NotesCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("NoteCtrl", function($scope, NoteFctry) { 

    NoteFctry.getUserNotes()
    .then( (userNotes) => {
      console.log(userNotes, "for printing");
    });

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

  module.controller("UserStateCtrl", function ($scope, AuthFctry) {

    $scope.loginUser = () => {
      AuthFctry.authenticateUserCreds($scope.user)
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

    const authenticateUserCreds = ( { email, password } ) => {
      return firebase.auth().signInWithEmailAndPassword(email, password);
    };

    const registerUserCreds = ( { email, password } ) => {
      return firebase.auth().createUserWithEmailAndPassword(email, password);
    };

    const logoutUserCreds = () => {
      return firebase.auth().signOut();
    };

    return { authenticateUserCreds, registerUserCreds, logoutUserCreds };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/NoteFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("NoteFctry", function($q, $http, Firebase) {

    const getUserNotes = () => {
      return $q( (resolve, reject) => {
        $http
        .get(`${Firebase}/notes.json?orderBy="uid"&equalTo="${firebase.auth().currentUser.uid}`)
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
// File: ./app/controllers/NavCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("NavCtrl", function($scope, AuthFctry, $window) {

    $scope.logoutUser = () => {
      console.log("clicked");
      AuthFctry.logoutUserCreds()
      .then( (returnedUser) => {
        console.log("logged out", firebase.auth().currentUser);
        $window.location.href="#!/login";
      });
    };

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/NewNoteCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("NewNoteCtrl", function($scope, NoteFctry, $window) {


    $scope.addNote = () => {
      if (firebase.auth().currentUser === null) {
        $window.location.href = "#!/login";
      }
      else {
        let currentUser = firebase.auth().currentUser.uid;
        $scope.note.uid = currentUser;
        NoteFctry.addUserNote($scope.note)
        .then( () => {
          NoteFctry.getUserNotes();
          $window.location.href = "#!/note-list.html";
        });
      }
    };

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/NotesCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("NoteCtrl", function($scope, NoteFctry) { 

    NoteFctry.getUserNotes()
    .then( (userNotes) => {
      console.log(userNotes, "for printing");
    });

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

  module.controller("UserStateCtrl", function ($scope, AuthFctry) {

    $scope.loginUser = () => {
      AuthFctry.authenticateUserCreds($scope.user)
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

    const authenticateUserCreds = ( { email, password } ) => {
      return firebase.auth().signInWithEmailAndPassword(email, password);
    };

    const registerUserCreds = ( { email, password } ) => {
      return firebase.auth().createUserWithEmailAndPassword(email, password);
    };

    const logoutUserCreds = () => {
      return firebase.auth().signOut();
    };

    return { authenticateUserCreds, registerUserCreds, logoutUserCreds };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/NoteFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("NoteFctry", function($q, $http, Firebase) {

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
// File: ./app/controllers/NavCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("NavCtrl", function($scope, AuthFctry, $window) {

    $scope.logoutUser = () => {
      console.log("clicked");
      AuthFctry.logoutUserCreds()
      .then( (returnedUser) => {
        console.log("logged out", firebase.auth().currentUser);
        $window.location.href="#!/login";
      });
    };

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/NewNoteCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("NewNoteCtrl", function($scope, NoteFctry, $window) {


    $scope.addNote = () => {
      if (firebase.auth().currentUser === null) {
        $window.location.href = "#!/login";
      }
      else {
        let currentUser = firebase.auth().currentUser.uid;
        $scope.note.uid = currentUser;
        NoteFctry.addUserNote($scope.note)
        .then( () => {
          NoteFctry.getUserNotes();
          $window.location.href = "#!/note-list.html";
        });
      }
    };

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/NotesCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("NoteCtrl", function($scope, NoteFctry) { 

    NoteFctry.getUserNotes()
    .then( (userNotes) => {
      $scope.notes = userNotes.Objectkeys();
      console.log($scope.notes, "for printing");
    });

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

  module.controller("UserStateCtrl", function ($scope, AuthFctry) {

    $scope.loginUser = () => {
      AuthFctry.authenticateUserCreds($scope.user)
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

    const authenticateUserCreds = ( { email, password } ) => {
      return firebase.auth().signInWithEmailAndPassword(email, password);
    };

    const registerUserCreds = ( { email, password } ) => {
      return firebase.auth().createUserWithEmailAndPassword(email, password);
    };

    const logoutUserCreds = () => {
      return firebase.auth().signOut();
    };

    return { authenticateUserCreds, registerUserCreds, logoutUserCreds };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/NoteFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("NoteFctry", function($q, $http, Firebase) {

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
// File: ./app/controllers/NavCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("NavCtrl", function($scope, AuthFctry, $window) {

    $scope.logoutUser = () => {
      console.log("clicked");
      AuthFctry.logoutUserCreds()
      .then( (returnedUser) => {
        console.log("logged out", firebase.auth().currentUser);
        $window.location.href="#!/login";
      });
    };

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/NewNoteCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("NewNoteCtrl", function($scope, NoteFctry, $window) {


    $scope.addNote = () => {
      if (firebase.auth().currentUser === null) {
        $window.location.href = "#!/login";
      }
      else {
        let currentUser = firebase.auth().currentUser.uid;
        $scope.note.uid = currentUser;
        NoteFctry.addUserNote($scope.note)
        .then( () => {
          NoteFctry.getUserNotes();
          $window.location.href = "#!/note-list.html";
        });
      }
    };

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/NotesCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("NoteCtrl", function($scope, NoteFctry) { 

    NoteFctry.getUserNotes()
    .then( (userNotes) => {
      $scope.notes = userNotes.objectKeys();
      console.log($scope.notes, "for printing");
    });

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

  module.controller("UserStateCtrl", function ($scope, AuthFctry) {

    $scope.loginUser = () => {
      AuthFctry.authenticateUserCreds($scope.user)
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

    const authenticateUserCreds = ( { email, password } ) => {
      return firebase.auth().signInWithEmailAndPassword(email, password);
    };

    const registerUserCreds = ( { email, password } ) => {
      return firebase.auth().createUserWithEmailAndPassword(email, password);
    };

    const logoutUserCreds = () => {
      return firebase.auth().signOut();
    };

    return { authenticateUserCreds, registerUserCreds, logoutUserCreds };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/NoteFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("NoteFctry", function($q, $http, Firebase) {

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
// File: ./app/controllers/NavCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("NavCtrl", function($scope, AuthFctry, $window) {

    $scope.logoutUser = () => {
      console.log("clicked");
      AuthFctry.logoutUserCreds()
      .then( (returnedUser) => {
        console.log("logged out", firebase.auth().currentUser);
        $window.location.href="#!/login";
      });
    };

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/NewNoteCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("NewNoteCtrl", function($scope, NoteFctry, $window) {


    $scope.addNote = () => {
      if (firebase.auth().currentUser === null) {
        $window.location.href = "#!/login";
      }
      else {
        let currentUser = firebase.auth().currentUser.uid;
        $scope.note.uid = currentUser;
        NoteFctry.addUserNote($scope.note)
        .then( () => {
          NoteFctry.getUserNotes();
          $window.location.href = "#!/note-list.html";
        });
      }
    };

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/NotesCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("NoteCtrl", function($scope, NoteFctry) { 

    NoteFctry.getUserNotes()
    .then( (userNotes) => {
      $scope.notes = Object.keys(userNotes);
      console.log($scope.notes, "for printing");
    });

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

  module.controller("UserStateCtrl", function ($scope, AuthFctry) {

    $scope.loginUser = () => {
      AuthFctry.authenticateUserCreds($scope.user)
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

    const authenticateUserCreds = ( { email, password } ) => {
      return firebase.auth().signInWithEmailAndPassword(email, password);
    };

    const registerUserCreds = ( { email, password } ) => {
      return firebase.auth().createUserWithEmailAndPassword(email, password);
    };

    const logoutUserCreds = () => {
      return firebase.auth().signOut();
    };

    return { authenticateUserCreds, registerUserCreds, logoutUserCreds };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/NoteFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("NoteFctry", function($q, $http, Firebase) {

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
// File: ./app/controllers/NavCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("NavCtrl", function($scope, AuthFctry, $window) {

    $scope.logoutUser = () => {
      console.log("clicked");
      AuthFctry.logoutUserCreds()
      .then( (returnedUser) => {
        console.log("logged out", firebase.auth().currentUser);
        $window.location.href="#!/login";
      });
    };

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/NewNoteCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("NewNoteCtrl", function($scope, NoteFctry, $window) {


    $scope.addNote = () => {
      if (firebase.auth().currentUser === null) {
        $window.location.href = "#!/login";
      }
      else {
        let currentUser = firebase.auth().currentUser.uid;
        $scope.note.uid = currentUser;
        NoteFctry.addUserNote($scope.note)
        .then( () => {
          NoteFctry.getUserNotes();
          $window.location.href = "#!/note-list.html";
        });
      }
    };

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/NotesCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("NoteCtrl", function($scope, NoteFctry) { 

    NoteFctry.getUserNotes()
    .then( (userNotes) => {
      $scope.notes = Object.keys(userNotes).forEach( (noteID) => {
        console.log(userNotes[noteID]);
      });
      // console.log($scope.notes, "for printing");
    });

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

  module.controller("UserStateCtrl", function ($scope, AuthFctry) {

    $scope.loginUser = () => {
      AuthFctry.authenticateUserCreds($scope.user)
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

    const authenticateUserCreds = ( { email, password } ) => {
      return firebase.auth().signInWithEmailAndPassword(email, password);
    };

    const registerUserCreds = ( { email, password } ) => {
      return firebase.auth().createUserWithEmailAndPassword(email, password);
    };

    const logoutUserCreds = () => {
      return firebase.auth().signOut();
    };

    return { authenticateUserCreds, registerUserCreds, logoutUserCreds };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/NoteFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("NoteFctry", function($q, $http, Firebase) {

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
// File: ./app/controllers/NavCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("NavCtrl", function($scope, AuthFctry, $window) {

    $scope.logoutUser = () => {
      console.log("clicked");
      AuthFctry.logoutUserCreds()
      .then( (returnedUser) => {
        console.log("logged out", firebase.auth().currentUser);
        $window.location.href="#!/login";
      });
    };

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/NewNoteCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("NewNoteCtrl", function($scope, NoteFctry, $window) {


    $scope.addNote = () => {
      if (firebase.auth().currentUser === null) {
        $window.location.href = "#!/login";
      }
      else {
        let currentUser = firebase.auth().currentUser.uid;
        $scope.note.uid = currentUser;
        NoteFctry.addUserNote($scope.note)
        .then( () => {
          NoteFctry.getUserNotes();
          $window.location.href = "#!/note-list.html";
        });
      }
    };

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/NotesCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("NoteCtrl", function($scope, NoteFctry) { 

    NoteFctry.getUserNotes()
    .then( (userNotes) => {
      $scope.notes = Object.keys(userNotes).forEach( (noteID) => {
        userNotes[noteID].fbID = noteID;
        console.log(userNotes[noteID]);
      });
      // console.log($scope.notes, "for printing");
    });

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

  module.controller("UserStateCtrl", function ($scope, AuthFctry) {

    $scope.loginUser = () => {
      AuthFctry.authenticateUserCreds($scope.user)
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

    const authenticateUserCreds = ( { email, password } ) => {
      return firebase.auth().signInWithEmailAndPassword(email, password);
    };

    const registerUserCreds = ( { email, password } ) => {
      return firebase.auth().createUserWithEmailAndPassword(email, password);
    };

    const logoutUserCreds = () => {
      return firebase.auth().signOut();
    };

    return { authenticateUserCreds, registerUserCreds, logoutUserCreds };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/NoteFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("NoteFctry", function($q, $http, Firebase) {

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
// File: ./app/controllers/NavCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("NavCtrl", function($scope, AuthFctry, $window) {

    $scope.logoutUser = () => {
      console.log("clicked");
      AuthFctry.logoutUserCreds()
      .then( (returnedUser) => {
        console.log("logged out", firebase.auth().currentUser);
        $window.location.href="#!/login";
      });
    };

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/NewNoteCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("NewNoteCtrl", function($scope, NoteFctry, $window) {


    $scope.addNote = () => {
      if (firebase.auth().currentUser === null) {
        $window.location.href = "#!/login";
      }
      else {
        let currentUser = firebase.auth().currentUser.uid;
        $scope.note.uid = currentUser;
        NoteFctry.addUserNote($scope.note)
        .then( () => {
          NoteFctry.getUserNotes();
          $window.location.href = "#!/note-list.html";
        });
      }
    };

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/NotesCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("NoteCtrl", function($scope, NoteFctry) { 

    NoteFctry.getUserNotes()
    .then( (userNotes) => {
      $scope.notes = Object.keys(userNotes).forEach( (noteID) => {
        userNotes[noteID].fbID = noteID;
        // console.log(userNotes[noteID]);
      });
      console.log($scope.notes, "for printing");
    });

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

  module.controller("UserStateCtrl", function ($scope, AuthFctry) {

    $scope.loginUser = () => {
      AuthFctry.authenticateUserCreds($scope.user)
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

    const authenticateUserCreds = ( { email, password } ) => {
      return firebase.auth().signInWithEmailAndPassword(email, password);
    };

    const registerUserCreds = ( { email, password } ) => {
      return firebase.auth().createUserWithEmailAndPassword(email, password);
    };

    const logoutUserCreds = () => {
      return firebase.auth().signOut();
    };

    return { authenticateUserCreds, registerUserCreds, logoutUserCreds };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/NoteFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("NoteFctry", function($q, $http, Firebase) {

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
// File: ./app/controllers/NavCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("NavCtrl", function($scope, AuthFctry, $window) {

    $scope.logoutUser = () => {
      console.log("clicked");
      AuthFctry.logoutUserCreds()
      .then( (returnedUser) => {
        console.log("logged out", firebase.auth().currentUser);
        $window.location.href="#!/login";
      });
    };

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/NewNoteCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("NewNoteCtrl", function($scope, NoteFctry, $window) {


    $scope.addNote = () => {
      if (firebase.auth().currentUser === null) {
        $window.location.href = "#!/login";
      }
      else {
        let currentUser = firebase.auth().currentUser.uid;
        $scope.note.uid = currentUser;
        NoteFctry.addUserNote($scope.note)
        .then( () => {
          NoteFctry.getUserNotes();
          $window.location.href = "#!/note-list.html";
        });
      }
    };

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/NotesCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("NoteCtrl", function($scope, NoteFctry) { 

    NoteFctry.getUserNotes()
    .then( (userNotes) => {
      $scope.notes = Object.keys(userNotes).forEach( (noteID) => {
        userNotes[noteID].fbID = noteID;
        return userNotes[noteID];
      });
      console.log($scope.notes, "for printing");
    });

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

  module.controller("UserStateCtrl", function ($scope, AuthFctry) {

    $scope.loginUser = () => {
      AuthFctry.authenticateUserCreds($scope.user)
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

    const authenticateUserCreds = ( { email, password } ) => {
      return firebase.auth().signInWithEmailAndPassword(email, password);
    };

    const registerUserCreds = ( { email, password } ) => {
      return firebase.auth().createUserWithEmailAndPassword(email, password);
    };

    const logoutUserCreds = () => {
      return firebase.auth().signOut();
    };

    return { authenticateUserCreds, registerUserCreds, logoutUserCreds };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/NoteFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("NoteFctry", function($q, $http, Firebase) {

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
// File: ./app/controllers/NavCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("NavCtrl", function($scope, AuthFctry, $window) {

    $scope.logoutUser = () => {
      console.log("clicked");
      AuthFctry.logoutUserCreds()
      .then( (returnedUser) => {
        console.log("logged out", firebase.auth().currentUser);
        $window.location.href="#!/login";
      });
    };

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/NewNoteCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("NewNoteCtrl", function($scope, NoteFctry, $window) {


    $scope.addNote = () => {
      if (firebase.auth().currentUser === null) {
        $window.location.href = "#!/login";
      }
      else {
        let currentUser = firebase.auth().currentUser.uid;
        $scope.note.uid = currentUser;
        NoteFctry.addUserNote($scope.note)
        .then( () => {
          NoteFctry.getUserNotes();
          $window.location.href = "#!/note-list.html";
        });
      }
    };

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/NotesCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("NoteCtrl", function($scope, NoteFctry) { 

    NoteFctry.getUserNotes()
    .then( (userNotes) => {
      $scope.notes = Object.keys(userNotes).forEach( (noteID) => {
        userNotes[noteID].fbID = noteID;
        return userNotes[noteID];
      });
    });
    console.log($scope.notes, "for printing");

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

  module.controller("UserStateCtrl", function ($scope, AuthFctry) {

    $scope.loginUser = () => {
      AuthFctry.authenticateUserCreds($scope.user)
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

    const authenticateUserCreds = ( { email, password } ) => {
      return firebase.auth().signInWithEmailAndPassword(email, password);
    };

    const registerUserCreds = ( { email, password } ) => {
      return firebase.auth().createUserWithEmailAndPassword(email, password);
    };

    const logoutUserCreds = () => {
      return firebase.auth().signOut();
    };

    return { authenticateUserCreds, registerUserCreds, logoutUserCreds };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/NoteFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("NoteFctry", function($q, $http, Firebase) {

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
// File: ./app/controllers/NavCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("NavCtrl", function($scope, AuthFctry, $window) {

    $scope.logoutUser = () => {
      console.log("clicked");
      AuthFctry.logoutUserCreds()
      .then( (returnedUser) => {
        console.log("logged out", firebase.auth().currentUser);
        $window.location.href="#!/login";
      });
    };

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/NewNoteCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("NewNoteCtrl", function($scope, NoteFctry, $window) {


    $scope.addNote = () => {
      if (firebase.auth().currentUser === null) {
        $window.location.href = "#!/login";
      }
      else {
        let currentUser = firebase.auth().currentUser.uid;
        $scope.note.uid = currentUser;
        NoteFctry.addUserNote($scope.note)
        .then( () => {
          NoteFctry.getUserNotes();
          $window.location.href = "#!/note-list.html";
        });
      }
    };

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/NotesCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("NoteCtrl", function($scope, NoteFctry) { 

    NoteFctry.getUserNotes()
    .then( (userNotes) => {
      $scope.notes = Object.keys(userNotes).forEach( (noteID) => {
        userNotes[noteID].fbID = noteID;
        return userNotes[noteID];
      });
      console.log($scope.notes, "for printing");
    });

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

  module.controller("UserStateCtrl", function ($scope, AuthFctry) {

    $scope.loginUser = () => {
      AuthFctry.authenticateUserCreds($scope.user)
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

    const authenticateUserCreds = ( { email, password } ) => {
      return firebase.auth().signInWithEmailAndPassword(email, password);
    };

    const registerUserCreds = ( { email, password } ) => {
      return firebase.auth().createUserWithEmailAndPassword(email, password);
    };

    const logoutUserCreds = () => {
      return firebase.auth().signOut();
    };

    return { authenticateUserCreds, registerUserCreds, logoutUserCreds };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/NoteFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("NoteFctry", function($q, $http, Firebase) {

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
// File: ./app/controllers/NavCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("NavCtrl", function($scope, AuthFctry, $window) {

    $scope.logoutUser = () => {
      console.log("clicked");
      AuthFctry.logoutUserCreds()
      .then( (returnedUser) => {
        console.log("logged out", firebase.auth().currentUser);
        $window.location.href="#!/login";
      });
    };

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/NewNoteCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("NewNoteCtrl", function($scope, NoteFctry, $window) {


    $scope.addNote = () => {
      if (firebase.auth().currentUser === null) {
        $window.location.href = "#!/login";
      }
      else {
        let currentUser = firebase.auth().currentUser.uid;
        $scope.note.uid = currentUser;
        NoteFctry.addUserNote($scope.note)
        .then( () => {
          NoteFctry.getUserNotes();
          $window.location.href = "#!/note-list.html";
        });
      }
    };

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/NotesCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("NoteCtrl", function($scope, NoteFctry) { 

    NoteFctry.getUserNotes()
    .then( (userNotes) => {
      $scope.notes = Object.keys(userNotes).map( (noteID) => {
        userNotes[noteID].fbID = noteID;
        return userNotes[noteID];
      });
      console.log($scope.notes, "for printing");
    });

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

  module.controller("UserStateCtrl", function ($scope, AuthFctry) {

    $scope.loginUser = () => {
      AuthFctry.authenticateUserCreds($scope.user)
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

    const authenticateUserCreds = ( { email, password } ) => {
      return firebase.auth().signInWithEmailAndPassword(email, password);
    };

    const registerUserCreds = ( { email, password } ) => {
      return firebase.auth().createUserWithEmailAndPassword(email, password);
    };

    const logoutUserCreds = () => {
      return firebase.auth().signOut();
    };

    return { authenticateUserCreds, registerUserCreds, logoutUserCreds };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/NoteFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("NoteFctry", function($q, $http, Firebase) {

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
// File: ./app/controllers/NavCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("NavCtrl", function($scope, AuthFctry, $window) {

    $scope.logoutUser = () => {
      console.log("clicked");
      AuthFctry.logoutUserCreds()
      .then( (returnedUser) => {
        console.log("logged out", firebase.auth().currentUser);
        $window.location.href="#!/login";
      });
    };

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/NewNoteCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("NewNoteCtrl", function($scope, NoteFctry, $window) {


    $scope.addNote = () => {
      if (firebase.auth().currentUser === null) {
        $window.location.href = "#!/login";
      }
      else {
        let currentUser = firebase.auth().currentUser.uid;
        $scope.note.uid = currentUser;
        NoteFctry.addUserNote($scope.note)
        .then( () => {
          NoteFctry.getUserNotes();
          $window.location.href = "#!/note-list.html";
        });
      }
    };

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/NotesCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("NoteCtrl", function($scope, NoteFctry) { 

    NoteFctry.getUserNotes()
    .then( (userNotes) => {
      $scope.notes = Object.keys(userNotes).map( (noteID) => {
        userNotes[noteID].fbID = noteID;
        return userNotes[noteID];
      });
      console.log($scope.notes, "for printing");
    });

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

  module.controller("UserStateCtrl", function ($scope, AuthFctry) {

    $scope.loginUser = () => {
      AuthFctry.authenticateUserCreds($scope.user)
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

    const authenticateUserCreds = ( { email, password } ) => {
      return firebase.auth().signInWithEmailAndPassword(email, password);
    };

    const registerUserCreds = ( { email, password } ) => {
      return firebase.auth().createUserWithEmailAndPassword(email, password);
    };

    const logoutUserCreds = () => {
      return firebase.auth().signOut();
    };

    return { authenticateUserCreds, registerUserCreds, logoutUserCreds };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/NoteFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("NoteFctry", function($q, $http, Firebase) {

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


//--------------------------------------------------------------------------------------------------------------------
// File: ./app/values/firebaseCreds.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict"; 

  module.constant("Firebasecreds", {

    key: "AIzaSyCC-X2NZWNA0doyH8I0C4ATT1A_ZLhtGIY",
    authDomain: "fir-a5a79.firebaseapp.com"

  });

}) (angular.module ('NoteApp', ['ngRoute']));


