import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumsListComponent } from './components/albums-list/albums-list.component';
import { AlbumDetailComponent } from './components/album-detail/album-detail.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: 'albums', component: AlbumsListComponent },
  { path: 'albums/:id', component: AlbumDetailComponent },
  { path: '', component: HomeComponent },
  // { path: 'home', component: HomeComponent },
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
