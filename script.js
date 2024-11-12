// Генерация снежинок
function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.className = 'snowflake';
    snowflake.textContent = '❄'; // Символ снежинки
    snowflake.style.left = Math.random() * 100 + 'vw'; // Случайное положение по горизонтали
    snowflake.style.animationDuration = Math.random() * 3 + 2 + 's'; // Случайная скорость падения
    snowflake.style.fontSize = Math.random() * 1 + 0.5 + 'em'; // Случайный размер

    document.body.appendChild(snowflake);

    // Удаление снежинки после падения
    snowflake.addEventListener('animationend', () => {
        snowflake.remove();
    });
}

// Создание снежинок каждые 300 мс
setInterval(createSnowflake, 300);
