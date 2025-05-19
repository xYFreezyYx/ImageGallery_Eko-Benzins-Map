document.addEventListener('DOMContentLoaded', function() {
    const galleryTab = document.getElementById('galleryTab');
    const mapTab = document.getElementById('mapTab');
    const gallerySection = document.getElementById('gallerySection');
    const mapSection = document.getElementById('mapSection');

    galleryTab.addEventListener('click', function() {
        galleryTab.classList.add('active');
        mapTab.classList.remove('active');
        gallerySection.style.display = 'block';
        mapSection.style.display = 'none';
    });

    mapTab.addEventListener('click', function() {
        mapTab.classList.add('active');
        galleryTab.classList.remove('active');
        gallerySection.style.display = 'none';
        mapSection.style.display = 'flex';
    });
});
