import React from 'react'
import { Card, Row, Container } from 'react-bootstrap'
import ImgModal from './ImgModal'
import projectsList from './ProjectList'
import LikeHeart from './LikeHeart'

function ProjectLink(livelink, key) {
  livelink = livelink.livelink  // livelink needs to be further deconstructed
  return (livelink !== "None" ?
    <a href={livelink} key={key} target="_blank" rel="noopener noreferrer">
      Project Link
    </a>
    :
    <strong>Project Link Coming Soon</strong>
  )
}

function projectCard(project, idx) {
  return (
    <div className="project-card" key={idx}>
      <Card className="text-center projectCard" style={{ width: '25rem' }}>  
        <Card.Title >
          <LikeHeart />
          {'  '}
          {project.displayTitle.toUpperCase()}
        </Card.Title >        
        <div className="card-img">
          <ImgModal src={project.src} displayTitle={project.displayTitle} />  
        </div>
        <hr/>
        <div className="project-card-text">
          <Card.Text >
            { }
            <ProjectLink livelink={project.livelink} key={idx} />
            <br />
            {project.description}
          </Card.Text>
        </div>
      </Card>
    </div>
  )
}

function Projects() {
  return (
    <>
      <div className="projects flex-container">
        <h1>PROJECTS</h1>
        <div className="line-break" />
          {projectsList.map((project, idx) => projectCard(project, idx))}
      </div>
    </>
  )
}

export default Projects