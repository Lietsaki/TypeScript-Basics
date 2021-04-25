import { HasFormatter } from '../interfaces/HasFormatter.js'


// Classes
export class Invoice implements HasFormatter {
  // readonly client: string;
  // private details: string;
  // public amount: number;

  constructor(
    readonly client: string,
    private details: string,
    public amount: number
  ) {
    // When we declare our properties like that inside the () of the constructor, they are automatically assigned to
    // this, so we don't need the block below anymore. That is only when we define them with a modifier (readonly, private, public)
    // this.client = c;
    // this.details = d;
    // this.amount = a;
  }

  format() {
    return `${this.client} owes $${this.amount} for ${this.details}`
  }
}