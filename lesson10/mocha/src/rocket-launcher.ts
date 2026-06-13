import { IWeapon } from './iweapon';

export class RocketLauncher implements IWeapon {
    private _ammoCount = 4;

    public get ammoCount(): number {
        return this._ammoCount;
    }

    public shoot(): void {
        if (this._ammoCount > 0) {
            this._ammoCount--;
            console.log('Пуск ракеты');
        } else {
            console.log('Ракеты закончились');
        }
    }
}
