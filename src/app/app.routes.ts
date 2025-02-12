import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home.component';
import { AboutComponent } from './pages/about.component';
import { SolutionsComponent } from './pages/solutions.component';
import { TechnologyComponent } from './pages/technology.component';
import { VisionComponent } from './pages/vision.component';
import { ValuesComponent } from './pages/values.component';
import { JoinUsComponent } from './pages/join-us.component';
import { BlogComponent } from './pages/blog.component';
import { ContactComponent } from './pages/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'solutions', component: SolutionsComponent },
  { path: 'technology', component: TechnologyComponent },
  { path: 'vision', component: VisionComponent },
  { path: 'values', component: ValuesComponent },
  { path: 'join-us', component: JoinUsComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' }
];