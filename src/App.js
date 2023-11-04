import './App.css';
import React from 'react';
// import pics from './asset/image/kelly.jpg'
// import myVideos from './asset/video/vid.mp4'
import videoFile from './asset/video/vid.mp4'
import UserInfo,{Profile} from './asset/Component/UserInfo';
import { Weight, Age, Status,Skill,Button } from './asset/Component/Age';
import  {Numbers, Skills,Countries} from './asset/Component/map-list'
import {Counter,ToogleVisibility,FilterList}from './asset/Component/State/state'
import {ContactForm} from './asset/Component/State/contactForm'
import MobileMenu from'./asset/Component/State/menu'

const App = ()=>{
  const jsxEl = <h1 style={styles.tittle}>welcome</h1>
  const data = <small>10 - 3-2023</small>
  const tittle = <h2>getting started with react</h2>
  const welcome = <h2>getting started with react</h2>

  const header = (
    <header>
      <h1 style={{backgroundColor:'red', height: "60px"}}>wecome to react fundamental</h1>
      <h2>getting started with react</h2>
      <h3>react is a javascript libery</h3>
      <small>10-3-2023</small>
      {jsxEl}
      {data}
      {tittle}
      {welcome}
    </header>
    
  )
  const footer=(
    <footer>
      <p>copyright &copy;</p>
    </footer>
  )
  const main =(
    <main>
      <h1>preriquisite to get started</h1>
      <ul>
        <li>html</li>
        <li>css</li>
        <li>javascript</li>
      </ul>
      {/* <img src={pics} alt ='' style={styles.disc}/>
      <video src={myVideos} controls height={400} />*/}

    </main> 
      )
      const gravity = 9.81
      const mass = 70
      const currentYear = 2023
      const birthYear = 2006
      const age = currentYear - birthYear
      // let status = age >= 18;
      let mydata = {
        firstName :'scott',
        lastName:'smith',
        adress: 'phase 2',
        skils: 'react developer',
        email:{mail:'dayo@gmail.com'}
      }
      const skills =[
        ['html',10],
        ['css',20],
        ['javascript',30],
        ['react',40]
      ]
      const countries =[
        {name:'nigeria', city:'abuja'},
        {name:'sweden', city:'stockholm'},
        {name:'denmark', city:'gwagwalada' },
        {name:'norway', city:'oslo' }
      ]
     const sayhi = ()=>{
      return alert('hi dear')
     }
  return (
    <div>
      <UserInfo
      
      fullName="scott smith"
      email='dayo@gmail.com'
      age={23}
      adress = 'phase one'
      adres = 'phase two'
      />
      <Weight weight ={100}  />
      <Age age={20}/>
      <Weight weight ={gravity * mass}  />
      <Age age={age}/>
      <Status status  />
      <Skill skill={['html','css','javascript','reactjs']}/>
      <Profile mydata={mydata} />
      <Button onClick={sayhi} text={'greeting'}/>
      <Button onClick={()=> alert(new Date())} text={'showTime'} stylees={stylees}/>
      <Button onClick={sayhi} text={'greeting'}/>
      <Numbers/>
      <Skills skills={skills}/>
      <Countries countries={countries}/>
      <Counter/>
      <ContactForm/>
      <ToogleVisibility/>
      <FilterList/>
      {/* <Header/> */}
      <MobileMenu/>
      {header}
      {footer}
      {main}
    <button type='submit' style={buttonStyle}>submit</button>
    <video controls height={300} width={300}> 
      <source src={videoFile} controls type="video/mp4" />
    </video>
  
    </div>
  )
  
  }
  
  const styles ={
    tittle: {
     padding:'30px',
     color: 'blue', 
     textAlign: 'center'
    },
    disc:{
      borderRadius: '50%',
      height:'500px'

    },
   
  }

  const buttonStyle = {
     padding: '40px',
     backgroundColor:'blue',
     borderColor: '2 solid green',
     textAlign:'center'
  }
  const stylees ={
    color:'red',
    padding:'5px 20px ',
    backgroundColor:'green',
    border:'none',
    borderRadius: '8%'
  }
  export default App;
  // stylees.hover.backgroundColor='transperent'
  // color:'white'
