export class Model {
  constructor(auth, db, collection, createUserWithEmailAndPassword, addDoc) {
    this.auth = auth;
    this.db = db;
    this.collection = collection;
    this.createUserWithEmailAndPassword = createUserWithEmailAndPassword;
    this.addDoc = addDoc;
  }

  async registerWithBasicAuth(fullName, postBoxNumber, email, password) {
    try {
      const result = await this.createUserWithEmailAndPassword(
        this.auth,
        email,
        password
      );

      const docRef = await this.addDoc(this.collection(this.db, "users"), {
        fullName,
        email,
        postBoxNumber,
      });

      return {
        user: result,
        userInfo: docRef,
      };
    } catch (e) {
      return e;
    }
  }
}
