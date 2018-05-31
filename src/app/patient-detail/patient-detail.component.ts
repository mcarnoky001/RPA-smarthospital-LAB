import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-patient-detail',
  templateUrl: './patient-detail.component.html',
  styleUrls: ['./patient-detail.component.css']
})

export class PatientDetailComponent implements OnInit {
  anamneza:Anamneza={osobna:"",rodinna:"",pracovna:""};
  patient:Patient;
  man="muz";
  woman="zena";
  patients=[{
		name:"Peter",
		surname:"Macko",
		idNo:"9310136854",
		insurance:"Union",
		address:"Karadzicova 2, Bratislava",
		tel: "0213912301",
		sex: "muz"
	},{
		name:"Igor",
		surname:"Novak",
		idNo:"9009136134",
		insurance:"Vseobecna zdravotna poistovna",
		address:"Karadzicova 2, Bratislava",
		tel: "0213912301",
		sex: "muz"
	},{
		name:"Ivana",
		surname:"Stresakova",
		idNo:"8312031984",
		insurance:"Dovera",
		address:"Karadzicova 2, Bratislava",
		tel: "0213912301",
		sex: "zena"
	},{
		name:"Milada",
		surname:"Kolarikova",
		idNo:"9814056583",
		insurance:"Union",
		address:"Karadzicova 2, Bratislava",
		tel: "0213912301",
		sex: "zena"
	},{
		name:"Alojz",
		surname:"Kajan",
		idNo:"9012094510",
		insurance:"Dovera",
		address:"Karadzicova 2, Bratislava",
		tel: "0213912301",
		sex: "muz"
	},{
		name:"Rastislav",
		surname:"Nagy",
		idNo:"9104012852",
		insurance:"Vseobecna zdravotna poistovna",
		address:"Karadzicova 2, Bratislava",
		tel: "0213912301",
		sex: "muz"
	},{
		name:"Ivona",
		surname:"Firakova",
		idNo:"9507227323",
		insurance:"Union",
		address:"Karadzicova 2, Bratislava",
		tel: "0213912301",
		sex: "zena"
	},{
		name:"Zuzana",
		surname:"Kovacova",
		idNo:"9651203518",
		insurance:"Dovera",
		address:"Karadzicova 2, Bratislava",
		tel: "0213912301",
		sex: "zena"
	}];


  constructor(
  private route: ActivatedRoute,
  private router: Router
) {}

  ngOnInit() {
  	var patientId = this.route.snapshot.paramMap.get("id");
  	this.patient = this.patients.find(x=>x.idNo == patientId);
  	this.anamneza.osobna="V detstve častejsie anginy.Operacie: appendektomia v r.1995, cholecystektomia v r.1998 pre lithiázu.Úrazy: autonehoda v r.2001 s frakturou levej stehennej kosti a osteosyntézou, v bezvedomí nebol, bez trvalých následkov.Návyky: fajciar 20 cigariet denne, fajci od 20 do 29 rokov, ked prezil infarkt myokardu a od tej doby nefajci. Káva 1x denne, alkohol iba príležitostne.";
  	this.anamneza.pracovna="Pracovnik na Poste, denne prenasa tazke naklady.Prichadza do casteho styku s chorymi, je vystaveny vplyvom pocasia.";
  	this.anamneza.rodinna="matka sa lieči na astmu, otec prekonal meningitídu ako 5,5 ročný. Hypertenzia, diabetes mellitus, malígne ani pohlavné ochorenia v príbuzenstve nezistené. Súrodencov nemá.";
  }

}

export interface Patient {
  name: string;
  surname: string;
  idNo: string;
  insurance: string;
  address:string;
  tel:string;
  sex:string;
}

export interface Anamneza {
  osobna: string;
  pracovna: string;
  rodinna: string;
}
