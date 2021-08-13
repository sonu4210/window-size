import react,{ useState,useEffect } from 'react';

const UseEffectexample = ()=>{
    const [size,setSize]= useState(window.innerWidth);
    const checksize =()=>{
        setSize(window.innerWidth);
    };

    useEffect(()=>{
    console.log('use effect');
    window.addEventListener('resize',checksize);
    return ()=>{
console.log('clean up');
window.removeEventListener('resize',checksize);
    };
    },[]);
    console.log('render');
    return(
        <>
        <h1>windowss</h1>
        <h2>{size}</h2>
        </>
    );
};
export default UseEffectexample
