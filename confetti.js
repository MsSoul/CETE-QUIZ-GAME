class Confettiful {
    constructor(el) {
        this.el = el;
        this.containerEl = null;

        this.confettiFrequency = 3;
        this.confettiColors = ['#EF2964', '#00C09D', '#2D87B0', '#48485E', '#EFFF1D'];
        this.confettiAnimations = ['slow', 'medium', 'fast'];

        this._setupElements();
        this._renderConfetti();
        this.timeout = null;  // Store the timeout reference
    }

    _setupElements() {
        const containerEl = document.createElement('div');
        containerEl.classList.add('confetti-container');
        this.el.appendChild(containerEl);
        this.containerEl = containerEl;
    }

    _renderConfetti() {
        this.confettiInterval = setInterval(() => {
            const confettiEl = document.createElement('div');
            const confettiSize = (Math.floor(Math.random() * 3) + 7) + 'px';
            const confettiBackground = this.confettiColors[Math.floor(Math.random() * this.confettiColors.length)];
            const confettiLeft = (Math.floor(Math.random() * this.el.offsetWidth)) + 'px';
            const confettiAnimation = this.confettiAnimations[Math.floor(Math.random() * this.confettiAnimations.length)];

            confettiEl.classList.add('confetti', 'confetti--animation-' + confettiAnimation);
            confettiEl.style.left = confettiLeft;
            confettiEl.style.width = confettiSize;
            confettiEl.style.height = confettiSize;
            confettiEl.style.backgroundColor = confettiBackground;

            confettiEl.removeTimeout = setTimeout(function () {
                confettiEl.parentNode.removeChild(confettiEl);
            }, 8000);

            this.containerEl.appendChild(confettiEl);
        }, 25);
    }

    startConfetti() {
        this.containerEl.style.display = 'block';
        this._renderConfetti();

        // Navigate to index.html after the confetti finishes (if the user doesn't click the button)
        this.timeout = setTimeout(() => {
            window.location.assign('index.html');
        }, 8000); // 8 seconds delay
    }

    stopConfetti() {
        // Clear the timeout to stop waiting for 8 seconds
        clearTimeout(this.timeout);
        // Redirect immediately
        window.location.assign('index.html');
    }
}

function startConfetti() {
    const container = document.querySelector('.js-container');
    const confetti = new Confettiful(container);
    confetti.startConfetti();

    // Attach stopConfetti to close button
    const closeBtn = document.querySelector('.close-btn');
    closeBtn.style.display = 'block'; 
    closeBtn.addEventListener('click', () => confetti.stopConfetti());
}
