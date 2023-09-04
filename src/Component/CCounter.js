import {connect} from 'react-redux'
import { ActiononCounter1 } from '../ReduxFolder/CAction'

const CCounter = (props) => {
  return (<>
    <div> Age in No of months -{props.Counter}</div>
    <button onClick={props.ActiononCounter1}>Increment By 1</button>
    </>)
}
const mapstateToProps = state => { 
  return {
  Counter:state.Counters.Counter
}

}
const mapstatetodispatch= dispatch =>{
 return{
  ActiononCounter1:()=>dispatch(ActiononCounter1())
 }  
 }

export default connect(mapstateToProps,mapstatetodispatch)(CCounter)
// here we are connecting counter with to function map state and map dispatch