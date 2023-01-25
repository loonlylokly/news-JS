export interface article {
    source: {
        id: string,
        name: string
    },
    author: string,
    title: string,
    description: string,
    url: string,
    urlToImage: string,
    publishedAt: string,
    content: string
}



export interface dataArticles {
    status: 'ok'|'error',
    totalResults: number,
    articles: article[]
}

export type callbackArticle = (data: dataArticles) => void;