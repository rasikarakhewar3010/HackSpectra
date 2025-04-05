function updateCountdown() {
    const eventDate = new Date("2025-04-22T00:00:00").getTime();
    setInterval(() => {
        const now = new Date().getTime();
        const diff = eventDate - now;
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        document.getElementById("countdown").innerText = `${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;
    }, 1000);
}
updateCountdown();
