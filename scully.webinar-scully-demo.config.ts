// Scullyio
import { ScullyConfig } from '@scullyio/scully';
import { MinifyHtml } from 'scully-plugin-minify-html';

const postRenderers = [MinifyHtml];

export const config: ScullyConfig = {
  projectRoot: './src',
  projectName: 'webinar-scully-demo',
  outDir: './dist/static',
  defaultPostRenderers: postRenderers,
  routes: {
    '/:id': {
      type: 'json',
      id: {
        url: 'https://rickandmortyapi.com/api/character',
        resultsHandler: (response: any) => response.results,
        property: 'id'
      }
    }
  }
};
