import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpResponse, HttpParameterCodec, HttpParams } from '@angular/common/http';
import { environment} from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ApiUtilService {
   
  
  
  constructor(private http: HttpClient) { }

  public getDefaultHeaders(){
    let defaultHeader = {
      'Content-Type': 'application/json;charset=UTF-8',
      'Accept': 'application/json;charset=UTF-8',
    };
    return defaultHeader;
  }

  public invokeAPI(path: string, method: string, request?: any, requestHeader?: any): Observable<HttpResponse<Object>> {
    const url = environment.apiEngineURL + path;
    return this.getHttpService(url, method, requestHeader, request);
  }


  private getHttpService(url: string, method: string, requestHeader: any, requestData: any){
    const httpOptions = (requestHeader instanceof HttpHeaders) ? requestHeader : new HttpHeaders(Object.assign(requestHeader || {}, this.getDefaultHeaders()));
    switch (method) {
        case 'GET': return this.http.get(url, { observe: 'response', params: new HttpParams({ encoder: new CustomHttpParamEncoder(), fromObject: requestData }), headers: httpOptions });
        case 'POST': return this.http.post(url, requestData, {observe: 'response', headers: httpOptions});
        case 'PUT': return this.http.put(url, requestData, {observe: 'response', headers: httpOptions});
        case 'PATCH': return this.http.patch(url, requestData, {observe: 'response', headers: httpOptions});
        case 'DELETE': return this.http.delete(url, { observe: 'response', params: new HttpParams({ encoder: new CustomHttpParamEncoder(), fromObject: requestData }), headers: httpOptions });
        default: throw {message: 'Invalid Method'}
    }
  }
  
}

class CustomHttpParamEncoder implements HttpParameterCodec {
  encodeKey(key: string): string {
    return encodeURIComponent(key);
  }
  encodeValue(value: string): string {
    return encodeURIComponent(value);
  }
  decodeKey(key: string): string {
    return decodeURIComponent(key);
  }
  decodeValue(value: string): string {
    return decodeURIComponent(value);
  }
}