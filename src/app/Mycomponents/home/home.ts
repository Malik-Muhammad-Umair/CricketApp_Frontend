import { Component } from '@angular/core';
import { Cricketservice } from '../../Myservices/cricketservice';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  id:any;
  constructor(private match:Cricketservice){
    
 
    
    
  }

 ListofMatches:CricketForm[]=[];
ngOnInit(){

  this.match.getallMatches().subscribe((data:CricketForm[])=>{
    this.ListofMatches=data;
    
  })
}
 
  
  submit(val:CricketForm){
      
    
    this.match.postrecords(val).subscribe((data:CricketForm)=>{
      // console.log(data);
      if(data){
        this.ngOnInit();
        window.location.href="/matches"
      }
  
      
    })

  }
   reset(form:any){
    form.reset();
    
  }

}
