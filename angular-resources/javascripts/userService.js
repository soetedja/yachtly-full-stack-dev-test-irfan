userModule.service('userService', userServices);

function userServices($http, $q) {
    var userServices = {
        getById: _getById,
        getAll: _getAll,
        create: _addUser,
        update: _update,
        delete: _delete,
    };
    return userServices;
    function _get() {
      console.log('asdfasdf')
    }
    
    function _getById($id) {
        var defer = $q.defer();
        $http({
            method: 'GET',
            url: "http://localhost:3000/user/" + $id
        }).then(function (response){
            if(response.data.errors !== undefined) alert(response.data.errors[0].message)
            else defer.resolve(response);
          },function (error){
            defer.reject(error);
          })
        return defer.promise;
    }

    function _getAll() {
        var defer = $q.defer();
        $http({
            method: 'GET',
            url: "http://localhost:3000/user"
        }).then(function (response){
            if(response.data.errors !== undefined) alert(response.data.errors[0].message)
            else defer.resolve(response);
          },function (error){
            defer.reject(error);
          })
        return defer.promise;
    }

    function _addUser($entity) {
        var defer = $q.defer();
        $http({
            method: 'POST',
            url: "http://localhost:3000/user/add",
            data: $.param($entity),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).then(function (response){
            if(response.data.errors !== undefined) alert(response.data.errors[0].message)
            else defer.resolve(response);
        },function (error){
          defer.reject(error);
        })
        
        return defer.promise;
    }

    function _update($entity) {
        var defer = $q.defer();
        $http({
            method: 'PUT',
            url: "http://localhost:3000/user/" + $entity.userID,
            data: $.param($entity),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).then(function (response){
            if(response.data.errors !== undefined) alert(response.data.errors[0].message)
            else defer.resolve(response);
          },function (error){
            defer.reject(error);
          })
        return defer.promise;
    }

    function _delete($id) {
        var defer = $q.defer();
        $http({
            method: 'DELETE',
            url: "http://localhost:3000/user/" + $id
        }).then(function (response){
            if(response.data.errors !== undefined) alert(response.data.errors[0].message)
            else defer.resolve(response);
          },function (error){
            defer.reject(error);
          })
        return defer.promise;
    }
}