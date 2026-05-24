// Создаем 2-уровневый объект, описывающий профиль тестировщика и его проект
const automationQA = {
    firstName: 'Рустам',
    lastName: 'Шараи',
    role: 'Automation QA',

    // Вложенный объект (2-й уровень)
    projectDetails: {
        title: 'Robot Project',
        totalTests: 45,
        passedTests: 41
    },

    // 1. ГЕТТЕР: Возвращает полное имя сотрудника
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },

    // 2. ГЕТТЕР: Вычисляет процент успешных тестов на проекте
    get successRate() {
        if (this.projectDetails.totalTests === 0) return '0%';
        const rate = (this.projectDetails.passedTests / this.projectDetails.totalTests) * 100;
        return `${rate.toFixed(1)}%`; // Округляем до 1 знака после запятой
    },

    // 3. СЕТТЕР: Позволяет обновить количество пройденных тестов с валидацией
    set updatePassedCount(count) {
        if (typeof count !== 'number' || count < 0) {
            console.error('Ошибка: Количество тестов должно быть положительным числом!');
            return;
        }
        if (count > this.projectDetails.totalTests) {
            console.error(`Ошибка: Успешных тестов (${count}) не может быть больше, чем всего тестов (${this.projectDetails.totalTests})!`);
            return;
        }
        // Если проверка пройдена — обновляем значение во вложенном объекте
        this.projectDetails.passedTests = count;
    },

    // 4. ФУНКЦИЯ (МЕТОД) ОБЪЕКТА: Выводит итоговое summary
    getProjectSummary() {
        return `Инженер: ${this.fullName} (${this.role})
Проект: "${this.projectDetails.title}"
Статистика: ${this.projectDetails.passedTests}/${this.projectDetails.totalTests} тестов успешно завершено.
Успешность (Success Rate): ${this.successRate}`;
    }
};

// --- Демонстрация работы объекта в консоли ---

console.log('--- 1. Чтение данных через геттеры ---');
console.log('Полное имя:', automationQA.fullName); // Вызовет геттер fullName
console.log('Текущий Success Rate:', automationQA.successRate); // Вызовет геттер successRate

console.log('\n--- 2. Проверка работы сеттера с валидацией ---');
automationQA.updatePassedCount = 50; // Ошибка! 50 > 45 всего тестов
automationQA.updatePassedCount = 43; // Успешно обновит данные

console.log('\n--- 3. Вызов функции объекта (Summary) ---');
console.log(automationQA.getProjectSummary());
