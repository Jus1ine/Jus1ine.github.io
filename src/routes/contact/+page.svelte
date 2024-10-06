<script>
  // Any necessary script logic can go here
</script>

<main class="relative flex flex-col items-center justify-start min-h-screen p-12 bg-gradient-to-br from-gray-900 to-gray-800">
  <!-- Header Section -->
  <header class="w-full flex justify-between items-center p-6 bg-gray-900 shadow-lg fixed top-0 left-0 z-10">
    <h1 class="text-3xl font-extrabold text-white hover:text-cyan-400 transition duration-300">
      <a href="/home" class="flex items-center">
        <i class="fas fa-home mr-2"></i>
      </a>
    </h1>
    <nav class="space-x-6">
      <a href="/about" class="text-white hover:text-cyan-400 transition duration-300">About</a>
      <a href="/projects" class="text-white hover:text-cyan-400 transition duration-300">Projects</a>
      <a href="/contact" class="text-white hover:text-cyan-400 transition duration-300">Contact</a>
    </nav>
  </header>

  <!-- Centered: Text Content and Icons -->
  <div class="flex flex-col items-center text-center mb-10 mt-24 pt-20">
    <h1 class="text-5xl font-extrabold mb-4 text-cyan-300">Contact Me</h1>
    <p class="text-lg md:text-xl max-w-2xl mb-6 leading-relaxed text-gray-300">
      I'm always open to discussing new projects or opportunities. Feel free to reach out via any of the platforms below!
    </p>
    <div class="flex space-x-16">
      <!-- GitHub -->
      <a 
        href="https://github.com/Jus1ine" 
        target="_blank" 
        class="icon-link text-gray-400 transition-colors duration-200"
      >
        <i class="fab fa-github fa-3x mb-2"></i>
        <span class="icon-image">
          <img src="/github.png" alt="GitHub Image" class="hover-image" />
        </span>
      </a>

      <!-- Facebook -->
      <a 
        href="https://www.facebook.com/kevin.go.1614" 
        target="_blank" 
        class="icon-link text-gray-400 transition-colors duration-200"
      >
        <i class="fab fa-facebook fa-3x mb-2"></i>
        <span class="icon-image">
          <img src="/facebook.png" alt="Facebook Image" class="hover-image" />
        </span>
      </a>

      <!-- Discord -->
      <a 
        href="https://discord.com/channels/@me" 
        target="_blank" 
        class="icon-link text-gray-400 transition-colors duration-200"
      >
        <i class="fab fa-discord fa-3x mb-2"></i>
        <span class="icon-image">
          <img src="/discord.png" alt="Discord Image" class="hover-image" />
        </span>
      </a>

      <!-- Email -->
      <a 
        href="mailto:202211378@gordoncollege.edu.ph?subject=Inquiry&body=Hi, I would like to discuss..." 
        class="icon-link text-gray-400 transition-colors duration-200"
      >
        <i class="fas fa-envelope fa-3x mb-2"></i>
        <span class="icon-image">
          <img src="/gmail.png" alt="Email Image" class="hover-image" />
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
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 10px;
  }

  .icon-link:hover {
    color: #00bcd4;
  }

  .icon-image {
    pointer-events: none;
    position: absolute;
    top: 60px; /* Adjust the position of the hover image */
    left: 50%;
    transform: translateX(-50%) scale(0); /* Initially hidden with scale 0 */
    opacity: 0;
    transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
  }

  .icon-link:hover .icon-image {
    opacity: 1;
    transform: translateX(-50%) scale(1); /* Appear on hover with scale */
  }

  .hover-image {
    max-width: 300px; /* Adjust the size of the hover image */
    max-height: 210px;
    width: auto;
    height: auto;
    border-radius: 0.5rem;
    border: 4px solid #22d3ee;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  }

  /* Responsive styles */
  @media (max-width: 768px) {
    h1 {
      font-size: 3rem;
    }
    p {
      font-size: 1.2rem;
    }
  }
</style>
