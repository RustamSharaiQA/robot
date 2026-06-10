import { IWeapon } from './iweapon';

export class Laser implements IWeapon {
    private _energyCharge = 100;

    public get ammoCount(): number {
        return this._energyCharge;
    }

    public shoot(): string {
        if (this._energyCharge >= 25) {
            this._energyCharge -= 25;
            return 'Сверхмощный лазерный луч прожигает броню цели! (-25% энергии)';
        } else {
            return 'Недостаточно энергии для выстрела лазером! Требуется перезарядка.';
        }
    }
}
