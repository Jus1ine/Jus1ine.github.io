<script>
    import '@fortawesome/fontawesome-free/css/all.css';
    import { onMount } from 'svelte';

    const introText = "Hi there! I’m Justine Karl Manuel Marzan, and I’m currently a third-year student at Gordon College, pursuing a degree in BSIT. My main focus is on web development, where I enjoy creating user-friendly and engaging websites. While I specialize in frontend development, I also have experience in networking and other tech-related areas. I started this journey in my first semester at Gordon College, and I've been passionate about bringing ideas to life online ever since!";

    // Typing animation for "About Me" title
    let aboutText = '';
    let meText = '';
    const aboutFullText = 'About';
    const meFullText = 'Me';
    const typingSpeed = 100;

    onMount(() => {
        typeAboutMe();
    });

    function typeAboutMe() {
        let i = 0;
        let j = 0;

        const interval = setInterval(() => {
            if (i < aboutFullText.length) {
                aboutText += aboutFullText[i];
                i++;
            } else if (j < meFullText.length) {
                meText += meFullText[j];
                j++;
            } else {
                clearInterval(interval);
            }

            // Debugging
            console.log(aboutText, meText);
        }, typingSpeed);
    }
</script>

<main class="relative flex flex-col items-center justify-center min-h-screen p-12 bg-gradient-to-br from-gray-900 to-gray-800">
    <!-- Header Section -->
    <header class="w-full flex justify-between items-center p-6 bg-gray-900 shadow-lg fixed top-0 left-0 z-20">
        <h1 class="text-3xl font-extrabold text-white hover:text-cyan-400 transition duration-300">
            <a href="/home" class="flex items-center">
                <i class="fas fa-home mr-2"></i>
            </a>
        </h1>
        <nav class="space-x-6">
            <a href="/about" class="text-white text-lg hover:text-cyan-400 transition duration-300">About</a>
            <a href="/projects" class="text-white text-lg hover:text-cyan-400 transition duration-300">Projects</a>
            <a href="/contact" class="text-white text-lg hover:text-cyan-400 transition duration-300">Contact</a>
        </nav>
    </header>

    <!-- About Me Section with Reversed Layout -->
    <div class="flex flex-col md:flex-row-reverse items-center w-full max-w-7xl mb-16 mt-24 pt-20 relative z-10">
        <!-- About Me content -->
        <div class="flex flex-col items-start text-white mb-10 md:mb-0 md:w-1/2">
            <h2 class="text-[10rem] font-extrabold leading-tight mb-4 drop-shadow-lg">
                <span class="text-cyan-400">{aboutText}</span><br>
                <span class="text-white">{meText}</span>
            </h2>
        </div>
        <!-- Image on the left -->
        <img src="/HI.jpg" alt="Justine's portrait" class="w-full h-auto md:w-[500px] lg:w-[600px] lg:mr-20 rounded-lg transition-transform duration-300 transform hover:scale-105 z-10">
    </div>

    <!-- Introduction and Skills Section -->
    <div class="flex flex-col items-start w-full max-w-7xl text-white z-10">
        <p class="text-xl md:text-2xl mb-10 leading-relaxed text-gray-300 drop-shadow-md">{introText}</p>
        
        <!-- Skills Section Title -->
        <h2 class="text-3xl md:text-4xl font-semibold text-white mb-6 text-center">Skills</h2>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full text-center z-10">
            {#each [
                {
                    title: 'Front-End Developer',
                    description: 'Skilled in creating clean, responsive interfaces with HTML, CSS, and JavaScript.',
                    icon: 'fab fa-html5'
                },
                {
                    title: 'Back-End Developer',
                    description: 'Experienced with backend technologies, databases, and server-side logic.',
                    icon: 'fas fa-database'
                },
                {
                    title: 'Angular',
                    description: 'Experienced in developing dynamic, single-page applications using Angular.',
                    icon: 'fas fa-code'
                },
                {
                    title: 'TypeScript Developer',
                    description: 'Have knowledge in TypeScript for building scalable and maintainable codebases.',
                    icon: 'fas fa-code'
                },
                {
                    title: 'CSS & Styling',
                    description: 'Proficient in modern CSS techniques for creating stunning, user-friendly designs.',
                    icon: 'fab fa-css3-alt'
                },
                {
                    title: 'PHP',
                    description: 'Knowledgeable in PHP for building server-side web applications.',
                    icon: 'fab fa-php'
                }
            ] as skill}
            <div class="relative group card p-6 bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg shadow-lg hover:shadow-2xl transition-transform duration-300 z-10">
                <div class="absolute inset-0 bg-gradient-to-b from-transparent to-teal-400 opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-300"></div>
                <div class="relative z-10 flex flex-col items-center">
                    <div class="p-3 bg-teal-600 rounded-full mb-4 transition-transform duration-300 transform group-hover:scale-110">
                        <i class="{skill.icon} text-3xl text-white"></i>
                    </div>
                    <h3 class="text-xl font-semibold text-white mb-2">{skill.title}</h3>
                    <p class="text-center text-gray-300 text-lg md:text-xl">{skill.description}</p>
                </div>
            </div>
            {/each}
        </div>
    </div>
    
    <!-- Footer -->
    <footer class="w-full bg-gray-800 text-white py-4 text-center mt-10 shadow-inner z-10">
        <p>© 2024 Justine Marzan. All rights reserved.</p>
    </footer>
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

    .card {
        transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .card:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
    }

    /* Enhanced responsiveness */
    @media (max-width: 768px) {
        h1 {
            font-size: 5rem;
        }
        p {
            font-size: 1.5rem;
        }
        img {
            width: 100%;
        }
    }
</style>
