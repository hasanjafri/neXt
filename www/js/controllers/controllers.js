'Use Strict';
angular.module('App')



.controller('profileCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

  .controller('menuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams) {


    }])


  //   .controller('createRoomCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// // You can include any angular dependencies as parameters for this function
// // TIP: Access Route Parameters for your page via $stateParams.parameterName
//     function ($scope, $stateParams) {
//
//
//     }])

.controller('currentFrandsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

  .controller('queuesCtrl', ['$scope', '$stateParams','$ionicPopup', 'mainFrandFactory',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams,$ionicPopup,mainFrandFactory) {
      $scope.tap =0;
      $scope.lineSize=0;

      $scope.refA = firebase.database().ref('line');

      $scope.refA.on('child_removed', function(snapshot) {
        var a = snapshot.numChildren(); // 1 ("name")
        $scope.lineSize= a;
        console.log("UPDATEeeeD")
        console.log(a)
      });

      $scope.increase = function(){

        $scope.tap++;
        var user = firebase.auth().currentUser;
        console.log(user);

        mainFrandFactory.joinLine(user).then(function(data){
          console.log("updated user");
          // $ionicLoading.hide();
        },function(err){
          Utils.hide();
          Utils.errMessage(err);
          // $ionicLoading.hide();

        });

        // mainFrandFactory.joinLine(user);
        console.log('LMAO');
        var refA = firebase.database().ref('line/');
        refA.once("value")
          .then(function(snapshot) {
            var a = snapshot.numChildren(); // 1 ("name")
            $scope.lineSize= a;
            console.log(a);
          });



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

    }])


  .controller('frandHistoryCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('settingsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
