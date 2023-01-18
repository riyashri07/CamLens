import {Routes, Route} from "react-router-dom";

const Allroutes=()=>{
    return(
        <div>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                
            </Routes>
        </div>
    )
}

export default Allroutes;