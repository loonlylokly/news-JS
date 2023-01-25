import './sources.css';
import { source } from '../../../types/source';

class Sources {
    public draw(data: source[]): void {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = <HTMLTemplateElement>document.querySelector('#sourceItemTemp');

        data.forEach((item) => {
            const sourceClone = <HTMLElement>sourceItemTemp?.content.cloneNode(true);
            if (sourceClone) {
                sourceClone.querySelector('.source__item-name')!.textContent = item.name;
            }
            sourceClone.querySelector('.source__item')?.setAttribute('data-source-id', item.id);
            fragment.append(sourceClone);
        });

        document.querySelector('.sources')?.append(fragment);
    }
}

export default Sources;
