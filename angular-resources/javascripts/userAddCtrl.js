userModule.controller('userAddController', userCreateController);

function userCreateController($scope, $window, userService) {
  $scope.entity = {};
  var id = window.location.pathname.split("/").pop();
  if(!isNaN(id)) {
    userService.getById(id).then(function(result) {
      $scope.entity = result.data
      console.log("Success")
    }, function(error) {
      console.log("Failed")
    }).finally(function() {});
  }

  $scope.submitForm = function() {
    if($scope.entity.userID){
      userService.update($scope.entity).then(function(result) {
        console.log("Success")
        $window.location.href = '/users';
      }, function(error) {
        console.log("Failed")
      }).finally(function() {});
    } else {
      userService.create($scope.entity).then(function(result) {
        console.log("Success")
        $window.location.href = '/users';
      }, function(error) {
        console.log("Failed")
      }).finally(function() {});
    }
  };
};