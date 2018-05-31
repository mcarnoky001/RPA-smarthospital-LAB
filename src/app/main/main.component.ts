import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {FormsModule,NgForm} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-maine',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent{

	displayedColumns = ['name', 'surname', 'idNo', 'insurance'];
	selectedRowIndex: number = -1;
	constructor(
    private router: Router
  	) {this.dataSource = new MatTableDataSource(this.patients);}

	patients=[{
		name:"Peter",
		surname:"Macko",
		idNo:"9310136854",
		insurance:"Union"
	},{
		name:"Igor",
		surname:"Novak",
		idNo:"9009136134",
		insurance:"Vseobecna zdravotna poistovna"
	},{
		name:"Ivana",
		surname:"Stresakova",
		idNo:"8312031984",
		insurance:"Dovera"
	},{
		name:"Milada",
		surname:"Kolarikova",
		idNo:"9814056583",
		insurance:"Union"
	},{
		name:"Alojz",
		surname:"Kajan",
		idNo:"9012094510",
		insurance:"Dovera"
	},{
		name:"Rastislav",
		surname:"Nagy",
		idNo:"9104012852",
		insurance:"Vseobecna zdravotna poistovna"
	},{
		name:"Ivona",
		surname:"Firakova",
		idNo:"9507227323",
		insurance:"Union"
	},{
		name:"Zuzana",
		surname:"Kovacova",
		idNo:"9651203518",
		insurance:"Dovera"
	}];

	dataSource:MatTableDataSource<Patient>;


applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  openPatient(row):void{
  	console.log(row);
  	 this.router.navigate(['patient-detail',row.idNo]);
  }
}

export interface Patient {
  name: string;
  surname: string;
  idNo: string;
  insurance: string;
}