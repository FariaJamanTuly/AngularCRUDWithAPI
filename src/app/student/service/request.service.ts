import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RequestService {
  url = 'https://jsonplaceholder.typicode.com';
  constructor(private http: HttpClient) {}

  getdata(): Observable<any> {
    return this.http.get(this.url + '/posts');
  }
  cratedata(data: any): Observable<any> {
    console.log('Entered');
    return this.http.post('https://jsonplaceholder.typicode.com/posts', data);
  }
  updatedata(post:any):Observable<any>{
    return this.http.put(`https://jsonplaceholder.typicode.com/posts/${post.id}`,post)
  }
  deletedata(id:any):Observable<any>{
    return this.http.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
  }
}
