import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AlbumService } from '../services/album.service';
import { Photo } from '../models/photo';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-album-photos',
  standalone: true,
  templateUrl: './album-photos.html',
  styleUrls: ['./album-photos.css'],
  imports: [NgFor, RouterLink]
})
export class AlbumPhotosComponent implements OnInit {
  photos: Photo[] = [];

  constructor(private route: ActivatedRoute, private albumService: AlbumService) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.albumService.getAlbumPhotos(id).subscribe(data => this.photos = data);
  }
}
