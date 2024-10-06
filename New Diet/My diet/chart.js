let nutritionChart;

// Function to update nutrition summary chart
function updateNutritionSummary(foodEntries) {
    const ctx = document.getElementById('nutritionChart').getContext('2d');
    
    // Calculate total calories per meal type
    const calorieSummary = {
        breakfast: 0,
        lunch: 0,
        dinner: 0,
        snack: 0
    };

    foodEntries.forEach(entry => {
        calorieSummary[entry.type] += entry.calories;
    });

    const chartData = {
        labels: ['Breakfast', 'Lunch', 'Dinner', 'Snacks'],
        datasets: [{
            label: 'Calories',
            data: [
                calorieSummary.breakfast,
                calorieSummary.lunch,
                calorieSummary.dinner,
                calorieSummary.snack
            ],
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0']
        }]
    };

    // Create or update the chart
    if (nutritionChart) {
        nutritionChart.data.datasets[0].data = chartData.datasets[0].data;
        nutritionChart.update();
    } else {
        nutritionChart = new Chart(ctx, {
            type: 'pie',
            data: chartData,
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    title: {
                        display: true,
                        text: 'Nutrition Summary'
                    }
                }
            }
        });
    }
}
