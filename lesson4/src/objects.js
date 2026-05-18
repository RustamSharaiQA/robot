const user = {
    name: 'Rustam',
    age: 35,

    address: {
        city: 'Mykolaiv',
        country: 'Ukraine'
    },

    hobbies: ['coding', 'testing', 'cars'],

    showInfo() {
        console.log(`Name: ${this.name}`);
        console.log(`City: ${this.address.city}`);
    }
};

user.showInfo();
