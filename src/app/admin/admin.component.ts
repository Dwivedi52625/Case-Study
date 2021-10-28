import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AdminService } from '../admin.service';
import { search } from '../search';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private _adminservice: AdminService, private formBuilder: FormBuilder) { }
  formvalue!: FormGroup
  flights: search[] = [];
  flew:search=new search();
  ngOnInit(): void {
    this.formvalue = this.formBuilder.group({
      flightId: [''],
      flightName: [''],
      flightFrom: [''],
      flightTo: [''],
      date: [''],
      fare: ['']
    })
   this.getallflights();
  }
  addflights(){
   
    this.flew.flightId=this.formvalue.value.flightId;
    this.flew.flightName=this.formvalue.value.flightName;
    this.flew.flightFrom=this.formvalue.value.flightFrom;
    this.flew.flightTo=this.formvalue.value.flightTo;
    this.flew.date=this.formvalue.value.date;
    this.flew.fare=this.formvalue.value.fare;

    this._adminservice.addflight(this.flew).subscribe(res=>{
      console.log(res);
      alert("Flight Added Successfully");
      //clear fill form data
      let ref= document.getElementById('clear');
      ref?.click();

      this.formvalue.reset();
      this.getallflights();
    },
    err=>{
      alert("Flight Added Successfully")
    }
    );
    this.ngOnInit();
  }
  getallflights(){
    this._adminservice.getallflight().subscribe(res => {
      this.flights = res;
    });
  }
  deleteflight(flightId:any){
    this._adminservice.deleteflight(flightId).subscribe(res =>{
      if(res=="flight deleted successfully")
      alert("Flight deleted successfully");
      
    })
    this.getallflights();
  }
  onEditflight(flight:any){
    this.formvalue.controls['flightId'].setValue(flight.flightId);
    this.formvalue.controls['flightName'].setValue(flight.flightName);
    this.formvalue.controls['flightFrom'].setValue(flight.flightFrom);
    this.formvalue.controls['flightTo'].setValue(flight.flightTo);
    this.formvalue.controls['date'].setValue(flight.date);
    this.formvalue.controls['fare'].setValue(flight.fare);
  }
  updateflights(){

    this.flew.flightId=this.formvalue.value.flightId;
    this.flew.flightName=this.formvalue.value.flightName;
    this.flew.flightFrom=this.formvalue.value.flightFrom;
    this.flew.flightTo=this.formvalue.value.flightTo;
    this.flew.date=this.formvalue.value.date;
    this.flew.fare=this.formvalue.value.fare;

    this._adminservice.updateflight(this.flew.flightId,this.flew,).subscribe(res=>
      {
        alert("Flight updated successfully")
      })
  }
}
