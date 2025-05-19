document.addEventListener('DOMContentLoaded', function() {
    const galleryTab = document.getElementById('galleryTab');
    const mapTab = document.getElementById('mapTab');
    const gallerySection = document.getElementById('gallerySection');
    const mapSection = document.getElementById('mapSection');

    function animateSection(section, direction) {
        section.classList.remove('tab-slide-left', 'tab-slide-right');
        // Force reflow to restart animation
        void section.offsetWidth;
        if (direction === 'left') {
            section.classList.add('tab-slide-left');
        } else if (direction === 'right') {
            section.classList.add('tab-slide-right');
        }
    }

    galleryTab.addEventListener('click', function() {
        galleryTab.classList.add('active');
        mapTab.classList.remove('active');
        gallerySection.style.display = 'block';
        mapSection.style.display = 'none';
        animateSection(gallerySection, 'left');
    });

    mapTab.addEventListener('click', function() {
        mapTab.classList.add('active');
        galleryTab.classList.remove('active');
        gallerySection.style.display = 'none';
        mapSection.style.display = 'flex';
        // Remove iframe visibility hack, animate as normal
        animateSection(mapSection, 'right');
    });
});
