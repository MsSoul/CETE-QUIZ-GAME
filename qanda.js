/*const questions = [
    { questionText: "What is the brain of the computer?", answer: "CPU" },
    { questionText: "Which part of the computer stores data long-term?", answer: "Hard Drive" },
    { questionText: "What component is used to cool the CPU?", answer: "CPU Cooler" },
    { questionText: "Which device is used to display output from the computer?", answer: "Monitor" },
    { questionText: "What is the main circuit board of a computer?", answer: "Motherboard" },

    // Scientists related to computing (5 questions)
    { questionText: "Who is known as the father of computers?", answer: "Charles Babbage" },
    { questionText: "Who is considered the first computer programmer?", answer: "Ada Lovelace" },
    { questionText: "Was the first computer programmer a boy or a girl?", answer: "Girl" },
    { questionText: "Who invented the World Wide Web?", answer: "Tim Berners-Lee" },
    { questionText: "Who is known for creating the first algorithm intended to be processed by a machine?", answer: "Ada Lovelace" },

    // Common Software and Services (10 questions)
    { questionText: "Which software is used to create spreadsheets?", answer: "Excel" },
    { questionText: "Which software is commonly used to write documents?", answer: "Word" },
    { questionText: "Which search engine is the most popular?", answer: "Google" },
    { questionText: "Which software is used for creating presentations?", answer: "PowerPoint" },
    { questionText: "Which cloud storage service is offered by Google?", answer: "Google Drive" },
    { questionText: "Which platform is used for social networking?", answer: "Facebook" },
    { questionText: "Which app is popular for short video content?", answer: "TikTok" },
    { questionText: "Which AI chatbot is widely used for generating text?", answer: "ChatGPT" },
    { questionText: "Which AI tool is used for generating images from text prompts?", answer: "Bing Designer" },
    { questionText: "Which app is used for sending instant messages?", answer: "Messenger" },

    // Tech Logos (10 questions)
    { questionText: "Guess the logo:", answer: "Microsoft Excel", image: "Microsoft Excel.png" },
    { questionText: "Guess the logo:", answer: "Microsoft Windows", image: "Microsoft windows.png" },
    { questionText: "Guess the logo:", answer: "Microsoft Azure", image: "Microsoft_Azure.png" },
    { questionText: "Guess the logo:", answer: "ChatGPT", image: "ChatGPT.png" },
    { questionText: "Guess the logo:", answer: "YouTube", image: "YouTube.jpg" },
    { questionText: "Guess the logo:", answer: "Google", image: "Google.png" },
    { questionText: "Guess the logo:", answer: "Bing AI", image: "Bing AI.png" },
    { questionText: "Guess the logo:", answer: "Google Meet", image: "Google Meet.png" },
    { questionText: "Guess the logo:", answer: "Google Play or Google Playstore", image: "Google Play or Google Playstore.png" },
    { questionText: "Guess the logo:", answer: "Google Settings", image: "Google Settings.png" },

    // Computer Keyboard Shortcuts (5 questions)
    { questionText: "What does Ctrl + C do?", answer: "Copy" },
    { questionText: "What does Ctrl + V do?", answer: "Paste" },
    { questionText: "What does Ctrl + X do?", answer: "Cut" },
    { questionText: "What does Ctrl + Z do?", answer: "Undo" },
    { questionText: "What does Ctrl + A do?", answer: "Select All" },

    // General Technology (15 questions with acronyms and common terms)
    { questionText: "What does AI stand for?", answer: "Artificial Intelligence" },
    { questionText: "What does QR stand for in QR code?", answer: "Quick Response" },
    { questionText: "What does SMS stand for?", answer: "Short Message Service" },
    { questionText: "What does HTTP stand for?", answer: "HyperText Transfer Protocol" },
    { questionText: "What does URL stand for?", answer: "Uniform Resource Locator" },
    { questionText: "What does PIN stand for?", answer: "Personal Identification Number" },
    { questionText: "What does IP stand for in IP address?", answer: "Internet Protocol" },
    { questionText: "What does USB stand for?", answer: "Universal Serial Bus" },
    { questionText: "What does LED stand for?", answer: "Light Emitting Diode" },
    { questionText: "What does PNG stand for?", answer: "Portable Network Graphics" },
    { questionText: "What does VPN stand for?", answer: "Virtual Private Network" },
    { questionText: "What does Wi-Fi stand for?", answer: "Wireless Fidelity" },
    { questionText: "What does JPEG stand for?", answer: "Joint Photographic Experts Group" },
    { questionText: "What does MAC stand for in MAC address?", answer: "Media Access Control" },
    { questionText: "What does WWW stand for?", answer: "World Wide Web" }
];

const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
};

shuffleArray(questions);

const countdown = (seconds) => {
    document.getElementById('countdown').innerText = `${seconds}`; // Set initial countdown
    return new Promise((resolve) => {
        const interval = setInterval(() => {
            if (seconds > 0) {
                seconds--;
                document.getElementById('countdown').innerText = `${seconds}`;
            } else {
                clearInterval(interval);
                resolve();
            }
        }, 1000);
    });
};

const showQuestion = (question) => {
    if (question.image) {
        document.getElementById('question').innerHTML = `
            <div style="text-align: center;">
                <p>${question.questionText}</p>
                <div style="background-color: white; padding: 20px; border-radius: 10px; display: inline-block;">
                    <img src="${question.image}" alt="Logo" style="width: 150px; height: 150px; object-fit: contain;">
                </div>
            </div>`;
    } else {
        document.getElementById('question').innerText = `Question: ${question.questionText}`;
    }
    document.getElementById('question-container').style.display = 'block';
};

const showAnswer = (answer) => {
    document.getElementById('question-container').style.display = 'none';
    document.getElementById('answer').innerText = `Answer: ${answer}`;
    document.getElementById('answer-container').style.display = 'block';
};

document.getElementById('submit-btn').addEventListener('click', async () => {
    const choice = parseInt(document.getElementById('number-input').value);
    if (choice >= 1 && choice <= 50) {
        document.getElementById('input-container').style.display = 'none';
        document.getElementById('quiz-container').style.display = 'block';

        // Request fullscreen mode
        if (document.documentElement.requestFullscreen) {
            await document.documentElement.requestFullscreen();
        } else if (document.documentElement.mozRequestFullScreen) { 
            await document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullscreen) { 
            await document.documentElement.webkitRequestFullscreen();
        } else if (document.documentElement.msRequestFullscreen) { 
            await document.documentElement.msRequestFullscreen();
        }

        const question = questions[choice - 1];
        showQuestion(question);
        await countdown(30);  // Start countdown at 30 seconds
        showAnswer(question.answer);
    } else {
        alert("Invalid choice. Please choose a number between 1 and 50.");
    }
});

document.getElementById('close-btn').addEventListener('click', () => {
    document.getElementById('answer-container').style.display = 'none';
    document.getElementById('quiz-container').style.display = 'none'; // Hide quiz container
    document.getElementById('input-container').style.display = 'flex'; // Show input container

    // Reset any state-related variables or content if needed
    document.getElementById('number-input').value = ''; // Clear input

    // Exit fullscreen mode
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) { 
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { 
        document.msExitFullscreen();
    }
});*/

