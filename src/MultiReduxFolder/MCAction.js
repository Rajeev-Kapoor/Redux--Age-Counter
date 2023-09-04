
import { type } from "@testing-library/user-event/dist/type";
import { Iage } from "./MCtypes";
import { Dage } from "./MDtypes";

export const ChangeAge1 = () => {
  return { 
   type: Iage,  
  }
}
export const ChangeAge2 = () => {
  return { 
   type: Dage,  
  }
}

// varriable to be imported from type file
//and assigned in a function
