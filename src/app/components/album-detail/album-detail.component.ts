import { Component, OnInit } from '@angular/core';
import { Photo } from '../../models/album';
import { AlbumService } from '../../services/album.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrl: './album-detail.component.css',
})
export class AlbumDetailComponent implements OnInit {
  photos: Photo[] = [];

  constructor(private as: AlbumService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    this.as.getPhotosByAlbumId(+id!).subscribe((r) => (this.photos = r));
  }
}
