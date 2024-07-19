import {useNavigate} from 'react-router-dom';

const useAPICustom = ({query}) =>{
    const navigate = useNavigate()
    const Fetch = (query) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ text: query })
        };
        console.log(requestOptions)
        try{
            fetch('http://127.0.0.1:5000/api/query', requestOptions)
                .then(response => response.json())
                .then(data => {
                    console.log(data.result);
                    navigate(`/result/${data.result}`);
                });
        }catch (error){
            navigate('/')
            alert("something went wrong")
            console.error("Error:", error)
        }
    }
    return Fetch
}

export default useAPICustom