import { request, options, callbackResponse } from '../../types/index';
import { dataSources } from '../../types/source';
import { dataArticles } from '../../types/article';

class Loader {
    private baseLink;
    private options;
    constructor(baseLink: string, options: options) {
        this.baseLink = baseLink;
        this.options = options;
    }

    getResp<T extends dataSources | dataArticles>(
        { endpoint, options = {} }: request,
        callback: callbackResponse<T> = () => {
            console.error('No callback for GET response');
        }
    ) {
        this.load<T>('GET', endpoint, callback, options);
    }

    errorHandler(res: Response) {
        if (!res.ok) {
            if (res.status === 401 || res.status === 404)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    makeUrl(options: options, endpoint: string) {
        const urlOptions: { [index: string]: string | number } = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key) => {
            url += `${key}=${urlOptions[key]}&`;
        });

        return url.slice(0, -1);
    }

    load<T extends dataSources | dataArticles>(
        method: 'GET',
        endpoint: string,
        callback: callbackResponse<T>,
        options: options = {}
    ) {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res) => res.json())
            .then((data) => callback(data))
            .catch((err) => console.error(err));
    }
}

export default Loader;
