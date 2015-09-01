(function() {
    angular.module('TaskController', [])

        .controller('TaskController', function($scope, $http, $routeParams, Task) {

            $scope.taskData = {};

            $scope.loading = true;

            if($routeParams.id) {
                // single task view
                // get the task
                Task.get($routeParams.id)
                    .success(function(data) {
                        $scope.task = data;
                        $scope.loading = false;
                    });

                // get the task comments
                Task.getComments($routeParams.id)
                    .success(function(data) {
                        $scope.comments = data;
                    });

                // comments form
                $scope.formComments = {};
                $scope.formComments.submit = function(item, event) {

                    Task.saveComment($routeParams.id, { message: $scope.formComments.message })
                        .success(function(data) {
                            console.log('success');

                            $scope.formComments.message = '';

                            // reload the comments
                            Task.getComments($routeParams.id)
                                .success(function(data) {
                                    $scope.comments = data;
                                });
                        })
                        .error(function() {
                            console.log('error');
                        });
                };

                // get project
                Task.getProject($routeParams.id)
                    .success(function(data) {
                        $scope.project = data;
                    });
            } else {
                // task list view
                Task.get()
                    .success(function(data) {
                        $scope.tasks = data;
                        $scope.loading = false;
                    });
            }

            $scope.parseStatus = function(status) {
                var text = 'Open';
                if(status === 1) {
                    text = 'Resolved';
                }
                if(status === 2) {
                    text = 'Closed';
                }

                return text;
            };

            $scope.submitTask = function() {
                $scope.loading = true;

                Task.save($scope.taskData)
                    .success(function(data) {
                        Task.get()
                            .success(function(getData) {
                                $scope.tasks = getData;
                                $scope.loading = false;
                            });
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