(function() {

    angular.module('habitsApp', [
        'ui-router',
        'satellizer'
    ])
    .config(function($stateProvider, $urlRouteProvider, $authProvider) {

        // Satellizer configuration that specifies which API
        // route the JWT should be retrieved from
        $authProvider.loginUrl = '/api/authenticate';

        // Redirect to the auth state if any other states
        // are requested other than users
        $urlRouterProvider.otherwise('/auth');

        // $routeProvider
        //     .when('/', {
        //         templateUrl: '/partials/tasks/index',
        //         controller: 'TaskController'
        //     })
        //     .when('/tasks', {
        //         templateUrl: '/partials/tasks/index',
        //         controller: 'TaskController'
        //     })
        //     .when('/tasks/:id', {
        //         templateUrl: '/partials/tasks/show',
        //         controller: 'TaskController'
        //     })
        //     .when('/projects', {
        //         templateUrl: '/partials/projects/index',
        //         controller: 'ProjectController'
        //     })
        //     .otherwise({
        //         redirectTo: '/'
        //     });

        $stateProvider
            .state('auth', {
                url: '/auth',
                templateUrl: '/partials/auth',
                controller: 'AuthController as auth'
            })
            .state('users', {
                url: '/users',
                templateUrl: '/partials/users',
                controller: 'UserController as user'
            });
    });

    // angular.module('habitsApp').filter('fromNow', function() {
    //     return function(date) {
    //         return moment(date).fromNow();
    //     };
    // });

})();