export class Battery {
    private chargeLevel = 100;

    public constructor(public capacityKhw: number) {}

    public getCharge(): number {
        return this.chargeLevel;
    }

    public consume(amount: number): void {
        this.chargeLevel = Math.max(0, this.chargeLevel - amount);
        console.log(`[Battery] Израсходовано ${amount}% энергии. Осталось: ${this.chargeLevel}%`);
    }

    public recharge(): void {
        this.chargeLevel = 100;
        console.log('[Battery] Батарея полностью заряжена (100%).');
    }
}

export abstract class Vehicle {
    public constructor(
        public brand: string,
        public model: string,
        public year: number
    ) {}

    public displayInfo(): void {
        console.log(`Транспорт: ${this.brand} ${this.model} (${this.year} г.)`);
    }

    public abstract startEngine(): void;
    public abstract drive(distance: number): void;
}

export class ElectricCar extends Vehicle {
    public battery: Battery;

    public constructor(brand: string, model: string, year: number, batteryCapacity: number) {
        super(brand, model, year);
        this.battery = new Battery(batteryCapacity);
    }

    public startEngine(): void {
        if (this.battery.getCharge() > 0) {
            console.log(`[${this.brand} ${this.model}] Бесшумный запуск. Электроника готова.`);
        } else {
            console.log(`[${this.brand} ${this.model}] Ошибка: Батарея разряжена, запуск невозможен!`);
        }
    }

    public drive(distance: number): void {
        const energyCost = Math.round(distance * 0.5);

        if (this.battery.getCharge() >= energyCost) {
            console.log(`[${this.brand} ${this.model}] Едем ${distance} км...`);
            this.battery.consume(energyCost);
        } else {
            console.log(`[${this.brand} ${this.model}] Недостаточно заряда для поездки на ${distance} км!`);
        }
    }
}
