// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic'
                           , 'starter.services'                        
                           , 'starter.filters'                                    
                           , 'starter.directives'                           
                           , 'starter.controllers'
                           ])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
    

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
            url: "/tab",
            abstract: true,
            templateUrl: "templates/tabs.html"
                })
    
    
  // Each tab has its own nav history stack:

  .state('tab.home', {
    url: '/home',
    views: {
      'tab-home': {
        templateUrl: 'templates/tab-home.html',
        controller: 'HomeCtrl'
      }
    }
  })

   .state('tab.weather', {
   url: '/weather',
   views: {
     'tab-weather': {
       templateUrl: 'templates/tab-weather.html',
        controller: 'WeatherCtrl'
                    }
                        }
        })
  
  .state('tab.localbus', {
      url: '/localbus',
      views: {
        'tab-localbus': {
          templateUrl: 'templates/tab-localbus.html',
          controller: 'LocalBusCtrl'
        }
      }
    })
    
  
    
  .state('tab.coupons', {
      url: '/coupons',
      views: {
        'tab-coupons': {
          templateUrl: 'templates/tab-coupons.html',
          controller: 'CouponsCtrl'
        }
      }
    })
  
  .state('tab.coupondining', {
    url: '/coupondining',
      views: {
    'tab-coupons':{
    templateUrl: 'templates/coupondining.html',
        }
      }
    })
    
    .state('tab.couponapparel', {
    url: '/couponapparel',
      views: {
    'tab-coupons':{
    templateUrl: 'templates/couponapparel.html',
      }}
    })
    
    .state('tab.couponbeauty', {
    url: '/couponbeauty',
      views: {
    'tab-coupons':{
    templateUrl: 'templates/couponbeauty.html',
    }}
    })
    
    .state('tab.couponleisure', {
    url: '/couponleisure',
      views: {
    'tab-coupons':{
    templateUrl: 'templates/couponleisure.html',
    }}
    })
    
    .state('tab.couponservices', {
    url: '/couponservices',
      views: {
    'tab-coupons':{
    templateUrl: 'templates/couponservices.html',
    }}
    })


  .state('tab.catalog', {
    url: '/catalog',
    views: {
      'tab-catalog': {
        templateUrl: 'templates/tab-catalog.html',
        controller: 'CatalogCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/home');

})





    
