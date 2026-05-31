import { ElectricCar } from './abstraction';

console.log('=== Проверка ООП концепций в TypeScript ===\n');

const myTesla = new ElectricCar('Tesla', 'Model 3', 2024, 75);

myTesla.displayInfo();

console.log('\n--- Симуляция поездки ---');
myTesla.startEngine();
myTesla.drive(40);
myTesla.drive(100);

console.log('\n--- Манипуляция через композицию (напрямую с батареей) ---');
console.log(`Текущий уровень заряда: ${myTesla.battery.getCharge()}%`);
myTesla.battery.recharge();
console.log(`Заряд после перезарядки: ${myTesla.battery.getCharge()}%`);
