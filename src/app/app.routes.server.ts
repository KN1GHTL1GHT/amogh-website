import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'portfolio/:slug',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      const slugs = ['first-game-project', 'implementing-ai-pathfinding', 'ui-ux-design-update'];
      return slugs.map(slug => ({ slug }));
    }
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
