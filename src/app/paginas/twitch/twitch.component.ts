import { Component, OnInit } from '@angular/core';
import { TwitchService } from './../../twitch.service';

@Component({
  selector: 'app-twitch',
  templateUrl: './twitch.component.html',
  styleUrls: ['./twitch.component.css']
})
export class TwitchComponent implements OnInit {

  clips: any[] = [];

  constructor(private twitchService: TwitchService) { }

  ngOnInit() {
    this.twitchService.getClips('2963', 'es')
      .subscribe((clips) => {
        this.clips = clips.data; // Asegúrate de extraer los datos de la respuesta
      });
  }

}
