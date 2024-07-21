import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Album, Photo } from '../models/album';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AlbumService {
  // private BASE_URL = 'https://jsonplaceholder.typicode.com';
  constructor(private http: HttpClient) {}

  getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(environment.API__BASE_URL + '/albums');
  }

  getPhotosByAlbumId(id: number): Observable<Photo[]> {
    return this.http.get<Photo[]>(
      environment.API__BASE_URL + '/photos?albumId=' + id
    );
  }
}
