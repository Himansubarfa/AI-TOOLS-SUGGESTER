// AI task data
const tasks = [
    { id: 1, name: "Remove Image Background", icon: "fa-solid fa-cut" },
    { id: 2, name: "Create AI Images", icon: "fa-solid fa-image" },
    { id: 3, name: "Transcribe Audio", icon: "fa-solid fa-microphone" },
    { id: 4, name: "Design Logos", icon: "fa-solid fa-pen-nib" },
    { id: 5, name: "Summarize Text", icon: "fa-solid fa-align-left" },
    { id: 6, name: "Generate Code", icon: "fa-solid fa-code" },
    { id: 7, name: "Translate Text", icon: "fa-solid fa-language" },
    { id: 8, name: "Generate Videos", icon: "fa-solid fa-video" },
    { id: 9, name: "Chatbots", icon: "fa-solid fa-comments" },
    { id: 10, name: "Write Blog Posts", icon: "fa-solid fa-pen-fancy" },
    { id: 11, name: "Analyze Sentiment", icon: "fa-solid fa-chart-line" },
    { id: 12, name: "Generate Music", icon: "fa-solid fa-music" },
    { id: 13, name: "Detect Objects", icon: "fa-solid fa-eye" },
    { id: 14, name: "Colorize Images", icon: "fa-solid fa-palette" },
    { id: 15, name: "Enhance Photos", icon: "fa-solid fa-wand-magic-sparkles" }
];

