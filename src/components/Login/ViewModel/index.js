export class ViewModel {
  constructor(model) {
    this.model = model;
  }
  async loginWithBasicAuth(email, password) {
    return await this.model.loginWithBasicAuth(email, password);
  }
}
