import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faGoogle } from '@fortawesome/free-brands-svg-icons/faGoogle';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';
// See https://fontawesome.com/icons?d=gallery&s=brands,regular&m=free
// to add other icons.

const data = [
  {
    link: 'https://scholar.google.com/citations?user=wy9mCu4AAAAJ&hl=en',
    label: 'Google Scholar',
    icon: faGoogle,
  },
  {
    link: 'https://github.com/dcdanko/',
    label: 'Github',
    icon: faGithub,
  },
  {
    link: 'https://www.linkedin.com/in/dcdanko/',
    label: 'LinkedIn',
    icon: faLinkedinIn,
  },
  {
    link: 'https://twitter.com/dcdanko',
    label: 'Twitter',
    icon: faTwitter,
  },
  {
    link: 'mailto:dcdanko@gmail.com',
    label: 'Email',
    icon: faEnvelope,
  },
];

export default data;
