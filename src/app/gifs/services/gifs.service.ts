

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

//const GIPHY_API_KEY = 't2ZH5DMGzOokGEVkXrAPYQozNUafsTQW'

@Injectable({providedIn: 'root'})
export class GifsService {

  private _tagHistory: string[] = [];
  private apiKey: string= 't2ZH5DMGzOokGEVkXrAPYQozNUafsTQW';
  private serviceUrl: string = 'https://api.giphy.com/v1/gifs';

  constructor( private http: HttpClient ) { }
  //constructor(  ) { }

  get tagsHistory(){
    return [...this._tagHistory];
  }

  private organizeHistory (tag: string) {

    tag = tag.toLowerCase();

    if (this._tagHistory.includes(tag)) {
        this._tagHistory = this._tagHistory.filter( (oldTag) => oldTag !== tag )
    }

    this._tagHistory.unshift(tag);
    this._tagHistory = this.tagsHistory.splice(0,10);

  }

  searchTag( tag: string): void {

    if (tag.length === 0) return;
    this.organizeHistory(tag);

    const params = new HttpParams()
    .set('api_key', this.apiKey)
    .set('limit', '10')
    .set('q', tag)

    // Recuperar imágen
    this.http.get(`${ this.serviceUrl}/search`, {params})
    .subscribe ( resp => {
      console.log(resp);
    })

    // Otra forma de hacerlo
    fetch('https://api.giphy.com/v1/gifs/search?api_key=t2ZH5DMGzOokGEVkXrAPYQozNUafsTQW&q=valorant&limit=10')
    .then (resp => resp.json())
    .then (data => console.log(data));

    // Otra forma de hacerlo
    //const resp = await fetch('https://api.giphy.com/v1/gifs/search?api_key=t2ZH5DMGzOokGEVkXrAPYQozNUafsTQW&q=valorant&limit=10')
    //const data = await resp.json();
    //console.log(data)
    //'https://api.giphy.com/v1/gifs/search?api_key=t2ZH5DMGzOokGEVkXrAPYQozNUafsTQW&q=valorant&limit=10'

    //this._tagHistory.unshift(tag);

    //console.log(this._tagHistory);

  }

}
