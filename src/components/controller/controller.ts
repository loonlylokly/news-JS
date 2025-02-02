import AppLoader from './appLoader';
import { dataSources, callbackSource } from '../../types/source';
import { dataArticles, callbackArticle } from '../../types/article';

class AppController extends AppLoader {
    public getSources(callback: callbackSource): void {
        super.getResp<dataSources>({ endpoint: 'sources' }, callback);
    }

    public getNews(e: Event, callback: callbackArticle): void {
        let target = <HTMLElement>e.target;
        const newsContainer = <HTMLElement>e.currentTarget;

        while (target !== newsContainer) {
            if (target?.classList.contains('source__item')) {
                const sourceId = <string>target.getAttribute('data-source-id'); // Это читерство ил норм???
                if (newsContainer.getAttribute('data-source') !== sourceId) {
                    newsContainer.setAttribute('data-source', sourceId);
                    super.getResp<dataArticles>(
                        {
                            endpoint: 'everything',
                            options: {
                                sources: sourceId,
                            },
                        },
                        callback
                    );
                }
                return;
            }
            target = <HTMLElement>target.parentNode;
        }
    }
}

export default AppController;
