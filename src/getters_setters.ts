export class Address {
    private _address: string = '';
    private _zipCode: string = '';
    private _number?: number;
    private static defaultCepValidation = 75000000
  
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
  
    public get number(): number {
        return this._number ?? 123
    }

    public static isCepValid(zipCode: string): boolean {
        return parseInt(zipCode.replace(/\D/g, '')) > Address.defaultCepValidation
    }
}

console.log(Address.isCepValid('75605-987'))
console.log(Address.isCepValid('74605-987'))