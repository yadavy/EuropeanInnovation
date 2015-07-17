'use strict';

/**
 * if VCAP_SERVICES exists then it return the username, password and url for
 * a service that starts with 'name' or {} otherwise
 * @param  String name The service name
 * @return [Object] the service credentials or {} if
 * name is not found in VCAP_SERVICES
 */
module.exports.serviceStartsWith = function(name) {
    if (process.env.VCAP_SERVICES) {
        console.info('Parsing VCAP_SERVICES');
        var services = JSON.parse(process.env.VCAP_SERVICES);
        for (var service_name in services) {
            if (service_name.indexOf(name) === 0 ) {
                return services[service_name][0];
            }
        }
    }
    return {};
};
