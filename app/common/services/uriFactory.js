/**
 * Created by michaelzhao007 on 11/27/2014.
 */
/**
 * Created by michaelzhao007 on 11/26/2014.
 */
angular.module('myApp')
    .factory('uriFactory', function() {
        // AngularJS will instantiate a singleton by calling "new" on this function
        var env = 'loca';
        return {
        geturi: function() {
            if (env === 'local') {
                return 'http://localhost:8090/chong/rest/';
            }
            else{
                return 'https://peaceful-headland-6968.herokuapp.com/rest/';
            }
        }

        };

    });
