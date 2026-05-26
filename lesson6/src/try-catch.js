export async function fetchWithFallback() {
    const fakeUrl = 'https://jsonplaceholder.typicode.com/this-page-does-not-exist-12345';
    const realUrl = 'https://jsonplaceholder.typicode.com/todos/1';

    console.log('1. Отправляем запрос на НЕВЕРНЫЙ адрес...');

    try {
        const response = await fetch(fakeUrl);

        if (!response.ok) {
            throw new Error(`Первый сервер ответил ошибкой: ${response.status}`);
        }

        const data = await response.json();
        console.log('Успех на первом сервере (этого не должно произойти):', data);
    } catch (firstError) {
        console.warn(`Первый запрос не удался (${firstError.message}).`);
        console.log('2. Перенаправляем запрос на РЕЗЕРВНЫЙ адрес...');

        try {
            const response = await fetch(realUrl);

            if (!response.ok) {
                throw new Error(`Второй сервер тоже подвел. Status: ${response.status}`, { cause: firstError });
            }

            const data = await response.json();
            console.log('Данные успешно получены с резервного сервера:', data);
        } catch (secondError) {
            console.error('КРИТИЧЕСКАЯ ОШИБКА: Оба ресурса недоступны!');
            console.error(`Причина финального падения: ${secondError.message}`);
        }
    }
}

// Запускаем функцию
fetchWithFallback();
