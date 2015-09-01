(function() {
    angular.module('taskService', [])
        .factory('Task', function($http) {
            return {
                // get all projects
                get: function(id) {
                    if(id !== undefined) {
                        return $http.get('/api/tasks/' + id);
                    } else {
                        return $http.get('/api/tasks');
                    }
                },

                // get comments for task
                getComments: function(id) {
                    return $http.get('/api/tasks/' + id + '/comments');
                },

                getProject: function(id) {
                    return $http.get('/api/tasks/' + id + '/project');
                },

                // save a project
                save: function(taskData) {
                    return $http({
                        method: 'POST',
                        url: '/api/tasks',
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                        },
                        data: $.param(taskData)
                    });
                },

                // save a comment
                saveComment: function(taskId, commentData) {
                    return $http({
                        method: 'POST',
                        url: '/api/tasks/' + taskId + '/comments',
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                        },
                        data: $.param(commentData)
                    });
                },

                // destroy a project
                destroy: function(id) {
                    return $http.delete('/api/tasks/' + id);
                }
            };
        });
})();