document.addEventListener('DOMContentLoaded', function() {
    
    


    // scraping-testimonial slider
    const testimonialTrack = document.querySelector('.scraping-testimonial-track');
    const testimonials = document.querySelectorAll('.scraping-testimonial-card');
    const dots = document.querySelectorAll('.dot');
    const prevButton = document.querySelector('.prev-scraping-testimonial');
    const nextButton = document.querySelector('.next-scraping-testimonial');
    let currentIndex = 0;

    function updateSlider() {
        testimonialTrack.style.transform = `translateX(-${currentIndex * 100}%)`;
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }

    if (prevButton && nextButton) {
        prevButton.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
            updateSlider();
        });

        nextButton.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % testimonials.length;
            updateSlider();
        });

        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                currentIndex = index;
                updateSlider();
            });
        });

        // Auto slide every 5 seconds
        setInterval(() => {
            currentIndex = (currentIndex + 1) % testimonials.length;
            updateSlider();
        }, 5000);
    }

    // Form submission
   

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');

            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });

                // Close mobile menu if open
                if (navLinks.style.display === 'flex' && window.innerWidth <= 768) {
                    navLinks.style.display = 'none';
                    hamburger.classList.remove('active');
                }
            }
        });
    });


    // FAQ toggle functionality
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const toggleButton = item.querySelector('.faq-toggle');
        toggleButton.addEventListener('click', () => {
            item.classList.toggle('active');
        });
    });

});

/* nav  footer  script*/



(function() {
    "use strict";
  
    /**
     * Apply .scrolled class to the body as the page is scrolled down
     */
    function toggleScrolled() {
      const selectBody = document.querySelector('body');
      const selectHeader = document.querySelector('#header');
      if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
      window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
    }
  
    document.addEventListener('scroll', toggleScrolled);
    window.addEventListener('load', toggleScrolled);
  
    /**
     * Mobile nav toggle
     */
    const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');
  
    function mobileNavToogle() {
      document.querySelector('body').classList.toggle('mobile-nav-active');
      mobileNavToggleBtn.classList.toggle('bi-list');
      mobileNavToggleBtn.classList.toggle('bi-x');
    }
    mobileNavToggleBtn.addEventListener('click', mobileNavToogle);
  
    /**
     * Hide mobile nav on same-page/hash links
     */
    document.querySelectorAll('#navmenu a').forEach(navmenu => {
      navmenu.addEventListener('click', () => {
        if (document.querySelector('.mobile-nav-active')) {
          mobileNavToogle();
        }
      });
  
    });
  
    /**
     * Toggle mobile nav dropdowns
     */
    document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
      navmenu.addEventListener('click', function(e) {
        e.preventDefault();
        this.parentNode.classList.toggle('active');
        this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
        e.stopImmediatePropagation();
      });
    });
  
    /**
     * Preloader
     */
    // const preloader = document.querySelector('#preloader');
    // if (preloader) {
    //   window.addEventListener('load', () => {
    //     preloader.remove();
    //   });
    // }
  
    /**
     * Scroll top button
     */
    // let scrollTop = document.querySelector('.scroll-top');
  
    // function toggleScrollTop() {
    //   if (scrollTop) {
    //     window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    //   }
    // }
    // scrollTop.addEventListener('click', (e) => {
    //   e.preventDefault();
    //   window.scrollTo({
    //     top: 0,
    //     behavior: 'smooth'
    //   });
    // });
  
    // window.addEventListener('load', toggleScrollTop);
    // document.addEventListener('scroll', toggleScrollTop);
  
    /**
     * Animation on scroll function and init
     */
    // function aosInit() {
    //   AOS.init({
    //     duration: 600,
    //     easing: 'ease-in-out',
    //     once: true,
    //     mirror: false
    //   });
    // }
    // window.addEventListener('load', aosInit);
  
    /**
     * Init swiper sliders
     */
    // function initSwiper() {
    //   document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
    //     let config = JSON.parse(
    //       swiperElement.querySelector(".swiper-config").innerHTML.trim()
    //     );
  
    //     if (swiperElement.classList.contains("swiper-tab")) {
    //       initSwiperWithCustomPagination(swiperElement, config);
    //     } else {
    //       new Swiper(swiperElement, config);
    //     }
    //   });
    // }
  
    // window.addEventListener("load", initSwiper);
  
    /**
     * Initiate glightbox
     */
    // const glightbox = GLightbox({
    //   selector: '.glightbox'
    // });
  
    /**
     * Init isotope layout and filters
     */
    // document.querySelectorAll('.isotope-layout').forEach(function(isotopeItem) {
    //   let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
    //   let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
    //   let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';
  
    //   let initIsotope;
    //   imagesLoaded(isotopeItem.querySelector('.isotope-container'), function() {
    //     initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
    //       itemSelector: '.isotope-item',
    //       layoutMode: layout,
    //       filter: filter,
    //       sortBy: sort
    //     });
    //   });
  
    //   isotopeItem.querySelectorAll('.isotope-filters li').forEach(function(filters) {
    //     filters.addEventListener('click', function() {
    //       isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
    //       this.classList.add('filter-active');
    //       initIsotope.arrange({
    //         filter: this.getAttribute('data-filter')
    //       });
    //       if (typeof aosInit === 'function') {
    //         aosInit();
    //       }
    //     }, false);
    //   });
  
    // });
  
    /**
     * Initiate Pure Counter
     */
    // new PureCounter();
  
    /**
     * Correct scrolling position upon page load for URLs containing hash links.
     */
    window.addEventListener('load', function(e) {
      if (window.location.hash) {
        if (document.querySelector(window.location.hash)) {
          setTimeout(() => {
            let section = document.querySelector(window.location.hash);
            let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
            window.scrollTo({
              top: section.offsetTop - parseInt(scrollMarginTop),
              behavior: 'smooth'
            });
          }, 100);
        }
      }
    });
  
    /**
     * Navmenu Scrollspy
     */
    let navmenulinks = document.querySelectorAll('.navmenu a');
  
    function navmenuScrollspy() {
      navmenulinks.forEach(navmenulink => {
        if (!navmenulink.hash) return;
        let section = document.querySelector(navmenulink.hash);
        if (!section) return;
        let position = window.scrollY + 200;
        if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
          document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
          navmenulink.classList.add('active');
        } else {
          navmenulink.classList.remove('active');
        }
      })
    }
    window.addEventListener('load', navmenuScrollspy);
    document.addEventListener('scroll', navmenuScrollspy);
  
  })();
  
  
  //team script
  
//   document.addEventListener("DOMContentLoaded", () => {
//     const sliderContainer = document.querySelector('.slider-container');
    
//     // Check if the slider exists on the page before proceeding
//     if (!sliderContainer) {
//         return; // Exit script if there is no slider on this page
//     }
  
//     let currentSlide = 0;
//     const slides = document.querySelectorAll('.slide');
  
//     function showSlide(index) {
//         if (index >= slides.length) {
//             currentSlide = 0;
//         } else if (index < 0) {
//             currentSlide = slides.length - 1;
//         } else {
//             currentSlide = index;
//         }
  
//         sliderContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
//     }
  
//     function changeSlide(direction) {
//         showSlide(currentSlide + direction);
//     }
  
    // Initialize the first slide
    // showSlide(currentSlide);
  
    // Auto-slide every 3 seconds
//     setInterval(() => {
//         changeSlide(1);
//     }, 3000);
//   });
  

  console.log('Hello, World!');
