interface Location {
    latitude: number,
    longitude: number,
    readonly numberLocation: number

    getLocation(): string;
}
  
   
  
const getLocation = (location: Location): string => {
    return `${location.latitude} - ${location.longitude}`
}

const location: Location = {
    latitude: 12312,
    longitude: 321,
    numberLocation: 123,
    getLocation: function (): string {
        return "location..."
    }
}

getLocation(location)

class LocationMap implements Location {
    latitude: number;
    longitude: number;
    numberLocation: number = 0;
  
    constructor(latitude: number, longitude: number) {
        console.log("class LocationMap")
        this.latitude = latitude
        this.longitude = longitude
    }
  
    getLocation(): string {
        return 'any';
    }
}

getLocation(new LocationMap(123, 321))

export {}