export const links = {
  email: 'ayaabdallaha1010@gmail.com',
  phone: '+201141635138',
  whatsapp: 'https://wa.me/201141635138',
  linkedin: 'https://linkedin.com/in/aya-abdallah1010/',
  github: 'https://github.com/Aia-Abdallah',

  // Open CV directly in browser
  cv: 'https://drive.google.com/file/d/172Ox2eyT4v5H6Z-uGZ-wgfjDeTgE_n7l/preview',

  // Download CV directly
  cvDownload: 'https://drive.google.com/uc?export=download&id=172Ox2eyT4v5H6Z-uGZ-wgfjDeTgE_n7l'
};

export const copy = {
  navHome: 'Home', navAbout: 'About', navSkills: 'Skills',
  navExperience: 'Experience', navEducation: 'Education', navContact: 'Contact',
  availability: 'CLOUD & DEVOPS ENGINEER',
  heroDescription: 'Cloud & DevOps Engineer with a background in software engineering, AI/ML, and embedded systems. I work on cloud infrastructure, automation, CI/CD, container orchestration, and MLOps.',
  contactMe: 'Get in touch', downloadCv: 'Download CV',
  about: 'My engineering journey started with Mechatronics and Robotics, then expanded into software engineering, AI/ML, and cloud technologies. I enjoy connecting software with infrastructure: provisioning environments, automating delivery, deploying containerized services, and making systems observable and dependable. My focus is Cloud & DevOps, with an engineering mindset shaped by embedded and real-time systems.',
  skillsIntro: 'The technologies and practices I use across cloud infrastructure, delivery automation, orchestration, observability, and machine learning operations.',
  contactDescription: 'I’m interested in Cloud Engineering, DevOps, MLOps, and infrastructure automation opportunities. Feel free to reach out.'
};

export const skills = [
  { title: 'Cloud & Infrastructure', description: 'AWS services and infrastructure provisioning.', items: ['AWS', 'EC2', 'S3', 'VPC', 'IAM', 'EMR', 'Lambda', 'ECS / Fargate', 'CloudWatch', 'Bedrock', 'SageMaker', 'Terraform'] },
  { title: 'CI/CD & GitOps', description: 'Automating build, delivery, and deployment workflows.', items: ['Gitea Actions', 'GitHub Actions', 'GitLab CI', 'Argo CD', 'Git', 'GitOps'] },
  { title: 'Containers & Orchestration', description: 'Packaging applications and managing container workloads.', items: ['Docker', 'Docker Compose', 'Kubernetes', 'k3d'] },
  { title: 'Monitoring & Observability', description: 'Monitoring services, metrics, traces, and system behavior.', items: ['Prometheus', 'Grafana', 'OpenTelemetry'] },
  { title: 'MLOps & AI Workflows', description: 'Experiment tracking, model monitoring, and AI application tooling.', items: ['MLflow', 'Evidently', 'Hugging Face', 'Ollama', 'LangChain', 'LangGraph', 'QLoRA', 'PySpark'] },
  { title: 'Programming & Backend', description: 'Languages and frameworks used to build services and automation.', items: ['Python', 'C', 'C++', 'Embedded C', 'Java', 'JavaScript', 'Node.js', 'FastAPI', 'REST APIs', 'MATLAB / Simulink'] },
  { title: 'Systems & Engineering', description: 'Foundational systems knowledge from mechatronics and embedded engineering.', items: ['Linux', 'ROS Noetic', 'CAN Bus', 'PLCs', 'RTOS', 'Siemens', 'Schneider'] }
];


export const experience = [
  {
    date: "DevOps & MLOps Platform",
    title: "Cloud & DevOps Engineer",
    place: "Hands-on Engineering Experience",
    description:
      "Built a containerized DevOps environment using Docker Compose and Gitea Actions. Configured Kubernetes environments with GitOps deployments using Argo CD, and implemented observability and ML lifecycle monitoring using Prometheus, Grafana, OpenTelemetry, MLflow, and Evidently.",
    technologies: [
      "Docker",
      "Kubernetes",
      "Gitea Actions",
      "Argo CD",
      "Prometheus",
      "Grafana",
      "MLflow",
      "Evidently"
    ],
    link: "https://github.com/Aia-Abdallah/DevOps-and-MlOps-Pipeline"
  },
  {
    date: "Cloud-Native AI Platform",
    title: "Cloud Infrastructure & AI Engineer",
    place: "Collaborative Engineering Experience",
    description:
      "Provisioned AWS infrastructure using Terraform, processed 150K+ question-answer records with Apache Spark on EMR, fine-tuned TinyLlama using QLoRA, and worked on Docker-based model deployment with FastAPI, Ollama, and Streamlit.",
    technologies: [
      "AWS",
      "Terraform",
      "EC2",
      "S3",
      "VPC",
      "EMR",
      "Apache Spark",
      "Docker",
      "QLoRA",
      "FastAPI"
    ],
    link: "https://github.com/Kerolos129Yousef/Tech_chat_bot"
  }
];


export const education = [
  { date: 'Jun 2026 – Oct 2026', degree: 'MSc in Software Development based on AI', school: 'Queen’s University', detail: 'Core courses: Cloud Computing & Big Data, DevOps & MLOps, Software Engineering, AI & ML, Generative AI, and Advanced Data Analytics.' },
  { date: 'Sep 2019 – Jun 2024', degree: 'BEng in Mechatronics and Robotics', school: 'Egyptian Russian University', detail: 'GPA: 3.34 (Excellent). Capstone: Level 3 ROS Noetic autonomous driving system, including 3D mapping, GNSS localization, CAN bus-connected actuator control, and real-time telemetry.' }
];

export const training = [
  { name: 'AWS Cloud Practitioner', status: 'Certification Challenge Credential' },
  { name: 'Systems Diploma – Edges For Training', status: 'Credential' },
  { name: 'Cloud Computing & Big Data', status: 'Queen’s University coursework' },
  { name: 'DevOps & MLOps', status: 'Queen’s University coursework' }
];

export const publications = [
  'Multilingual and Evidence-Grounded Retrieval-Augmented Generation — hybrid retrieval and evidence-grounded generation for an on-premises bilingual Arabic/English RAG system; improved Top-1 retrieval accuracy from 50.48% to 79.05%.',
  'ECG-Based Multi-Class Diagnosis of COVID-19 and Cardiovascular Diseases via Transfer Learning — presented at ITC-Egypt.'
];

export const achievements = [
  '1st Place – Valeo Graduation Project Competition (63 projects from 22 universities).',
  '6th Place – International Science and Engineering Innovations Competition (ISEIC 2024).',
  'National Finalist – Egyptian Electric Vehicle Rally (EVER), Autonomous Driving Track.'
];


};
