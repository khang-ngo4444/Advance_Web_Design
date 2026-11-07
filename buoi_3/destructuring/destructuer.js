async function fetchUserData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const userData = await response.json();

    const { id, name, email, address: { street, city } } = userData;

    console.log(`ID: ${id}`);
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Street: ${street}`);
    console.log(`City: ${city}`);

  } catch (error) {
    console.error('Error fetching user data:', error);
  }
}

fetchUserData();

async function fetchFoodData() {
  try {
    const response = await fetch('https://api.example.com/foods');

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const foodData = await response.json();

    foodData.forEach(({ id, name, price, description, ingredients }) => {
      console.log(`ID: ${id}`);
      console.log(`Name: ${name}`);
      console.log(`Price: $${price}`);
      console.log(`Description: ${description}`);
      console.log(`Ingredients: ${ingredients.join(', ')}`);
      console.log('----------------------------');
    });

  } catch (error) {
    console.error('Error fetching food data:', error);
  }
}

fetchFoodData();
