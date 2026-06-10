import { IAircraftData } from './iaircraftdata';
export abstract class BaseAircraft {
    protected _brand: string;
    protected _maxSpeed: number;

    public constructor(data: IAircraftData) {
        this._brand = data.brand;
        this._maxSpeed = data.maxSpeed;
    }

    public get brand(): string {
        return this._brand;
    }

    public get maxSpeed(): number {
        return this._maxSpeed;
    }

    public abstract fly(): void;
}
