function processData(data) {
    console.log('--- Друга функція отримала дані! ---');
    console.log(`Кількість отриманих завдань: ${data.length}`);

    console.log('Перше завдання з масиву:', data[0]);
}

export function fetchTodos() {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Помилка сервера! Статус: ${response.status}`);
            }
            return response.json();
        })
        .then((jsonData) => {
            console.log('JSON успішно отримано та розпарсено.');
            processData(jsonData);
        })
        .catch((error) => {
            console.error('Сталася помилка під час запиту:', error.message);
        });
}

fetchTodos();
