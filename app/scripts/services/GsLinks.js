'use strict';

angular.module('PacksApp')
    .factory('GsLinks', ['$resource', function ($resource) {
        var url = 'https://s3-eu-west-1.amazonaws.com/gigaspaces-repository-eu?marker=org/cloudifysource/2.7&delimiter=.tar.gz';
        return $resource(url, {});
    }]);
