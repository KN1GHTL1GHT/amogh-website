
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/amogh-website/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/amogh-website"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 515, hash: 'de08c6ac0716caac2147b300a8237a61802b2b5d01c876e2c0b3789fdbd3150b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1028, hash: '74c4cd92512746612d340df16f1096926b8bb670ac12666968a49b5af9ed07d3', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 21646, hash: '1e080253c8ee1e9ffb2cc46d4b6c86a455ca1905e154406f60e75a455a65c48b', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
