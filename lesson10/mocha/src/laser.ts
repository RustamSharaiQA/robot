import { IWeapon } from './iweapon';

export class Laser implements IWeapon {
    private _energyCharge = 100;

    public get ammoCount(): number {
        return this._energyCharge;
    }

    public shoot(): void {
        if (this._energyCharge >= 25) {
            this._energyCharge -= 25;
            console.log('Сверхмощный лазерный луч прожигает броню цели! (-25% энергии)');
        } else {
            console.log('Недостаточно энергии для выстрела лазером! Требуется перезарядка.');
        }
    }
}
