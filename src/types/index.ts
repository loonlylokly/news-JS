export type category = 'business' | 'entertainment' | 'general' | 'health' | 'science' | 'sports' | 'technology';
export type language = 'ar'|'de'|'en'|'es'|'fr'|'he'|'it'|'nl'|'no'|'pt'|'ru'|'sv'|'ud'|'zh';
export type country = 'ae' | 'ar' | 'at' | 'au' | 'be' | 'bg' | 
                'br' | 'ca' | 'ch' | 'cn' | 'co' | 'cu' | 
                'cz' | 'de' | 'eg' | 'fr' | 'gb' | 'gr' | 
                'hk' | 'hu' | 'id' | 'ie' | 'il' | 'in' | 
                'it' | 'jp' | 'kr' | 'lt' | 'lv' | 'ma' | 
                'mx' | 'my' | 'ng' | 'nl' | 'no' | 'nz' | 
                'ph' | 'pl' | 'pt' | 'ro' | 'rs' | 'ru' | 
                'sa' | 'se' | 'sg' | 'si' | 'sk' | 'th' | 
                'tr' | 'tw' | 'ua' | 'us' | 've' | 'za';

export interface request {
    endpoint: string,
    options?: options | object
}

export interface options {
    apiKey?: string,
    q?: string,
    searchIn?: 'title'|'description'|'content',
    sources?: string,
    domains?: string,
    excludeDomains?: string,
    from?: string,
    to?: string,
    language?: language,
    sortBy?: 'relevancy'|'popularity'|'publishedAt'|'relevancy',
    pageSize?: number,
    page?: number
}

export type callbackResponse<T> = (data: T) => void;