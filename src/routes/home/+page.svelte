<script>
    import '@fortawesome/fontawesome-free/css/all.css';
    import { onMount } from 'svelte';

    let nameText = '';
    let titleText = '';
    let helloText = '';
    const fullName = "Justine Marzan";
    const title = "A 3rd Year College Student";
    const introText = "I’m a frontend developer student at Gordon College. I know how to build intuitive and responsive user interfaces using HTML, CSS, and JavaScript. I enjoy turning designs into working web apps and am always looking to learn new frameworks and work on real-world projects.";

    let nameIndex = 0;
    let titleIndex = 0;
    let helloIndex = 0; // Index for "Hello, I am"
    const typeSpeed = 50;

    onMount(() => {
        typeWriterHello(); // Start typing "Hello, I am"
    });

    function typeWriterHello() {
        const helloTextFull = "Hello, I am";
        if (helloIndex < helloTextFull.length) {
            helloText += helloTextFull.charAt(helloIndex);
            helloIndex++;
            setTimeout(typeWriterHello, typeSpeed);
        } else {
            setTimeout(typeWriterName, 500); // After typing helloText, type name
        }
    }

    function typeWriterName() {
        if (nameIndex < fullName.length) {
            nameText += fullName.charAt(nameIndex);
            nameIndex++;
            setTimeout(typeWriterName, typeSpeed);
        } else {
            setTimeout(typeWriterTitle, 500); // After typing name, type title
        }
    }

    function typeWriterTitle() {
        if (titleIndex < title.length) {
            titleText += title.charAt(titleIndex);
            titleIndex++;
            setTimeout(typeWriterTitle, typeSpeed);
        }
    }
</script>

<main class="relative flex flex-col items-center justify-center min-h-screen p-12 bg-gradient-to-br from-gray-900 to-gray-800">
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

    <!-- Welcome Section -->
    <div class="flex flex-col md:flex-row items-center w-full max-w-7xl mb-16 mt-24 pt-20 text-center md:text-left">
        <!-- Name and Title with typing effect -->
        <div class="flex flex-col items-start md:items-start text-white mb-10 md:mb-0 md:w-1/2">
            <p class="text-2xl text-white mb-2">{helloText}</p> <!-- Typing effect for Hello, I am -->
            <h1 class="text-6xl font-extrabold mb-4 text-white">{nameText}</h1>
            <p class="text-3xl md:text-4xl text-cyan-400 font-semibold mb-6">{titleText}</p>
            <p class="text-lg md:text-xl text-gray-400 mb-10 leading-relaxed">{introText}</p>
            <!-- Button to view projects -->
            <a href="/projects" class="px-6 py-3 border-2 border-cyan-400 text-white text-lg font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition duration-300">
                View My Projects
            </a>
        </div>
        <!-- Profile Image on the right with increased margin -->
        <img src="hellodyan.png" alt="Justine's portrait" class="w-full h-auto md:w-[500px] lg:w-[550px] rounded-lg transition-transform duration-300 transform hover:scale-105 md:ml-32"> <!-- Removed shadow -->
    </div>
</main>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

    body {
        font-family: 'Roboto', sans-serif;
    }

    button {
        transition: background-color 0.3s ease, transform 0.3s ease;
    }

    button:hover {
        transform: scale(1.05);
    }

    /* Enhanced responsiveness */
    @media (max-width: 768px) {
        h1 {
            font-size: 3rem;
        }
        p {
            font-size: 1rem;
        }
        img {
            width: 100%;
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

<!-- Include FontAwesome in your index.html -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" integrity="sha384-DyZ5uwHbH7+zWjx0GrF9w2A9zZ2d/74M0pEd+EqpAn0U4g9kWECu7jwyQ0IH4Y" crossorigin="anonymous">
