/* Angular Google Maps Lite by Jofferson Ramirez Tiquez March 1, 2017
* 
* gmail - jofftiquez@gmail.com
* fb - /jofftiquez
* twitter - @jrtiquez
* www - www.greenfox.me
* www - randomcodetips.com
*
*/

(function(angular){

    var ngMapsLiteModule = angular.module('ngMapsLite', []);

    ngMapsLiteModule.provider('$ngMapsLite', function () {

        this.readOnly = false;
        this.mapHeight = 350;
        this.searchBox = {placeholder: 'Enter location'};
        this.map = { zoom: 15 };
        this.marker = {};
        this.place;

        this.setmapOptions = function (options) {
            this.map = options;
        };

        this.getMapOptions = function(){
            return this.map;
        }

        this.setMapHeight = function(height){
            this.mapHeight = height;
        }

        this.getMapHeight = function(){
            return this.mapHeight;
        }

        this.markerConfig = function(options){
            this.marker.icon = options.icon;
        }

        this.getMarkerConfig = function(){
            return this.marker;
        }

        this.searchBoxConfig = function(options){
            this.searchBox.style = options.css;
            this.searchBox.placeholder = options.placeholder || 'Enter location';  
        }

        this.getsearchBoxConfig = function(){
            return this.searchBox;
        }

        this.getHeight = function(){
            return this.height;
        }

        this.setReadOnly = function(readOnly){
            this.readOnly = readOnly;
        }

        this.getReadOnly = function(){
            return this.readOnly;
        }

        this.setCenter = function(center){
            // object {lat:val, lng:val}
            this.center = center;
        }

        this.getCenter = function(){
            return this.center;
        }

        this.setPlace = function(place){
            this.place = place;
        }
        
        this.returnPlace = function(){
            return this.place;
        }

        this.$get = function () {
            return this;
        };

    })
    
    ngMapsLiteModule.directive('ngMapsLite', function () {

        var map;
        var mapOpt;
        var marker;
        var markerOpt;
        var searchBox;
        var center;
        var searchBoxInput;
        var geocoder = new google.maps.Geocoder;
        var infoWindow = new google.maps.InfoWindow;
        var directionsService = new google.maps.DirectionsService;
        var directionsRenderer = new google.maps.DirectionsRenderer;
        var currentCenter = {};

        return {
            template: `
                <input placeholder="{{ searchBoxPlaceHolder }}" type="text" id="searchBox" ng-hide="readOnly">
                <div id="map" style="height:{{ mapHeight }}px; width:100%;"></div>
            `,
            controller: function ($scope, $q, $window, $timeout, $ngMapsLite) {
                var ngMap = $ngMapsLite;
                var searchBoxConfig = ngMap.getsearchBoxConfig();
                var mapCenter = ngMap.getCenter();
                var markerConfig = ngMap.getMarkerConfig();
                var mapOptions = ngMap.getMapOptions();
                $scope.mapHeight = ngMap.getMapHeight();
                $scope.readOnly = ngMap.getReadOnly();
                $scope.searchBoxPlaceHolder = searchBoxConfig.placeholder;
                
                // center = new google.maps.LangLng(mapCenter.lat, mapCenter.lng);                
                
                searchBoxInput = document.getElementById('searchBox');
                for(var key in searchBoxConfig.style){
                    if(searchBoxConfig.style.hasOwnProperty(key)){
                        searchBoxInput.style[key] = searchBoxConfig.style[key];
                    }
                }
                searchBox = new google.maps.places.SearchBox(searchBoxInput);
                searchBox.addListener('places_changed', function(){});

                mapOptions.center = mapCenter;
                map = new google.maps.Map(document.getElementById('map'), mapOptions);
                map.addListener('center_changed', function(){});

                markerConfig.map = map;
                markerConfig.position = mapCenter;
                marker = new google.maps.Marker(markerConfig);
                marker.addListener('click', function(){});
                marker.addListener('dragstart', function(){});
                marker.addListener('dragend', function(){});
            }
        };

    });

})(angular);