const originalQuestions = [
    { questionText: "What is the brain of the computer?", answer: "CPU" },
    { questionText: "Which part of the computer stores data long-term?", answer: "Hard Drive" },
    { questionText: "What component is used to cool the CPU?", answer: "CPU Cooler" },
    { questionText: "Which device is used to display output from the computer?", answer: "Monitor" },
    { questionText: "What is the main circuit board of a computer?", answer: "Motherboard" },

    // Scientists related to computing (5 questions)
    { questionText: "Who is known as the father of computers?", answer: "Charles Babbage" },
    { questionText: "Who is considered the first computer programmer?", answer: "Ada Lovelace" },
    { questionText: "Was the first computer programmer a boy or a girl?", answer: "Girl" },
    { questionText: "Who invented the World Wide Web?", answer: "Tim Berners-Lee" },
    { questionText: "Who is known for creating the first algorithm intended to be processed by a machine?", answer: "Ada Lovelace" },

    // Common Software and Services (10 questions)
    { questionText: "Which software is used to create spreadsheets?", answer: "Excel" },
    { questionText: "Which software is commonly used to write documents?", answer: "Word" },
    { questionText: "Which search engine is the most popular?", answer: "Google" },
    { questionText: "Which software is used for creating presentations?", answer: "PowerPoint" },
    { questionText: "Which cloud storage service is offered by Google?", answer: "Google Drive" },
    { questionText: "Which platform is used for social networking?", answer: "Facebook" },
    { questionText: "Which app is popular for short video content?", answer: "TikTok" },
    { questionText: "Which AI chatbot is widely used for generating text?", answer: "ChatGPT" },
    { questionText: "Which AI tool is used for generating images from text prompts?", answer: "Bing Designer" },
    { questionText: "Which app is used for sending instant messages?", answer: "Messenger" },

    // Tech Logos (10 questions)
    { questionText: "Guess the logo:", answer: "Microsoft Excel", image: "Microsoft Excel.png" },
    { questionText: "Guess the logo:", answer: "Microsoft Windows", image: "Microsoft windows.png" },
    { questionText: "Guess the logo:", answer: "Microsoft Azure", image: "Microsoft_Azure.png" },
    { questionText: "Guess the logo:", answer: "ChatGPT", image: "ChatGPT.png" },
    { questionText: "Guess the logo:", answer: "YouTube", image: "YouTube.jpg" },
    { questionText: "Guess the logo:", answer: "Google", image: "Google.png" },
    { questionText: "Guess the logo:", answer: "Bing AI", image: "Bing AI.png" },
    { questionText: "Guess the logo:", answer: "Google Meet", image: "Google Meet.png" },
    { questionText: "Guess the logo:", answer: "Google Play or Google Playstore", image: "Google Play or Google Playstore.png" },
    { questionText: "Guess the logo:", answer: "Google Settings", image: "Google Settings.png" },

    // Computer Keyboard Shortcuts (5 questions)
    { questionText: "What does Ctrl + C do?", answer: "Copy" },
    { questionText: "What does Ctrl + V do?", answer: "Paste" },
    { questionText: "What does Ctrl + X do?", answer: "Cut" },
    { questionText: "What does Ctrl + Z do?", answer: "Undo" },
    { questionText: "What does Ctrl + A do?", answer: "Select All" },

    // General Technology (15 questions with acronyms and common terms)
    { questionText: "What does AI stand for?", answer: "Artificial Intelligence" },
    { questionText: "What does QR stand for in QR code?", answer: "Quick Response" },
    { questionText: "What does SMS stand for?", answer: "Short Message Service" },
    { questionText: "What does HTTP stand for?", answer: "HyperText Transfer Protocol" },
    { questionText: "What does URL stand for?", answer: "Uniform Resource Locator" },
    { questionText: "What does PIN stand for?", answer: "Personal Identification Number" },
    { questionText: "What does IP stand for in IP address?", answer: "Internet Protocol" },
    { questionText: "What does USB stand for?", answer: "Universal Serial Bus" },
    { questionText: "What does LED stand for?", answer: "Light Emitting Diode" },
    { questionText: "What does PNG stand for?", answer: "Portable Network Graphics" },
    { questionText: "What does VPN stand for?", answer: "Virtual Private Network" },
    { questionText: "What does Wi-Fi stand for?", answer: "Wireless Fidelity" },
    { questionText: "What does JPEG stand for?", answer: "Joint Photographic Experts Group" },
    { questionText: "What does MAC stand for in MAC address?", answer: "Media Access Control" },
    { questionText: "What does WWW stand for?", answer: "World Wide Web" }
];

