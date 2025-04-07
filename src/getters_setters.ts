export class Address {
    private _address: string = '';
    private _zipCode: string = '';
    private _number?: number
  
    public set address(address: string){
        if (address.length < 3) {
            throw new Error('invalid address')
        }
  
        this._address = address
    }
  
    public get address(): string {
        return this._address
    }
  
    public set zipCode(zipCode: string) {
        this._zipCode = zipCode
    }
  
    public get zipCode(): string {
        return this._zipCode.replace(/\D/g, '')
    }
  
    public set number(number: number) {
        this._number = number
    }
  
    public get numberA(): number {
        return this._number ?? 123
    }
}

const address = new Address()
address.zipCode = '00000-000'
console.log(address.zipCode)