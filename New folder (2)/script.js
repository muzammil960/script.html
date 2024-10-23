
document.getElementById('calculate-btn').addEventListener('click', function() {
    const weightKg = parseFloat(document.getElementById('weight-kg').value);
    const weightLbs = parseFloat(document.getElementById('weight-lbs').value);
    const age = parseFloat(document.getElementById('age').value);
    const activityLevel = parseFloat(document.getElementById('activity-level').value);

    const resultElement = document.getElementById('result');
    
    // Validate input
    if ((isNaN(weightKg) && isNaN(weightLbs)) || isNaN(age)) {
        resultElement.textContent = "Please enter valid weight (kg or lbs) and age.";
        resultElement.style.color = 'red';
        return;
    }

    // Convert weight if only lbs is provided
    const weight = weightKg ? weightKg : weightLbs * 0.453592; // Convert lbs to kg

    // Calculate daily calories based on weight
    const calories = (weight * 30) + 70; // Basic caloric needs formula

    // Adjust for activity level
    const dailyCalories = (calories * activityLevel).toFixed(2);
    resultElement.textContent = `Your cat needs approximately ${dailyCalories} calories per day.`;
    resultElement.style.color = '#333';
});
