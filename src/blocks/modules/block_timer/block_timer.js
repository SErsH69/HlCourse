const BlockTimer = class BlockTimer {
    constructor(){}
    timerInit() {
        document.addEventListener("DOMContentLoaded", function() {
            // Timer elements
            const daysElement = document.getElementById("days");
            const hoursElement = document.getElementById("hours");
            const minutesElement = document.getElementById("minutes");
            const secondsElement = document.getElementById("seconds");
        
            // Set the end date and time (YYYY-MM-DDTHH:MM:SS format)
            const endDate = new Date("2024-12-31T23:59:59");
        
            // Update the timer elements
            function updateTimer() {
                const now = new Date();
                const timeRemaining = endDate - now;
        
                if (timeRemaining > 0) {
                    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
                    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
                    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
        
                    daysElement.textContent = String(days).padStart(2, '0');
                    hoursElement.textContent = String(hours).padStart(2, '0');
                    minutesElement.textContent = String(minutes).padStart(2, '0');
                    secondsElement.textContent = String(seconds).padStart(2, '0');
                } else {
                    clearInterval(timerInterval);
                    // Optional: Do something when the countdown ends, e.g., hide the timer or show a message
                }
            }
        
            // Start the countdown
            const timerInterval = setInterval(updateTimer, 1000);
            updateTimer(); // Initial call to display the time immediately
        });
    }
    init() {
        this.timerInit();
    }
}

export default BlockTimer;