const request = require('request');

// const apiUrl = 'https://api.thecatapi.com/v1/breeds/search?q=Siberian';


const fetchBreedDescription = function(breedName, callback) {
  const apiUrl = `https://api.thecatapi.com/v1/breeds/search?q=${encodeURIComponent(breedName)}`;

  request(apiUrl, (error, response, body) => {
    if (error) {
      callback(error, null);
    } else {
      const data = JSON.parse(body);
      if (data.length > 0) {
        const firstBreed = data[0];
        callback(null, firstBreed.description);
      } else {
        callback("Breed not found", null);
      }
    }
  });
};

module.exports = { fetchBreedDescription }




/*
//original code
// Import the 'request' library for making HTTP requests
const request = require('request');

// const apiUrl = 'https://api.thecatapi.com/v1/breeds/search?q=Siberian';

// Get the breed name from the command-line arguments
const breedName = process.argv[2];

// Check if a breed name is provided as a command-line argument
if (!breedName) {
  console.error('Please provide a breed name as a command line argurment');
} else {
  const apiUrl = `https://api.thecatapi.com/v1/breeds/search?q=${encodeURIComponent(breedName)}`;

  // Make a GET request to the API using the constructed URL
  request(apiUrl, (error, response, body) => {
    if (error) {
      console.error("Error", error);
    } else {
      //log raw response body
      console.log('Body content:', body);

      //Convert JSON string to an object
      const data = JSON.parse(body);
      // log parsed response data
      console.log("Response:", data);
      // log type of data, should be object
      console.log("Type of data:", typeof data);

      // Check if the data array has at least one entry
      if (data.length > 0) {
        // Access the first entry in the data array
        const firstBreed = data[0];
        console.log("Description:", firstBreed.description);
      } else {
        // Log a message if the requested breed is not found

        console.log('Breed not found');
      }
    }
  });
}

// use node breedFetcher.js Chartreux as an example

*/