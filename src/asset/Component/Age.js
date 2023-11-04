
export const Age =(props)=><div>this person is {props.age} years old</div>

export const Weight= (props)=><div>the Weight of the object on earth is {props.weight} N</div>
export const Status =(props)=>{
    let status = props.status?'old enough to dive':' else too young to drive'
    return(
        <div>
            {status}
        </div>
    )
}
export const Skill = (props)=>{


    return (
        <>
        <ul>
            <li>{props.skill[0]}</li>
            <li>{props.skill[2]}</li>
            <li>{props.skill[3]}</li>
        </ul>
        <ol>{props.skill.map((index) => <li key={index}>{index}</li>)}</ol>
        </>
    )
}
  export const Button = (props)=><button style={props.stylees}  onClick={props.onClick}>{props.text}</button>