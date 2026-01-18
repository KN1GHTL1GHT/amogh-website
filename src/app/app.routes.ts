import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { About } from './components/about/about';
import { Portfolio } from './components/portfolio/portfolio';
import { PortfolioDetail } from './components/portfolio-detail/portfolio-detail';
import { Contact } from './components/contact/contact';
import { Devlogs } from './components/devlogs/devlogs';
import { DevlogDetail } from './components/devlog-detail/devlog-detail';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: About },
  { path: 'portfolio', component: Portfolio },
  { path: 'portfolio/:slug', component: PortfolioDetail },
  { path: 'devlogs', component: Devlogs },
  { path: 'devlogs/:slug', component: DevlogDetail },
  { path: 'contact', component: Contact },
  { path: '**', redirectTo: '' }
];
