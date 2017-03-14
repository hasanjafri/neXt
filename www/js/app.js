'Use Strict';
angular.module('App', ['ionic','ngStorage', 'ngCordova','firebase','ngMessages','ngOpenFB'])
.config(function($stateProvider, $urlRouterProvider) {
$stateProvider

    .state('login', {
      url: '/login',
      templateUrl: 'views/login/login.html',
      controller:'loginController',
      service:'loginService'
    })
    .state('forgot', {
      url: '/forgot',
      templateUrl: 'views/forgot/forgot.html',
      controller:'forgotController'
    })
    .state('register', {
      url: '/register',
      templateUrl: 'views/register/register.html',
      controller:'registerController'
    })

    .state('home', {
      url: '/home',
      templateUrl: 'views/home/home.html',
      controller:'homeController'
    })
    .state('profile', {
      url: '/profile',
      templateUrl: 'views/profile/profile.html',
      controller:'profileController'
    })

//Menu stuff

  .state('menu.frands', {
    url: '/frands',
    views: {
      'side-menu21': {
        templateUrl: 'views/main/frands.html',
        controller: 'frandsCtrl',
        service:'loginService'

      }
    }
  })

  .state('menu.createRoom', {
    url: '/createRoom',
    views: {
      'side-menu21': {
        templateUrl: 'views/main/createRoom.html',
        controller: 'createRoomCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'views/tabsController.html',
    abstract:true
  })

  .state('tabsController.queues', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'views/queues.html',
        controller: 'queuesCtrl'
      }
    }
  })

  .state('tabsController.history', {
    url: '/page3',
    views: {
      'tab3': {
        templateUrl: 'views/history.html',
        controller: 'queuesCtrl'
      }
    }
  })
  .state('tabsController.favPage', {
    url: '/page6',
    views: {
      'tab4': {
        templateUrl: 'views/favPage.html',
        controller: 'queuesCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'views/menu.html',
    abstract:true,

  })


  //
  // .state('menu.profile', {
  //   url: '/profile',
  //   views: {
  //     'side-menu21': {
  //       templateUrl: 'views/profile.html',
  //       controller: 'profileCtrl'
  //     }
  //   }
  // })



  // .state('menu.currentFrands', {
  //   url: '/active',
  //   views: {
  //     'side-menu21': {
  //       templateUrl: 'views/currentFrands.html',
  //       controller: 'currentFrandsCtrl'
  //     }
  //   }
  // })
  //
  // .state('menu.frandHistory', {
  //   url: '/history',
  //   views: {
  //     'side-menu21': {
  //       templateUrl: 'views/frandHistory.html',
  //       controller: 'frandHistoryCtrl'
  //     }
  //   }
  // })

  // .state('menu.settings', {
  //   url: '/settings',
  //   views: {
  //     'side-menu21': {
  //       templateUrl: 'views/settings.html',
  //       controller: 'settingsCtrl'
  //     }
  //   }
  // })


  //end of menu stuff
    ;
$urlRouterProvider.otherwise("/login");
})





// Changue this for your Firebase App URL.

.constant('FURL', {
    apiKey: "AIzaSyDE-WMV8Pz4ZtIwReSGsK7O6uC4RqOhurY",
    authDomain: "next-80843.firebaseapp.com",
    databaseURL: "https://next-80843.firebaseio.com",
    storageBucket: "next-80843.appspot.com",
  }

  )

  .factory('nfcService', function ($rootScope, $ionicPlatform) {

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
  })

.run(function($ionicPlatform, ngFB) {
  ngFB.init({appId: '640206552794953'});

  $ionicPlatform.ready(function(FURL) {

    // AdMob
            if(window.AdMob) {
                var admobid;

                if (device.platform == "Android") {
                    admobid = { // for Android
                        banner: 'ca-app-pub-8943241156434100/4304279677',
                        interstitial: 'ca-app-pub-8943241156434100/3994725276'
                    };
                } else {
                    admobid = { // for iOS
                        banner: 'ca-app-pub-8943241156434100/7257746078',
                        interstitial: 'ca-app-pub-8943241156434100/2378391279'
                    };
                }
                console.log("admobid" + angular.toJson(admobid));

                $adMob.createBanner( {
                    adId: admobid.banner,
                    autoShow: true,
                    bgColor: 'black',
                    position: $adMob.position.BOTTOM_CENTER
                });

                $adMob.prepareInterstitial({
                    adId: admobid.interstitial,
                    autoShow: false
                });
            }
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});
