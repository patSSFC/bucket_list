bucketList.factory('eventFactory', function($http, $routeParams) {
    var factory = this;
    console.log('loaded event factory!');

    factory.postEvent = function(data, callback) {
        console.log(data);
        $http.post('/event', data)
            .then(function (returnData) {
                // this callback will be called asynchronously
                // when the response is available
                callback(returnData);
            }, function (err) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                // console.log("error in login!");
                console.log(err);
                // callback(err);
            });
    }

    factory.getAllEvents = function(data, callback) {
        console.log(data);
        $http.get('/event/' + data.id)
            .then(function(returnData) {
                callback(returnData);
            }, function(err) {
                console.log(err);
            });
    }

    factory.getByID = function(callback) {
        console.log($routeParams);
        console.log($routeParams.user_id);
        $http.get('/profile/' + $routeParams.user_id)
            .then(function(returnData) {
                callback(returnData);
            }, function(err) {
                console.log(err);
            });
    }

    factory.updateEvent = function(data, callback) {
        $http.post('/event/update', data)
            .then(function(returnData) {
                console.log(returnData);
            }, function(err) {
                console.log(err);
            });
    }
    return factory;
});
