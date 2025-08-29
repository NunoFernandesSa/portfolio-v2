const figma = "/images/skills/figma.png";
const css = "/images/skills/css.png";
const tailwindcss = "/images/skills/tailwindcss.png";
const js = "/images/skills/javascript.png";
const python = "/images/skills/python.png";
const django = "/images/skills/django.png";
const postgresql = "/images/skills/postgresql.png";
const mysql = "/images/skills/mysql.png";
const react = "/images/skills/react.png";
const dart = "/images/skills/dart-logo-48.png";
const flutter = "/images/skills/flutter-logo-48.png";
const wordpress = "/images/skills/wordpress.png";
const vsc = "/images/skills/vscode.png";
const androidStudio = "/images/skills/android-studio-icon.png";
const nestjs = "/images/skills/nest.js.png";

interface Skill {
  label: string;
  description: string;
  icon: string;
}

export const skills: Skill[] = [
  {
    label: "Figma",
    description: "Design & Prototypage",
    icon: figma,
  },
  {
    label: "CSS",
    description: "Styliser et mettre en forme",
    icon: css,
  },
  {
    label: "TailwindCSS",
    description: "Styliser et mettre en forme",
    icon: tailwindcss,
  },
  {
    label: "JavaScript",
    description: "Interactions & animations",
    icon: js,
  },
  {
    label: "Python",
    description: "Serveur web",
    icon: python,
  },
  {
    label: "Django",
    description: "Framework Back-end",
    icon: django,
  },
  {
    label: "NestJS",
    description: "Framework Back-end",
    icon: nestjs,
  },
  {
    label: "PostgreSQL",
    description: "Base de données SQL",
    icon: postgresql,
  },
  {
    label: "mySQL",
    description: "Base de données",
    icon: mysql,
  },
  {
    label: "React",
    description: "Bibliothèque front-end",
    icon: react,
  },
  {
    label: "Dart",
    description: "Langage de programmation",
    icon: dart,
  },
  {
    label: "Flutter",
    description: "Kit de développement logiciel",
    icon: flutter,
  },
  {
    label: "Wordpress",
    description: "CMS",
    icon: wordpress,
  },
  {
    label: "VSCode",
    description: "IDE",
    icon: vsc,
  },
  {
    label: "Android Studio",
    description: "IDE",
    icon: androidStudio,
  },
];
