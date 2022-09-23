import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [],
})
export class HomeComponent {
  nuevasCanciones: any[] = [];
  loading: boolean;
  error: boolean;
  mensajeError: string;

  constructor(private spotify: SpotifyService) {
    this.loading = true;
    this.error = false;
    spotify.getNewReleases().subscribe((data: any) => {
      this.loading = false;
      this.nuevasCanciones = data;
    }, (err) => {
      this.loading = false;
      this.error = true;
      this.mensajeError = err.error.error.message;
    });
  }
}
