// onload = () => {
//     const c = setTimeout(() => {
//         document.body.classList.remove("not-loaded");
//         clearTimeout(c);
//     }, 1000);

//     document.addEventListener('DOMContentLoaded', function () {
//         const downloadButton = document.getElementById('downloadButton');
//         downloadButton.addEventListener('click', function () {
//             const link = document.createElement('a');
//             link.href = 'pictures/20240705_201721.mp4'; // Update this with the actual path to your video file
//             link.download = '20240705_201721.mp4';
//             link.click();
//         });
//     });
// };

document.addEventListener('DOMContentLoaded', function () {
    // Button element
    const downloadButton = document.getElementById('downloadButton');

    // Event listener for download button
    downloadButton.addEventListener('click', function () {
        try {
            const videoUrl = 'pictures/20240705_201721.mp4'; // Replace with the actual path to your video file
            const a = document.createElement('a');
            a.href = videoUrl;
            a.download = 'video.mp4'; // Set the file name for the download
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            console.log('Video download initiated.');
        } catch (error) {
            console.error('Error initiating video download:', error);
        }
    });

    // Remove "not-loaded" class after a delay
    try {
        const c = setTimeout(() => {
            document.body.classList.remove("not-loaded");
            clearTimeout(c);
        }, 1000);
    } catch (error) {
        console.error('Error removing "not-loaded" class:', error);
    }
});
