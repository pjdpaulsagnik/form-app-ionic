 
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpHeaders, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { examdataall } from '../models/exam-model';

@Injectable({providedIn: 'root'})
export class ApiService
{
    constructor(private http: HttpClient){}
    
    registrationApi = 'https://sblmagico.com/EXAMMMH/New/Exam/InsertExamDetails' ;

    completeregurl = "";

    registerApiFunction(object): Observable<HttpEvent<any>> {
        const formData: FormData = new FormData();
    
        formData.append('jsondataHdr', JSON.stringify(object));

    
        const req = new HttpRequest('POST', `${this.registrationApi}`, formData, {
          reportProgress: true,
          responseType: 'json'
        });
    
        return this.http.request<[examdataall]>(req);
    }
}