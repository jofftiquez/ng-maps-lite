/* Angular Google Maps Lite by Jofferson Ramirez Tiquez March 1, 2017
* 
* gmail - jofftiquez@gmail.com
* fb - /jofftiquez
* twitter - @jrtiquez
* www - www.greenfox.me
* www - randomcodetips.com
*
*/

console.log('ng-maps-lite here 0');

(function(angular){

    var ngMapsLiteModule = angular.module('ngMapsLite', []);

    ngMapsLiteModule.provider('$ngMapsLite', function () {

        console.log('ng-maps-lite here 1')

        var config = {};

        this.configMap = function(options){
            config.height = options.height || config.height;
            return config;
        }

        this.getHeight = function () {
            return config.height;
        };

        this.$get = function () {
            return this;
        };

    })
    
    ngMapsLiteModule.directive('ng-maps-lite', ['$ngMapsLite', function($ngMapsLite){

        console.log('ng-maps-lite here 2')

        var map;
        var mapOpt;
        var marker;
        var markerOpt;
        var searchBox;
        var searchBoxInput;
        var geocoder = new google.maps.Geocoder;
        var infoWindow = new google.maps.InfoWindow;
        var directionsService = new google.maps.DirectionsService;
        var directionsRenderer = new google.maps.DirectionsRenderer;
        var currentCenter = {};

        return {
            restrict: 'E',
            scope: {
                height: '=height',
            },
            templateUrl: 'ng-maps-lite.html',
            link: link
        };

        function link(scope, element, attrs){
            console.log('ng-maps-lite here 4')
            console.log(scope.height)
            scope.height = $ngMapsLite.getHeight()
        }

    }]);

})(angular);