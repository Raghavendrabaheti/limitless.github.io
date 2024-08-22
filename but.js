function showSection(id) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('show');
    });
    document.getElementById(id).classList.add('show');
}

// Show the default section
showSection('bmi');

function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight-bmi').value);
    const height = parseFloat(document.getElementById('height-bmi').value) / 100; // Convert height to meters

    if (isNaN(weight) || isNaN(height) || height <= 0 || weight <= 0) {
        document.getElementById('result-bmi').innerHTML = 'Please enter valid values.';
        return;
    }

    const bmi = weight / (height * height);
    const bmiCategory = getBMICategory(bmi);

    document.getElementById('result-bmi').innerHTML = `Your BMI: ${bmi.toFixed(2)} (${bmiCategory})`;
}

function getBMICategory(bmi) {
    if (bmi < 18.5) {
        return 'Under Weight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        return 'Normal Weight';
    } else if (bmi >= 25 && bmi < 29.9) {
        return 'Over Weight';
    } else {
        return 'Obese';
    }
}

function calculateBodyFatPercentage() {
    const weight = parseFloat(document.getElementById('weight-fat').value);
    const waist = parseFloat(document.getElementById('waist').value);
    const gender = document.getElementById('gender').value;
    const age = parseFloat(document.getElementById('age').value);

    if (isNaN(weight) || isNaN(waist) || isNaN(age) || weight <= 0 || waist <= 0 || age <= 0) {
        document.getElementById('result-fat').innerHTML = 'Please enter valid values.';
        return;
    }

    let bodyFatPercentage;

    if (gender === 'male') {
        bodyFatPercentage = 0.1 * weight + 0.23 * age - 5.4;
    } else {
        bodyFatPercentage = 0.1 * weight + 0.23 * age - 5.4;
    }

    document.getElementById('result-fat').innerHTML = `${bodyFatPercentage.toFixed(2)}%`;
}

function calculateIdealWeight() {
    const height = parseFloat(document.getElementById('height-weight').value) / 100; // Convert height to meters
    const weight = parseFloat(document.getElementById('weight-weight').value);

    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        document.getElementById('result-weight').innerHTML = 'Please enter valid values.';
        return;
    }

    // Simple example of Ideal Weight calculation
    const idealWeight = 22 * (height * height);

    document.getElementById('result-weight').innerHTML = `Your Ideal Weight: ${idealWeight.toFixed(2)} kg`;
}

function addNutrition() {
    const meal = document.getElementById('meal').value;
    const caloriesPerGram = parseFloat(document.getElementById('caloriesPerGram').value);
    const amount = parseFloat(document.getElementById('amount').value);

    if (isNaN(caloriesPerGram) || isNaN(amount) || caloriesPerGram <= 0 || amount <= 0) {
        alert('Please enter valid values for calories and amount.');
        return;
    }

    const totalCalories = caloriesPerGram * amount;
    const mealList = document.getElementById('mealList');
    const newMeal = document.createElement('li');
    newMeal.textContent = `${meal}: ${totalCalories.toFixed(2)} calories`;
    mealList.appendChild(newMeal);

    const totalCaloriesElement = document.getElementById('totalCalories');
    let currentTotal = parseFloat(totalCaloriesElement.textContent.replace('Total Calories Consumed: ', ''));
    currentTotal += totalCalories;
    totalCaloriesElement.textContent = `Total Calories Consumed: ${currentTotal.toFixed(2)}`;
}

function clearAll() {
    // Clear all inputs and results
    document.querySelectorAll('input[type="number"], input[type="text"]').forEach(input => {
        input.value = '';
    });
    document.getElementById('result-bmi').innerHTML = '';
    document.getElementById('result-fat').innerHTML = '';
    document.getElementById('result-weight').innerHTML = '';
    document.getElementById('mealList').innerHTML = '';
    document.getElementById('totalCalories').textContent = 'Total Calories Consumed: 0';
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        clearAll();
    }
});