import { useState,useEffect } from "react";
import "./App.css";

let App = ()=>{

    let [data,setdata] = useState([]);
    let [isloading,setloading] = useState(true);
    let url = 'https://fakestoreapi.com/products';

    let getdata = async () =>{
        let response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        let info = await response.json();
        setdata(info);
        setloading(false);
    }

    useEffect(()=>{
        try {
            getdata();
        } catch (error) {
            console.error('Fetch error:', error)
        }
       
    },[]);


    if(isloading){
        return(
            <div className="main" style={{
                height:"80vh",
                display: "flex",
                justifyContent: "center",
                alignItems:" center"
            }}>

<div id="ghost">
  <div id="red">
    <div id="pupil"></div>
    <div id="pupil1"></div>
    <div id="eye"></div>
    <div id="eye1"></div>
    <div id="top0"></div>
    <div id="top1"></div>
    <div id="top2"></div>
    <div id="top3"></div>
    <div id="top4"></div>
    <div id="st0"></div>
    <div id="st1"></div>
    <div id="st2"></div>
    <div id="st3"></div>
    <div id="st4"></div>
    <div id="st5"></div>
    <div id="an1"></div>
    <div id="an2"></div>
    <div id="an3"></div>
    <div id="an4"></div>
    <div id="an5"></div>
    <div id="an6"></div>
    <div id="an7"></div>
    <div id="an8"></div>
    <div id="an9"></div>
    <div id="an10"></div>
    <div id="an11"></div>
    <div id="an12"></div>
    <div id="an13"></div>
    <div id="an14"></div>
    <div id="an15"></div>
    <div id="an16"></div>
    <div id="an17"></div>
    <div id="an18"></div>
  </div>
  <div id="shadow"></div>
</div>

            </div>
        );
    }
    console.log(data);
    return(
        <div className="main2">
            <h1 style={{textAlign:"center",color:"white"}}>Product Lists</h1>
            <ul>
               {data.map((product)=>{
                  return(
                    <li key={product.id}>
                        <img src={product.image} alt="" />
                        <p>{product.title}</p>
                    </li>
                  );
               })}
            </ul>
        </div>
    );
}

export default App;