(function() {
    angular.module('tasksApp')
    .controller('NavController', NavController);

    function NavController($scope, $auth, $rootScope, $location) {
        // var vm = this;

        $scope.logout = function() {
            // alert('logout');
            $auth.logout().then(function() {
                localStorage.removeItem('user');
                $rootScope.authenticated = false;
                $rootScope.currentUser = null;
            });
        };
    }
})();