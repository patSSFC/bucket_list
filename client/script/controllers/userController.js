bucketList.controller('UserController', function($scope, $location, userFactory) {
    console.log("loaded uer controller!");

    var vm = this;
    vm.error = false;

    vm.onLogin = function() {
        userFactory.login({username: $scope.formData.username}, function(data) {
            if(data.status === 200) {
                vm.success = true;
                vm.user = data.data.user;
                $location.path('/create');
            } else if(data.status === 500) {
                vm.error = true;
            }
        })
    };
});
