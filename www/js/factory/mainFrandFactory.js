/**
 * Created by Moosa on 2016-08-17.
 */
angular.module('App').factory('mainFrandFactory', function(FURL, $log, $firebaseAuth, $firebaseArray, $firebaseObject, Utils, ngFB) {

  var fDB = firebase.database().ref();

  var frandFactory = {

    create:function(roomInfo){
      var dataKey = fDB.child('rooms').push().key;
      var updates = {};
      updates['rooms/'+ dataKey]=roomInfo;
      return fDB.update(updates);
    },

    updateUser:function(uid,info){
      var postData= {
        "id": uid,
        "name" : info.displayName,
        "email": info.email,
        "updated": new Date()
      };

    var updates={};
      updates['users/'+uid]=postData;
      return fDB.update(updates);

    },

    joinLine:function(user){
      // var updates = {};
      // // updates['members/'+roomID]={'member':info.uid};
      // // console.log("member added");
      // var refA = firebase.database().ref('line');
      // refA.update({
      //   'member':user.email
      // });
      // return refA;

      var dataKey = fDB.child('line').push().key;
      var updates = {};
      updates['line/'+ dataKey]=user.email;
      return fDB.update(updates);
    },

    lineSize:function(){
      var updates = {};
      // updates['members/'+roomID]={'member':info.uid};
      // console.log("member added");
      var refA = firebase.database().ref('line/');
      refA.once("value")
        .then(function(snapshot) {
          var a = snapshot.numChildren(); // 1 ("name")
          
        });
      return a;
    }

  }

  return frandFactory;

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
