import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import {MatTableDataSource} from '@angular/material';
import {MatTabsModule} from '@angular/material/tabs';

@Component({
  selector: 'app-patient-detail',
  templateUrl: './patient-detail.component.html',
  styleUrls: ['./patient-detail.component.css']
})

export class PatientDetailComponent implements OnInit {

  biochemia:MatTableDataSource<Examination>;
  hormony:MatTableDataSource<Examination>;
  onkomarkery:MatTableDataSource<Examination>;
  krvnyObraz:MatTableDataSource<Examination>;
  sedimentacia:MatTableDataSource<Examination>;

  displayedColumns = ['Parameter', 'Hodnota', 'Jednotky', 'Rozptyl'];

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
	biochemiaData=[{"Parameter":"S-Glukóza","Hodnota":5.27,"Jednotky":"mmol/l","Rozptyl":"3,30-5,59"},
{"Parameter":"S-Močovina","Hodnota":5.67,"Jednotky":"mmol/l","Rozptyl":"2,5-7,8"},
{"Parameter":"S-Kreatinín","Hodnota":86.10,"Jednotky":"µmol/l","Rozptyl":"54,00-100,00"},
{"Parameter":"S-Kyselina močová","Hodnota":325.31,"Jednotky":"µmol/l","Rozptyl":"150,00-420,00"},
{"Parameter":"S-Bilirubín celkový","Hodnota":15.84,"Jednotky":"µmol/l","Rozptyl":"4,00-22,00"},
{"Parameter":"S-AST","Hodnota":0.29,"Jednotky":"µkat/l","Rozptyl":"0,20-0,71"},
{"Parameter":"S-ALT","Hodnota":0.15,"Jednotky":"µkat/l","Rozptyl":"0,15-0,95"},
{"Parameter":"S-GMT","Hodnota":0.23,"Jednotky":"µkat/l","Rozptyl":"0,00-1,13"},
{"Parameter":"S-ALP","Hodnota":0.98,"Jednotky":"µkat/l","Rozptyl":"0,67-1,99"},
{"Parameter":"S-Cholesterol","Hodnota":4.98,"Jednotky":"mmol/l","Rozptyl":"3,20-5,00"},
{"Parameter":"S-HDL cholesterol","Hodnota":1.22,"Jednotky":"mmol/l","Rozptyl":"1,00-2,00"},
{"Parameter":"S-LDL cholesterol","Hodnota":3.40,"Jednotky":"mmol/l","Rozptyl":"1,00-3,00"},
{"Parameter":"S-Triacylglyceroly","Hodnota":1.91,"Jednotky":"mmol/l","Rozptyl":"0,40-1,82"},
{"Parameter":"Index LDL/HDL","Hodnota":2.79,"Jednotky":"index","Rozptyl":"0,00-3,30"},
{"Parameter":"index CHOL/HDL","Hodnota":4.08,"Jednotky":"index","Rozptyl":"0,00-4,85"},
{"Parameter":"Aterogénny index plazmy","Hodnota":0.19,"Jednotky":"index","Rozptyl":"0,00-1,00"},
{"Parameter":"S-AMS","Hodnota":1.43,"Jednotky":"µkat/l","Rozptyl":"0,44-1,92"},
{"Parameter":"S-Sodík","Hodnota":141.10,"Jednotky":"mmol/l","Rozptyl":"135,00-145,00"},
{"Parameter":"S-Draslík","Hodnota":4.40,"Jednotky":"mmol/l","Rozptyl":"3,60-5,30"},
{"Parameter":"S-Vápnik","Hodnota":2.44,"Jednotky":"mmol/l","Rozptyl":"2,18-2,60"},
{"Parameter":"S-ASLO","Hodnota":62.40,"Jednotky":"IU/ml","Rozptyl":"0,00-200,00"},
{"Parameter":"S-CRP","Hodnota":0.13,"Jednotky":"mg/l","Rozptyl":"0,00-5,00"},
{"Parameter":"S CRP hs","Hodnota":0.36,"Jednotky":"mg/l","Rozptyl":"0,00-5,00"}];

hormonyData=[{"Parameter":"S-TSH","Hodnota":2.98,"Jednotky":"mIU/l","Rozptyl":"0,35-5,10"},
{"Parameter":"S-T4 voľný","Hodnota":14.46,"Jednotky":"pmol/l","Rozptyl":"10,50-22,70"},
{"Parameter":"S-anti TPO","Hodnota":0.35,"Jednotky":"index","Rozptyl":"0,00-1,00"}];

onkomarkeryData=[{"Parameter":"S-CEA","Hodnota":0.96,"Jednotky":"ng/ml","Rozptyl":"0,00-5,00"},
{"Parameter":"S-PSA","Hodnota":1.85,"Jednotky":"ng/ml","Rozptyl":"0,00-4,00"}];

krvnyObrazData= [{"Parameter":"Leukocyty [WBC]","Hodnota":8.01,"Jednotky":"10^9/l","Rozptyl":"3,80-10,70"},
{"Parameter":"Erytrocyty [RBC]","Hodnota":5.16,"Jednotky":"10^12/l","Rozptyl":"4,40-5,80"},
{"Parameter":"Hemoglobín [HGB]","Hodnota":158.00,"Jednotky":"g/l","Rozptyl":"135,00-175,00"},
{"Parameter":"Hematokrit [HCT]","Hodnota":0.48,"Jednotky":"pomer","Rozptyl":"0,38-0,52"},
{"Parameter":"Stred.obj.RBC [MCV]","Hodnota":92.10,"Jednotky":"fL","Rozptyl":"82,00-98,00"},
{"Parameter":"Stred.hmot.HGB v RBC [MCH]","Hodnota":30.60,"Jednotky":"pg","Rozptyl":"27,00-33,00"},
{"Parameter":"Stred. farebná konc. HGB v RBC [MCHC]","Hodnota":332.00,"Jednotky":"g/l","Rozptyl":"320,00-370,00"},
{"Parameter":"Šírka distr. RBC [RDW]","Hodnota":13.40,"Jednotky":"%","Rozptyl":"11,60-15,10"},
{"Parameter":"Trombocyty [PLT]","Hodnota":248.00,"Jednotky":"10^9/l","Rozptyl":"140,00-420,00"},
{"Parameter":"Stredný objem PLT [MPV]","Hodnota":7.20,"Jednotky":"fL","Rozptyl":"7,10-11,50"},
{"Parameter":"Šírka distr. PLT [PDW]","Hodnota":46.90,"Jednotky":"%","Rozptyl":"40,00-70,00"},
{"Parameter":"Neutrofily [NE]","Hodnota":43.40,"Jednotky":"%","Rozptyl":"35,00-74,00"},
{"Parameter":"Lymfocyty [LY]","Hodnota":43.10,"Jednotky":"%","Rozptyl":"15,50-50,00"},
{"Parameter":"Eozinofily [EO]","Hodnota":4.20,"Jednotky":"%","Rozptyl":"0,00-5,00"},
{"Parameter":"Monocyty [MO]","Hodnota":5.70,"Jednotky":"%","Rozptyl":"2,00-11,00"},
{"Parameter":"Bazofily [BA]","Hodnota":1.00,"Jednotky":"%","Rozptyl":"0,00-1,50"},
{"Parameter":"LUC","Hodnota":2.60,"Jednotky":"%","Rozptyl":"0,00-4,50"},
{"Parameter":"Neutrofily abs. počet","Hodnota":3.48,"Jednotky":"10^9/l","Rozptyl":"1,70-6,90"},
{"Parameter":"Lymfocyty abs. počet","Hodnota":3.45,"Jednotky":"10^9/l","Rozptyl":"1,00-3,60"},
{"Parameter":"Eozinofily abs. počet","Hodnota":0.33,"Jednotky":"10^9/l","Rozptyl":"0,00-0,43"},
{"Parameter":"Monocyty abs. počet","Hodnota":0.46,"Jednotky":"10^9/l","Rozptyl":"0,10-0,80"},
{"Parameter":"Bazofily abs. počet","Hodnota":0.08,"Jednotky":"10^9/l","Rozptyl":"0,00-0,10"}];

sedimentaciaData= [{"Parameter":"P-FW po 1. hodine","Hodnota":5,"Jednotky":"mm","Rozptyl":"0-10"},
{"Parameter":"P-FW po 2. hodine","Hodnota":10,"Jednotky":"mm","Rozptyl":"0-20"}];


  constructor(
  private route: ActivatedRoute,
  private router: Router
) {
  	this.biochemia = new MatTableDataSource(this.biochemiaData);
  	this.hormony = new MatTableDataSource(this.hormonyData);
  	this.onkomarkery = new MatTableDataSource(this.onkomarkeryData);
  	this.krvnyObraz = new MatTableDataSource(this.krvnyObrazData);
  	this.sedimentacia = new MatTableDataSource(this.sedimentaciaData);
  }

  ngOnInit() {
  	var patientId = this.route.snapshot.paramMap.get("id");
  	this.patient = this.patients.find(x=>x.idNo == patientId);
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

export interface Examination {
  Parameter: string;
  Hodnota: number;
  Jednotky: string;
  Rozptyl: string;
}
