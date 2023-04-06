import React from 'react'
import './exp.css'
import IMG1 from './../../asset/img/project1.png'
import IMG2 from './../../asset/img/project2.png'
import IMG3 from './../../asset/img/project3.png'
import IMG4 from './../../asset/img/project4.png'

const project =[
  {
    id: 1,
    img: IMG1,
    title: 'Website Cafe',
    skill1: 'React.JS',
    skill2: 'HTML',
    skill3: 'CSS',
    demo: 'https://coffee-time-eight.vercel.app/',
    code: 'https://github.com/fajrisss/coffee-time',
  },
  {
    id: 2,
    img: IMG2,
    title: 'Website Restaurant',
    skill1: 'React.JS',
    skill2: 'HTML',
    skill3: 'CSS',
    demo: 'https://restourant-sable.vercel.app/',
    code: 'https://github.com/fajrisss/restourant',
  },
  {
    id: 3,
    img: IMG3,
    title: 'WEEKEND',
    skill1: 'React.JS',
    skill2: 'HTML',
    skill3: 'CSS',
    demo: 'https://weekend-4qa3.vercel.app/',
    code: 'https://github.com/fajrisss/weekend',
  },
  {
    id: 4,
    img: IMG4,
    title: 'my-Cloth',
    skill1: 'React.JS',
    skill2: 'HTML',
    skill3: 'CSS',
    demo: 'https://my-cloth.vercel.app/',
    code: 'https://github.com/fajrisss/my-Cloth',
  },
  {
    id: 5,
    img: IMG4,
    title: 'TOKUKO (process)',
    skill1: 'React.JS',
    skill2: 'HTML',
    skill3: 'CSS',
    demo: 'https://tokokuu.vercel.app/',
    code: 'https://github.com/fajrisss/ecommerce',
  },
]

const Exp = () => {
  return (
    <div className="container exp_container" id='experience'> 
      <div className="exp_text">
        <h5>My Lastest Project</h5>
        <h1>EXPERIENCE</h1>
      </div>
        <div className="project_container">
          {project.map(({id, img, title, skill1, skill2, skill3,demo,code}) =>{
            return(
              <div className="project" key={id}>
                <img src={img} alt="" className="project_img" />
                <div className="project_detail">
                  <h2>{title}</h2>
                  <div className="project_desc">
                    <h5>tech :</h5>
                    <div className="project_skill">
                      <small>{skill1}</small>
                      <small>{skill2}</small>
                      <small>{skill3}</small>
                    </div>
                  </div>
                  <div className="project_button-container">
                    <a href={demo} target='blank' className="project_btn">Demo</a>
                    <a href={code} target='blank' className="project_btn">Code</a>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      
    </div>
  )
}

export default Exp
