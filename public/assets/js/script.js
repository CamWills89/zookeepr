const $animalForm = document.querySelector('#animal-form');

const handleAnimalFormSubmit = event => {
  event.preventDefault();

  // get animal data and organize it
  const name = $animalForm.querySelector('[name="animal-name"]').value;
  const species = $animalForm.querySelector('[name="species"]').value;
  const dietRadioHTML = $animalForm.querySelectorAll('[name="diet"]');
  let diet;

  for (let i = 0; i < dietRadioHTML.length; i += 1) {
    if (dietRadioHTML[i].checked) {
      diet = dietRadioHTML[i].value;
    }
  }

  if (diet === undefined) {
    diet = '';
  }

  const selectedTraits = $animalForm.querySelector('[name="personality"').selectedOptions;
  const personalityTraits = [];
  for (let i = 0; i < selectedTraits.length; i += 1) {
    personalityTraits.push(selectedTraits[i].value);
  }
  const animalObject = { name, species, diet, personalityTraits };

  fetch('/api/animals', {
    //specify the method, so it doesnt do the default GET request
    //this allows the request to make it to the POST endpoint we created
    method: 'POST',
    //this sets the data type to JSON data.
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    //this adds stringified json data for animalObject to the body property of the request
    //without these, we would not receive req.body on the server
    body: JSON.stringify(animalObject)
  })
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      alert('Error: ' + response.statusText);
    })
    .then(postResponse => {
      console.log(postResponse);
      alert('Thank you for adding an animal!');
    });

};

$animalForm.addEventListener('submit', handleAnimalFormSubmit);
