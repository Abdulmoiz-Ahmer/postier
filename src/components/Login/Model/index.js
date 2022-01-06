export class Model {
  constructor(auth, signInWithEmailAndPassword) {
    this.auth = auth;
    this.signInWithEmailAndPassword = signInWithEmailAndPassword;
  }

  async loginWithBasicAuth(email, password) {
    try {
      const result = await this.signInWithEmailAndPassword(
        this.auth,
        email,
        password
      );
      return result;
    } catch (e) {
      return e;
    }
  }
}