// Sample AI tools data with actual URLs
const tools = {
    1: [
        { name: "Remove.bg", description: "AI-powered tool that removes backgrounds from images instantly with high accuracy.", url: "https://www.remove.bg/" },
        { name: "BackgroundEraser", description: "Smart tool that uses AI to distinguish between foreground and background for perfect removal.", url: "https://www.backgrounderaser.io/" },
        { name: "ClipDrop", description: "Remove backgrounds and create stunning visuals with this powerful AI tool.", url: "https://clipdrop.co/" },
        { name: "Erase.bg", description: "Free background remover with batch processing capabilities.", url: "https://www.erase.bg/" },
        { name: "Slazzer", description: "Precision background removal with edge detection technology.", url: "https://www.slazzer.com/" }
    ],
    2: [
        { name: "DALL-E", description: "Create realistic images and art from natural language descriptions.", url: "https://openai.com/dall-e/" },
        { name: "Midjourney", description: "Generate detailed AI art based on text prompts with stunning quality.", url: "https://www.midjourney.com/" },
        { name: "Stable Diffusion", description: "Open-source text-to-image AI model that creates high-quality images from descriptions.", url: "https://stablediffusionweb.com/" },
        { name: "Artbreeder", description: "Create unique images by blending and evolving existing art with AI.", url: "https://www.artbreeder.com/" },
        { name: "NightCafe", description: "Easy-to-use AI art generator with multiple style options.", url: "https://nightcafe.studio/" }
    ],
    3: [
        { name: "Whisper AI", description: "Powerful speech recognition system that transcribes audio with high accuracy.", url: "https://openai.com/research/whisper" },
        { name: "Otter.ai", description: "AI-powered transcription service with real-time capabilities and speaker identification.", url: "https://otter.ai/" },
        { name: "Rev", description: "Combines AI transcription with human review for extremely accurate results.", url: "https://www.rev.com/" },
        { name: "Sonix", description: "Automated transcription with timestamps and speaker labeling.", url: "https://sonix.ai/" },
        { name: "Trint", description: "AI transcription platform with collaborative editing features.", url: "https://trint.com/" }
    ],
    4: [
        { name: "Looka", description: "AI-powered logo maker that creates custom logos based on your preferences.", url: "https://looka.com/" },
        { name: "Brandmark", description: "Uses AI to generate professional logo designs and complete brand identity.", url: "https://brandmark.io/" },
        { name: "LogoAI", description: "Create stunning logos in seconds with advanced AI technology.", url: "https://www.logoai.com/" },
        { name: "Tailor Brands", description: "AI-powered platform for custom logo design and brand identity.", url: "https://www.tailorbrands.com/" },
        { name: "Logojoy", description: "Generate professional logos based on your design preferences.", url: "https://logojoy.com/" }
    ],
    5: [
        { name: "Quillbot", description: "AI summarizer that condenses articles, papers, and documents while preserving key information.", url: "https://quillbot.com/" },
        { name: "TLDR This", description: "Extract the key points from long texts with this AI summarization tool.", url: "https://tldrthis.com/" },
        { name: "Summify", description: "Smart AI that creates concise summaries of complex documents.", url: "https://summify.io/" },
        { name: "Resoomer", description: "AI tool that analyzes and summarizes text documents in multiple languages.", url: "https://resoomer.com/" },
        { name: "Wordtune", description: "AI assistant that summarizes long documents into clear, concise text.", url: "https://www.wordtune.com/" }
    ],
    6: [
        { name: "GitHub Copilot", description: "AI pair programmer that helps you write code faster with suggestions based on comments.", url: "https://github.com/features/copilot" },
        { name: "Tabnine", description: "AI code completion tool that works across all popular programming languages.", url: "https://www.tabnine.com/" },
        { name: "CodeWhisperer", description: "AI-powered coding companion that provides real-time suggestions.", url: "https://aws.amazon.com/codewhisperer/" },
        { name: "Replit Ghostwriter", description: "AI coding assistant integrated with Replit's online IDE.", url: "https://replit.com/" },
        { name: "Codeium", description: "Free AI coding assistant with multi-language support.", url: "https://codeium.com/" }
    ],
    7: [
        { name: "DeepL", description: "AI translation tool that produces more natural-sounding translations than traditional services.", url: "https://www.deepl.com/" },
        { name: "Google Translate", description: "Powerful AI translation for over 100 languages with contextual understanding.", url: "https://translate.google.com/" },
        { name: "Linguee", description: "Translation tool with AI-powered suggestions and real-world examples.", url: "https://www.linguee.com/" },
        { name: "Unbabel", description: "AI-powered translation platform with human refinement.", url: "https://unbabel.com/" },
        { name: "SYSTRAN", description: "Neural machine translation with specialized industry vocabularies.", url: "https://www.systransoft.com/" }
    ],
    8: [
        { name: "Synthesia", description: "Create AI videos with virtual presenters speaking your script in multiple languages.", url: "https://www.synthesia.io/" },
        { name: "Runway", description: "AI video generation and editing tool with advanced creative features.", url: "https://runwayml.com/" },
        { name: "Lumen5", description: "Transform text content into engaging video presentations with AI assistance.", url: "https://lumen5.com/" },
        { name: "Fliki", description: "Turn text into videos with AI-generated voiceovers.", url: "https://fliki.ai/" },
        { name: "Elai", description: "Create AI videos from text with digital avatars and natural voices.", url: "https://elai.io/" }
    ],
    9: [
        { name: "ChatGPT", description: "Advanced AI chatbot capable of natural conversations and assisting with various tasks.", url: "https://chat.openai.com/" },
        { name: "Claude", description: "AI assistant that can engage in helpful, harmless, and honest conversations.", url: "https://claude.ai/" },
        { name: "Botpress", description: "Open-source platform for building conversational AI assistants.", url: "https://botpress.com/" },
        { name: "Replika", description: "AI companion that creates personalized conversations with users.", url: "https://replika.ai/" },
        { name: "Kuki AI", description: "Award-winning conversational AI with personality and emotion.", url: "https://www.kuki.ai/" }
    ],
    10: [
        { name: "Jasper", description: "AI writing assistant that helps create blog posts, articles, and marketing content.", url: "https://www.jasper.ai/" },
        { name: "Copy.ai", description: "Generate high-quality blog content with AI trained on millions of examples.", url: "https://www.copy.ai/" },
        { name: "WordAI", description: "AI tool that creates SEO-optimized blog content that reads like it was written by a human.", url: "https://wordai.com/" },
        { name: "Byword", description: "AI-powered content generator for blogs with SEO optimization.", url: "https://byword.ai/" },
        { name: "Writesonic", description: "AI writer that creates original, engaging blog posts at scale.", url: "https://writesonic.com/" }
    ],
    11: [
        { name: "MonkeyLearn", description: "AI-powered sentiment analysis tool for monitoring brand perception and customer feedback.", url: "https://monkeylearn.com/" },
        { name: "Brandwatch", description: "Advanced sentiment analysis platform with AI capabilities for deep insights.", url: "https://www.brandwatch.com/" },
        { name: "Lexalytics", description: "NLP-based sentiment analysis that understands context and emotion in text.", url: "https://www.lexalytics.com/" },
        { name: "Repustate", description: "Multilingual sentiment analysis with industry-specific models.", url: "https://www.repustate.com/" },
        { name: "Symanto", description: "AI-powered psychology-based sentiment and emotion analysis.", url: "https://www.symanto.com/" }
    ],
    12: [
        { name: "AIVA", description: "AI composer that creates original music for films, games, and commercials.", url: "https://www.aiva.ai/" },
        { name: "Amper Music", description: "AI music generation platform for creating custom scores and soundtracks.", url: "https://www.ampermusic.com/" },
        { name: "Soundraw", description: "AI-powered music creation tool that generates original tracks based on your preferences.", url: "https://soundraw.io/" },
        { name: "Mubert", description: "AI-generated royalty-free music with customizable parameters.", url: "https://mubert.com/" },
        { name: "Ecrett Music", description: "Create original music with AI for videos, podcasts, and games.", url: "https://ecrettmusic.com/" }
    ],
    13: [
        { name: "Roboflow", description: "Computer vision platform with AI-powered object detection capabilities.", url: "https://roboflow.com/" },
        { name: "Clarifai", description: "Advanced AI object detection and recognition for images and videos.", url: "https://www.clarifai.com/" },
        { name: "TensorFlow Object Detection", description: "Open-source framework for training and deploying object detection models.", url: "https://tensorflow.org/hub/tutorials/object_detection" },
        { name: "Ultralytics YOLOv8", description: "State-of-the-art object detection model with real-time capabilities.", url: "https://github.com/ultralytics/ultralytics" },
        { name: "Chooch AI", description: "Visual AI platform for object detection and recognition.", url: "https://chooch.ai/" }
    ],
    14: [
        { name: "Algorithmia", description: "AI-powered colorization tool that brings black and white images to life.", url: "https://algorithmia.com/" },
        { name: "Colorizely", description: "Automatically add realistic colors to grayscale photos using advanced AI.", url: "https://colorizely.com/" },
        { name: "DeOldify", description: "Deep learning tool that colorizes and restores old images with impressive results.", url: "https://github.com/jantic/DeOldify" },
        { name: "Palette.fm", description: "Free AI colorizer with style options and batch processing.", url: "https://palette.fm/" },
        { name: "Colorize.cc", description: "Online tool that intelligently adds color to black and white photos.", url: "https://colorize.cc/" }
    ],
    15: [
        { name: "Topaz Labs", description: "AI photo enhancement suite that improves resolution, removes noise, and sharpens images.", url: "https://www.topazlabs.com/" },
        { name: "Let's Enhance", description: "AI-powered tool that upscales and enhances image quality without losing detail.", url: "https://letsenhance.io/" },
        { name: "Remini", description: "Photo enhancer that uses AI to fix blurry, old, or damaged photographs.", url: "https://remini.ai/" },
        { name: "Gigapixel AI", description: "Enlarge images up to 600% while preserving quality with AI.", url: "https://www.topazlabs.com/gigapixel-ai" },
        { name: "VanceAI", description: "All-in-one AI photo enhancement platform with multiple tools.", url: "https://vanceai.com/" }
    ]
};

