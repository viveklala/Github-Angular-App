angular.module('githubRepoController', [])
    .controller('mainController', function($scope, PublicRepos, RepoStats, UserStats) {
        $scope.showStats = false;
        $scope.showRepo = true;
        PublicRepos.get()
            .success(function(data) {
                $scope.repos = data;
            });

//calls the services that get additional user and repo data
        $scope.showRepoDetails = function (repoURL, userURL, idx){
            RepoStats.get(repoURL)
                .success(function(data) {
                    $scope.repos[idx].repoStats = data;
                });
            UserStats.get(userURL)
                .success(function(data) {
                    $scope.repos[idx].userStats = data;
                });
        }
    });