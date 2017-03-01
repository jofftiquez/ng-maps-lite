/* Angular Google Maps Lite by Jofferson Ramirez Tiquez March 1, 2017
* 
* gmail - jofftiquez@gmail.com
* fb - /jofftiquez
* twitter - @jrtiquez
* www - www.greenfox.me
* www - randomcodetips.com
*
*/

angular.module('fooModule', [])
        .provider('foo', function () {
            this.setBar = function () {
                this.bar = true;
            };
            
            this.$get = function () {
                return this;
            };
        });

// angular.module('ng-maps-lite', []).provider('$ngMapsLite', function () {
//     var config = {
//         height:300,
//     };

//     this.config = function(options){
//         config.height = options.height || config.height;
//         return config;
//     }

//     this.setBar = function () {
//         this.bar = true;
//     };

//     this.$get = function () {
//         return this;
//     };

// }).directive('ng-maps-lite', ['$ngMapsLite', function($ngMapsLite){
//     var map;
//     var mapOpt;
//     var marker;
//     var markerOpt;
//     var searchBox;
//     var searchBoxInput;
//     var geocoder = new google.maps.Geocoder;
//     var infoWindow = new google.maps.InfoWindow;
//     var directionsService = new google.maps.DirectionsService;
//     var directionsRenderer = new google.maps.DirectionsRenderer;
//     var currentCenter = {};

//     return {
//         restrict: 'EA',
//         scope: {
//             map: '=map',
//             marker: '=marker',
//             height: '=height',
//             placesCallback: '=placesCallback',
//             multiplePlaces: '=multiplePlaces',
//             readOnly: '=readOnly'
//         },
//         templateUrl: 'app/directives/mc-maps/mc-maps.html',
//         css: 'app/directives/mc-maps/mc-maps.css',
//         link: link,
//     };

//     function link(scope, element, attrs){
//         scope.height = $ngMapsLite.setHeight()
//     }

// }]);
