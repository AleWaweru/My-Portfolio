const cardSection = document.getElementById('portfolio');

const mainMenu = document.querySelector('.menuLists');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const menuItems = document.querySelectorAll('.menuLists li a');

function show() {
  mainMenu.style.display = 'flex';
  mainMenu.style.top = '0';
}

function close() {
  mainMenu.style.top = '-100%';
}

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);

menuItems.forEach((item) => {
  item.addEventListener('click', () => {
    close();
  });
});

const Projects = [
  {
    id: 'Project1',
    title: 'Tonic',
    title1: 'Tonic',
    company: 'CANOPY',
    company1: 'CANOPY',
    icon: './Image/Counter.png',
    specialization: 'Back End Dev',
    specialization1: 'Back End Dev',
    year: '2015',
    year1: '2015',
    description: 'A daily selection of privately <br class="must-ignor">personalized reads;no accounts or <br class="must-ignor">sign-ups required.',
    description1: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    technologies: {
      tech1: 'html',
      techE: 'Ruby on rials',
      tech2: 'css',
      tech3: 'javaScript',
    },
    details: 'See project',
    imageMobile: './Image/SnapshootPortfolio1.png',
    imageDesktop: './Image/Nature.png',
    live: 'https://alewaweru.github.io/My-Portfolio/',
    source: 'https://github.com/AleWaweru/My-Portfolio',
  },
  {
    id: 'Project2',
    title: 'Multi-Post',
    title1: 'Multi-Post',
    company: 'CANOPY',
    company1: 'FACEBOOK',
    icon: './Image/Counter.png',
    specialization: 'Back End Dev',
    specialization1: 'Full Stack Dev',
    year: '2015',
    year1: '2015',
    description: 'A daily selection of privately <br class="must-ignor">personalized reads;no accounts or <br class="must-ignor">sign-ups required.',
    description1: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",

    technologies: {
      tech1: 'html',
      techE: 'Ruby on rials',
      tech2: 'css',
      tech3: 'javaScript',
    },
    details: 'See project',
    imageMobile: './Image/SnapshootPortfolio(3).png',
    imageDesktop: './Image/desktop1.png',
    live: 'https://alewaweru.github.io/My-Portfolio/',
    source: 'https://github.com/AleWaweru/My-Portfolio',
  },
  {
    id: 'Project3',
    title: 'Tonic',
    title1: 'Facebook 360',
    company: 'CANOPY',
    company1: 'FACEBOOK 360',
    icon: './Image/Counter.png',
    specialization: 'Back End Dev',
    specialization1: 'Full Stack Dev',
    year: '2015',
    year1: '2015',
    description: 'A daily selection of privately <br class="must-ignor">personalized reads;no accounts or <br class="must-ignor">sign-ups required.',
    description1: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    technologies: {
      tech1: 'html',
      techE: 'Ruby on rials',
      tech2: 'css',
      tech3: 'javaScript',
    },
    details: 'See project',
    imageMobile: './Image/Snapshoot Portfolio (2).png',
    imageDesktop: './Image/desktop2.png',
    live: 'https://alewaweru.github.io/My-Portfolio/',
    source: 'https://github.com/AleWaweru/My-Portfolio',
  },
  {
    id: 'Project4',
    title: 'Multi-Post<br>Stories',
    title1: 'Uber Navigation',
    company: 'CANOPY',
    company1: 'Uber',
    icon: './Image/Counter.png',
    specialization: 'Back End Dev',
    specialization1: 'Lead Developer',
    year: '2015',
    year1: '2018',
    description: 'A daily selection of privately <br class="must-ignor">personalized reads;no accounts or <br class="must-ignor">sign-ups required.',
    description1: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    technologies: {
      tech1: 'html',
      techE: 'Ruby on rials',
      tech2: 'css',
      tech3: 'javaScript',
    },
    details: 'See project',
    imageMobile: './Image/SnapshootPortfolio(5).png',
    imageDesktop: './Image/desktop3.png',
    live: 'https://alewaweru.github.io/My-Portfolio/',
    source: 'https://github.com/AleWaweru/My-Portfolio',
  },
];
Projects.forEach((project) => {
  const cardDiv = document.createElement('div');
  cardDiv.innerHTML = ` <div class="works-container fist-works-container">
  <img src="${project.imageMobile}" alt="Tonic-image" class="works-container-image must-ignor1">
  <img src="${project.imageDesktop}" alt="Nature-image" class="works-container-image must-ignor2">

  <div class="wapper-90">
      <div class="primarytext1">
          <h2 class="primarytext-title2">${project.title}</h2>
          <h2 class="primarytext-title">${project.title1}</h2>
          <div class="frame">
              <span class="canopy2">${project.company}</span>
              <span class="canopy">${project.company1}</span>
              <img src="${project.icon}" alt="circle-icon">
              <span class="num-text">${project.specialization}</span>
              <img src="${project.icon}" alt="circle-icon">
              <span class="num-text">${project.year}</span>
             
          </div>
      </div>

      <p class="works-container-text">${project.description}</p>
      

      <ul class="primarytext3">
          <li class="lang">${project.technologies.tech1}</li>
          <li class="lang must-ignor2">${project.technologies.techE}</li>
          <li class="lang">${project.technologies.tech2}</li>
          <li class="lang JavaScript">${project.technologies.tech3}</li>
      </ul>

      <div class="primarytext4">
          <button class="project"  id =${project.id}>${project.details}</button>
      </div>
  </div>
</div>`;

  cardSection.append(cardDiv);
});

