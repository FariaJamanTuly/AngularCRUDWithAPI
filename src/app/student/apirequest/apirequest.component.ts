import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RequestService } from '../service/request.service';
import { tap, map } from 'rxjs';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-apirequest',
  templateUrl: './apirequest.component.html',
  styleUrls: ['./apirequest.component.css'],
})
export class ApirequestComponent implements OnInit {
  // url = 'https://jsonplaceholder.typicode.com/posts';
  // constructor(private http: HttpClient) {}
  // data: any;
  // ngOnInit(): void {
  //   this.http.get(this.url).subscribe((result) => {
  //     this.data = result;
  //   });
  // }

  loginform: any = FormGroup;
  constructor(
    private requestservice: RequestService,
    private fb: FormBuilder
  ) {}

  data: any;
  isLoading = true;
  dataupdate = false;

  ngOnInit(): void {
    this.requestservice
      .getdata()
      // .pipe(
      //   tap(() => {
      //     this.isLoading = false;
      //   }),
      //   map((res: any) => {
      //     return res.filter((p: any) => p.id == 1);
      //   })
      // )
      .subscribe((result) => {
        // console.log(result);
        this.data = result;
      });

    this.loginform = this.fb.group({
      userId: [''],
      title: [''],
      body: [''],
      id: [''],
      // password: [''],
    });
  }

  datasubmit() {
    if(!this.dataupdate){
    this.requestservice.cratedata(this.loginform.value).subscribe((res) => {
      console.log(res);
      this.data.push(res);
      this.loginform.reset();
    });
  }
  else{
    console.log('enter update-01');
    
    this.requestservice.updatedata(this.loginform.value)
    .subscribe((res)=>{
      const tempdata=this.data.find((i)=>i.id === res.id);
      const position=this.data.indexOf(tempdata);
      this.data[position]=res;
      console.log(res);
      //this.data.push(res)
      this.loginform.reset();
      this.dataupdate=true;
    })
  }
  }
  selectdata(data){
    console.log(data)
    this.loginform.patchValue(data);
    this.dataupdate=true;
  }
  deletedata(id){
this.requestservice.deletedata(id)
.subscribe((result)=>{
  console.log(result);
  this.data=this.data.filter((i)=>i.id !==id)
})
  }
}
