function navigateToDrawing() {
    window.location.href = 'drawing.html';
}
document.addEventListener('DOMContentLoaded', () => {
    const letterText = `
Your Highness,

On this special day, I want to remind you just how much you mean to me. We've been through a lot together over the past three years, and despite the ups and downs, my love for you has only grown stronger. I know life hasn't been easy, and you've been battling depression and anxiety with incredible strength and resilience. I admire your courage and your ability to keep pushing forward, even when things get tough.

You are the light of my life and the joy in my heart. Your cute, smol nature and your incredible attractiveness are just a few of the many reasons why I love you so much. Your kindness, your sense of humor, and your beautiful soul make every day brighter for me.

I know I haven't always been perfect, and I've hurt you at times. For that, I'm truly sorry. But please know that my heart is always with you, and I am committed to becoming a better person for you and for us. You deserve all the love and happiness in the world, and I am dedicated to being by your side, supporting you, and loving you with all my heart.

Your strength and beauty, both inside and out, inspire me every day. I believe in you, and I am so proud of the progress you've made. No matter what challenges come your way, remember that you are not alone. We are a team, and we will face everything together.

Happy Birthday, my love! May this year bring you peace, joy, and all the wonderful things you deserve. Let's continue to create beautiful memories together and build a future filled with love and happiness.

Yours forever,
Harsh Chauhan
    `;

    const letterElement = document.getElementById('letter-text');
    let index = 0;

    function writeLetter() {
        if (index < letterText.length) {
            letterElement.innerHTML += letterText.charAt(index);
            index++;
            setTimeout(writeLetter, 50); // Adjust typing speed here
        }
    }

    writeLetter();
});
function goToNextPage() {
    window.location.href = 'next-page.html'; // Replace with the actual path to your next page
}