let questions = [...originalQuestions]; // Copy of the original questions array
const usedQuestions = new Set(); // Track used questions

const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
};

const getNextQuestion = () => {
    shuffleArray(questions);
    let question = questions.pop(); // Get a question and remove it from the array
    usedQuestions.add(question.questionText); // Track the question so it doesn't get reused
    if (questions.length === 0) { // If all questions have been used, reset the array
        questions = [...originalQuestions];
        usedQuestions.clear();
    }
    return question;
};

const countdown = (seconds) => {
    document.getElementById('countdown').innerText = `${seconds}`; // Set initial countdown
    return new Promise((resolve) => {
        const interval = setInterval(() => {
            if (seconds > 0) {
                seconds--;
                document.getElementById('countdown').innerText = `${seconds}`;
            } else {
                clearInterval(interval);
                resolve();
            }
        }, 1000);
    });
};

const showQuestion = (question) => {
    if (question.image) {
        document.getElementById('question').innerHTML = `
            <div style="text-align: center;">
                <p>${question.questionText}</p>
                <div style="background-color: white; padding: 20px; border-radius: 10px; display: inline-block;">
                    <img src="${question.image}" alt="Logo" style="width: 150px; height: 150px; object-fit: contain;">
                </div>
            </div>`;
    } else {
        document.getElementById('question').innerText = `Question: ${question.questionText}`;
    }
    document.getElementById('question-container').style.display = 'block';
};

const showAnswer = (answer) => {
    document.getElementById('question-container').style.display = 'none';
    document.getElementById('answer').innerText = `Answer: ${answer}`;
    document.getElementById('answer-container').style.display = 'block';
    document.getElementById('won-btn').style.display = 'inline-block';
    document.getElementById('lose-btn').style.display = 'inline-block';
};

document.getElementById('submit-btn').addEventListener('click', async () => {
    const choice = parseInt(document.getElementById('number-input').value);
    if (choice >= 1 && choice <= 50) {
        document.getElementById('input-container').style.display = 'none';
        document.getElementById('quiz-container').style.display = 'block';

        // Request fullscreen mode
        if (document.documentElement.requestFullscreen) {
            await document.documentElement.requestFullscreen();
        } else if (document.documentElement.mozRequestFullScreen) { 
            await document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullscreen) { 
            await document.documentElement.webkitRequestFullscreen();
        } else if (document.documentElement.msRequestFullscreen) { 
            await document.documentElement.msRequestFullscreen();
        }

        const question = getNextQuestion();
        showQuestion(question);
        await countdown(10);  
        showAnswer(question.answer);
    } else {
        alert("Invalid choice. Please choose a number between 1 and 50.");
    }
});

document.getElementById('won-btn').addEventListener('click', () => {
    window.location.href = "winner.html"; // Redirect to winner.html
});

document.getElementById('lose-btn').addEventListener('click', () => {
    document.getElementById('answer-container').style.display = 'none';
    document.getElementById('quiz-container').style.display = 'none'; // Hide quiz container
    document.getElementById('input-container').style.display = 'flex'; // Show input container

    // Reset any state-related variables or content if needed
    document.getElementById('number-input').value = ''; // Clear input

    // Hide win/lose buttons
    document.getElementById('won-btn').style.display = 'none';
    document.getElementById('lose-btn').style.display = 'none';

    // Exit fullscreen mode
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) { /* Firefox */
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE/Edge */
        document.msExitFullscreen();
    }
});