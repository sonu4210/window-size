import react,{useState,useEffect} from 'react'


const UseMessage = () =>{

    const [value,setValue] = useState(0);

    useEffect(()=>{

        if(value>=1){
            document.title='New message '+((`${value}`));
        }

    },[value]);

    console.log('render component');
    return(
        <>
        <h1>{value}</h1>
        <button className='btn' onClick={()=>setValue(value+1)} >
            click me</button>
            </>
    );

};
export default UseMessage