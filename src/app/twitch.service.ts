import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators'; // Agregar esta línea

@Injectable({
  providedIn: 'root'
})
export class TwitchService {

  private clientId: string = '81m012kfwtrwiejqdvcr8fuct5275x';
  private clientSecret: string = '6agrugtyk27o7ai40o5pewlry07r67';
  private apiUrl: string = 'https://api.twitch.tv/helix';

  constructor(private http: HttpClient) {}

  private getAccessToken(): Observable<any> {
    const headers = new HttpHeaders()
      .set('Client-Id', this.clientId)
      .set('Client-Secret', this.clientSecret);

    return this.http.post<any>('https://id.twitch.tv/oauth2/token', null, { headers });
  }

  getClips(gameId: string, language: string): Observable<any> {
    return this.getAccessToken().pipe(
      switchMap(tokenResponse => {
        const headers = new HttpHeaders()
          .set('Authorization', `Bearer ${tokenResponse.access_token}`)
          .set('Client-Id', this.clientId);

        const params = {
          game_id: gameId,
          language: language,
          first: '20'
        };

        return this.http.get<any>(`${this.apiUrl}/clips`, { headers, params });
      })
    );
  }
}
