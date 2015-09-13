(function() {
    angular.module('habitsApp')

        .controller('ProjectController', function($state, $scope, $rootScope, $http, Project) {

            if(!$rootScope.authenticated) {
                $state.go('auth');
            }

            $scope.projectData = {};

            $scope.loading = true;

            Project.get()
                .success(function(data) {
                    $scope.projects = data;
                    $scope.loading = false;
                });

            $scope.submitProject = function() {
                $scope.loading = true;

                Project.save($scope.projectData)
                    .success(function(data) {
                        Project.get()
                            .success(function(getData) {
                                $scope.projects = getData;
                                $scope.loading = false;
                            });
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