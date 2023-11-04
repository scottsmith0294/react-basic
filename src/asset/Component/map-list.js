 export const Numbers=()=>{
 const numbers = [1,2,3,4,5,6,7]
 const list = numbers.map((number)=> <h1 key={number}>{number}</h1>)
     return (
         <>
           <h1>numbers list</h1>
           <div>{[1,2,3,4,5,6,7]}</div>
           {numbers.map((number)=> <h1 key={number}>{number}</h1>)}
            {list}
         </>
     )

}

export const Skill =({skill:[tech,level]})=><li>{tech}   {level}</li>

export const Skills = ({skills})=>{
      const skillList = skills.map((index)=><Skill key={index} skill={index}/>)
    return(
        <>
        <ul>{skillList}</ul>
        </>
    )
}
  const Country =({country: {name, city}})=>{
    
    return(
        <>
        <h4>{name} {city}</h4>
        </>
    )
}
export const Countries =({countries})=>{
const countryList = countries.map((country)=><Country key={country} country={country}/>)
    return(
        <>
        <div>
        {countryList}
        </div>
        </>
    )
}
