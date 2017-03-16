app.controller('countdownController', ['$scope', '$interval', 'countdownService', function($scope, $interval, countdownService) {
  // gets formatted deadline
  $scope.deadline = countdownService.getDisplayDeadline();
  // setup initial counter
  $scope.counterParts = countdownService.getUpdatedCounterParts();
  $scope.isFinished = false;

  var countdown = $interval(function() {
    if (countdownService.isFinished()) {
      $interval.cancel(countdown);
      $scope.isFinished = true;  
    }
    else
      $scope.counterParts = countdownService.getUpdatedCounterParts();
  }, 1000);

}]);