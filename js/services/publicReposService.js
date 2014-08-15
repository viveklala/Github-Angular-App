//service that pulls the first hundred repos from GitHub

angular.module('publicReposService', [])
    .service('PublicRepos', function($http) {
        return {
            get : function() {
                return $http.get('https://api.github.com/repositories');
            }
        }
    })