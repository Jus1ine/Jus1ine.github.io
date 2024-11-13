<script>
  import '@fortawesome/fontawesome-free/css/all.min.css';
</script>

<main class="relative flex flex-col items-center justify-start min-h-screen p-12 bg-gradient-to-br from-gray-900 to-gray-800">
  <!-- Header Section -->
  <header class="w-full flex justify-between items-center p-6 bg-gray-900 shadow-lg fixed top-0 left-0 z-10">
    <h1 class="text-3xl font-extrabold text-white hover:text-cyan-400 transition duration-300">
      <a href="/home" aria-label="Home" class="flex items-center">
        <i class="fas fa-home mr-2"></i>
      </a>
    </h1>
    <nav class="space-x-6" aria-label="Main Navigation">
      <a href="/about" aria-label="About Me" class="text-white hover:text-cyan-400 transition duration-300">About</a>
      <a href="/projects" aria-label="Projects" class="text-white hover:text-cyan-400 transition duration-300">Projects</a>
      <a href="/contact" aria-label="Contact" class="text-white hover:text-cyan-400 transition duration-300">Contact</a>
    </nav>
  </header>

  <!-- Centered: Text Content and Icons -->
  <div class="flex flex-col items-center text-center mb-10 mt-24 pt-20 px-4">
    <h1 class="text-4xl md:text-5xl font-extrabold mb-6 text-cyan-300">Contact Me</h1>
    <p class="text-lg md:text-xl max-w-2xl mb-12 leading-relaxed text-gray-300">
      I'm always open to discussing new projects or opportunities. Feel free to reach out via any of the platforms below!
    </p>
    
    <!-- Social Links - Vertical on mobile -->
    <div class="flex flex-col md:flex-row md:space-x-16 space-y-8 md:space-y-0">
      <!-- GitHub -->
      <a 
        href="https://github.com/Jus1ine" 
        target="_blank" 
        class="icon-link"
        aria-label="Visit my GitHub profile"
      >
        <i class="fab fa-github text-5xl text-gray-400 hover:text-cyan-400 transition-colors duration-200"></i>
        <span class="icon-image">
          <img src="/github.png" alt="GitHub preview" class="hover-image" />
        </span>
      </a>

      <!-- Facebook -->
      <a 
        href="https://www.facebook.com/kevin.go.1614" 
        target="_blank" 
        class="icon-link"
        aria-label="Visit my Facebook profile"
      >
        <i class="fab fa-facebook text-5xl text-gray-400 hover:text-cyan-400 transition-colors duration-200"></i>
        <span class="icon-image">
          <img src="/facebook.png" alt="Facebook preview" class="hover-image" />
        </span>
      </a>

      <!-- Discord -->
      <a 
        href="https://discord.com/channels/@me" 
        target="_blank" 
        class="icon-link"
        aria-label="Visit my Discord profile"
      >
        <i class="fab fa-discord text-5xl text-gray-400 hover:text-cyan-400 transition-colors duration-200"></i>
        <span class="icon-image">
          <img src="/discord.png" alt="Discord preview" class="hover-image" />
        </span>
      </a>

      <!-- Email -->
      <a 
        href="mailto:202211378@gordoncollege.edu.ph" 
        class="icon-link"
        aria-label="Send me an email"
      >
        <i class="fas fa-envelope text-5xl text-gray-400 hover:text-cyan-400 transition-colors duration-200"></i>
        <span class="icon-image">
          <img src="/gmail.png" alt="Email preview" class="hover-image" />
        </span>
      </a>
    </div>
  </div>
</main>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

  body {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding-top: 80px; /* Ensure space for fixed header */
  }

  /* Header styles */
  header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 10;
  }

  .icon-link {
    position: relative;
    display: inline-block;
    text-decoration: none;
    transition: transform 0.2s ease;
  }

  .icon-link:hover {
    transform: scale(1.1);
  }

  .icon-image {
    display: none;
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    margin-bottom: 20px;
    z-index: 100;
  }

  .icon-link:hover .icon-image {
    display: block;
  }

  .hover-image {
    max-width: 160px;
    height: auto;
    border-radius: 8px;
    border: 2px solid #22d3ee;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  }

  /* Specific adjustments for Facebook and Gmail */
  a[href*="facebook"] .hover-image,
  a[href*="mailto"] .hover-image {
    max-width: 180px; /* Increased size for Facebook and Gmail */
  }

  /* Responsive adjustments */
  @media (max-width: 768px) {
    .hover-image {
      max-width: 130px;
    }
    
    /* Mobile adjustments for Facebook and Gmail */
    a[href*="facebook"] .hover-image,
    a[href*="mailto"] .hover-image {
      max-width: 150px;
    }
  }

  /* Add these media queries for consistent icon size */
  @media (max-width: 768px) {
    .text-3xl {
      font-size: 1.5rem !important;  /* Force the same size on mobile */
    }
    nav {
      font-size: 0.875rem;
    }
  }
</style>
