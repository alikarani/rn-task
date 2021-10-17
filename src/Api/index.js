import {
    getMessage,
    handleResponse,
    performNetworkRequest
} from "./HelperFunction";
import { base_url } from './configs'

export const get = async (endpoint) => {
    const url = base_url + endpoint;
    try {
        const networkResult = await performNetworkRequest(url);
        const result = await handleResponse(networkResult);
        return Promise.resolve(result);
    } catch (e) {
        const message = getMessage(e);
        return Promise.reject(message);
    }
};

const Api = {
    get: get,
}
export default Api;