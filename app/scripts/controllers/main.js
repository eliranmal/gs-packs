'use strict';

// TODO configure grunt build to support lib folder (pack minified versions of libraries)

angular.module('PacksApp')
    .controller('MainCtrl', ['$scope', 'DataSource', function ($scope, DataSource) {

        $scope.data = {
            params: {
                marker: 'org/cloudifysource/2.7',
                delimiter: '.tar.gz'
            }
        };

        $scope.predicate = function (str) {
            return str['Prefix'].substring(str['Prefix'].lastIndexOf('/'));
        };

        // callback to the data fetch call
        $scope.setData = function (data) {
            $scope.data.result = angular.fromJson(data.ListBucketResult); // TODO sanitize
//            console.log(Object.keys($scope.data.response.ListBucketResult))
        };

        // TODO reference S3 API in server side (node.js?) to bypass CORS restrictions(?) (doesn't seem necessary)
        var s3Url = 'https://s3-eu-west-1.amazonaws.com/gigaspaces-repository-eu';
        $scope.refresh = function () {
            var url = s3Url,
                params = $scope.data.params;
            (params.marker || params.delimiter) && (url += '?')
            params.marker && (url += 'marker=' + params.marker);
            params.marker && params.delimiter && (url += '&');
            params.delimiter && (url += 'delimiter=' + params.delimiter);
            console.log('refreshing with url: ', url);

            DataSource.get(url, $scope.setData);
        };

/*
        $scope.$watch($scope.params, function (newValue, oldValue) {
            console.log(newValue, oldValue)
            DataSource.get($scope.params, $scope.setData);
        });
*/

    }]);
