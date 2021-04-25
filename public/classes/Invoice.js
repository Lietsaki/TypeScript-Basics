// Classes
export class Invoice {
    // readonly client: string;
    // private details: string;
    // public amount: number;
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
        // When we declare our properties like that inside the () of the constructor, they are automatically assigned to
        // this, so we don't need the block below anymore. That is only when we define them with a modifier (readonly, private, public)
        // this.client = c;
        // this.details = d;
        // this.amount = a;
    }
    format() {
        return `${this.client} owes $${this.amount} for ${this.details}`;
    }
}
