(function() {
    angular.module('projectService', [])
        .factory('Project', function($http) {
            return {
                // get all projects
                get: function() {
                    return $http.get('/api/projects');
                },

                // save a project
                save: function(projectData) {
                    return $http({
                        method: 'POST',
                        url: '/api/projects',
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                        },
                        data: $.param(projectData)
                    });
                },

                // destroy a project
                destroy: function(id) {
                    return $http.delete('/api/projects/' + id);
                }
            };
        });
})();