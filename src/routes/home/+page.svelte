<script>
    import { onMount } from 'svelte';

    let welcomeText = '';
    let descriptionText = '';
    const fullWelcomeText = "Welcome to My Portfolio";
    const fullDescriptionText = "I’m glad you’re here! Explore my work and get to know me.";
    
    let welcomeIndex = 0;
    let descriptionIndex = 0;
    const typeSpeed = 30;

    onMount(() => {
        typeWriterWelcome(); // Start typing welcomeText
    });

    function typeWriterWelcome() {
        if (welcomeIndex < fullWelcomeText.length) {
            welcomeText += fullWelcomeText.charAt(welcomeIndex);
            welcomeIndex++;
            setTimeout(typeWriterWelcome, typeSpeed);
        } else {
            setTimeout(typeWriterDescription, 500); // After typing welcomeText, type descriptionText
        }
    }

    function typeWriterDescription() {
        if (descriptionIndex < fullDescriptionText.length) {
            descriptionText += fullDescriptionText.charAt(descriptionIndex);
            descriptionIndex++;
            setTimeout(typeWriterDescription, typeSpeed);
        }
    }
</script>

<main class="flex flex-col items-center justify-center min-h-screen p-12 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
    <!-- Header Section -->
    <header class="w-full flex justify-between items-center p-6 bg-gray-900 shadow-lg fixed top-0 left-0 z-10">
        <h1 class="text-3xl font-extrabold hover:text-cyan-400 transition duration-300">
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

    <!-- Welcome Section -->
    <section class="text-center mb-16 mt-24 pt-20">
        <h2 class="text-5xl font-bold mb-4">{welcomeText}</h2> <!-- Typing effect for Welcome text -->
        <p class="text-xl mb-4">{descriptionText}</p> <!-- Typing effect for description -->
    </section>
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
        position: fixed; /* Fixed to the top */
        top: 0; /* Ensure it stays at the top */
        left: 0; /* Align to the left */
        width: 100%; /* Full width */
        z-index: 10; /* Ensure it is above other content */
    }

    /* Hover effects for links */
    a {
        text-decoration: none; /* Remove underline */
    }

    /* Responsive styles can be added here */
    @media (max-width: 768px) {
        h2 {
            font-size: 3.5rem;
        }
        p {
            font-size: 1.2rem;
        }
    }
</style>

<!-- Include FontAwesome in your index.html -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" integrity="sha384-DyZ5uwHbH7+zWjx0GrF9w2A9zZ2d/74M0pEd+EqpAn0U4g9kWECu7jwyQ0IH4Y" crossorigin="anonymous">
