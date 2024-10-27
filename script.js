document.getElementById('caloriesForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const petType = document.getElementById('petType').value;
    const weight = parseFloat(document.getElementById('weight').value);
    const age = parseFloat(document.getElementById('age').value);
    const activityLevel = document.getElementById('activityLevel').value;
   const neutered = petType === 'cat' ? document.getElementById('neutered').value : null;

   if (!petType || !weight || !activityLevel) {
       displayResult("Please fill in all fields.");
       return; 
   }

   let calories;
   if (petType === 'cat') {
       calories = Math.round(weight * (neutered === 'yes' ? 50 : 60)); 
       if (activityLevel === 'low') {
           calories *= 1.2; 
       } else if (activityLevel === 'moderate') {
           calories *= 1.5; 
       } else if (activityLevel === 'high') {
           calories *= 1.8; 
       }

       displayResult(`A ${weight} kg ${neutered === 'yes' ? 'neutered' : 'non-neutered'} CAT needs approximately ${Math.round(calories)} calories per day.`);
       
   } else if (petType === 'dog') {
       calories = Math.round(weight * 30);
       if (activityLevel === 'low') {
           calories *= 1.2; 
       } else if (activityLevel === 'moderate') {
           calories *= 1.5; 
       } else if (activityLevel === 'high') {
           calories *= 1.8; 
       }
       
       displayResult(`A ${weight} kg DOG need ${Math.round(calories)} calories per day.`);
       
   } else {
       displayResult("Please select a valid pet type.");
   }
});
function displayResult(message) {
   const resultDiv = document.getElementById('result');
   resultDiv.innerText = message;
   resultDiv.style.opacity = '0';
   setTimeout(() => {
       resultDiv.style.opacity = '1';
   }, 100);
}
document.getElementById('petType').addEventListener('change', function() {
   const neuteredGroup = document.getElementById('neuteredGroup');
   neuteredGroup.style.display = this.value === 'cat' ? 'block' : 'none';
});