//service that pulls additional data on the users of the first hundred repos from Github

angular.module('userStatsService', [])
    .service('UserStats', function($http) {
        return {
            get : function(url) {
                return $http.get(url)
            }
        }
    })