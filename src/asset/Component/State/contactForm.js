import { useState } from "react"

export const ContactForm =()=>{
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const handleNameChange =(event)=>{
        
        return setName(event.target.value) 
    }
    const handleEmailChange =(event)=>{
        
        return setEmail(event.target.value) 
    }
    const handleSubmit = (event)=>{
        event.preventDefault()
        alert('form submited sucessfylly')
        console.log(`submitting ${name} and ${email}`)
        setEmail("")
        setName('')

    }
  return(
    <div>
        <form onSubmit={handleSubmit} method="post">
            <p>
            <label htmlFor="name">name: </label>
            <input type='text' name="name" id="name" value={name} onChange={handleNameChange}/>
            </p>
            <p>
            <label htmlFor="email">Email: </label>
            <input type='email' name="Email"  id="email" value={email} onChange={handleEmailChange}/>
            </p>
            <button type="submit" >subbmit</button>
        </form>
    </div>
  )
}
// export const Header = ()=>{
//  const [button, setButton] =useState('Menu')
//     const [nav, setNav] = useState(['home', 'contact', 'blog', 'project'])

//     const setButtonToogle = ()=>{
//         let setButton = document.querySelector(setButton())
//         document.querySelector(setButton()).onclick =()=>{
//             setButton().classList.toogle(setNav())
//         }
//     }
//     return (
//         <div>
//             <header>
//                 <button onClick={setButtonToogle}>{button}</button>
//                 <nav >{nav.map((setNav)=><li key={setNav}>{setNav}</li>)}</nav>
//                 </header>
//         </div>
//     )
// }
// // const buttonStyle ={
//     header:{
//        height: '400px',
//        width: '400px',
//        backgroundColor: '#333',
    //    position: 'relative' 
    // },
    // nav:{
        // color:'white',
        // textTransform: 'capitalize',
        // fontWeight:'bold',
        // boderTop: '1px solid gray',
        // position:'absolute',
        // left:'110%'

    //     }
    // }



    

