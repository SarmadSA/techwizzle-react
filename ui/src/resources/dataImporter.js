import axios from 'axios';

const testing = () =>{

    axios.get("http://localhost/techwizzle-react/backend/dbConnect.php")
        .then(response => {
            console.log(response.data);
            console.log(response.data[0].title);
        })
        .catch(error =>{
            //console.log(error);
            //this.setState({error: true});
        });
};

export default testing;