// DOM Elements
const taskGrid = document.getElementById('task-grid');
const resultsSection = document.getElementById('results-section');
const selectedTaskSpan = document.getElementById('selected-task');
const resultsGrid = document.getElementById('results-grid');
const mobileMenuBtn = document.querySelector('.mobile-menu');

// Initialize the page
function init() {
    renderTasks();
    setupEventListeners();
}

// Render AI task cards
function renderTasks() {
    taskGrid.innerHTML = '';
    
    tasks.forEach(task => {
        const taskCard = document.createElement('div');
        taskCard.classList.add('task-card');
        taskCard.dataset.taskId = task.id;
        
        // Create visible content
        const visibleContent = document.createElement('div');
        visibleContent.classList.add('task-card-visible');
        visibleContent.innerHTML = `
            <i class="${task.icon}"></i>
            <h3>${task.name}</h3>
        `;
        
        // Create hover content with tools
        const hoverContent = document.createElement('div');
        hoverContent.classList.add('task-card-hover');
        
        // Get tools for this task
        const taskTools = tools[task.id] || [];
        let toolsHtml = '<h4>Popular Tools:</h4><ul>';
        
        // Add up to 3 tools in the hover state
        const displayTools = taskTools.slice(0, 3);
        displayTools.forEach(tool => {
            toolsHtml += `<li><a href="${tool.url}" class="tool-link" target="_blank" rel="noopener">${tool.name}</a></li>`;
        });
        
        toolsHtml += '</ul>';
        hoverContent.innerHTML = toolsHtml;
        
        // Append both contents
        taskCard.appendChild(visibleContent);
        taskCard.appendChild(hoverContent);
        
        taskGrid.appendChild(taskCard);
    });
}

