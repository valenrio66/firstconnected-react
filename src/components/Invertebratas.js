import axios from "axios";

axios.get('https://test-gogin.herokuapp.com/invertebratas')
    .then(Response => {
    // Handle success
        console.log(Response.data);
})
    .catch(error => {
    // Handle error
        console.log(error);
})