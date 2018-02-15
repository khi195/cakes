const axios = require('axios');

const URL = "http://ec2-52-209-201-89.eu-west-1.compute.amazonaws.com:5000/api/cakes";


async function get(id){
    let route = URL;
    if(id) route = `${URL}/${id}`;
    const response =  await axios(route);
    return response.data
}

const post = (body) => {
    let route = URL;
    axios.post(route, body)
        .then(response => console.log(response.data))
        .catch(err=>console.log(err))
}

export {get, post}