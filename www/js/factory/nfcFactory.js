/**
 * Created by Moosa on 2016-08-17.
 */
angular.module('App').factory('nfcService', function ($rootScope, $ionicPlatform) {
  var tag = {};

  $ionicPlatform.ready(function() {
    nfc.addNdefListener(function (nfcEvent) {
      console.log(JSON.stringify(nfcEvent.tag, null, 4));
      $rootScope.$apply(function(){
        angular.copy(nfcEvent.tag, tag);
        // if necessary $state.go('some-route')
      });
    }, function () {
      console.log("Listening for NDEF Tags.");
    }, function (reason) {
      alert("Error adding NFC Listener " + reason);
    });

  });

  return {
    tag: tag,

    clearTag: function () {
      angular.copy({}, this.tag);
    }
  };
});



















/** RANDOM CRAP **/

// /**
//  * Created by Moosa on 2016-08-17.
//  */
//
// define(['App'],function(App){
// App.factory('mainFrandFactory',['FURL','$log','$firebaseAuth','$firebaseArray','$firebaseObject','Utils','ngFB',
//   function(FURL, $log, $firebaseAuth, $firebaseArray, $firebaseObject, Utils, ngFB) {
//
//     //var auth = $firebaseAuth(ref);
//     // var fDB = firebase.database().ref();
//     //
//     // var frandFactory = {
//     //   create:function(roomInfo){
//     //     var dataKey = fDB.child('rooms').push().key;
//     //     var updates = {};
//     //     updates['rooms/'+ dataKey]=roomInfo;
//     //
//     //     return fDB.update(updates);
//     //   }
//     //
//     // }
//     //
//     // return frandFactory;
//
//
//     function getFBID() {
//
//       ngFB.api({
//         path: '/me',
//         params: {fields: 'id,name'}
//       }).then(
//         function (user) {
//           console.log(user);
//           return user
//         },
//         function (error) {
//           alert('Facebook error: ' + error.error_description);
//         });
//     }
//
//
//     return {
//
//       getFBID: getFBID
//
//     }
//
//
//   }])});
