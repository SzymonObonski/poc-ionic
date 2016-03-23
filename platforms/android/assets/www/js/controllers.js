angular.module('starter.controllers', [])

.controller('MapCtrl', function($scope) {

  // $scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };
})

.controller('ChatsCtrl', function($scope, $ionicSlideBoxDelegate, $state) {
  var count = 0;
  var current = 0;
  $scope.nextSlide = function() {
    $ionicSlideBoxDelegate.$getByHandle('slider')._instances[0].next();
    if (count === (current + 1)) {
      $state.go("tab.go.work")
    }
    count = $ionicSlideBoxDelegate.$getByHandle('slider')._instances[0].slidesCount()
    current = $ionicSlideBoxDelegate.$getByHandle('slider')._instances[0].currentIndex()
    console.log(count, current);

    if (count === current) {}
  }
})