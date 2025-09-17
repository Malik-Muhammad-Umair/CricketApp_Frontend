import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Cricketservice {
   constructor(private http:HttpClient){

   }
   postrecords(val:CricketForm ):Observable<CricketForm >{
    const url="cricketbackend-production-8049.up.railway.app/api/cricketer";
   return this.http.post<CricketForm >(url,val);
   }
   deletewithid(id:any):Observable<CricketForm >{
    const url="cricketbackend-production-8049.up.railway.app/api/cricketer";
   return this.http.delete<CricketForm >(`${url}/${id}`);
   }
   getallMatches():Observable<CricketForm[]>{
        const url="cricketbackend-production-8049.up.railway.app/api/cricketers";
return this.http.get<CricketForm[]>(url)
   }
   getmatchesbyid(id:any):Observable<CricketForm>{
        const url="cricketbackend-production-8049.up.railway.app/api/cricketer";
return this.http.get<CricketForm>(`${url}/${id}`)
   }
   updatematch(fullmatch:CricketForm):Observable<CricketForm>{
    const url="cricketbackend-production-8049.up.railway.app/api/cricketer";
return this.http.put<CricketForm>(`${url}/${fullmatch.id}`,fullmatch)
   }
   
}
