import { ScullyConfig } from '@scullyio/scully';
const { MinifyHtml } = require('scully-plugin-minify-html');

const postRenderers = [MinifyHtml];

export const config: ScullyConfig = {
  projectRoot: "./src",
  projectName: "mediendesign-project",
    defaultPostRenderers: postRenderers,
  outDir: './dist/static',
  routes: {
  }
};
