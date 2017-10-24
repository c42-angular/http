import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class ServersService {

  constructor(private http: Http){
  }

  appendServers(servers: any[]) {
    const hdrs = new Headers({'Content-Type': 'application/json'});
    return this.http.post('https://ng-http-request.firebaseio.com/data.json', servers, {headers: hdrs});
  }

  updateServers(servers: any[]) {
    const hdrs = new Headers({'Content-Type': 'application/json'});
    return this.http.put('https://ng-http-request.firebaseio.com/data.json', servers, {headers: hdrs});
  }

  getServers() {
    return this.http.get('https://ng-http-request.firebaseio.com/data.json');
  }
}
