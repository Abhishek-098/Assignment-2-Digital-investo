import React, { useState } from 'react';
import './app.css';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

const App = ()=>{
    const [val,changeVal]=useState(0);
    const decVal=()=>{
        if (val === 0){
            console.log("Already ZERO")
        }
        else{
            changeVal(val-1);
            if(val<5){
            }
            
        }
    }
    const incVal =()=>{
        changeVal(val+1);
    }
    const MainVal =()=>{
        if(val<5){
            return(<h1 style={{color:"red"}}>{val}</h1>);
        }
        if(val>=5 && val<100){
            return(<h1 style={{color:"white"}}>{val}</h1>);
        }
        else{
            return(<h1 style={{color:"green"}}>{val}</h1>);
        }

    }

    return<>
            <div className="main_box">
                <div className="center_box">
                        <RemoveIcon className="buttons" onClick={decVal}/>
                </div>
                <div className="center_box disp_num">
                        <MainVal/>
                </div>
                <div className="center_box">
                        <AddIcon className="buttons" onClick={incVal}/>
                </div>
            </div>
          </>
}

export default App;