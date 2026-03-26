document.addEventListener('DOMContentLoaded', function() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const targetTab = this.dataset.tab;

            // Remove active class from all buttons and contents
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));

            // Add active class to clicked button and corresponding content
            this.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
        });
    });

    // Auto-generate QR with current timestamp for uniqueness
    function updateQR() {
        const now = new Date().getTime();
        const danaQR = document.querySelector('#dana .qr-code img');
        const gopayQR = document.querySelector('#gopay .qr-code img');
        const ovoQR = document.querySelector('#ovo .qr-code img');
        
        danaQR.src = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=081234567890-DANA-${now}`;
        gopayQR.src = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=081234567890-GoPay-${now}`;
        ovoQR.src = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=081234567890-OVO-${now}`;
    }

    // Update QR every 30 seconds
    setInterval(updateQR, 30000);
    updateQR(); // Initial call
});
