import { Account } from "./account";

export class User {
    id!: number;
    username: String;
    password: String;
    firstName: String;
    lastName: String;
    permission: number;
    accounts: Account[];

    constructor(id: number, username: String, password:String, firstName: String, lastName: String, permission: number, accounts: Account[]){
        this.id = id;
        this.username = username;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.permission = permission;
        this.accounts = accounts;
    }
}
