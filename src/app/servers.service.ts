import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ServersService {

  constructor(private http: Http){
  }

  saveServers(servers: any[]) {
    return this.http.post('https://ng-http-request.firebaseio.com/data.json', servers);
  }

}
