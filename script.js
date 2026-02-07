const navIcons = document.querySelectorAll(".nav-links i");
if (navIcons.length) {
    navIcons.forEach(icon => {
        icon.addEventListener("click", () => {
            const active = document.querySelector(".nav-links .active");
            if (active) active.classList.remove("active");
            icon.classList.add("active");
        });
    });
}

const brightness = document.querySelector('.brightness-slider');
if (brightness) {
    brightness.addEventListener('input', (e) => {
        const lampVisual = document.querySelector('.lamp-visual');
        if (lampVisual) {
            const value = e.target.value;
            lampVisual.style.opacity = value / 100;
        }
    });
}

const musicBtns = document.querySelectorAll(".controls i");
if (musicBtns.length) {
    let isPlaying = true;
    musicBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            if (btn.classList.contains('ph-pause-circle-fill')) {
                isPlaying = !isPlaying;
                if (isPlaying) {
                    btn.classList.remove('ph-pause-circle-fill');
                    btn.classList.add('ph-play-circle-fill');
                } else {
                    btn.classList.remove('ph-play-circle-fill');
                    btn.classList.add('ph-pause-circle-fill');
                }
            } else if (btn.classList.contains('ph-skip-back')) {
                // Previous track
            } else if (btn.classList.contains('ph-skip-forward')) {
                // Next track
            }
        });
    });
}

const addBtns = document.querySelectorAll(".add-btn");
if (addBtns.length) {
    addBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            alert("added");
        });
    });
}

// Room buttons: show related images in live views
function setupRoomList(containerSelector, imageSelector) {
    const container = document.querySelector(containerSelector);
    if (!container) return;
    const buttons = container.querySelectorAll('.room-item');
    const image = document.querySelector(imageSelector);
    if (!buttons.length || !image) return;

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const data = btn.getAttribute('data-images') || '';
            const urls = data.split(',').map(s => s.trim()).filter(Boolean);
            if (urls[0]) image.src = urls[0];
        });
    });
}

setupRoomList('.rooms-list-card', '#main-room-image');
setupRoomList('.rooms-list-card-2', '#main-room-image-2');
setupRoomList('.rooms-list-card-3', '#main-room-image-3');
