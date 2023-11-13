import { Injectable } from '@angular/core';
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  auth = getAuth();

  constructor() { }

   async authAccount(email: string, password: string) {
    try {
      const sign = await signInWithEmailAndPassword(this.auth, email, password)
      const user = sign.user;
      console.log(user);
    } catch (error) {
      console.log(error);
    }

  }

  recoverAccount(email: string) {

  }

  signOut() {

  }
}
