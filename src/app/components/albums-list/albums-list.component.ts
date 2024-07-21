import { Component, OnInit } from '@angular/core';
import { Album } from '../../models/album';
import { AlbumService } from '../../services/album.service';

@Component({
  selector: 'app-albums-list',
  templateUrl: './albums-list.component.html',
  styleUrl: './albums-list.component.css',
})
export class AlbumsListComponent implements OnInit {
  albums: Album[] = [];

  constructor(private as: AlbumService) {}

  ngOnInit(): void {
    this.as.getAlbums().subscribe((r) => (this.albums = r));
  }
}
