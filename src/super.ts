export class User {
    protected name: string // public|protected|private
    private email: string
    private address: Address[] = []
    private active: boolean = false
  
    constructor(name: string, email: string, active: boolean = false) {
        this.name = name
        this.email = email
        this.active = active
    }
  
    public changeName(newName: string): void {
        if (newName.length < 3) {
            throw new Error('invalid name')
        }
        
        this.name = newName
    }
  
    public getName(): string {
        return this.name
    }
  
    public getNumber(): number {
        return 123456789
    }
  }
  
class Manager extends User {
    constructor(name: string, email: string, active: boolean, code: string) {
        console.log(code)
        super(name, email, active)
    }

    public getName(): string {
        return `Manager: ${this.name}`
    }
  
    public getNumber(): number {
        return super.getNumber()
    }
}
  
const manager1 = new Manager('Manager1', 'manager1@email.com', true, "code")
console.log(manager1.getNumber())