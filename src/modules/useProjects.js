import { ref } from 'vue'

const allProjects = [
  {
    id: 1,
    title: 'PRECISION',
    subtitle: 'gun-shop branding',
    description: '',
    images: ['src/assets/images/projects/school/Precision/Firearms project -edited photo with logo.png', 'src/assets/images/projects/school/Precision/Firearms project Banner_Mockup.png', 'src/assets/images/projects/school/Precision/src/assets/images/projects/school/Precision/Firearms project business c.png'],
    type: 'team project',
    linKProject: '',
    tools: ['', '','']
  },
  {
    id: 2,
    title: 'Welcome to Saedding',
    subtitle: 'InD info folder',
    description: '',
    images: ['src/assets/images/projects/school/Welcome-to-S/firs page.png', 'src/assets/images/projects/school/Welcome-to-S/last page.png', 'src/assets/images/projects/school/Welcome-to-S/src/assets/images/projects/school/Welcome-to-S/Saedding-anchor-vector.png'],
    type: 'team project',
    linKProject: '',
    tools: ['', '','']
  },
  {
    id: 3,
    title: 'RE-PLAST',
    subtitle: 'Greenpeace exam project',
    description: '',
    images: ['src/assets/images/projects/school/Re-plast/style-guideline.png', 'src/assets/images/projects/school/Re-plast/re-plast-typography.png', 'src/assets/images/projects/school/Re-plast/re-plast-tiktok.jpeg', 'src/assets/images/projects/school/Re-plast/re-plast-style-guide.png'],
    type: 'team project; exam',
    linKProject: '',
    tools: ['', '','']
  },
  {
    id: 4,
    title: 'LABOUR',
    subtitle: 'Song poster',
    description: '',
    images: ['src/assets/images/projects/personal/labour/Labour.jpg'],
    linkSpotify: '?',
    tools: ['', '','']
  },
  {
    id: 5,
    title: 'Esbjerg Movie and Stars',
    subtitle: 'City Branding project',
    description: '',
    images: ['src/assets/images/projects/school/Movies-and-stars/City-branding-cinema-poster.png', 'src/assets/images/projects/school/Movies-and-stars/City-branding-cinema-photos.png', 'src/assets/images/projects/school/Movies-and-stars/City-branding-cinema-logo.png', 'src/assets/images/projects/school/Movies-and-stars/City-branding-cinema-insta-post2.png'],
    type: 'team project',
    linKProject: '',
    tools: ['', '','']
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