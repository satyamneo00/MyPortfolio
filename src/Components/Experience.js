import styles from '../static/css/About.module.css'
import ExperienceItem from './ExperienceItem'
const Experience=()=>{
    const exp=[
        {
            company:'Wipro',
            title:'Associate Consultant',
            project:'ETRM Right Angle .NET',
            description:`Work with a team of wonderful people, solving problems and adding value to the client's business. 
                        Right from requirement gathering to documentation to development and then deployment gave me a great exposure.
                        Recieved recognition from client for bug free delivery and zero SLA breach.
            `
        },
        {
            company:'Publicis Sapient',
            title:'Associate Technology',
            project:'ETRM Allegro .NET',
            description:` Worked on multiple assignment to create different interfaces in Allegro, connecting Allegro with SAP for smooth data ow across trading and pricing systems. Built tool for the team for making the testing process easier using .NET.
            Also worked on designing and developing Cross Reference data Solution for Allegro.
            Design N-Unit test cases.  

            `
        },
        {
            company:'Infogain India Pvt. Ltd.',
            title:'Software Engineer',
            project:'Web and UI Development .NET, JavaScript, HTML, CSS',
            description:` Complete UI re-designing of client's website using JavaScript libraries, HTML and CSS.
            Also worked on changing some of core backend functionalities in ASP.NET.  

            `
        }
    ]
    return(
        <div className={styles.exp}>
            <h1>Experience</h1>
            {exp.map(e=>
                <ExperienceItem exp={e}/>)}
        </div>
    )
}
export default Experience;