(function() {
    angular
        .module('tasksApp')
        .controller('AuthController', AuthController);

    function AuthController($auth, $state, $http, $rootScope, $scope) {
        var vm = this;

        vm.loginError = false;
        vm.loginErrorText;

        vm.login = function() {
            var credentials = {
                email: vm.email,
                password: vm.password
            };

            // Use Satellizer's $auth service to login
            $auth.login(credentials).then(function() {
                // If login is successful, redirect to users state
                // $state.go('users', {});
                return $http.get('api/authenticate/user');
            }, function(error) {
                vm.loginError = true;
                vm.loginErrorText = error.data.error;
            }).then(function(response) {
                var user = JSON.stringify(response.data.user);

                localStorage.setItem('user', user);

                $rootScope.authenticated = true;

                $rootScope.currentUser = response.data.user;

                $state.go('tasks');
            });
        };
    }
})();