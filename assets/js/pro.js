$(document).ready(function () {
    // madia swiper 
    new Swiper('.mySwiper1', {

        navigation: {
             nextEl: '.next1', 
             prevEl: '.prev1'
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