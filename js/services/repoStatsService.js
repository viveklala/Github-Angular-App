//service that pulls additional data on the first hundred repos from GitHub

angular.module('repoStatsService', [])
    .service('RepoStats', function($http) {
        return {
            get : function(url) {
                return $http.get(url)
            }
        }
    })