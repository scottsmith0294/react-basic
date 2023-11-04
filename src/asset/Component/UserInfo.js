import React from "react";

const UserInfo =(props)=>{
    console.log(props)
    return(
        // passing props as a string values
        <>
        <h3>{props.fullName}</h3>
    <h4>{props.email}</h4>
    <h4>{props.age}</h4>
    <h4>{props.adress}</h4>

        </>
    )
}

export default UserInfo;
// export const Profile = (props)=>{
//     const mydata = props.mydata
//     const {firstName,lastName,adress,skils,country} = mydata
//     return(
//         <>
//         <h3>{firstName}</h3>
//         <h3>{lastName}</h3>
//         <h3>{adress}</h3>
//         <h3>{skils}</h3>
//         <h3>{country}</h3>
//         </>
//     )
// }
// export const Profile = (props)=>{

//     return(
//         <>
//         <h3>{props.mydata.firstName}</h3>
//         <h3>{props.mydata.lastName}</h3>
//         <h3>{props.mydata.adress}</h3>
//         <h3>{props.mydata.skils}</h3>
//         <h3>{props.mydata.country}</h3>
//         </>
//     )
// }
export const Profile = ({mydata:{firstName,lastName,adress,skils,country,email:{mail}}})=>{

    return(
        <>
        <h3>{firstName}</h3>
        <h3>{lastName}</h3>
        <h3>{adress}</h3>
        <h3>{skils}</h3>
        <h3>{country}</h3>
        <h3>{mail}</h3>
        </>
    )
}