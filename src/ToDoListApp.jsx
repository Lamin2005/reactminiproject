import { act, useReducer, useState } from "react";
import "./ToDoListApp.css";
import { type } from "@testing-library/user-event/dist/type";


let App = () =>{

    let reducer = (state,action) =>{
        if(action.type === "Add"){
            let item = [...state.Items,action.payload];
            return {...state,Items:item};
        }else if(action.type === "Delete"){
            let item = state.Items.filter((list)=> list.id !== action.payload);
            return {...state,Items:item};
            
        }else if(action.type === "Edit"){
            setEdit(null);
            let updateItem = state.Items.map((list)=>{
                if(list.id === action.payload.id){
                    return {...list,name:action.payload.name};
                }

                return list;
            })
            
            return {...state,Items:updateItem};
        }
        else{
            return state;
        }

    };

   
    let [input,setInput] = useState("");
    let [editId,setEdit] = useState(null);
    let [state,dispatch] = useReducer(reducer,{ Items:[]});
  

    let submitHandlar = (e) => {
        e.preventDefault();

        if(!input) return;

        if(editId){
            dispatch({type:"Edit",payload:{id:editId,name:input}}); 
        }
        else{
            let newItem = {id:Math.random().toString() , name:input};
            dispatch({type:"Add",payload:newItem});
          
        }
        setInput("");
    };
   
    
    return(
        <div className="main">
            <h1>TO DO LIST APP</h1>
            <form onSubmit={submitHandlar}>
                <input type="text" value={input} onChange={(e)=> setInput(e.target.value)}/>
                <button className="mainbutton">
                    {editId ? "Update" : "List"}
                </button>
            </form>
            <div className="result">
                {state.Items.map((list)=>{
                    return(
                    <div className="li" key={list.id}>
                        <span>{list.name}</span>

                            <div className="button">
                                <button className="edit" onClick={()=> {
                                     setEdit(list.id);
                                     setInput(list.name);
                                }
                               

                            }>Edit</button>
                                <button className="delete" onClick={()=> dispatch({type:"Delete",payload:list.id})}>Delete</button>
                            </div>
                       
                    </div>
                    );
                })}
               
              
               
            </div>
        </div>
    );
};

export default App;