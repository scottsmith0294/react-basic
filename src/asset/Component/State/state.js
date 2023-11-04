import React,{useState} from "react";
export const Counter =()=>{
    let [count,setCount]=useState(0)
    const decrement =()=>{
        return setCount(count - 5)
    }
    const increment =()=>{
        return setCount(count + 5)
    }
    return(
        <div>
            <h2>U CLICKED {count >=0 ? count : setCount(0)  } times</h2>
            <div>
                <button onClick={decrement}>decrement</button>
               
                <button onClick={increment}>increment</button>


            </div>
        </div>
    )
}
export const ToogleVisibility =()=>{
    const [isVisible, setIsVisible] =useState(false)
    const handleClick= ()=>{
        setIsVisible(!isVisible)
    }
    return (
        <div>
            <p>find  out to more know about our condiction</p>
            <button onClick={handleClick}>show more</button>
            {isVisible && <p>Lorem, ipsum dolor sit amet consectetur adipisicing 
                elit. Porro tempore voluptatibus quaerat omnis quibusdam incidunt 
                </p>}
        </div>
    )
}

export const FilterList =()=>{
    const [filter, setFilt] = useState('')
    const [items, setItems] = useState (['mango','cashew','apple','orange','banana'])
    const hangleFilter =(event)=>{
       return setFilt( event.target.value)
    }

    const filtedItems = items.filter((item) => item.includes(filter)) 
    return(
        <div>
            <p>
 <label>filter item</label>
 <input type="text" name="" id="" value={filter} onChange={hangleFilter} />
 </p>
        <ul>
            {filtedItems.map((item)=><li key={item}>{item}</li>)}
            </ul>
        </div>
    )
}
 