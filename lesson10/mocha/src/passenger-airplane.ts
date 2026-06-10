import { BaseAircraft } from './baseaircraft';

export class PassengerAirplane extends BaseAircraft {
    public fly(): void {
        console.log(`Пассажирский самолет ${this._brand} летит на скорости ${this._maxSpeed} км/ч.`);
    }
}
