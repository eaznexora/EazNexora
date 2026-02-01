document.addEventListener('DOMContentLoaded', () => {
    // 1. Share Functionality
    const shareBtn = document.getElementById('share-btn');

    if (shareBtn) {
        shareBtn.addEventListener('click', async () => {
            const shareData = {
                title: 'Mohammed Ameen - Digital Visiting Card',
                text: 'View my digital visiting card:',
                url: window.location.href 
            };

            try {
                if (navigator.share) {
                    // Triggers the native mobile share menu directly
                    await navigator.share(shareData);
                } else {
                    // Fallback for desktop: Copy link to clipboard
                    await navigator.clipboard.writeText(`${shareData.text} ${shareData.url}`);
                    console.log('Link copied to clipboard');
                }
            } catch (err) {
                console.error('Error sharing:', err);
            }
        });
    }

    // 2. Save Contact Button (Pop-up and Download Removed)
    const saveContactBtn = document.querySelector('button:last-of-type');
    
    if (saveContactBtn) {
        saveContactBtn.addEventListener('click', () => {
            // Logic removed as requested. 
            // The button is now "silent" and won't trigger pop-ups or downloads.
            console.log('Save Contact button clicked.');
        });
    }
});