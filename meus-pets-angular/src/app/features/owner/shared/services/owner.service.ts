import { environment } from './../../../../../enviroments/environment';
import { Owner } from './../interfaces/owner.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OwnerService {

  constructor(
    private httpClient: HttpClient
  ) { }

  get(): Observable<Owner> {

    return this.httpClient.get<Owner>(environment.ownerAPI)
  }
}
