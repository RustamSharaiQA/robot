function processData(data) {
    console.log('--- Друга функція отримала дані (через async/await)! ---');
    console.log(`Кількість отриманих завдань: ${data.length}`);
    console.log('Перше завдання з масиву:', data[0]);
}

export async function fetchTodosAsync() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');

        if (!response.ok) {
            throw new Error(`Помилка сервера! Статус: ${response.status}`);
        }

        const jsonData = await response.json();

        console.log('JSON успішно отримано та розпарсено через async/await.');

        processData(jsonData);
    } catch (error) {
        console.error('Сталася помилка під час запиту:', error.message);
    }
}
fetchTodosAsync();
