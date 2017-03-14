'Use Strict';
angular.module('App')

.controller('frandsCtrl', ['$scope', '$stateParams', '$state','$localStorage','$location','$http','$ionicPopup','$firebaseObject','$filter','Auth','ngFB','FURL','Utils','mainFrandFactory','nfcService',

// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $state, $localStorage, $location,$http,$ionicPopup, $firebaseObject,$filter, Auth, ngFB ,FURL, Utils,mainFrandFactory,nfcService) {
  
  $scope.tapx =0;

  $scope.increase = function(){
    $scope.tapx++;
    console.log("yo");
    console.log($scope.tag);
  }

  $scope.showAlert = function() {
    var alertPopup = $ionicPopup.alert({
      title: 'Sucessfully Joined Queue',
      template: 'You are 15/20.'
    });
    alertPopup.then(function(res) {
      console.log('Sucessfully Joined Queue');
    });
  };

  // $scope.endLoad={};
  //
  //
  // $scope.getPayload = function(test){
  //
  //   $scope.endLoad= $filter('decodePayload')(test);
  //   $scope.endLoad= 4;
  // };

  $scope.fireUser={};

  ngFB.api({
    path: '/me',
    params: {fields: 'id,name,picture'}
    }).then(
    function (user) {
      $scope.user = user;
    },
    function (error) {
      alert('Facebook error: ' + error.error_description);
    });



  $scope.updateInfo=function(){

    var user = firebase.auth().currentUser;
    if (user != null) {
      $scope.fireUser = user;
      console.log("firebase user stored info: ")
      console.log($scope.fireUser.uid);
      // $ionicLoading();
      mainFrandFactory.updateUser($scope.fireUser.uid,$scope.fireUser).then(function(data){
        console.log("updated user");
        // $ionicLoading.hide();
      },function(err){
        Utils.hide();
        Utils.errMessage(err);
        // $ionicLoading.hide();

      });
    }

  }

  $scope.createRoomSwitch = function(){

    $state.go('menu.createRoom');

  }

  $scope.logout=function(){

    firebase.auth().signOut().then(function() {
      Auth.logout();
      $state.go('login');
    }, function(error) {
      // An error happened.
    });
  }

}])
















