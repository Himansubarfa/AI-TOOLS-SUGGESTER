// ==================== DATA ====================
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

// ==================== SYNONYMS ====================
const TASK_SYNONYMS = {
    'image': [1,2,14,15], 'images': [1,2,14,15], 'photo': [1,2,14,15], 'photos': [1,2,14,15],
    'picture': [1,2,14,15], 'pictures': [1,2,14,15],
    'image editor': [1,14,15,8], 'image editors': [1,14,15,8], 'image eraser': [1],
    'photo editor': [1,14,15], 'photo editors': [1,14,15],
    'picture editor': [1,14,15], 'picture editors': [1,14,15],
    'background': [1], 'back': [1], 'background remover': [1], 'background removers': [1], 'remove background': [1],
    'edit': [1,14,15,8], 'editing': [1,14,15,8], 'fix': [1,14,15],
    'enhance': [15], 'enhancing': [15], 'improve': [15],
    'color': [14], 'colors': [14], 'colour': [14],
    'video': [8], 'videos': [8], 'movie': [8], 'movies': [8], 'clip': [8], 'clips': [8], 'film': [8],
    'video editor': [8], 'video editors': [8], 'edit video': [8], 'edit videos': [8],
    'audio': [3,12], 'sound': [3,12], 'speech': [3], 'transcribe': [3], 'transcription': [3], 'speech to text': [3],
    'music': [12], 'song': [12], 'songs': [12], 'compose': [12], 'music generator': [12], 'sound editor': [3,12],
    'code': [6], 'codes': [6], 'program': [6], 'programming': [6], 'script': [6], 'scripts': [6],
    'software': [6], 'developer': [6], 'code assistant': [6], 'coding assistant': [6], 'programming assistant': [6],
    'write': [10,5], 'writing': [10,5], 'blog': [10], 'blogs': [10], 'article': [10], 'articles': [10],
    'post': [10], 'posts': [10], 'content': [10],
    'summarize': [5], 'summary': [5], 'summarising': [5], 'shorten': [5],
    'translate': [7], 'translation': [7], 'language': [7], 'languages': [7], 'translation tool': [7],
    'chat': [9], 'chats': [9], 'talk': [9], 'talking': [9], 'conversation': [9],
    'bot': [9], 'bots': [9], 'chat bot': [9], 'chatbots': [9], 'conversational ai': [9],
    'logo': [4], 'logos': [4], 'brand': [4], 'branding': [4], 'design': [4,2], 'designing': [4,2],
    'logo design': [4], 'graphic design': [2,4,14],
    'detect': [13], 'detection': [13], 'object': [13], 'objects': [13], 'recognize': [13],
    'recognition': [13], 'eye': [13], 'vision': [13], 'object detection': [13], 'image recognition': [13],
    'ai': [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
    'artificial': [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
    'intelligence': [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
    'create': [2,8,4,12], 'creating': [2,8,4,12],
    'generate': [2,6,8,12], 'generating': [2,6,8,12],
    'make': [2,8,4,12], 'making': [2,8,4,12],
    'sentiment analysis': [11]
};

// ==================== DOM REFS ====================
const taskGrid = document.getElementById('task-grid');
const taskGridSkeleton = document.getElementById('task-grid-skeleton');
const resultsSection = document.getElementById('results-section');
const selectedTaskSpan = document.getElementById('selected-task');
const resultsGrid = document.getElementById('results-grid');
const resultsGridSkeleton = document.getElementById('results-grid-skeleton');
const mobileMenuBtn = document.querySelector('.mobile-menu');
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-btn');
const suggestionsList = document.getElementById('suggestions-list');
const popupOverlay = document.getElementById('popup-overlay');
const popupCloseBtn = document.getElementById('popup-close-btn');
const spinner = document.getElementById('search-spinner');

// ==================== SEARCH HISTORY ====================
const MAX_HISTORY = 5;
let searchHistory = JSON.parse(localStorage.getItem('aiToolSearchHistory')) || [];

function addToHistory(query) {
    query = query.trim();
    if (!query) return;
    searchHistory = searchHistory.filter(item => item.toLowerCase() !== query.toLowerCase());
    searchHistory.unshift(query);
    if (searchHistory.length > MAX_HISTORY) searchHistory.pop();
    localStorage.setItem('aiToolSearchHistory', JSON.stringify(searchHistory));
}

function getHistory() { return searchHistory; }

// ==================== SKELETON ====================
function showSkeletons() {
    taskGridSkeleton.style.display = 'grid';
    taskGrid.style.display = 'none';
    resultsGridSkeleton.style.display = 'grid';
    resultsGrid.style.display = 'none';
    resultsSection.style.display = 'block';
}

function hideSkeletonsAndShowReal() {
    taskGridSkeleton.style.display = 'none';
    taskGrid.style.display = 'grid';
    resultsGridSkeleton.style.display = 'none';
    resultsGrid.style.display = 'grid';
}

// ==================== RENDER TASKS ====================
function renderTasks() {
    taskGrid.innerHTML = '';
    tasks.forEach(task => {
        const card = document.createElement('div');
        card.className = 'task-card';
        card.dataset.taskId = task.id;
        card.innerHTML = `
            <div class="task-card-visible">
                <i class="${task.icon}"></i>
                <h3>${task.name}</h3>
            </div>
            <div class="task-card-hover">
                <h4>Popular Tools:</h4>
                <ul>
                    ${(tools[task.id] || []).slice(0,3).map(t => `
                        <li><a href="${t.url}" class="tool-link" target="_blank" rel="noopener">${t.name}</a></li>
                    `).join('')}
                </ul>
            </div>
        `;
        taskGrid.appendChild(card);
    });
}

// ==================== RENDER TOOLS FOR TASK ====================
function renderToolsForTask(taskId) {
    const task = tasks.find(t => t.id == taskId);
    if (!task) return;
    selectedTaskSpan.textContent = task.name;
    resultsGrid.innerHTML = '';
    resultsSection.style.display = 'block';
    const list = tools[taskId] || [];
    list.forEach(tool => {
        const card = document.createElement('div');
        card.className = 'tool-card';
        card.innerHTML = `
            <h3>${tool.name}</h3>
            <p>${tool.description}</p>
            <a href="${tool.url}" class="btn-secondary" target="_blank" rel="noopener">Visit Tool</a>
        `;
        resultsGrid.appendChild(card);
    });
    if (!list.length) resultsGrid.innerHTML = '<p>No tools found.</p>';
    resultsGridSkeleton.style.display = 'none';
    resultsGrid.style.display = 'grid';
    resultsSection.scrollIntoView({ behavior: 'smooth' });
}

// ==================== DISPLAY SEARCH RESULTS ====================
function displayFullToolsForTasks(taskIds, query) {
    const taskNames = taskIds.map(id => tasks.find(t => t.id == id)?.name).filter(Boolean).join(', ');
    selectedTaskSpan.textContent = `Search results for "${query}" (${taskNames})`;
    resultsGrid.innerHTML = '';
    resultsSection.style.display = 'block';
    taskIds.forEach((id, idx) => {
        const task = tasks.find(t => t.id == id);
        if (!task) return;
        if (taskIds.length > 1) {
            const header = document.createElement('div');
            header.style.cssText = `grid-column:1/-1; margin-top:${idx===0?'0':'30px'}; border-bottom:2px solid #e0e0e0; padding-bottom:10px;`;
            header.innerHTML = `<h2 style="color:#333; font-size:1.5rem;"><i class="${task.icon}"></i> ${task.name}</h2>`;
            resultsGrid.appendChild(header);
        }
        const list = tools[id] || [];
        list.forEach(tool => {
            const card = document.createElement('div');
            card.className = 'tool-card';
            card.innerHTML = `
                <h3>${tool.name}</h3>
                <p>${tool.description}</p>
                <a href="${tool.url}" class="btn-secondary" target="_blank" rel="noopener">Visit Tool</a>
            `;
            resultsGrid.appendChild(card);
        });
    });
    resultsGridSkeleton.style.display = 'none';
    resultsGrid.style.display = 'grid';
    resultsSection.scrollIntoView({ behavior: 'smooth' });
}

// ==================== SMART SEARCH ====================
function getExpandedTaskIds(query) {
    const tokens = query.toLowerCase().trim().split(/\s+/).filter(t => t.length > 0);
    const matched = new Set();

    const stem = w => w.replace(/(ing|s|es|ed)$/, '');

    tasks.forEach(task => {
        const name = task.name.toLowerCase();
        if (tokens.some(t => name.includes(t) || name.includes(stem(t)))) {
            matched.add(task.id);
        }
    });
    for (const [id, list] of Object.entries(tools)) {
        for (const tool of list) {
            const text = (tool.name + ' ' + tool.description).toLowerCase();
            if (tokens.some(t => text.includes(t) || text.includes(stem(t)))) {
                matched.add(Number(id));
            }
        }
    }

    for (const token of tokens) {
        const stemmed = stem(token);
        if (TASK_SYNONYMS[token]) TASK_SYNONYMS[token].forEach(id => matched.add(id));
        if (TASK_SYNONYMS[stemmed] && stemmed !== token) TASK_SYNONYMS[stemmed].forEach(id => matched.add(id));
    }
    const full = query.toLowerCase().trim();
    if (TASK_SYNONYMS[full]) TASK_SYNONYMS[full].forEach(id => matched.add(id));
    const stemFull = stem(full);
    if (TASK_SYNONYMS[stemFull] && stemFull !== full) TASK_SYNONYMS[stemFull].forEach(id => matched.add(id));

    return matched;
}

// ==================== PERFORM SEARCH ====================
function performSearch(query) {
    if (!query.trim()) return;
    addToHistory(query);
    spinner.classList.add('show');
    setTimeout(() => {
        const matched = getExpandedTaskIds(query);
        spinner.classList.remove('show');
        if (matched.size === 0) {
            showPopup();
            return;
        }
        displayFullToolsForTasks(Array.from(matched), query);
        hideSuggestions();
    }, 150);
}

// ==================== SUGGESTIONS (history + real‑time) ====================
let debounceTimer;

function handleSearchInput(e) {
    const query = e.target.value.trim();
    clearTimeout(debounceTimer);
    if (query.length === 0) {
        showHistorySuggestions();
        return;
    }
    spinner.classList.add('show');
    debounceTimer = setTimeout(() => {
        const matched = getExpandedTaskIds(query);
        spinner.classList.remove('show');
        const suggestions = [];
        matched.forEach(id => {
            const task = tasks.find(t => t.id === id);
            if (task) suggestions.push({ label: task.name, taskId: id });
        });
        const seen = new Set();
        const unique = suggestions.filter(s => {
            if (seen.has(s.label)) return false;
            seen.add(s.label);
            return true;
        });
        renderSuggestions(unique.slice(0, 8));
    }, 100);
}

function showHistorySuggestions() {
    const history = getHistory();
    if (history.length === 0) {
        hideSuggestions();
        return;
    }
    const items = history.map(q => ({ label: q, taskId: null }));
    renderSuggestions(items);
}

function renderSuggestions(suggestions) {
    suggestionsList.innerHTML = '';
    if (suggestions.length === 0) {
        hideSuggestions();
        return;
    }
    suggestions.forEach(s => {
        const li = document.createElement('li');
        li.textContent = s.label; // 👈 Only the text – no "task" label
        li.dataset.taskId = s.taskId;
        li.addEventListener('mousedown', (e) => {
            e.preventDefault();
            searchInput.value = s.label;
            hideSuggestions();
            if (s.taskId !== null) {
                renderToolsForTask(s.taskId);
            } else {
                performSearch(s.label);
            }
        });
        suggestionsList.appendChild(li);
    });
    suggestionsList.style.display = 'block';
}

function hideSuggestions() {
    suggestionsList.style.display = 'none';
    suggestionsList.innerHTML = '';
}

// ==================== POPUP ====================
function showPopup() {
    popupOverlay.style.display = 'flex';
    popupCloseBtn.focus();
}

function hidePopup() {
    popupOverlay.style.display = 'none';
    searchInput.focus();
}

// ==================== INIT ====================
function init() {
    showSkeletons();
    setTimeout(() => {
        renderTasks();
        hideSkeletonsAndShowReal();
        resultsSection.style.display = 'none';
        setupEventListeners();
    }, 300);
}

// ==================== EVENT LISTENERS ====================
function setupEventListeners() {
    taskGrid.addEventListener('click', (e) => {
        const link = e.target.closest('.tool-link');
        if (link) { e.stopPropagation(); return; }
        const card = e.target.closest('.task-card');
        if (!card) return;
        document.querySelectorAll('.task-card').forEach(c => c.classList.remove('active'));
        card.classList.add('active');
        renderToolsForTask(card.dataset.taskId);
        hideSuggestions();
    });

    document.querySelectorAll('.tool-link').forEach(link => {
        link.addEventListener('touchstart', e => e.stopPropagation());
    });

    mobileMenuBtn.addEventListener('click', () => {
        const nav = document.querySelector('.nav');
        nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
    });
    window.addEventListener('resize', () => {
        const nav = document.querySelector('.nav');
        if (window.innerWidth > 768) nav.style.display = 'flex';
        else nav.style.display = 'none';
    });

    searchInput.addEventListener('input', handleSearchInput);
    searchInput.addEventListener('focus', () => {
        if (searchInput.value.trim().length === 0) {
            showHistorySuggestions();
        } else {
            const matched = getExpandedTaskIds(searchInput.value.trim());
            const suggestions = [];
            matched.forEach(id => {
                const task = tasks.find(t => t.id === id);
                if (task) suggestions.push({ label: task.name, taskId: id });
            });
            const seen = new Set();
            const unique = suggestions.filter(s => {
                if (seen.has(s.label)) return false;
                seen.add(s.label);
                return true;
            });
            renderSuggestions(unique.slice(0, 8));
        }
    });
    searchInput.addEventListener('blur', () => setTimeout(hideSuggestions, 150));
    searchButton.addEventListener('click', () => {
        performSearch(searchInput.value);
        hideSuggestions();
    });
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            performSearch(searchInput.value);
            hideSuggestions();
        }
    });

    popupCloseBtn.addEventListener('click', hidePopup);
    popupOverlay.addEventListener('click', (e) => {
        if (e.target === popupOverlay) hidePopup();
    });
    document.addEventListener('keydown', (e) => {
        if (popupOverlay.style.display === 'flex' && (e.key === 'Escape' || e.key === 'Enter')) {
            e.preventDefault();
            hidePopup();
        }
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const target = document.querySelector(targetId);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
                document.querySelectorAll('.nav a').forEach(l => l.classList.remove('active'));
                this.classList.add('active');
                if (window.innerWidth <= 768) {
                    document.querySelector('.nav').style.display = 'none';
                }
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', init);
