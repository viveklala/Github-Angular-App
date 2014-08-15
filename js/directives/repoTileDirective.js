//directive that creates the templete for the repos to be displayed as tiles

angular.module('repoTileDirective', [])
    .directive('repoTile', function(){
    return {
        restrict: 'E',
        templateUrl: 'tile.html',
        scope: false
    }
});