bucketList.controller('EventController', function($scope, $location, userFactory, eventFactory) {
    console.log('loaded event contrller');

    var vm = this;

    vm.onAddEvent = function() {
        $scope.formData.currentUser = vm.user.username;
        console.log($scope.formData);
        eventFactory.postEvent($scope.formData, function(data) {
            getAllHelper();
        });
    }

    vm.onComplete = function(data) {
        console.log(data);
        data.complete = true;
        eventFactory.updateEvent(data);
    }

    userFactory.getAllUsers(function(data) {
        vm.user = userFactory.user;
        vm.users = data.data;
        console.log(vm.users);
    });

    // eventFactory.getAllEvents(userFactory.user, function(data) {
    //     vm.events = data.data;
    // })

    getAllHelper();
    function getAllHelper() {
        eventFactory.getAllEvents(userFactory.user, function(data) {
            vm.events = data.data;
        })
    }

    eventFactory.getByID(function(data) {
        vm.events = data.data;
        console.log(vm.events);
    })
})
