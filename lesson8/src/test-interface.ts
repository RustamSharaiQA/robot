interface Geo {
    lat: string;
    lng: string;
}

interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;

    geo: Geo;
}

interface Company {
    name: string;
    catchPhrase: string;
    bs: string;
}

interface UserResponse {
    id: number;
    name: string;
    username: string;
    email: string;

    phone: string;
    website: string;

    address: Address;
    company: Company;
}

async function fetchUserData(): Promise<UserResponse> {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');

    const data: UserResponse = await response.json();

    return data;
}

class UserShortInfo {
    public id: number;
    public name: string;
    public city: string;
    public lat: string;
    public nameWithUsername: string;
    public fullAddressInfo: string;
    public nameLength: number;

    public constructor(apiData: UserResponse) {
        this.id = apiData.id;
        this.name = apiData.name;
        this.city = apiData.address.city;
        this.lat = apiData.address.geo.lat;
        this.nameWithUsername = `${apiData.name} (${apiData.username})`;
        this.fullAddressInfo = `City: ${apiData.address.city}, Lat: ${apiData.address.geo.lat}, lng: ${apiData.address.geo.lng}`;
        this.nameLength = apiData.name.length;
    }
}

const convertUser = (obj1: UserResponse): UserShortInfo => {
    const obj2 = new UserShortInfo(obj1);
    return obj2;
};

async function start(): Promise<void> {
    console.log('Жду ответа от сервера');

    const user: UserResponse = await fetchUserData();
    const cleanUser: UserShortInfo = convertUser(user);

    console.log(`Имя Юзера ${cleanUser.nameWithUsername}`);
    console.log(`Полный адрес ${cleanUser.fullAddressInfo}`);
}

start();
