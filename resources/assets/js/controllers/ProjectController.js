(function() {
    angular.module('tasksApp')

        .controller('ProjectController', function($state, $stateParams, $scope,
            $rootScope, $http, Project, User) {

            // if(!$rootScope.authenticated) {
            //     $state.go('auth');
            // }

            $scope.projectData = {};

            $scope.loading = true;

            if($stateParams.id) {
                // projects show view

                Project.get($stateParams.id)
                    .success(function(project) {
                        $scope.project = project;
                    });

                $scope.selectedUser = function($item) {

                    // add the user to the project
                    Project.update($stateParams.id, $item.originalObject)
                        .success(function() {
                            // get the new users
                            // by getting the project again
                            Project.get($stateParams.id)
                                .success(function(project) {
                                    $scope.project = project;
                                });
                        });
                };

                $scope.detachUser = function(id) {
                    Project.update($stateParams.id, {
                        id: id
                    })
                        .success(function() {
                            Project.get($stateParams.id)
                                .success(function(project) {
                                    $scope.project.users = project.users;
                                })
                                .error(function() {
                                    console.log('error');
                                });
                        })
                        .error(function() {
                            console.log('error');
                        });
                };

            } else {
                // projects index view

                Project.get()
                    .success(function(data) {
                        $scope.projects = data;
                        $scope.loading = false;
                    });
            }

            // get the users for show project
            // and new project views
            User.get()
                .success(function(users) {
                    $scope.users = users;
                });

            $scope.projectData.users = [];

            // add user new project view
            $scope.selectedUser = function($item) {
                if($stateParams.id) {
                    Project.update($stateParams.id, {
                        id: $item.originalObject.id,
                    })
                        .success(function() {
                            Project.get($stateParams.id)
                                .success(function(project) {
                                    $scope.project.users = project.users;
                                });
                        })
                        .error(function() {
                            console.log('error');
                        });
                } else {
                    // console.log($item.originalObject);
                    // if($item.length !== undefined) {
                        var idAndName = {
                            id: $item.originalObject.id,
                            name: $item.originalObject.name
                        };
                        $scope.projectData.users.push(idAndName);
                    // }
                }
            };

            $scope.submitProject = function() {
                $scope.loading = true;

                console.log($scope.projectData);

                Project.save($scope.projectData)
                    .success(function(data) {
                        $state.go('projects');
                    })
                    .error(function(data) {
                        console.log(data);
                    });
            };

            $scope.deleteProject = function(id) {
                $scope.loading = true;

                Project.destroy(id)
                    .success(function(data) {
                        Project.get()
                            .success(function(getData) {
                                $scope.projects = getData;
                                $scope.loading = false;
                            });
                    });
            };

        });
})();