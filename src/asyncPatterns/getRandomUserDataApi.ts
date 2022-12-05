import axios from 'axios';
const url: string = 'https://randomuser.me/api/';

function GetDataFromApi(url : string) : any{

    // return axios.get(url).then(({data}) => {
    //     console.log(data);
    //     return data.results[0];
    // })
    // .catch(err => {
    //     console.log(err);
    //     return null;
    // });


    axios.get(url).then(response => {
        const userData = response;
        console.log(userData);});

}

const getApiRunner= () => {
    GetDataFromApi(url);
}

export default getApiRunner;