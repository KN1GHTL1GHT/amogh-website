import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { About } from './components/about/about';
import { Portfolio } from './components/portfolio/portfolio';
import { Contact } from './components/contact/contact';
import { DevlogDetail } from './components/devlog-detail/devlog-detail';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: About },
  { path: 'portfolio', component: Portfolio },
  { path: 'portfolio/:slug', component: DevlogDetail },
  { path: 'contact', component: Contact },
  { path: '**', redirectTo: '' }
];
