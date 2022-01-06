export class ViewModel {
  constructor(model) {
    this.model = model;
  }
  async registerWithBasicAuth(fullName, postBoxNumber, email, password) {
    return await this.model.registerWithBasicAuth(
      fullName,
      postBoxNumber,
      email,
      password
    );
  }
}
