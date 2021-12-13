import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private afAuth:AngularFireAuth ) { }

  async register(email: string, password: string) {
    try {
      const { user } = await this.afAuth.createUserWithEmailAndPassword(email, password);
      return user;
    } catch (error) {
      console.log('Error->', error);
    }
  }
  async login(email: string, password: string){
    try {
      const { user } = await this.afAuth.signInWithEmailAndPassword(email, password);
      return user;
    } catch (error) {
      console.log('Error->', error);
    }
  }
  async resetPassword(email: string): Promise<void> {
    try {
      return this.afAuth.sendPasswordResetEmail(email);
    } catch (error) {
      console.log('Error->', error);
    }
  }
}
