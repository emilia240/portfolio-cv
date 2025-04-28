import { ref } from 'vue'; // Import ref for reactivity

const allProjects = ref([
  {
    id: 1,
    title: 'PRECISION',
    subtitle: 'gun-shop branding',
    description: `This was my first team project. The task was to build a brand identity, including a mock website
based on a case provided by our teachers. The final presentation
had to outline our entire planning process. I was in charge of the
branding (logo, colour palette, typography, deliverables) and putting
together the InD presentation.`,
    images: [
      'src/assets/images/projects/school/Precision/Precision-banner.jpg',
      'src/assets/images/projects/school/Precision/Precision-box.jpg',
      'src/assets/images/projects/school/Precision/Precision-businesscard.png',
      'src/assets/images/projects/school/Preciscion/Precision-busineescard-2.jpg',
      'src/assets/images/projects/school/Preciscion/Precision-flyer.jpg',
      'src/assets/images/projects/school/Preciscion/Precision-hoodie.jpg',
      'src/assets/images/projects/school/Preciscion/Precision-logo.jpg',
      'src/assets/images/projects/school/Preciscion/Precision-poster.jpg',
      'src/assets/images/projects/school/Preciscion/Precision-poster-2.jpg'
    ],
    type: 'school',
    duration:'1 week, team project',
    linksProject: [
      {text: 'FIGMA MOCKUP', url: 'https://www.figma.com/proto/GhqlDePzO1MziEYi6Fa6K8/precision-gunshop?page-id=0%3A1&node-id=2-2&p=f&viewport=896%2C1481%2C0.15&t=2BbKMjoE93b0wsQ1-1&scaling=contain&content-scaling=responsive'},
      {text: 'PROJECT PRESENTATION', url: 'https://indd.adobe.com/view/04426f0e-d17d-48f3-bdd7-94a288b229e9'}
    ],
    tools: ['src/assets/images/svg/tools/illustrator.svg', 'src/assets/images/svg/tools/photoshop.svg','src/assets/images/svg/tools/indesign.svg'],
    contribution: ['LOGO DESIGN','COLOR PALETTE','TYPOGRAPHY','MOCKUPS','NOTION PROJECT MANAGEMENT','INDESIGN PRESENTATION']
  },
  {
    id: 2,
    title: 'Welcome to Saedding',
    subtitle: 'InD info folder',
    description: `We were required to create a digital interactive info folder about
a district of our choice in Esbjerg. I was responsible for designing
the promotional poster and all the vector illustrations. I also assisted
my teammate with the InDesign layout and contributed to editing
several of the photos.`,
    images: [
      'src/assets/images/projects/school/Welcome-to-S/Saedding-seagul-vector.png',
      'src/assets/images/projects/school/Welcome-to-S/Saedding-poster.png',
      'src/assets/images/projects/school/Welcome-to-S/Saedding-anchor-vector.png',
      'src/assets/images/projects/school/Welcome-to-S/Saedding-seal-vector.png',
      'src/assets/images/projects/school/Welcome-to-S/Saedding-seashells-vector.png',
      'src/assets/images/projects/school/Welcome-to-S/Saedding-whale-vector.png',
      'src/assets/images/projects/school/Welcome-to-S/Saedding-map-vector.png',
      'src/assets/images/projects/school/Welcome-to-S/Saedding-pearl-vector.png',
      'src/assets/images/projects/school/Welcome-to-S/Saedding-boat-vector.png',
      'src/assets/images/projects/school/Welcome-to-S/Saedding-first-page.jpg',
      'src/assets/images/projects/school/Welcome-to-S/Saedding-last-page.jpg'
    ],
    type: 'school',
    duration:'2 weeks, team project',
    linksProject: [
      {text:'PROJECT PRESENTATION', url:'https://indd.adobe.com/view/5678db2b-29c9-482a-800d-6fc4aa321116'}
    ],
    tools: ['src/assets/images/svg/tools/illustrator.svg', 'src/assets/images/svg/tools/photoshop.svg','src/assets/images/svg/tools/indesign.svg'],
    contribution: ['POSTER DESIGN','COLOR PALETTE','VECTOR ILLUSTRATIONS','LAYOUT DESIGN','PHOTO EDITING','TYPOGRAPHY']
  },
  {
    id: 3,
    title: 'RE-PLAST',
    subtitle: 'Greenpeace exam project',
    description: `Our task was to create a promotional campaign for
the Global Plastic Treaty to inform the public, raise awareness, and
encourage people to sign it. I was mainly responsible for the coding
aspect of this project, following my work on the styling and layout of
the high-fidelity prototype for the website. In addition, I assisted in
refining the logo, creating the style guide, and selecting the colours
and fonts. Read more`,
    images: [
      'src/assets/images/projects/school/Re-plast/re-plast-style-guide.png',
      'src/assets/images/projects/school/Re-plast/re-plast-style-guideline.png',
      'src/assets/images/projects/school/Re-plast/re-plast-desktopwebsite.jpg',
      'src/assets/images/projects/school/Re-plast/re-plast-mobilesite.jpg',
      'src/assets/images/projects/school/Re-plast/re-plast-how-clearsp-primary-horiz.png',
      'src/assets/images/projects/school/Re-plast/re-plast-accessibility-check.png',
      'src/assets/images/projects/school/Re-plast/re-plast-typography.png',
      'src/assets/images/projects/school/Re-plast/re-plast-tiktok.jpeg',
      'src/assets/images/projects/school/Re-plast/re-plast-insta.jpeg',
      'src/assets/images/projects/school/Re-plast/re-plast-story.jpeg',
      'src/assets/images/projects/school/Re-plast/re-plast-poster.jpg',
    ],
    type: 'school',
    duration:'4 weeks,team project',
    linksProject: [
      {text:'RE-PLAST STYLEGUIDE', url:'https://indd.adobe.com/view/310b6401-21e2-4669-a541-4761bded3a9c'}, 
      {text:'RE-PLAST WEBSITE', url:'https://emilia240.github.io/re-plast-project/'}, 
      {text:'PROJECT REPORT', url:'https://acrobat.adobe.com/id/urn:aaid:sc:eu:ab88a233-177f-40a4-8700-06161e741eb3'}
    ],
    tools: ['src/assets/images/svg/tools/figma.svg', 'src/assets/images/svg/tools/html-5.svg','src/assets/images/svg/tools/css-3.svg','src/assets/images/svg/tools/illustrator.svg', 'src/assets/images/svg/tools/photoshop.svg','src/assets/images/svg/tools/indesign.svg'],
    contribution: ['WEB DESIGN','PROTOTYPES','COLOR PALETTE','TYPOGRAPHY','HTML, CSS, BOOTSTRAP','SEO', 'GITHUB COLLAB']

  },
  {
    id: 4,
    title: 'LABOUR',
    subtitle: 'Song poster',
    description: `Created as part of a Spotify + Adobe synergy passion project.
“Labour” by Paris Paloma is validating women’s anger towards social oppression, violence, and objectification. It’s the essence of female rage put into a song, highlighting women’s suffering and labour.`,
    images: [
      'src/assets/images/projects/personal/labour/Labour.jpg',
    ],
    type: 'personal',
    linkSpotify: ['https://open.spotify.com/track/0e00DiF2T9znEdmWakYSC3?si=975b47fbc1ba420a'],
    tools: ['src/assets/images/svg/tools/photoshop.svg']
  },
  {
    id: 5,
    title: 'Esbjerg Movie and Stars',
    subtitle: 'City Branding project',
    description: `For this competition project, we faced numerous requirements
within a tight timeframe. It pushed us to be creative while focusing
on quality and coherence. Our primary objective was to ensure
that the event concept we developed for Esbjerg was logical and
supported by data. My role involved creating animated data graphs
in After Effects and compiling our work into an interactive InDesign
file for our pitch presentation to the jury. Read more`,
    images: [
      'src/assets/images/projects/school/Movies-and-stars/City-branding-cinema-poster.jpg',
      'src/assets/images/projects/school/Movies-and-stars/City-branding-cinema-photos.jpg',
      'src/assets/images/projects/school/Movies-and-stars/City-branding-cinema-logo.png',
      'src/assets/images/projects/school/Movies-and-stars/City-branding-cinema-insta.jpg',
      'src/assets/images/projects/school/Movies-and-stars/City-branding-cinema-insta-post.jpg',
      'src/assets/images/projects/school/Movies-and-stars/City-branding-cinema-insta-post-2.jpg',
   ],
    type: 'school',
    duration:'1 week, team project',
    linksProject: [
      {text:'PROJECT PRESENTATION', url:'https://indd.adobe.com/view/1f3210b2-5a31-4d56-82b5-4eae436d5559'}
    ],
    tools: ['src/assets/images/svg/tools/illustrator.svg','src/assets/images/svg/tools/indesign.svg','src/assets/images/svg/tools/after-effects.svg'],
    contribution: ['MOTION GRAPHICS','INDESIGN PRESENTATION','CONCEPT DEVELOPMENT']   
  },
  {
    id: 6,
    title: 'Purple Scars',
    subtitle: 'Posters',
    description: `A woman’s body is never just hers—it’s policed by social media’s airbrushed ideals and patriarchal rules about what’s "flawless." This poster dissects the paradox of "imperfections" in a world that profits from women’s self-doubt. The marks we’re told to erase become the focal point—unignorable, deliberate, alive.`,
    images: [
      'src/assets/images/projects/personal/purple-scars/Purple-scars.jpg',
   ],
    type: 'personal',
    tools: ['src/assets/images/svg/tools/photoshop.svg','src/assets/images/svg/tools/illustrator.svg']
  },
  {
    id: 7,
    title: 'Halloween shots',
    subtitle: 'Posters',
    description: `We needed to create type-design posters for the school’s
Halloween party special drinks. I focused on enhancing the
background images by experimenting with the blending modes.
In Illustrator, I adjusted the letters of the drink titles to match the
theme.`,
    images: [
      'src/assets/images/projects/school/Halloween-shots/Shark-attack-01.jpg',
      'src/assets/images/projects/school/Halloween-shots/Shark-attack-02.jpg',
      'src/assets/images/projects/school/Halloween-shots/vampire-shot-01.jpg',
      'src/assets/images/projects/school/Halloween-shots/vampire-shot-02.jpg',
    ],
    type: 'school',
    duration:'1 week, individual assignment',
    linksProject: '',
    tools: ['src/assets/images/svg/tools/illustrator.svg'],
    contribution: ['POSTER DESIGN']   

  },
  {
    id: 8,
    title: 'ME-OWCH. Who will feed me?',
    subtitle: 'Infographic poster',
    description: `The task was to create an infographic poster for print using
Illustrator. I utilized data visualization illustrations and focused on a
detailed layout to present the information alongside visuals. Given
the A1 size of the poster, this was an opportunity to carefully craft
the layout and select legible font families and sizes, ensuring that
the printed version would be displayed effectively.`,
    images: [
      'src/assets/images/projects/school/Infographic/Cats_infographic.webp',
    ],
    type:'school',
    duration:'1 week, individual assignment',
    linksProject: '',
    tools: ['src/assets/images/svg/tools/illustrator.svg','src/assets/images/svg/tools/indesign.svg',],
    contribution: ['VECTOR GRAPH ILLUSTRATION','LAYOUT DESIGN']   
  },
  {
    id: 9,
    title: 'Mini me Illustration',
    subtitle: 'Vector graphics',
    description: `We were assigned a fun project to create a collage poster for our
class. Our goal was to design a vector representation of ourselves. I
primarily used Illustrator’s pen tool to trace the contours of a photo
and create a cartoonish avatar version of myself.`,
    images: [
      'src/assets/images/projects/school/Mini-me/mini-me-emilia.jpg'
    ],
    type:'school',
    duration:'2 weeks, individual assignment',
    linksProject: '',
    tools: ['src/assets/images/svg/tools/illustrator.svg'],
    contribution: ['VECTOR ILLUSTRATION']   
  },
  {
    id: 10,
    title: 'Oranges',
    subtitle: 'Poster-To be a woman',
    description: `TikTok’s viral orange-peeling "test" exposed a sad irony: partners’ basic kindness was celebrated as extraordinary, while aggression was performatively gasped at. That isn’t proof of love—if cruelty surprises you, you already knew; if tenderness feels revelatory, the bar is buried.
Because here’s the truth: a partner’s malice or love isn’t revealed in a single, scripted moment. If they’re cruel to you, the signs were always there; if they’re kind, they likely show it daily—not just for a trend.
`,
    images: [
      'src/assets/images/projects/personal/oranges/oranges.jpg',
      'src/assets/images/projects/personal/oranges/oranges-mockup.jpg',
   ],
    type:'personal',
    tools: ['src/assets/images/svg/tools/photoshop.svg']
  },
  {
    id: 11,
    title: 'THE GARDEN OF SECRETS',
    subtitle: 'Poster-Book cover',
    description: `This is a small Udemy course exercise(by Lindsay Marsh). I practiced my Photoshop composition techniques and artboard workflow to create the hardcover mockups (front + spine). The visual approach was self-directed, using the title as a creative starting point inspiration.`,
    images: [
      'src/assets/images/projects/personal/The-garden-of-secrets/The-Garden-of-Secrets.jpg',
      'src/assets/images/projects/personal/The-garden-of-secrets/theGardenOfSecretsbookcover.jpg',
   ],
    type:'personal',
    tools: ['src/assets/images/svg/tools/photoshop.svg']
  },
  {
    id: 12,
    title: 'STEP OUT',
    subtitle: 'Ballerina poster',
    description: `The poster is a Photoshop composition focused on the subject of ballerinas. This is an experimental surreal digital collage blending classical grace with cosmic escape: a ballerina mid-leap about to go into a portal. It is a depiction of tension between discipline and freedom.
`,
    images: [
      'src/assets/images/projects/personal/step-out/step-out.jpg',
   ],
    type:'personal',
    tools: ['src/assets/images/svg/tools/photoshop.svg']
  },
]);




// Filter projects by type (reactive arrays)
const schoolProjects = ref(allProjects.value.filter((project) => project.type === 'school'));
const personalProjects = ref(allProjects.value.filter((project) => project.type === 'personal'));

// Export the projects
export function useProjects() {
  return {
    allProjects,
    schoolProjects,
    personalProjects,
  };
}