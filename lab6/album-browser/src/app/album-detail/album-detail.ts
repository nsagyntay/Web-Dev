import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AlbumService } from '../services/album.service';
import { Album } from '../models/album';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.html',
  standalone: true,
  styleUrls: ['./album-detail.css'],
  imports: [FormsModule, NgIf, RouterLink]
})
export class AlbumDetailComponent implements OnInit {
  album?: Album;

  constructor(
    private route: ActivatedRoute,
    private albumService: AlbumService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.albumService.getAlbum(id).subscribe(data => this.album = data);
  }

  save(): void {
    if (this.album) this.albumService.updateAlbum(this.album).subscribe(() => alert('Saved!'));
  }

  goBack(): void {
    this.router.navigate(['/albums']);
  }
}
