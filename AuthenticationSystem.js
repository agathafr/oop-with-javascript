/*
 To be authenticable is to have the authenticate method
*/
export class AuthenticationSystem {
  static login(authenticable, password) {
    return authenticable.authenticate(password);
  }
}