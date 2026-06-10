import { expect } from 'chai';
import { RocketLauncher } from '../src/rocket-launcher';
import { Laser } from '../src/laser';
import { Fighter } from '../src/fighter';
import { testWeaponSystem } from '../src/index';

describe('Тестування авіаційної та збройної системи', () => {
    describe('Клас RocketLauncher', () => {
        let launcher: RocketLauncher;

        beforeEach(() => {
            launcher = new RocketLauncher();
        });

        it('має початковий боєзапас 4 ракети', () => {
            expect(launcher.ammoCount).to.equal(4);
        });

        it('зменшує кількість ракет після пострілу', () => {
            launcher.shoot();
            expect(launcher.ammoCount).to.equal(3);
        });

        it('не зменшує боєзапас нижче 0', () => {
            launcher.shoot();
            launcher.shoot();
            launcher.shoot();
            launcher.shoot();
            launcher.shoot();
            expect(launcher.ammoCount).to.equal(0);
        });
    });

    describe('Клас Laser', () => {
        let laser: Laser;

        beforeEach(() => {
            laser = new Laser();
        });

        it('має початковий заряд енергії 100', () => {
            expect(laser.ammoCount).to.equal(100);
        });

        it('витрачає 25% енергії на один постріл', () => {
            laser.shoot();
            expect(laser.ammoCount).to.equal(75);
        });

        it('не стріляє і не витрачає енергію, якщо її менше 25', () => {
            laser.shoot();
            laser.shoot();
            laser.shoot();
            laser.shoot();
            laser.shoot();
            expect(laser.ammoCount).to.equal(0);
        });
    });

    describe('Клас Fighter', () => {
        it('правильно ініціалізує бренд та максимальну швидкість', () => {
            const mockWeapon = new RocketLauncher();
            const fighterData = { brand: 'Su-27', maxSpeed: 2500, radarRange: 200 };
            const fighter = new Fighter(fighterData, mockWeapon);

            expect(fighter.brand).to.equal('Su-27');
            expect(fighter.maxSpeed).to.equal(2500);
        });
    });

    describe('Функція testWeaponSystem (маніпуляція обєктами)', () => {
        it('має викликати метод shoot у переданого обєкта зброї та змінити його стан', () => {
            const launcher = new RocketLauncher(); // Передаємо об'єкт як вхідний параметр

            expect(launcher.ammoCount).to.equal(4);

            testWeaponSystem(launcher);
            expect(launcher.ammoCount).to.equal(3);
        });
    });
});
