const request = require('request');
const args = (process.argv.slice(2));

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${args}`, function(error, response, body) {

    if (error) {
      console.error("ERROR IS THIS: ", error);
      
      console.log(null);

    } else {
      const data = JSON.parse(body);
      if (data.length === 0) {
        console.log("breed not found");
      } else {
        console.log(data);
        console.log(typeof data);
      }
    }

  });

};


module.exports = { fetchBreedDescription };