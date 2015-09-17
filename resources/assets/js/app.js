(function() {

    angular.module('tasksApp', [
        'ui.router',
        'satellizer',
        'angucomplete-alt'
    ])
    .config(function($stateProvider, $urlRouterProvider, $authProvider, $httpProvider, $provide) {

        function redirectWhenLoggedOut($q, $injector) {

            return {

                responseError: function(rejection) {

                    // Need to use $injector.get to bring in $state or else we get
                    // a circular dependency error
                    var $state = $injector.get('$state');

                    // Instead of checking for a status code of 400 which might be used
                    // for other reasons in Laravel, we check for the specific rejection
                    // reasons to tell us if we need to redirect to the login state
                    var rejectionReasons = ['token_not_provided', 'token_expired',
                        'token_absent', 'token_invalid'];

                    // Loop through each rejection reason and redirect to the login
                    // state if one is encountered
                    angular.forEach(rejectionReasons, function(value, key) {

                        if(rejection.data.error === value) {

                            // If we get a rejection corresponding to one of the reasons
                            // in our array, we know we need to authenticate the user so
                            // we can remove the current user from local storage
                            localStorage.removeItem('user');

                            // Send the user to the auth state so they can login
                            $state.go('auth');
                        }
                    });

                    return $q.reject(rejection);
                }
            };
        }

        // Setup for the $httpInterceptor
        $provide.factory('redirectWhenLoggedOut', redirectWhenLoggedOut);

        // Push the new factory onto the $http interceptor array
        $httpProvider.interceptors.push('redirectWhenLoggedOut');

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