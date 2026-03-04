import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../services/album.service';
import { Album } from '../models/album';
import { RouterLink } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.html',
  standalone: true,
  styleUrls: ['./albums.css'],
  imports: [NgFor, NgIf, RouterLink]
})
export class AlbumsComponent implements OnInit {
  albums: Album[] = [];
  loading = true;

  constructor(private albumService: AlbumService) {}

  ngOnInit(): void {
  const saved = localStorage.getItem('albums');

  if (saved) {
    this.albums = JSON.parse(saved);
    this.loading = false;
  } else {
    this.albumService.getAlbums().subscribe(data => {
      this.albums = data;
      this.loading = false;
      localStorage.setItem('albums', JSON.stringify(this.albums));
    });
  }
}

  deleteAlbum(id: number): void {
  this.albumService.deleteAlbum(id).subscribe(() => {
    this.albums = this.albums.filter(a => a.id !== id);
    localStorage.setItem('albums', JSON.stringify(this.albums));
  });
}
}
