<script>
    import '@fortawesome/fontawesome-free/css/all.css';

    // Sample project data with images and videos
    const projects = [
        {
            title: 'Weather Application using Angular',
            description: 'Developed a website using REST API to fetch weather data. This was a solo project for an assessment.',
            media: {
                type: 'image',
                src: '/weather.png'
            }
        },
        {
            title: 'Faculty Profiling and Monitoring',
            description: 'A group project for app development using Angular. I served as the project manager and frontend developer.',
            media: {
                type: 'video',
                src: '/credify.mp4'
            }
        },
        {
            title: 'Text to Speak',
            description: 'This was my first project, a simple text-to-speech application. It was a beginner’s project that helped me understand basic web development.',
            media: {
                type: 'video',
                src: '/txt to speak.mp4'
            }
        },
        {
            title: 'Advanced Calculator',
            description: 'A group project developed using Java and NetBeans. I acted as the project manager and full stack developer.',
            media: {
                type: 'image',
                src: '/calcu.png'
            }
        }
    ];
</script>

<main class="flex flex-col items-center justify-center min-h-screen p-12 bg-gradient-to-br from-gray-900 to-gray-800">
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

    <!-- Projects Section -->
    <div class="w-full max-w-7xl mt-20 pt-10">
        <h2 class="text-5xl font-bold text-cyan-400 text-center mb-12">Projects</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-10">
            {#each projects as project}
            <div class="relative group p-8 rounded-lg bg-gray-700 shadow-lg transition-all duration-300 transform hover:scale-105 hover:bg-gradient-to-tr hover:from-gray-700 hover:to-cyan-800">
                {#if project.media.type === 'image'}
                    <img src={project.media.src} alt={project.title} class="w-full h-auto rounded-lg shadow-lg mb-6 transition-transform duration-300 transform hover:scale-105" />
                {:else if project.media.type === 'video'}
                <video controls class="w-full h-auto rounded-lg shadow-lg mb-6 transition-transform duration-300 transform hover:scale-105">
                    <source src={project.media.src} type="video/mp4">
                    <track kind="captions" src="captions.vtt" srclang="en" label="English">
                    Your browser does not support the video tag.
                </video>
                
                {/if}
                <h3 class="text-3xl font-semibold text-cyan-300 mb-2 text-center mt-2 group-hover:text-cyan-400">{project.title}</h3>
                <p class="text-center text-gray-300 mb-4">{project.description}</p>
            </div>
            {/each}
        </div>
    </div>

    <!-- Additional Note -->
    <div class="w-full max-w-3xl mt-10 mb-6 text-center">
        <p class="text-gray-300 text-lg">What you see here is just some of my projects. I have more projects, but they have all been deleted, and I don't have any images for them.</p>
    </div>
    
    <!-- Footer -->
    <footer class="w-full bg-gray-800 text-white py-4 text-center shadow-inner">
        <p>© 2024 Justine Marzan. All rights reserved.</p>
    </footer>
</main>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

    body {
        font-family: 'Roboto', sans-serif;
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

    /* Enhanced responsiveness */
    @media (max-width: 768px) {
        h2 {
            font-size: 2.5rem;
        }
        .text-3xl {
            font-size: 1.5rem;
        }
    }
</style>
