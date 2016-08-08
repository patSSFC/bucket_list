var bucketList = angular.module('bucketList', ['ngRoute']);

bucketList.config(function($routeProvider) {
    $routeProvider
        .when('/dashboard', {
            templateUrl: '../partials/create_event.html',
            controller: 'EventController',
            controllerAs: 'vm'
        })
        .when('/login', {
            templateUrl: '../partials/login.html',
            controller: 'UserController',
            controllerAs: 'vm'
        })
        .when('/profile/:user_id', {
            templateUrl: '../partials/profile_view.html',
            controller: 'EventController',
            controllerAs: 'vm'
        })
        .otherwise({
            redirectTo: '/dashboard'
        })
});
