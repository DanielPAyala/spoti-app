import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: [
  ]
})
export class ArtistaComponent implements OnInit {

  artista: any = {};
  topTracks: any[] = [];

  loading: boolean;

  constructor(private activatedRoute: ActivatedRoute, private spotify: SpotifyService ) { 
    this.loading = true;
    this.activatedRoute.params.subscribe(params => {
      this.getArtista(params['id']);
      this.getTopCanciones(params['id']);
    })
  }

  ngOnInit(): void {
  }

  getArtista(id:string){
    this.spotify.getArtist(id).subscribe(artista => {
      console.log(artista);
      this.artista = artista;
      this.loading = false;
    })
  }

  getTopCanciones(id:string){
    this.spotify.getTopTracks(id).subscribe(tracks => {console.log(tracks);this.topTracks = tracks});
  }

}
