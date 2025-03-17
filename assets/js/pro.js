$(document).ready(function () {
    // madia swiper 
    let multimedia = new Swiper('.multimedia_slides', {
        slidesPerView:3,
        spaceBetween:15,
        navigation: {
             prevEl: '.slide_btn.next', 
             nextEl: '.slide_btn.prev'
        },
        loop: true
    });
    // sifr
    let started = false;
    
    function startCounting() {
        $(".count").each(function () {
            let $this = $(this);
            let target = parseInt($this.attr("data-target"), 10);
            let count = 0;
            let speed = Math.max(1, target / 100);
            
            let interval = setInterval(function () {
                count += speed;
                if (count >= target) {
                    count = target;
                    clearInterval(interval);
                }
                $this.text(Math.floor(count).toLocaleString()); // 1 000 formatda chiqarish
            }, 40);
        });
    }

    $(window).on("scroll", function () {
        let sectionTop = $(".numbers").offset().top;
        let triggerPoint = $(window).scrollTop() + $(window).height() - 100;

        if (sectionTop < triggerPoint && !started) {
            started = true;
            $(".numbers").addClass("active");
            startCounting();
        }
    });
})