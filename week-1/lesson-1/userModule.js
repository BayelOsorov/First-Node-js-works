class User {
    constructor(name, user) {
        this.name = name
        this.user = user
    }
    sayHi() {
        return `HELLO MY name is ${this.name} , my age ${this.age} `
    }
}
module.export = User