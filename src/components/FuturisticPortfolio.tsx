import { 
  Github, 
  Linkedin, 
  Mail, 
  MapPin, 
  Phone,
  Download,
  ArrowUp,
  Code,
  Database,
  Cloud,
  Globe,
  Briefcase,
  GraduationCap,
  User,
  Zap,
  Rocket,
  Menu,
  X
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TechIcon from './TechIcon';
import ThemeToggle from './ThemeToggle';
import FloatingContact from './FloatingContact';
import { useScreenSize } from '../hooks/useScreenSize';
import '../styles/futuristic.css';
import '../styles/responsive.css';
import '../styles/utilities.css';

const FuturisticPortfolio = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isMobile, isTablet } = useScreenSize();

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDarkTheme ? 'dark' : 'light');
  }, [isDarkTheme]);

  // Fermer le menu mobile lors du redimensionnement
  useEffect(() => {
    if (!isMobile && !isTablet && isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  }, [isMobile, isTablet, isMobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ['hero', 'experience', 'education', 'skills', 'projects', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="futuristic-portfolio">
      {/* Theme Toggle */}
      <ThemeToggle 
        isDark={isDarkTheme} 
        onToggle={() => setIsDarkTheme(!isDarkTheme)} 
      />

      {/* Navigation Futuriste */}
      <nav className={`futuristic-nav ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <motion.a 
            href="#hero" 
            className="nav-logo"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('hero');
            }}
          >
            🌌 ABRAHAM
          </motion.a>
          
          {/* Navigation Desktop */}
          <div className="nav-links">
            {[
              { id: 'hero', label: 'Accueil', icon: <User size={16} /> },
              { id: 'experience', label: 'Expériences', icon: <Briefcase size={16} /> },
              { id: 'education', label: 'Formations', icon: <GraduationCap size={16} /> },
              { id: 'skills', label: 'Compétences', icon: <Zap size={16} /> },
              { id: 'projects', label: 'Projets', icon: <Rocket size={16} /> },
              { id: 'contact', label: 'Contact', icon: <Mail size={16} /> }
            ].map((item) => (
              <motion.a
                key={item.id}
                href={`#${item.id}`}
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.id);
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.icon}
                <span>{item.label}</span>
              </motion.a>
            ))}
          </div>

          {/* Toggle Menu Mobile */}
          <motion.button
            className="nav-mobile-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>

          {/* Menu Mobile */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div 
                className={`nav-mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}
                initial={{ opacity: 0, y: -20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <div className="nav-mobile-links">
                  {[
                    { id: 'hero', label: 'Accueil', icon: <User size={20} /> },
                    { id: 'experience', label: 'Expériences', icon: <Briefcase size={20} /> },
                    { id: 'education', label: 'Formations', icon: <GraduationCap size={20} /> },
                    { id: 'skills', label: 'Compétences', icon: <Zap size={20} /> },
                    { id: 'projects', label: 'Projets', icon: <Rocket size={20} /> },
                    { id: 'contact', label: 'Contact', icon: <Mail size={20} /> }
                  ].map((item) => (
                    <motion.a
                      key={item.id}
                      href={`#${item.id}`}
                      className={`nav-mobile-link ${activeSection === item.id ? 'active' : ''}`}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(item.id);
                        setIsMobileMenuOpen(false);
                      }}
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {item.icon}
                      {item.label}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

      {/* Hero Section Futuriste */}
      <section id="hero" className="hero-futuristic">
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="hero-title">
              Développeur Web Full Stack
            </h1>
            <p className="hero-subtitle">
              Cloud & DevOps Enthusiast
            </p>
            <motion.p 
              className="hero-description"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Salut, je suis <strong>Abraham ADODOH</strong> 👋<br/>
              Étudiant en Master Développement Web Full Stack à l'Efrei Paris.<br/>
              Passionné par l'innovation technologique et l'architecture cloud moderne.
            </motion.p>
            
            <motion.div 
              className="hero-cta"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.a
                href="/cv_expert_it.pdf"
                className="btn-futuristic btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                download
              >
                <Download size={20} />
                Télécharger CV
              </motion.a>
              
              <motion.button
                className="btn-futuristic btn-secondary"
                onClick={() => scrollToSection('contact')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail size={20} />
                Me Contacter
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Expériences Section */}
      <section id="experience" className="section-futuristic">
        <div className="section-container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">💼 Expériences Professionnelles</h2>
            <p className="section-subtitle">
              Mon parcours professionnel et les missions qui ont façonné mon expertise
            </p>
          </motion.div>

          <div className="cards-grid">
            <motion.div 
              className="futuristic-card glass-card"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="card-header">
                <div className="card-icon">
                  <Globe size={24} />
                </div>
                <div>
                  <h3 className="card-title">Assistant Webmaster</h3>
                  <p className="card-subtitle">CREAT • Paris • Juin - Nov 2024</p>
                </div>
              </div>
              <div className="card-content">
                <p>Modernisation et optimisation des sites e-commerce de l'agence.</p>
                <ul style={{ marginTop: '1rem', paddingLeft: '1.2rem' }}>
                  <li>Maintenance Prestashop (audit, bugs, SEO)</li>
                  <li>Intégration modules personnalisés</li>
                  <li>Amélioration responsive design</li>
                  <li>Collaboration équipe marketing digital</li>
                </ul>
                <div style={{ marginTop: '1.5rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {['Prestashop', 'PHP', 'JavaScript', 'MySQL'].map((tech) => (
                    <span key={tech} style={{ 
                      background: 'var(--accent-gradient)', 
                      padding: '4px 8px', 
                      borderRadius: '12px', 
                      fontSize: '0.8rem',
                      color: 'white'
                    }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="futuristic-card glass-card"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="card-header">
                <div className="card-icon">
                  <Code size={24} />
                </div>
                <div>
                  <h3 className="card-title">Développeur Web</h3>
                  <p className="card-subtitle">Ministère de la Justice • Paris • Jan - Mars 2023</p>
                </div>
              </div>
              <div className="card-content">
                <p>Développement d'une application interne de gestion des dossiers judiciaires.</p>
                <ul style={{ marginTop: '1rem', paddingLeft: '1.2rem' }}>
                  <li>API REST sécurisée (Symfony)</li>
                  <li>Interface Vue.js dynamique</li>
                  <li>Authentification JWT & système de rôles</li>
                  <li>Documentation Swagger/OpenAPI</li>
                  <li>Déploiement Docker + GitLab CI</li>
                </ul>
                <div style={{ marginTop: '1.5rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {['Symfony', 'Vue.js', 'PostgreSQL', 'Docker', 'GitLab CI'].map((tech) => (
                    <span key={tech} style={{ 
                      background: 'var(--accent-gradient)', 
                      padding: '4px 8px', 
                      borderRadius: '12px', 
                      fontSize: '0.8rem',
                      color: 'white'
                    }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Formations Section */}
      <section id="education" className="section-futuristic">
        <div className="section-container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">🎓 Formations</h2>
            <p className="section-subtitle">
              Mon parcours académique et ma formation technique
            </p>
          </motion.div>

          <div className="cards-grid">
            {[
              {
                title: "Master Développement Web Full Stack",
                school: "Efrei Paris",
                period: "2025–2027",
                description: "Formation axée sur le développement d'applications web et cloud, la sécurité logicielle, les architectures scalables et les méthodologies agiles (Scrum)."
              },
              {
                title: "Bachelor Développement Web",
                school: "École IRIS, Paris",
                period: "2024–2025",
                description: "Spécialisation en développement Full Stack, intégration d'API REST, UX/UI, DevOps et gestion de projet."
              },
              {
                title: "Licence Architecture Logicielle",
                school: "Université Privée ESGIS, Togo",
                period: "2019–2023",
                description: "Approfondissement des bases de la programmation orientée objet, conception logicielle et modélisation UML/MERISE."
              }
            ].map((formation, index) => (
              <motion.div 
                key={index}
                className="futuristic-card glass-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="card-header">
                  <div className="card-icon">
                    <GraduationCap size={24} />
                  </div>
                  <div>
                    <h3 className="card-title">{formation.title}</h3>
                    <p className="card-subtitle">{formation.school} • {formation.period}</p>
                  </div>
                </div>
                <div className="card-content">
                  <p>{formation.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compétences Section */}
      <section id="skills" className="section-futuristic">
        <div className="section-container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">🧠 Compétences</h2>
            <p className="section-subtitle">
              Technologies et outils que je maîtrise
            </p>
          </motion.div>

          <div className="tech-grid">
            {[
              {
                title: "Langages & Programmation",
                icon: <Code size={24} />,
                techs: [
                  { name: 'python', label: 'Python' },
                  { name: 'java', label: 'Java (JEE)' },
                  { name: 'csharp', label: 'C#' },
                  { name: 'javascript', label: 'JavaScript' },
                  { name: 'typescript', label: 'TypeScript' },
                  { name: 'php', label: 'PHP' }
                ]
              },
              {
                title: "Frameworks & Librairies",
                icon: <Globe size={24} />,
                techs: [
                  { name: 'angular', label: 'Angular' },
                  { name: 'react', label: 'React' },
                  { name: 'vue', label: 'Vue.js' },
                  { name: 'express', label: 'Express.js' },
                  { name: 'laravel', label: 'Laravel' },
                  { name: 'symfony', label: 'Symfony' }
                ]
              },
              {
                title: "Bases de données",
                icon: <Database size={24} />,
                techs: [
                  { name: 'mysql', label: 'MySQL' },
                  { name: 'postgresql', label: 'PostgreSQL' },
                  { name: 'sqlserver', label: 'SQL Server' }
                ]
              },
              {
                title: "Cloud & Infrastructure",
                icon: <Cloud size={24} />,
                techs: [
                  { name: 'docker', label: 'Docker' },
                  { name: 'aws', label: 'AWS' },
                  { name: 'azure', label: 'Azure' },
                  { name: 'terraform', label: 'Terraform' }
                ]
              }
            ].map((category, index) => (
              <motion.div 
                key={index}
                className="tech-category glass-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <h3>
                  {category.icon}
                  {category.title}
                </h3>
                <div className="tech-items">
                  {category.techs.map((tech, techIndex) => (
                    <motion.div 
                      key={techIndex}
                      className="tech-item"
                      whileHover={{ scale: 1.05, y: -5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <TechIcon name={tech.name} />
                      <span>{tech.label}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projets Section */}
      <section id="projects" className="section-futuristic">
        <div className="section-container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">🚀 Projets</h2>
            <p className="section-subtitle">
              Mes réalisations professionnelles et personnelles
            </p>
          </motion.div>

          <div className="cards-grid">
            {[
              {
                title: "JusticeConnect",
                type: "Projet professionnel",
                description: "Application complète de gestion des dossiers judiciaires avec tableau de bord interactif et API sécurisée.",
                techs: ['PHP', 'Symfony', 'Vue.js', 'PostgreSQL', 'Docker', 'GitLab CI'],
                status: "Terminé",
                icon: <Briefcase size={24} />
              },
              {
                title: "Dernier Métro",
                type: "Projet personnel",
                description: "API REST simulant les horaires du dernier métro parisien, avec logs et documentation automatique.",
                techs: ['Node.js', 'Express.js', 'Docker', 'Swagger', 'CI/CD'],
                status: "Terminé",
                icon: <Rocket size={24} />
              },
              {
                title: "Analyse & Gestion Données Financières",
                type: "Projet académique",
                description: "Application d'analyse et de visualisation de données financières pour la prise de décision.",
                techs: ['React', 'Node.js', 'Express', 'JWT', 'Docker'],
                status: "Terminé",
                icon: <Code size={24} />
              }
            ].map((project, index) => (
              <motion.div 
                key={index}
                className="futuristic-card glass-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="card-header">
                  <div className="card-icon">
                    {project.icon}
                  </div>
                  <div>
                    <h3 className="card-title">{project.title}</h3>
                    <p className="card-subtitle">{project.type}</p>
                  </div>
                </div>
                <div className="card-content">
                  <p>{project.description}</p>
                  <div style={{ marginTop: '1.5rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    {project.techs.map((tech) => (
                      <span key={tech} style={{ 
                        background: 'var(--accent-gradient)', 
                        padding: '4px 8px', 
                        borderRadius: '12px', 
                        fontSize: '0.8rem',
                        color: 'white'
                      }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-futuristic">
        <div className="section-container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">📬 Contact</h2>
            <p className="section-subtitle">
              Restons en contact pour de futurs projets
            </p>
          </motion.div>

          <motion.div 
            className="cards-grid"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="futuristic-card glass-card">
              <div className="card-header">
                <div className="card-icon">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="card-title">Email</h3>
                  <p className="card-subtitle">adodohabro@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="futuristic-card glass-card">
              <div className="card-header">
                <div className="card-icon">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="card-title">Téléphone</h3>
                  <p className="card-subtitle">06 99 59 23 67</p>
                </div>
              </div>
            </div>

            <div className="futuristic-card glass-card">
              <div className="card-header">
                <div className="card-icon">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="card-title">Localisation</h3>
                  <p className="card-subtitle">France (mobilité nationale)</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            style={{ textAlign: 'center', marginTop: '3rem' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <motion.a
                href="/cv_expert_it.pdf"
                className="btn-futuristic btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                download
              >
                <Download size={20} />
                Télécharger CV
              </motion.a>
              
              <motion.a
                href="https://github.com/ASapAbro"
                className="btn-futuristic btn-secondary"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github size={20} />
                GitHub
              </motion.a>
              
              <motion.a
                href="https://linkedin.com/in/abraham-adodoh"
                className="btn-futuristic btn-secondary"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin size={20} />
                LinkedIn
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Flottant */}
      <FloatingContact />

      {/* Bouton retour en haut */}
      <AnimatePresence>
        {isScrolled && (
          <motion.button
            className="btn-futuristic btn-primary"
            onClick={scrollToTop}
            style={{
              position: 'fixed',
              bottom: '30px',
              left: '30px',
              zIndex: 999,
              borderRadius: '50%',
              width: '50px',
              height: '50px',
              padding: '0'
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FuturisticPortfolio;
