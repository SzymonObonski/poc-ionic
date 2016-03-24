// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

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
    url: '/tab',
    abstract: true,
    templateUrl: 'www/templates/tabs.html',
    controller: 'ChatsCtrl'
  })

  // Each tab has its own nav history stack:

  .state('tab.dash', {
      url: '/dash',
      views: {
        'tab-dash': {
          templateUrl: 'www/templates/tab-dash.html',
          controller: 'ChatsCtrl'
        }
      }
    })
    .state('tab.go', {
      url: '/go',
      templateUrl: 'www/templates/tab-go.html',
    })
    .state('tab.go.landing', {
      url: '/landing',
      templateUrl: 'www/templates/tab-go-landing.html',
      controller: 'ChatsCtrl',
    })
    .state('tab.go.slider', {
      url: '/slider',
      templateUrl: 'www/templates/tab-go-slider.html',
      controller: 'ChatsCtrl'
    })
    .state('tab.go.stop', {
      url: '/stop',
      templateUrl: 'www/templates/tab-go-stop.html',
      controller: 'ChatsCtrl'
    })
    .state('tab.go.work', {
      url: '/work',
      templateUrl: 'www/templates/tab-go-work.html',
      controller: 'ChatsCtrl'
    })
    .state('tab.news', {
      url: '/news',
      views: {
        'tab-news': {
          templateUrl: 'www/templates/tab-news.html',
          controller: 'ChatsCtrl'
        }
      }
    })
    .state('tab.map', {
      url: '/map',
      views: {
        'tab-map': {
          templateUrl: 'www/templates/tab-map.html',
          controller: 'MapCtrl'
        }
      }
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/go');

});