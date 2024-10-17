export class UserDto {
    name: string;
    bankAccount: string;
    acceptedTerms: boolean;
  
    constructor(name: string, bankAccount: string, acceptedTerms: boolean) {
  
      this.name = name;
      this.bankAccount = bankAccount;
      this.acceptedTerms = acceptedTerms;
    }
  }