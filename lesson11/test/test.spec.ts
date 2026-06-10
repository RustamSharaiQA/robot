import { expect } from 'chai';
import sinon from 'ts-sinon';
import { RocketLauncher } from '../src/rocket-launcher';
import { Laser } from '../src/laser';
import { Fighter } from '../src/fighter';

describe('Заняття 11: Тестування ізольованих компонентів за допомогою Sinon.js', () => {
    afterEach(() => {
        sinon.restore();
    });

    it('1. Має викликати метод shoot класу RocketLauncher при атаці винищувача', () => {
        const rockets = new RocketLauncher();
        const fighterData = { brand: 'F-22', maxSpeed: 2400, radarRange: 150 };
        const fighter = new Fighter(fighterData, rockets);

        const shootSpy = sinon.spy(rockets, 'shoot');

        fighter.attack();

        expect(shootSpy.calledOnce).to.be.true;
    });

    it('2. Має підмінити поведінку shoot у Laser за допомогою stub', () => {
        const laser = new Laser();

        const laserStub = sinon.stub(laser, 'shoot').returns('Лазер зламаний хакерами!');

        const result = laser.shoot();

        expect(result).to.equal('Лазер зламаний хакерами!');
        expect(laserStub.calledOnce).to.be.true;
    });

    it('3. Має підмінити значення ammoCount (getter) у RocketLauncher', () => {
        const launcher = new RocketLauncher();

        sinon.stub(launcher, 'ammoCount').get(() => 999);

        expect(launcher.ammoCount).to.equal(999);
    });

    it('4. Винищувач має успішно завершити атаку, якщо зброя повертає успішний постріл', () => {
        const fakeWeapon = new RocketLauncher();
        const fighterData = { brand: 'Su-27', maxSpeed: 2500, radarRange: 200 };
        const fighter = new Fighter(fighterData, fakeWeapon);

        const attackStub = sinon.stub(fakeWeapon, 'shoot').returns('Бум!');

        fighter.attack();

        expect(attackStub.called).to.be.true;
    });

    it('метод fly виводить правильний текст в консоль', () => {
        const rockets = new RocketLauncher();
        const fighterData = { brand: 'Mirage', maxSpeed: 2200, radarRange: 100 };
        const fighter = new Fighter(fighterData, rockets);

        const consoleSpy = sinon.spy(console, 'log');

        fighter.fly();

        expect(consoleSpy.calledWith('Истребитель Mirage на сверхзвуке: 2200 км/ч.')).to.be.true;
    });
});
