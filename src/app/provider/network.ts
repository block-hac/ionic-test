import {Injectable} from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
@Injectable()

export class NetworkProvider {
  constructor(public http: HttpClient) {
    console.log('[+] [INFO] [NETWORK]');
  }
  getPasswordExpired(){
    return new Promise<any>((resolve, reject) => {
      const url = 'https://essent.api.xpense2cash.udit.de/rest/api/Account/PasswordExpired';
      const access_token = 'Bearer WZF8shZEIJjrT0RGEAZRB-eQqXyxt53HeboyOiiBXWUk9QsTc12mb_8c-0xPG4wIVzSC19KKUQoZGkRQTd6if7Z-ejR0zDQBW0gQX5EpxoAwuxin6sBHRFGXXZF3gBSOJ1uLxf9YkJs7CZuHySpjwOuVpCpdMq5IEIzY3dWvVPgIRk5peRs2_agAu-8FwKE_Z5LsjDxW8sOCIqe1j_iuFPomy0_7kPb5C4hzUYeLNsQ_jRCctzlGouZ3voKNV3VKarKnUBjyA4nnmqAaimtw256yVjD1EaXHkjaYi_8-y4NbSL73ajRb0m-7iLmBBTdZ89XMzYlL01dlgKQ-ILYtq6_g66VzIf0J2fSqSA7HXCwCIF5eKM-sGcur7Wv24Aso1kYJ2NfBZd__m8qC9VLd7R0LQPbdaVtk8doIzlfB4AL1oWDaLmmn4ycDBPFk3uMoAYQ7LzSJuRu14ihrVfq2Xqr2JLDGKn42IDyy6F9P5hCmYL_HnLL6mrI4cHto-2gQ0ZiAC5mhjzV8vnkNP3YWZb1ZNxFipiad_PeGvPMcH0b9STf0vfnA1VsQuhYGaJ6DiKbvy3wFPg4I7XmD702CpqecLz8dmVujNH4jrNQs58DQNEfTZxYlYE0sceyBv9ZJvz7jilYMs0i40xCpNdP-lGHAloTyaigQREF44ddPGW0';
      this.callUrl(url, access_token, (err, data) => {
        if(err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  }
  callUrl(url: string, access_token: string, callback)  {
    console.log('[+] [INFO] [UserProvider] [callUrl]');
    console.log(access_token);
    const headers = new HttpHeaders();
    headers.append('Authorization', 'Bearer ' + access_token);
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    const options = {headers};
    console.log('[================>]', url);
    this.http.get(url, options).subscribe({
        next: data => {
            console.log('[================>]', data);
            return callback(null, data);
        },
        error: err => {
            console.error('[================>]', err);
            return callback(err, null);
        }
    });
}

}
