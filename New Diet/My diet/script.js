// Initialize an array to hold food entries
let foodEntries = [];

// Function to add food entry
function addFoodEntry() {
    // Get input values
    const mealType = document.getElementById("meal-type").value;
    const mealName = document.getElementById("meal-name").value.trim();
    const servingSize = document.getElementById("serving-size").value.trim();

    // Check if the input fields are not empty
    if (!mealName || !servingSize) {
        alert("Please fill in all fields.");
        return;
    }

    // Create a food entry object
    const foodEntry = {
        type: mealType,
        name: mealName,
        size: servingSize,
        calories: calculateCalories(mealName) // Call function to estimate calories
    };

    // Add the food entry to the array
    foodEntries.push(foodEntry);

    // Update the food log
    updateFoodLog();

    // Update the nutrition summary chart
    updateNutritionSummary(foodEntries);
}

// Function to calculate calories based on meal name (for simplicity, using a static map)
function calculateCalories(mealName) {
    const calorieMap = {
        "Sheera": 635,
        "Palak Paneer": 300,
        "Butter Chicken": 400,
        "Chana Masala": 250,
        "Vegetable Biryani": 350,
        "Aloo Gobi": 200,
        "Vegan Tikka Masala": 320,
        "Chicken Tikka Masala": 350,
        "Prawn Curry": 400,
        "Masoor Dal": 230,
        "Lemon Rice": 200
    };
    
    return calorieMap[mealName] || 100; // Default calories if meal not found
}

// Function to update food log UI
function updateFoodLog() {
    const foodLog = document.getElementById("food-log");
    foodLog.innerHTML = ''; // Clear previous entries

    foodEntries.forEach((entry) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${entry.type.charAt(0).toUpperCase() + entry.type.slice(1)}: ${entry.name} (${entry.size}) - ${entry.calories} calories`;
        foodLog.appendChild(listItem);
    });
}
