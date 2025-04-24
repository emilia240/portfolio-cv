import { ref } from 'vue'

const allProjects = [
  {
    id: 1,
    title: 'PRECISION',
    subtitle: 'gun-shop branding',
    images: ['project1-1.jpg', 'project1-2.jpg']
  },
  {
    id: 2,
    title: 'Welcome to Saedding',
    type: 'InD info folder',
    images: ['art1.jpg', 'art2.jpg']
  },
  {
    id: 3,
    title: 'RE-PLAST',
    type: 'Greenpeace exam project',
    images: ['art1.jpg', 'art2.jpg']
  },
  {
    id: 4,
    title: 'LABOUR',
    type: 'Song poster',
    images: ['art1.jpg', 'art2.jpg']
  },
  {
    id: 5,
    title: 'Esbjerg Movie and Stars',
    type: 'City Branding project',
    images: ['art1.jpg', 'art2.jpg']
  }
]

export const useProjects = () => {
  const schoolProjects = allProjects.filter(proj => proj.type === 'school')
  const personalProjects = allProjects.filter(proj => proj.type === 'personal')

  return {
    allProjects,
    schoolProjects,
    personalProjects
  }
}