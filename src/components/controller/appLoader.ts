import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '8bbbd88a352348b499d510a88b38edf2', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
