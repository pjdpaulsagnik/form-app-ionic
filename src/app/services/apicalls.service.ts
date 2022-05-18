 
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpHeaders, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { examdataall, SearchExam } from '../models/exam-model';
import { searchModel } from '../models/search-model';

@Injectable({providedIn: 'root'})
export class ApiService
{
    constructor(private http: HttpClient){}
    
    registrationApi = 'https://sblmagico.com/EXAMMMH/New/Exam/InsertExamDetails' ;

    fetchExamListApi = "https://sblmagico.com/EXAMMMH/New/Exam/GetExamList";

    fetchExamDetailsApi = "https://sblmagico.com/EXAMMMH/New/Exam/GetExamDetails";

    deleteExambyIDApi = "https://sblmagico.com/EXAMMMH/New/Exam/DeleteExam";

    completeregurl = "";

    objectToBeSearched : SearchExam;

    searchedData : searchModel[] = [];



    registerApiFunction(object): Observable<HttpEvent<any>> {
        const formData: FormData = new FormData();
    
        formData.append('jsondataHdr', JSON.stringify(object));

    
        const req = new HttpRequest('POST', `${this.registrationApi}`, formData, {
          reportProgress: true,
          responseType: 'json'
        });
    
        return this.http.request<[examdataall]>(req);
    }

    searchExam(obj): Observable<HttpEvent<any>> {

      console.log("Object from form : ",obj);
      const formData: FormData = new FormData();
      // let postObj:FormData={
      //     "keyword": obj.keyword
      // }
      formData.append('keyword', obj.keyword);
      formData.append('FromDate', obj.fromdate);
      formData.append('ToDate', obj.todate);      

      console.log("FORM DATA :",formData);

      for(var pair of formData.entries()) {
        console.log(pair[0]+ ', '+ pair[1]);
     }
      
      const req = new HttpRequest('POST', `${this.fetchExamListApi}`, formData, {
        reportProgress: true,
        responseType: 'json'
      });
  
      return this.http.request<SearchExam[]>(req);
  }

  searchExamDetails(obj): Observable<HttpEvent<any>> {

    console.log("Object from form : ",obj);
    const formData: FormData = new FormData();
    // let postObj:FormData={
    //     "keyword": obj.keyword
    // }
    formData.append('exm_id', obj);      

    console.log("FORM DATA :",formData);

    const req = new HttpRequest('POST', `${this.fetchExamDetailsApi}`, formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request<any>(req);
  }

  deleteExamByusingId(obj): Observable<HttpEvent<any>> {

    console.log("Object from form : ",obj);
    const formData: FormData = new FormData();
    // let postObj:FormData={
    //     "keyword": obj.keyword
    // }
    formData.append('exm_id', obj);      

    console.log("FORM DATA :",formData);

    const req = new HttpRequest('POST', `${this.deleteExambyIDApi}`, formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request<any>(req);
  }
}