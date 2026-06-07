import { RocketLauncher } from './rocket-launcher';
import { IWeapon } from './iweapon';
import { Fighter } from './fighter';
import { Laser } from './laser';

export function testWeaponSystem(weapon: IWeapon): void {
    console.log(`Проверка системы. Боезапас: ${weapon.ammoCount}`);
    weapon.shoot();
}

const fighterData = {
    brand: 'F-22 Raptor',
    maxSpeed: 2400,
    radarRange: 150
};

const rockets = new RocketLauncher();
const alienLaser = new Laser();
const myFighter = new Fighter(fighterData, rockets);

console.log('--- РЕЗУЛЬТАТ ЗАПУСКА ---');
console.log('Самолет:', myFighter.brand);
myFighter.fly();
myFighter.attack();
testWeaponSystem(rockets);
testWeaponSystem(alienLaser);
