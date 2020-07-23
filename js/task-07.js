"use strict";

const account = {
  transactionTypes: {
    DEPOSIT: 'deposit',
    WITHDRAW: 'withdraw',
  },

  balance: 0,
  
  transactions: [
    {id: 1, amount: 10, type: 'deposit',},
    {id: 2, amount: 20, type: 'deposit',},
    {id: 3, amount: 10, type: 'withdraw',},
    {id: 4, amount: 20, type: 'deposit',},
    {id: 5, amount: 10, type: 'deposit',},
    {id: 6, amount: 30, type: 'withdraw',},
  ],

  startProgram() {
    const operation = prompt(`Выберите операцию(введите номер операции):
      1- Занесение средств
      2- Снятие средств
      3- Посмотреть баланс
      4- Транзакции
      5- Выход`);

    switch (operation) {
      case '1': this.deposit(+prompt(`Введите сумму:`));
        break;
      case '2': this.withdraw(+prompt(`Введите сумму:`));
        break;
      case '3': this.getBalance();
        break;
      case '4': this.menuTransactions();
        break;
    }
    
    if (operation !== '5') this.startProgram();
  },

  createTransaction(amount, type) {
    return { id: (this.transactions.length + 1), amount, type,};
  },

  deposit(amount) {
    this.transactions.push(this.createTransaction(amount, this.transactionTypes.DEPOSIT));
    this.balance += amount;
    alert('Средства внесены.');
  },

  withdraw(amount) {
    if (this.balance < amount) return alert('Снятие такой суммы невозможно, недостаточно средств.');
    if (amount === 0) return alert('Сумма должна быть больше 0.');
    this.transactions.push(this.createTransaction(amount, this.transactionTypes.WITHDRAW));
    this.balance -= amount;
    alert('Средства списаны.');
  },

  getBalance() {
    this.balance = 0;
    for (const object of this.transactions) {
      this.balance += this.transactionTypes.DEPOSIT === object.type ? object.amount : 0;
    }
    for (const object of this.transactions) {
      this.balance -= this.transactionTypes.WITHDRAW === object.type ? object.amount : 0;
    }
    alert(`Ваш баланс: ${this.balance}`);
  },

  menuTransactions() {
    const menuTransactions = prompt(`Выберите операцию(введите номер операции):
      1- История транзакий
      2- Поиск транзакий по id
      3- Сумма транзакий пополнения
      4- Сумма транзакий снятия`);
    
    switch (menuTransactions) {
      case '1': this.getTransactions(this.transactions);
        break;
      case '2': this.getTransactionDetails(+prompt('Введите id:'));
        break;
      case '3': this.getTransactionTotal(this.transactionTypes.DEPOSIT);
        break;
      case '4': this.getTransactionTotal(this.transactionTypes.WITHDRAW);
        break;
    }
  },

  getTransactions(transactions) {
    let listTransaction = `История транзакций: `;
    for (const object of transactions) {
      listTransaction += `
      id: ${object.id}, тип: ${object.type}, сумма: ${object.amount}`;
    }
    alert(listTransaction);
  },

  getTransactionDetails(id) {
    for (const object of this.transactions) {
      if(object.id === id) return alert(`Транзакция ${id} найдена, тип: ${object.type}, сумма: ${object.amount}`);
    }
    alert(`Транзакция не найдена`);
  },

  getTransactionTotal(type) {
    let total = 0;
    for (const object of this.transactions) {
      total += type === object.type ? object.amount : 0;
    }
    alert(`Сумма ${type} за все время: ${total}`);
  },  
};

account.startProgram();