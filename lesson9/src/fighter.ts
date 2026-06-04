import { BaseAircraft } from './baseaircraft';
import { IFighterData } from './ifighterdata';
import { IWeapon } from './iweapon';

export class Fighter extends BaseAircraft {
    private _radarRange: number;
    private _weapon: IWeapon;

    public constructor(data: IFighterData, weapon: IWeapon) {
        super(data);
        this._radarRange = data.radarRange;
        this._weapon = weapon;
    }

    public fly(): void {
        console.log(`Истребитель ${this._brand} на сверхзвуке: ${this._maxSpeed} км/ч.`);
    }

    public attack(): void {
        console.log(`Скан воздуха радаром на ${this._radarRange} км...`);
        this._weapon.shoot();
    }
}
