angular.module('starter.controllers', [])

.controller('MapCtrl', function($scope, $ionicLoading, $ionicPlatform, $window, $rootScope, $interval, $delegate) {



  $ionicPlatform.ready(function() {

    var lat = 52.473046;
    var long = 4.621356;

    var myLatlng = new google.maps.LatLng(lat, long);

    var mapOptions = {
      center: myLatlng,
      zoom: 16,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    $ionicLoading.show({
      template: '<ion-spinner icon="bubbles"></ion-spinner><br/>Acquiring location!'
    });
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
    $scope.map = map;
    $ionicLoading.hide();
  })

})

.controller('ChatsCtrl', function($scope, $ionicSlideBoxDelegate, $state, $rootScope, $stateParams) {
  var count = 0;
  var current = 0;
  $scope.nextSlide = function() {
    $ionicSlideBoxDelegate.$getByHandle('slider')._instances[0].next();
    if (count === (current + 1)) {
      $state.go("tab.go.work")
    }
    count = $ionicSlideBoxDelegate.$getByHandle('slider')._instances[0].slidesCount()
    current = $ionicSlideBoxDelegate.$getByHandle('slider')._instances[0].currentIndex()
  }

})