import {
  Github,
  Code,
  Briefcase,
  User,
  ExternalLink,
  Linkedin,
  Mail
} from 'lucide-react'

export const skillsData = [
  {
    name: 'Front-end Development',
    icon: <Code size={32} />,
    description:
      'Expertise in HTML, CSS, React and a lot of other React related libraries',
    level: 90
  },
  {
    name: 'Back-end Development',
    icon: <Code size={32} />,
    description:
      'Proficient in Java, Spring Boot, Node.js, Express, and database management',
    level: 85
  },
  {
    name: 'UI/UX Design',
    icon: <User size={32} />,
    description: 'Creating intuitive and visually appealing user interfaces',
    level: 70
  },
  {
    name: 'Responsive Design',
    icon: <Briefcase size={32} />,
    description:
      'Ensuring optimal user experience across all devices, mainly using tailwind',
    level: 90
  },
  {
    name: 'Performance Optimization',
    icon: <ExternalLink size={32} />,
    description: 'Improving website speed and efficiency and having clean code',
    level: 85
  },
  {
    name: 'Version Control',
    icon: <Github size={32} />,
    description: 'Proficient in Git and collaborative development workflows',
    level: 90
  }
]

export const projectsData = [
  {
    name: 'E-commerce Platform',
    description:
      'A full-stack e-commerce solution built with React and Node.js, featuring real-time inventory management and secure payment processing.',
    image: '/placeholder.svg?height=300&width=400',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    link: '#',
    github: '#'
  },
  {
    name: 'Task Management App',
    description:
      'A responsive web app for managing daily tasks and projects, with features like drag-and-drop organization and team collaboration tools.',
    image: '/placeholder.svg?height=300&width=400',
    technologies: ['Vue.js', 'Firebase', 'Vuex', 'Tailwind CSS'],
    link: '#',
    github: '#'
  },
  {
    name: 'Weather Dashboard',
    description:
      'A real-time weather application using modern APIs and geolocation, providing accurate forecasts and interactive maps.',
    image: '/placeholder.svg?height=300&width=400',
    technologies: ['React', 'OpenWeatherMap API', 'Mapbox', 'Chart.js'],
    link: '#',
    github: '#'
  },
  {
    name: 'Portfolio Website',
    description:
      'A sleek, responsive portfolio showcasing my web development skills, featuring smooth animations and a dark mode toggle.',
    image: '/placeholder.svg?height=300&width=400',
    technologies: ['Next.js', 'Framer Motion', 'Tailwind CSS', 'Vercel'],
    link: '#',
    github: '#'
  }
]

export const testimonialsData = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, TechStart',
    content:
      "John's expertise in web development helped us launch our product ahead of schedule. His attention to detail and problem-solving skills are unmatched."
  },
  {
    name: 'Michael Chen',
    role: 'CTO, InnovateCorp',
    content:
      "Working with John was a game-changer for our team. His deep knowledge of modern web technologies significantly improved our app's performance."
  },
  {
    name: 'Emily Rodriguez',
    role: 'Product Manager, DesignPro',
    content:
      "John's ability to translate complex ideas into user-friendly interfaces is remarkable. He's a valuable asset to any development team."
  }
]

export const socialLinks = [
  {
    href: 'https://github.com',
    icon: <Github size={32} />,
    label: 'GitHub'
  },
  {
    href: 'https://linkedin.com',
    icon: <Linkedin size={32} />,
    label: 'LinkedIn'
  },
  {
    href: 'mailto:johndoe@example.com',
    icon: <Mail size={32} />,
    label: 'Mail'
  }
]
