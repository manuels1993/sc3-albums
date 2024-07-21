import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideHttpClient } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { AlbumsListComponent } from './components/albums-list/albums-list.component';
import { AlbumDetailComponent } from './components/album-detail/album-detail.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, AlbumsListComponent, AlbumDetailComponent, NavbarComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent],
})
export class AppModule {}
