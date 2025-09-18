import { HttpClient } from '@angular/common/http';
import { Component, NgModule } from '@angular/core';
import { Cricketservice } from '../../Myservices/cricketservice';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-matches',
  imports: [RouterLink,FormsModule],
  templateUrl: './matches.html',
  styleUrl: './matches.css'
})
export class Matches {
constructor(private match:Cricketservice){

}
ListofMatches:CricketForm[]=[];
ngOnInit(){
  this.match.getallMatches().subscribe((data:CricketForm[])=>{
    this.ListofMatches=data;
    
  })
}
delete(id:number){
  this.match.deletewithid(id).subscribe((data:CricketForm)=>{
    if(data){
      
      this.ngOnInit();
    }
   
  })

}
search:string="";
  refresh(){
     this.ngOnInit();}
}