const seeproject = document.querySelectorAll('.project');
const popup = document.querySelector('.popup');
const over = document.querySelector('.over');

seeproject.forEach((p) => p.addEventListener('click', (p) => {
  const { id } = p.target;
  const pop = Projects.find((p) => p.id === id);

  popup.innerHTML = `
  <div class="titles">
   <div class="title">
  <h2 class="primarytext-title must-ignor">${pop.title}</h2>
  <h2 class="primarytext-title must-ignor2">${pop.title1}</h2>
  <button class="close">&times;</button>
    </div>
    <ul class="social-icons10">
    <li class="cano must-ignor1">${pop.company}</li>
    <li class="cano must-ignor2">${pop.company1}</li>
    <li class="must-ignor1" ><img src="${pop.icon}" alt="dot">&nbsp; ${pop.specialization}</li>
    <li class="must-ignor2" ><img src="${pop.icon}" alt="dot">&nbsp; ${pop.specialization}</li>
    <li class="must-ignor1" ><img src="${pop.icon}" alt="dot">&nbsp; ${pop.year}</li>
    <li class="must-ignor2" ><img src="${pop.icon}" alt="dot">&nbsp; ${pop.year}</li>
  </ul>
  
  <img src="${pop.imageMobile}" alt="Tonic-image" class="imageMobile must-ignor1">
  <img src="${pop.imageDesktop}" alt="Nature-image" class="imageDesktop must-ignor2">
  <div class="explain">
    <p class="tonic-text">
      ${pop.description1} 
      <br>
      <br>
    </p>
    <ul class="primarytext33 techno">
      <li>${pop.technologies.tech1}</li>
      <li>${pop.technologies.tech2}</li>
      <li>${pop.technologies.tech3}</li> 
    </ul>
    <ul class="primarytext34 techno">
    <li class="not">Ruby</li>
    <li class="not">Boostrap</li>  
  </ul
        <hr class="invisable">
        <div class="btns">
        <div class="more">
        <button class="btn-live" id="live">
            <a href=" https://alewaweru.github.io/My-Portfolio/">See live</a>
            <img src="Image/Icon-live.png" alt="live-image">
        </button>
        <button class="btn-source" id="source">
            <a href="https://github.com/AleWaweru/My-Portfolio">See source</a>
            <img src="Image/source-icon.png" alt="source-image">
        </button>
    </div>
        </div>
        </div>
      </div>`;

  const live = document.getElementById('live');
  const source = document.getElementById('source');

  live.addEventListener('click', () => {
    document.location.href = pop.live;
  });

  source.addEventListener('click', () => {
    document.location.href = pop.source;
  });

  popup.classList.toggle('active');
  over.classList.toggle('active');

  const close = document.querySelector('.close');

  close.addEventListener('click', () => {
    popup.classList.remove('active');
    over.classList.remove('active');
  });
}));
