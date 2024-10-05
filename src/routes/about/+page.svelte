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
            <a href="/home" class="flex items-center">
                <i class="fas fa-home mr-2"></i>
            </a>
        </h1>
        <nav class="space-x-6">
            <a href="/about" class="text-white text-lg hover:text-cyan-400 transition duration-300">About</a> <!-- Increased font size -->
            <a href="/projects" class="text-white text-lg hover:text-cyan-400 transition duration-300">Projects</a> <!-- Increased font size -->
            <a href="/contact" class="text-white text-lg hover:text-cyan-400 transition duration-300">Contact</a> <!-- Increased font size -->
        </nav>        
    </header>

    <!-- Welcome Section -->
    <div class="flex flex-col md:flex-row items-center w-full max-w-7xl mb-16 mt-24 pt-20">
        <!-- Name and Title with typing effect -->
        <div class="flex flex-col items-start text-white mb-10 md:mb-0 md:w-1/2">
            <p class="text-2xl text-white mb-2">{helloText}</p> <!-- Typing effect for Hello, I am -->
            <h1 class="text-9xl font-extrabold mb-4 text-cyan-400 drop-shadow-lg">{nameText}</h1>
            <p class="text-3xl md:text-4xl text-white font-semibold mb-6">{titleText}</p>
        </div>
        <!-- Larger Image on the right without shadow -->
        <img src="hellodyan.png" alt="Justine's portrait" class="w-full h-auto md:w-[650px] lg:w-[700px] lg:ml-20 rounded-lg transition-transform duration-300 transform hover:scale-105">
    </div>

    <!-- Introduction and Skills Section -->
    <div class="flex flex-col items-start w-full max-w-7xl text-white">
        <p class="text-xl md:text-2xl mb-10 leading-relaxed text-gray-300 drop-shadow-md">{introText}</p>
        
        <!-- Skills Section Title -->
        <h2 class="text-3xl md:text-4xl font-semibold text-white mb-6 text-center">Skills</h2> <!-- Centered Title -->

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full text-center"> <!-- Added text-center class -->
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
            <div class="relative group card p-6 bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg shadow-lg hover:shadow-2xl transition-transform duration-300">
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
    <footer class="w-full bg-gray-800 text-white py-4 text-center mt-10 shadow-inner">
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
            font-size: 6rem;
        }
        p {
            font-size: 1.5rem;
        }
        img {
            width: 100%;
        }
    }
</style>

<!-- Include FontAwesome in your index.html -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" integrity="sha384-DyZ5uwHbH7+zWjx0GrF9w2A9zZ2d/74M0pEd+EqpAn0U4g9kWECu7jwyQ0IH4Y" crossorigin="anonymous">
