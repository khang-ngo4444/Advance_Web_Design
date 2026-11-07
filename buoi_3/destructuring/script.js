async function fetchFoodData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const foodData = await response.json();
        const menuContainer = document.getElementById('food-menu');

        foodData.forEach(({ id, name, email }) => {
            const card = document.createElement('div');
            card.className = 'card';

            card.innerHTML = `
                <h2>${name}</h2>
                <p><strong>email:</strong> $${email}</p>
            `;

            menuContainer.appendChild(card);
        });

    } catch (error) {
        console.error('Error fetching food data:', error);
    }
}

document.addEventListener('DOMContentLoaded', fetchFoodData);
