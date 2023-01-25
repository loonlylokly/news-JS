import { category, country, language } from './index'

export interface source {
    id: string,
    name: string,
    description: string,
    url: string,
    category: category,
    language: language,
    country: country
}

export interface dataSources {
    status: 'ok'|'error',
    sources: source[]
}

export type callbackSource = (data: dataSources) => void;