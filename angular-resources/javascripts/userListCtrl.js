userModule.controller('userListController', userListController);

function userListController ($scope, $location, userService) {
  refresh();

  function refresh () {
    userService.getAll().then(function (result) {
      $scope.users = result.data;
      console.log("Success", result.data)
    }, function (error) {
      console.log("Failed")
    }).finally(function () { });
  }

  $scope.delete = function (id) {
    userService.delete(id).then(function (result) {
      refresh();
    }, function (result) {
    }).finally(function () {
    });
  };

};