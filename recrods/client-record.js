class ClientRecord {
  constructor(obj) {
      const {id,name,email,nextContact, notes} = obj;
        if(!id || typeof id !== 'string'){
            throw new Error('ID cant be empty text')
        }
      if(!name || typeof name !== 'string' || name.length < 3){
          throw new Error('Name must be text on length min 3 signs.')
      }
      if(!email || typeof email !== 'string' || email.indexOf('@') === -1){
          throw new Error('Email is incorect')
      }

      if(typeof nextContact !=='string'){
          throw new Error('Date of next contact must be text')
      }
      if(typeof notes !=='string'){
          throw new Error('Notes must be text')
      }

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