import React from 'react'
import { ChangeAge1, ChangeAge2 } from '../MultiReduxFolder/MCAction'
import { useDispatch,useSelector } from 'react-redux'

const Mage = () => {

  const Myage = useSelector(state =>state.Myages.Myage);
  const dispatch = useDispatch();
 
 return (<>
    <div>
    <button onClick={()=>dispatch(ChangeAge1())}>Increase the age  </button>
    Age - {Myage} years
    
    <button onClick={()=>dispatch(ChangeAge2())}> Decrease the  age </button>
    </div>
    </>)
}
export default Mage