const initial={
    list:[],
    toggle:true,
    current:""

}

 function Todoarray(state=initial,action){
      switch(action.type){
        case "load": return {
            ...state,list:action.payload
        }
        case "TOG"  : return{
          ...state,toggle:!state.toggle
        } 
        
        case "input":return{
          ...state,current:action.payload
        }                
        default :return state
      }
}
export default Todoarray