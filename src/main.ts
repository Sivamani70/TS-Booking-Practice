export class Solution {
  static listOfCustomers: Array<Customer> = [];

  public addCustomer = (
    name: string,
    id: string,
    mobileNumber: string,
    age: number,
    dob: string,
    address: string
  ) =>
    Solution.listOfCustomers.push(
      new Customer(name, id, mobileNumber, age, dob, address)
    );

  /**
   * displayById
   */
  public displayById() {
    alert("Displaying By Customer ID in Console");
    for (let i = 0; i < Solution.listOfCustomers.length; i++) {
      for (let j = i + 1; j < Solution.listOfCustomers.length; j++) {
        if (Solution.listOfCustomers[i].id > Solution.listOfCustomers[j].id) {
          const temp = Solution.listOfCustomers[i];
          Solution.listOfCustomers[i] = Solution.listOfCustomers[j];
          Solution.listOfCustomers[j] = temp;
        }
      }
    }

    console.log(Solution.listOfCustomers);
  }

  /**
   * displayByNames
   */
  public displayByNames() {
    alert("Displaying By Customer Name in Console");
    for (let i = 0; i < Solution.listOfCustomers.length; i++) {
      for (let j = i + 1; j < Solution.listOfCustomers.length; j++) {
        if (
          Solution.listOfCustomers[i].name.localeCompare(
            Solution.listOfCustomers[j].name
          ) > 0
        ) {
          const temp = Solution.listOfCustomers[i];
          Solution.listOfCustomers[i] = Solution.listOfCustomers[j];
          Solution.listOfCustomers[j] = temp;
        }
      }
    }
    console.log(Solution.listOfCustomers);
  }

  /**
   * displayByCityNames
   */
  public displayByCityNames() {
    alert("Displaying By City Name in Console");
    for (let i = 0; i < Solution.listOfCustomers.length; i++) {
      for (let j = i + 1; j < Solution.listOfCustomers.length; j++) {
        if (
          Solution.listOfCustomers[i].address.localeCompare(
            Solution.listOfCustomers[j].address
          ) > 0
        ) {
          const temp = Solution.listOfCustomers[i];
          Solution.listOfCustomers[i] = Solution.listOfCustomers[j];
          Solution.listOfCustomers[j] = temp;
        }
      }
    }
    console.log(Solution.listOfCustomers);
  }
}

class Customer {
  constructor(
    private _name: string,
    private _id: string,
    private _mobileNumber: string,
    private _age: number,
    private _dob: string,
    private _address: string
  ) {}

  // getters

  public get name(): string {
    return this._name;
  }

  public get id(): string {
    return this._id;
  }

  public get mobileNumber(): string {
    return this._mobileNumber;
  }
  public get age(): number {
    return this._age;
  }

  public get dob(): string {
    return this._dob;
  }

  public get address(): string {
    return this._address;
  }
}

export class BookTicket {
  private validate(id: string, mobileNumber: string): boolean {
    const matchedData: Customer[] = Solution.listOfCustomers.filter(
      (customer) => customer.id === id && customer.mobileNumber === mobileNumber
    );
    return matchedData.length !== 0 && matchedData.length === 1;
  }

  /**
   * reserveTicket
   */
  public reserveTicket(
    id: string,
    mobileNumber: string,
    source: string,
    destination: string,
    date: string,
    time: string
  ) {
    if (Solution.listOfCustomers.length === 0) {
      alert("Customer list is empty\nAdd user 1st.");
      return;
    }

    const [, , day] = date.split("-");
    const todayDate = new Date().getDate();

    if (
      source !== destination &&
      this.validate(id, mobileNumber) &&
      Number(day) > todayDate + 1 &&
      Number(day) < 31 &&
      time !== ""
    ) {
      alert("Ticket Booked");
    } else {
      alert("Ticket Booking Failed");
    }
  }
}
