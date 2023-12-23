import ScrollReveal from "scrollreveal";
export const email = 'bruce.jin.software@hotmail.com'

export const socialMedia = [
  {
    name: 'Github',
    url: 'https://www.github.com/realtimebyte'
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/realtimebyte/'
  },
  {
    name: 'Twitter',
    url: 'https://www.twitter.com/realtimebyte'
  },
  {
    name: 'Linkedin',
    url: 'https://www.linkedin.com/in/realtimebyte'
  },
  {
    name: 'CodePen',
    url: 'https://codepen.io/realtimebyte'
  }
]

export const navLinks = [
  {
    name: 'About',
    url: '/#about',
  },
  {
    name: 'Experience',
    url: '/#experience'
  },
  {
    name: 'Work',
    url: '/#projects'
  },
  {
    name: 'Contact',
    url: '/#contact'
  }
];

export const colors = {
  green: '#64ffda',
  navy: '#0a192f',
  darkNavy: '#020c1b',
};

interface ScrollRevealObjectOptions {
  origin: string;
  distance: string;
  duration: number;
  delay: number;
  rotate: {x: number; y: number; z: number};
  opacity: number;
  scale: number;
  easing: string;
  mobile: boolean;
  reset: boolean;
  useDelay: string;
  viewFactor: number;
  viewOffset: {
    top: number;
    right: number;
    bottom: number;
    left: number;
  }
}
export const srConfig = (delay: number = 200, viewFactor: number = 0.25): scrollReveal.ScrollRevealObjectOptions => ({
  origin: 'bottom',
  distance: '20px',
  duration: 500,
  delay,
  rotate: {x:0, y: 0, z:0},
  opacity: 0,
  scale: 1,
  easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
  mobile: true,
  reset: false,
  useDelay: 'always',
  viewFactor,
  viewOffset: {top: 0, right: 0, bottom: 0, left: 0}
});
