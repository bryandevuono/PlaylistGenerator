import {useNavigate} from 'react-router-dom';

const useAPIGenre = ({genre}) =>{
    const navigate = useNavigate()
    const Fetch = (genre) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ text: genre })
        };
        console.log(requestOptions)
        try{
            fetch('http://127.0.0.1:5000/api/genre', requestOptions)
                .then(response => response.json())
                .then(data => {
                    console.log(data.result);
                    let link = data.result;
                    console.log(link);
                    navigate("/result", {state: {link}});
                });
        }catch (error){
            navigate('/')
            alert("something went wrong")
            console.error("Error:", error)
        }
    }
    return Fetch
}

export default useAPIGenre