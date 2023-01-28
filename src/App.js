import logo from './logo.svg';
import './App.css';
import { useSelector,useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { ADD,TOG,TOGRT,INPUT } from './actions/action';
function App() {
  const[tod,settod]=useState(true)
  const[id,setid]=useState(null)
  const list=useSelector((state)=>{
    return state.Todoarray
  })
  
  console.log(list)
  useEffect(() => {
    fetch("https://todolistapp-sh2f.onrender.com/get").then((res)=>{
      return res.json()
    }).then((res)=>{
      console.log(res)
     
      dispatch(ADD(res.data))
    })
  }, [])
  

  const dispatch=useDispatch()
  const handlerpost=()=>{
   
    console.log(88)
    if(list.toggle==true){
      if(list.current===""){
        return
      }
  
  fetch("https://todolistapp-sh2f.onrender.com/post",{
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
       body: JSON.stringify({todo:list.current}) // body data type must match "Content-Type" header
      }).then((res)=>{
        return res.json()
      }).then((res)=>{
        console.log(res.data)
     loading()
     dispatch(INPUT(""))
        // dispatch(ADD())
      })
    }else{
      fetch("https://todolistapp-sh2f.onrender.com/put",{
        method: 'PUT', // *GET, POST, PUT, DELETE, etc.
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
       body: JSON.stringify({id:id,todo:list.current}) // body data type must match "Content-Type" header
      }).then((res)=>{
        return res.json()
      }).then((res)=>{
        console.log(res.data)
     loading()
     dispatch(INPUT(""))
     dispatch(TOG())
        // dispatch(ADD())
      })
    }
    
  }
  function loading (){
    fetch("https://todolistapp-sh2f.onrender.com/get").then((res)=>{
      return res.json()
    }).then((res)=>{
      console.log(res)
     
      dispatch(ADD(res.data))
    })
       
      }

      function edit(idd,todo){
        dispatch(INPUT(todo))
           dispatch(TOG())
          //  settodo(todo)
          setid(idd)
      }
  return (
    <div className={tod?"App z":"App m"} >
      {tod&& <button onClick={()=>{
        settod((p)=>!p)
      }}>GRAY</button>}
      {!tod&& <button onClick={()=>{
  settod((p)=>!p)
}}>RED</button>}
    <h1 >CREATE TO-DO BELOW</h1>
    <div className='in'>
 <input type="text" placeholder='ADD todo...' value={list.current} onChange={(e)=>{
  dispatch(INPUT(e.target.value))
  // settodo(e.target.value)
 }}></input>{list.toggle?<i class="fa-solid fa-plus" onClick={()=>{
  handlerpost()
 }
 

 }></i>:<i class="fa-solid fa-floppy-disk" onClick={()=>{
  handlerpost()
 }}></i> }
    </div>
    {/* {to&&<button onClick={setto((p)=>!p)}>add</button>}
    {!to&&<button onClick={console.log("hhhhh",to)}>on</button>} */}
    {list.list && list.list.map((l,i)=>{
      return <div key={i} className="jj">
          <span >{l.todo}</span><i class="fa-solid fa-pen-to-square" onClick={()=>{edit(l._id,l.todo)}}></i> <i class="fa-solid fa-trash-can" onClick={()=>{
            fetch("https://todolistapp-sh2f.onrender.com/delete",{
              method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
              headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
              },
             body: JSON.stringify({id:l._id}) // body data type must match "Content-Type" header
            }).then((res)=>{
              return res.json()
            }).then((res)=>{
              console.log(res.data)
             loading()
              // dispatch(ADD())
            })
          }}></i>
      </div>
    })}
    </div>
  );
}

export default App;
