import { Component } from '@angular/core';
import { Router } from '@angular/router';
//Firebase
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import configFirebase from "../config/configFirebase.json"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private router: Router) {
    const app = initializeApp(configFirebase);
    const analytics = getAnalytics(app)
    const auth = getAuth(app);

      this.router.navigate(['/login'])
    // console.log(auth);
  }
}
