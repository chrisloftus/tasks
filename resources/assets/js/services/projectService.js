(function() {
    angular.module('tasksApp')
        .factory('Project', function($http) {
            return {
                // get all projects
                get: function(id) {
                    if(id !== undefined) {
                        return $http.get('/api/projects/' + id);
                    } else {
                        return $http.get('/api/projects');
                    }
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

                // update a project
                update: function(id, projectData) {
                    return $http({
                        method: 'PUT',
                        url: '/api/projects/' + id,
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