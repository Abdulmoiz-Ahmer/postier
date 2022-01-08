export class Model {
  constructor(auth, signInWithEmailAndPassword) {
    this.auth = auth;
    this.signInWithEmailAndPassword = signInWithEmailAndPassword;
  }

  async loginWithBasicAuth(email, password) {
    try {
      return await this.signInWithEmailAndPassword(this.auth, email, password);
    } catch (e) {
      return e;
    }
  }
}
