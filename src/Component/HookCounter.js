import React from 'react'
import { ActiononCounter1 } from '../ReduxFolder/CAction';
import { useDispatch, useSelector } from 'react-redux'

const HookCounter = () => {
    const Counter = useSelector(state=>state.Counters.Counter);
    const dispatch = useDispatch()
 return (<>
    <div> I am  {Counter} months old</div>

    <button onClick={()=>dispatch(ActiononCounter1())}> hook Increment </button>
    </>)
}

export default HookCounter