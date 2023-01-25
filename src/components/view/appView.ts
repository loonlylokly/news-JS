import News from './news/news';
import Sources from './sources/sources';
import { dataSources, source } from '../../types/source';
import { dataArticles, article } from '../../types/article';

export class AppView {
    private news;
    private sources;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: dataArticles): void {
        const values: article[] = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data: dataSources): void {
        const values: source[] = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
