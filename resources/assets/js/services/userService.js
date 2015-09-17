(function() {
    angular.module('tasksApp')
        .factory('User', function($http) {
            return {
                // get users
                get: function() {
                    return $http.get('/api/users');
                }
            };
        });
})();