(function() {
    angular.module('habitsApp')

        .controller('TaskController', function($scope, $state, $rootScope,
            $http, $stateParams, Task, User, Project) {

            if(!$rootScope.authenticated) {
                console.log('not authenticated');
                $state.go('auth');
            }

            $scope.taskData = {};

            $scope.loading = true;

            if($stateParams.id) {
                // single task view

                // task status (open, resolved, closed)
                $http.get('/api/statuses')
                    .success(function(statuses) {
                        $scope.statuses = statuses;
                    })
                    .error(function() {
                        console.log('error');
                    });

                // get the task
                Task.get($stateParams.id)
                    .success(function(data) {
                        $scope.task = data;
                        $scope.loading = false;
                        $scope.selectedTaskStatus = $scope.task.status;
                        $scope.selectedUser = $scope.task.user_id;
                    });

                // update task info
                $scope.taskChange = function(taskId, status, assigned) {
                    $http.put('/api/tasks/' + taskId, {
                        status: status,
                        user_id: assigned
                    })
                    .success(function(result) {
                        console.log(result);
                    })
                    .error(function() {
                        console.log('error');
                    });
                };

                // comments form
                $scope.formComments = {};
                $scope.formComments.submit = function(item, event) {

                    // console.log($rootScope.currentUser);

                    Task.saveComment($stateParams.id, {
                            message: $scope.formComments.message,
                            userId: $rootScope.currentUser.id
                        })
                        .success(function(data) {
                            console.log('success');

                            $scope.formComments.message = '';

                            // reload the comments
                            Task.getComments($stateParams.id)
                                .success(function(data) {
                                    $scope.task.comments = data;
                                });
                        })
                        .error(function() {
                            console.log('error');
                        });
                };

                // users for 'assigned to' dropdown
                User.get()
                    .success(function(users) {
                        $scope.users = users;
                    });

            } else {
                // task list view
                Task.get()
                    .success(function(data) {
                        $scope.tasks = data;
                        $scope.loading = false;
                    })
                    .error(function(error) {
                        console.log(error);
                    });
            }

            // new task - projects dropdown
            Project.get()
                .success(function(projects) {
                    $scope.projects = projects;
                });

            // new task - users dropdown
            User.get()
                .success(function(users) {
                    $scope.users = users;
                });

            $scope.submitTask = function() {
                $scope.loading = true;

                Task.save($scope.taskData)
                    .success(function(data) {
                        $state.go('tasks');
                    })
                    .error(function(data) {
                        console.log(data);
                    });
            };

            $scope.deleteTask = function(id) {
                $scope.loading = true;

                Task.destroy(id)
                    .success(function(data) {
                        Task.get()
                            .success(function(getData) {
                                $scope.tasks = getData;
                                $scope.loading = false;
                            });
                    });
            };

        });
})();