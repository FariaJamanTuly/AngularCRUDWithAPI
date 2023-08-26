import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
// name:string="Monaem";
// firstname:string = '';
// lastname:string = '';
// varName:string = '';
// fullname:string = '';
// isTrue:boolean = true;

// Students = ['Monaem','khan']

// OnSubmit(){
//   if(this.firstname != "" && this.lastname != ""){
//     this.fullname = this.firstname+" "+this.lastname;
//     console.log(this.fullname);
//   }else{
//     alert("Null Value");
//     console.log("Null Value");
//   }

// };

// onKeyUP(ev:any){
//   console.log(ev.target.value);
//   this.name = ev.target.value;
// };

name:string='';
address:string='';
phone:string='';
isTrue = false;
info = [];
SubmitInfo(){
  var data = {
    name : this.name,
    address : this.address,
    phone : this.phone
  };
  // this.info.push(data);
}
}
