class ClientRecord {
  constructor(obj) {
      this.id = obj.id;
      this.name = obj.name;
      this.email = obj.email;
      this.nextContact = obj.nextContact;
      this.notes = obj.notes;
  }
}

module.exports = {
    ClientRecord,
};