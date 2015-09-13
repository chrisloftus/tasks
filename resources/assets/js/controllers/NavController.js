(function() {
    angular.module('habitsApp')
    .controller('NavController', NavController);

    function NavController($scope, $auth, $rootScope) {
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