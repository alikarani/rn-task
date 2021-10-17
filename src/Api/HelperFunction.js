const TAG = '__API__';

export const handleResponse = ({ response, jsonResponse }) => {
    switch (response.status) {
        case 200:
        case 201: {
            if (
                jsonResponse.hasOwnProperty('errors') ||
                jsonResponse.hasOwnProperty('error')
            ) {

                const message = getMessage(jsonResponse);
                return Promise.reject(message);
            } else {
                return Promise.resolve(jsonResponse);
            }
            break;
        }
        case 401: {
            // EventRegister.emit(events.logout);
            const message = getMessage(jsonResponse);
            return Promise.reject(message);
        }
        default: {

            const message = getMessage(jsonResponse);
            return Promise.reject(message);
        }
    }
};
export const performNetworkRequest = async (url) => {

    // log('performNetworkRequest', '_______');
    console.log('url', url);
    // log('configs', configs);

    url = encodeURI(url)

    try {
        const response = await fetch(url);
        log('response', response);
        const jsonResponse = await response.json();
        log('jsonResponse', jsonResponse);
        return Promise.resolve({ response, jsonResponse });
    } catch (e) {
        log('error', e);
        return Promise.reject(e);
    }
};
export const log = (label, data) => {
    if (__DEV__) {
        console.log(TAG + `__${label}__ :`, data);
    }
};
export const message = 'Something went wrong'
export const getMessage = (json) => {

    switch (typeof json) {
        case 'string': {
            return json;
        }
        case 'object': {
            if (Array.isArray(json)) {
                var data = json[0];
                return getMessage(data)
            } else {
                if (json.errors) {
                    const data = json.errors
                    if (typeof data === 'object') {
                        const values = Object.values(data)
                        return getMessage(values)
                    } else {
                        return getMessage(data)
                    }
                } else {
                    if (json.message) {
                        return getMessage(json.message)
                    } else if (json.error) {
                        return getMessage(json.error)
                    } else {
                        return message
                    }
                }
            }
        }
        default: {
            return message;
        }
    }
};
