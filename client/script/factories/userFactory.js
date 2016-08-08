bucketList.factory('userFactory', function($http) {
    var factory = this;

    factory.users;
    factory.message;

    factory.login = function(data, callback) {
        console.log(data);
        $http.post('/user', data)
            .then(function successCallback(returnData) {
                // this callback will be called asynchronously
                // when the response is available
                factory.message = returnData.data.message;
                factory.user = {username : returnData.data.user.name, id : returnData.data.user._id};
                callback(returnData);
            }, function errorCallback(err) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                console.log("error in login!");
                console.log(err);
                callback(err);
            });
    }

    factory.getAllUsers = function(callback) {
        $http.get('/user')
            .then(function(returnData) {
                callback(returnData);
            }, function(err) {
                console.log(err);
            });
    }
    // this.getAllUsers();

    return factory;
})
