// DROPDOWN NAVBAR
document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menu-toggle");
    const dropdownMenu = document.getElementById("dropdown-menu");

    menuToggle.addEventListener("click", () => {
        if (dropdownMenu.style.display === 'none') {
            dropdownMenu.style.display = 'flex';
        } else {
            dropdownMenu.style.display = 'none';
        }
    });

    // klik di luar menu untuk menutupnya
    document.addEventListener("click", (event) => {
        if (!menuToggle.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.style.display = 'none';
        }
    });
});


// CAROUSEL
const carousel = document.querySelector('.flagship-carousel-container');
const totalItems = document.querySelectorAll('.flagship-carousel-items').length;
let currentIndex = 0;

// geser carousel ke kiri
function shiftCarousel() {
    currentIndex = (currentIndex + 1) % totalItems;
    const shiftValue = -100 * currentIndex;
    carousel.style.transform = `translateX(${shiftValue}%)`;
}
setInterval(shiftCarousel, 2000);


// DROPDOWN PRODUCT
document.addEventListener("DOMContentLoaded", () => {
    // function untuk toggle dropdown aktif/non-aktif
    function toggleDropdown(dropdown) {
        const dropdownMenu = dropdown.querySelector('.dropdown-menu');

        // tutup dropdown lain yang terbuka
        const dropdowns = document.querySelectorAll('.dropdown');
        dropdowns.forEach((el) => {
            const menu = el.querySelector('.dropdown-menu');
            if (el !== dropdown && menu.style.display === 'block') {
                menu.style.display = 'none';
            }
        });

        // toggle dropdown ini
        if (dropdownMenu.style.display === 'none' || dropdownMenu.style.display === '') {
            dropdownMenu.style.display = 'block';
        } else {
            dropdownMenu.style.display = 'none';
        }
    }

    // tutup dropdown jika klik di luar
    document.addEventListener('click', function (e) {
        const dropdowns = document.querySelectorAll('.dropdown');
        dropdowns.forEach((el) => {
            const menu = el.querySelector('.dropdown-menu');
            if (!el.contains(e.target) && menu.style.display === 'block') {
                menu.style.display = 'none';
            }
        });
    });

    // add event listener untuk setiap dropdown
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', function (e) {
            e.stopPropagation()
            toggleDropdown(dropdown);
        });
    });
});


// // POPUP
document.addEventListener("DOMContentLoaded", () => {
    const pesanButtons = document.querySelectorAll('.pesan-sekarang'); // Ambil semua tombol pesan-sekarang
    const buyContainer = document.querySelector('.buy-container')

    pesanButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Menampilkan popup saat tombol diklik
            document.querySelector('.popup').style.opacity = 1; 
            document.querySelector('.popup').style.visibility = "visible"; 
            document.querySelector('.buy').style.transform = "translateY(0)"; 
            document.querySelector('.buy').style.opacity = 1; 
            document.querySelector('.buy').style.visibility = "visible"; 
        });
    });

    // Menutup popup ketika tombol X diklik
    const closeButton = document.querySelector('.popup button');
    closeButton.addEventListener('click', () => {
        document.querySelector('.buy').style.transform = "translateY(-100%)"; 
        document.querySelector('.buy').style.opacity = 0; 
        document.querySelector('.buy').style.visibility = "hidden"; 
        document.querySelector('.popup').style.opacity = 0; 
        document.querySelector('.popup').style.visibility = "hidden"; 
    });

    // klik di luar menu untuk menutupnya
    document.addEventListener("click", (event) => {
        if (!buyContainer.contains(event.target) && !event.target.closest('.popup button') && !event.target.closest('.pesan-sekarang')) {
            document.querySelector('.buy').style.transform = "translateY(-100%)"; 
            document.querySelector('.buy').style.opacity = 0; 
            document.querySelector('.buy').style.visibility = "hidden"; 
            document.querySelector('.popup').style.opacity = 1; 
            document.querySelector('.popup').style.visibility = "hidden"; 
        }
    });
});


// FEEDBACK
const carouselF = document.querySelector('.feedback-card');
const totalItemsF = document.querySelectorAll('.feedback-content').length -2;
let currentIndexF = 0;

// Geser carouselF ke kiri
function shiftCarouselF() {
    currentIndexF = (currentIndexF + 1) % totalItemsF; 
    console.log(currentIndexF);
    const shiftValue = -420 * currentIndexF;
    console.log(shiftValue);
    carouselF.style.transform = `translateX(${shiftValue}px)`;
}
setInterval(shiftCarouselF, 3000);
