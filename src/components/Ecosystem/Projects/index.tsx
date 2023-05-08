import dynamic from 'next/dynamic'

const Projects = dynamic(() => import('./Projects'))

export default Projects
