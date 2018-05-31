import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(
    private router: Router
  ) {}

  isAuthenticated: boolean;
  tags: Array<string> = [];
  tagsLoaded = false;

  ngOnInit() {
  }

  submit() {
    this.router.navigateByUrl('main');
  }

}
