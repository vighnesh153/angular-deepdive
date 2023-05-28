import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServersComponent } from './servers/servers.component';
import { ServerPageComponent } from './server-page/server-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { authGuard } from './guards/auth.guard';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent, pathMatch: 'full' },
  {
    path: 'servers',
    component: ServersComponent,
    pathMatch: 'full',
    canActivate: [authGuard],
  },
  {
    path: 'servers/:serverId',
    component: ServerPageComponent,
    pathMatch: 'full',
    canActivate: [authGuard],
  },
  { path: 'not-found', component: PageNotFoundComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '/not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
