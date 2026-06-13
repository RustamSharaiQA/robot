import { IWeapon } from './iweapon';

export class RocketLauncher implements IWeapon {
    private _ammoCount = 4;

    public get ammoCount(): number {
        return this._ammoCount;
    }

    public shoot(): string {
        if (this._ammoCount > 0) {
            this._ammoCount--;
            return 'Пуск ракеты';
        } else {
            return 'Ракеты закончились';
        }
    }
}
