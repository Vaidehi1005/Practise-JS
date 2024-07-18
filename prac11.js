class BankAccount {
    constructor(accountno, balance) {
      this.accountno = accountNumber;
      this.balance = balance;
    }
  
    deposit(amount) {
      this.balance += amount;
    }
  
    withdraw(amount) {
      if (amount > this.balance) {
        console.log("Insufficient amount");
      } else {
        this.balance -= amount;
      }
    }
  
    getBalance() {
      return this.balance;
    }
  }
  
  let account = new BankAccount("1040", 95000);
  account.deposit(500);
  console.log(account.getBalance()); 
  account.withdraw(200);
  console.log(account.getBalance()); 