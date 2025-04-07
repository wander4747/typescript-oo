class User {
    name: string
    email: string
    active: boolean = false

    constructor(name: string, email: string, active: boolean = false) {
        this.name = name
        this.email = email
        this.active = active
    }
}

const user = new User('Wander', 'wander@test.com')
console.log(user)

const user2 = new User('Wander', 'wander@test.com', true)
console.log(user2)