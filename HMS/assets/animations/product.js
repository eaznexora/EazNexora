// --- Product Variant Logic Multiplier Add-on ---
document.addEventListener('DOMContentLoaded', () => {
    const variantTrack = document.getElementById('sizeVariantTrack');
    const activePriceLabel = document.getElementById('activeStripPrice');
    const addToCartMainBtn = document.getElementById('addToCartMainBtn');

    if (variantTrack && activePriceLabel) {
        variantTrack.addEventListener('click', (e) => {
            const targetPill = e.target.closest('.variant-pill-card');
            if (!targetPill) return;

            // Step 1: Switch active background layers visually
            variantTrack.querySelectorAll('.variant-pill-card').forEach(pill => {
                pill.classList.remove('active-variant');
            });
            targetPill.classList.add('active-variant');

            // Step 2: Grab live dataset attributes and update bottom checkout totals
            const targetPrice = targetPill.getAttribute('data-price');
            activePriceLabel.textContent = `₹${targetPrice}`;
            
            console.log(`Weight Variant configuration parsed. Value changed target mapping: ₹${targetPrice}`);
        });
    }

    // Interactive CTA State Animation Hooks
    if (addToCartMainBtn) {
        addToCartMainBtn.addEventListener('click', () => {
            const currentPrice = activePriceLabel ? activePriceLabel.textContent : 'Selected Variant';
            
            // Native micro interaction feedback loop
            addToCartMainBtn.style.transform = 'scale(0.95)';
            setTimeout(() => { addToCartMainBtn.style.transform = 'none'; }, 150);
            
            alert(`Item successfully locked to cart allocation vector! Price: ${currentPrice}`);
        });
    }
});