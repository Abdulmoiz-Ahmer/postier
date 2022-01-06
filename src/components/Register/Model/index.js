export class Model {
  constructor(auth, createUserWithEmailAndPassword) {
    this.auth = auth;
    this.createUserWithEmailAndPassword = createUserWithEmailAndPassword;
  }

  async registerWithBasicAuth(fullName, postBoxNumber, email, password) {
    try {
      const result = await this.createUserWithEmailAndPassword(
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
