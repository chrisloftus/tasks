(function() {

    angular.module('tasksApp', [
        'ui.router',
        'satellizer',
        'angucomplete-alt'
    ])
    .config(function($stateProvider, $urlRouterProvider, $authProvider) {

        // Satellizer configuration that specifies which API
        // route the JWT should be retrieved from
        $authProvider.loginUrl = '/api/authenticate';

        // Redirect to the auth state if any other states
        // are requested other than users
        $urlRouterProvider.otherwise('/auth');

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
            })
            .state('tasks', {
                url: '/tasks',
                templateUrl: '/partials/tasks/index',
                controller: 'TaskController'
            })
            .state('tasksAll', {
                url: '/tasks/all',
                templateUrl: '/partials/tasks/all',
                controller: 'TaskController'
            })
            .state('taskNew', {
                url: '/tasks/new',
                templateUrl: '/partials/tasks/new',
                controller: 'TaskController'
            })
            .state('task', {
                url: '/tasks/:id',
                templateUrl: '/partials/tasks/show',
                controller: 'TaskController'
            })
            .state('projects', {
                url: '/projects',
                templateUrl: '/partials/projects/index',
                controller: 'ProjectController'
            })
            .state('projectNew', {
                url: '/projects/new',
                templateUrl: '/partials/projects/new',
                controller: 'ProjectController'
            })
            .state('project', {
                url: '/projects/:id',
                templateUrl: '/partials/projects/show',
                controller: 'ProjectController'
            });
    })
    .run(function($rootScope, $state) {
        $rootScope.$on('$stateChangeStart', function(event, toState) {
            var user = JSON.parse(localStorage.getItem('user'));

            if(user) {
                $rootScope.authenticated = true;
                $rootScope.currentUser = user;
                if(toState.name === 'auth') {
                    event.preventDefault();
                    $state.go('tasks');
                }
            }
        });
    });

    angular.module('tasksApp').filter('fromNow', function() {
        return function(date) {
            return moment(date).fromNow();
        };
    });

})();