// Render AI tools for a selected task
function renderToolsForTask(taskId) {
    // Find the task by ID
    const selectedTask = tasks.find(task => task.id == taskId);
    
    if (!selectedTask) return;
    
    // Update the selected task name
    selectedTaskSpan.textContent = selectedTask.name;
    
    // Clear previous results
    resultsGrid.innerHTML = '';
    
    // Show the results section
    resultsSection.style.display = 'block';
    
    // Get tools for the selected task
    const taskTools = tools[taskId] || [];
    
    // Render each tool
    taskTools.forEach(tool => {
        const toolCard = document.createElement('div');
        toolCard.classList.add('tool-card');
        
        toolCard.innerHTML = `
            <h3>${tool.name}</h3>
            <p>${tool.description}</p>
            <a href="${tool.url}" class="btn-secondary" target="_blank" rel="noopener">Visit Tool</a>
        `;
        
        resultsGrid.appendChild(toolCard);
    });
    
    // If no tools are found
    if (taskTools.length === 0) {
        resultsGrid.innerHTML = '<p>No tools found for this task.</p>';
    }
    
    // Scroll to results section
    resultsSection.scrollIntoView({ behavior: 'smooth' });
}

// Set up event listeners
function setupEventListeners() {
    // Task card click event with improved handling
    taskGrid.addEventListener('click', (e) => {
        const toolLink = e.target.closest('.tool-link');
        
        // If a tool link was clicked, don't execute the task card click handler
        if (toolLink) {
            e.stopPropagation(); // Stop event propagation
            return; // Exit the function early
        }
        
        const taskCard = e.target.closest('.task-card');
        if (!taskCard) return;
        
        // Remove active class from all task cards
        document.querySelectorAll('.task-card').forEach(card => {
            card.classList.remove('active');
        });
        
        // Add active class to clicked task card
        taskCard.classList.add('active');
        
        // Render tools for the selected task
        const taskId = taskCard.dataset.taskId;
        renderToolsForTask(taskId);
    });
    
    // Add touch events for mobile devices
    document.querySelectorAll('.tool-link').forEach(link => {
        link.addEventListener('touchstart', (e) => {
            // This prevents the task card click from being triggered on touch devices
            e.stopPropagation();
        });
    });
    
    // Mobile menu toggle with improved handling
    mobileMenuBtn.addEventListener('click', () => {
        const nav = document.querySelector('.nav');
        nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
    });
    
    // Handle responsive design resize
    window.addEventListener('resize', () => {
        const nav = document.querySelector('.nav');
        if (window.innerWidth > 768) { // Typical tablet breakpoint
            nav.style.display = 'flex'; // Ensure nav is visible on desktop
        } else {
            nav.style.display = 'none'; // Hide on mobile until toggled
        }
    });
    
    // Search functionality
    const searchInput = document.querySelector('.search-container input');
    const searchButton = document.querySelector('.btn-primary');
    
    searchButton.addEventListener('click', () => {
        performSearch(searchInput.value);
    });
    
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            performSearch(searchInput.value);
        }
    });
}

// Simple search functionality
function performSearch(query) {
    if (!query.trim()) return;
    
    query = query.toLowerCase();
    
    // Find matching tasks
    const matchingTasks = tasks.filter(task => 
        task.name.toLowerCase().includes(query)
    );
    
    // If we found a matching task, simulate clicking on it
    if (matchingTasks.length > 0) {
        const taskCard = document.querySelector(`.task-card[data-task-id="${matchingTasks[0].id}"]`);
        if (taskCard) {
            taskCard.click();
        }
    } else {
        // No matching tasks found
        alert('No matching AI tools found. Try a different search term.');
    }
}

// Initialize the page when DOM is loaded
document.addEventListener('DOMContentLoaded', init);