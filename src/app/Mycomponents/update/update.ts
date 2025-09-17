import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Cricketservice } from '../../Myservices/cricketservice';

@Component({
  selector: 'app-update',
  imports: [FormsModule],
  templateUrl: './update.html',
  styleUrl: './update.css'
})
export class Update {
  id:any;
  constructor(private activatedroute:ActivatedRoute,private match:Cricketservice){
    
    // id:number=this.activatedroute.snapshot.params["id"] ;
    this.id = this.activatedroute.snapshot.params['id'] || null;
    
    
  }
  
  // cricketobj:CricketForm={
    //   winner:"",
    //   overs:"",
    //   runs:"",
    //   date:""
    
    // }
    selestedmatch:undefined | CricketForm;
    ngOnInit(){

      this.match.getmatchesbyid(this.id).subscribe((data:CricketForm)=>{
        this.selestedmatch=data;
        // console.log(this.selestedmatch);
        
      }  ) 
      
    }
  
  update(val:any){
    const idneeder={id:this.selestedmatch?.id,...val}
    this.match.updatematch(idneeder).subscribe((data:CricketForm)=>{
      if(data){
        window.location.href="/matches"
      }
    })
    

  }
  reset(){
    this.selestedmatch=undefined;
  }
}
    
    
 

