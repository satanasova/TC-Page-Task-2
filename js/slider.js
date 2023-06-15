function slick(sliderBlock, slidesToShow, slidesToScroll, {breakpoint, slToShow, slToScroll}) {
    const prev = $(`.${sliderBlock} .slider__nav .btn--prev`);
    const next = $(`.${sliderBlock} .slider__nav .btn--next`);
    
    const slideList = $(`.${sliderBlock} .slider .slider__list`);

    slideList.slick({
		dots: false,
        nextArrow: next,
        prevArrow: prev,
		infinite: true,
		speed: 500,
        slidesToShow,
        slidesToScroll,
        responsive: [
            {
                breakpoint,
                settings: {
                    slidesToShow: slToShow,
                    slidesToScroll: slToScroll
                }

            }
        ]
});

}

function infiniteSlider(sliderBlock) {
    const slider = $(`.${sliderBlock} .slider .slider__list`);
    const slides = $('.slide', slider).toArray();
    const slidesLength = $('.slide', slider).length;
    const prev = $( `.${sliderBlock} .slider__nav .btn--prev`);
    const next = $( `.${sliderBlock} .slider__nav .btn--next`);
    
    let firstChild = $('> .slide:first', slider);
    let lastChild = $('> .slide:last', slider);
    const slideSize = firstChild.width();

    // let index = 0;
    // let allowShift = "true";
    // let posInitial = 0;
    // slider.css({left: posInitial+'px'})

    // firstChild.clone(true).appendTo(slider);
    // lastChild.clone(true).prependTo(slider);

    next.click(function() {
        firstChild = $('> .slide:first', slider);
        slider.append(firstChild.hide().fadeIn(100));
    })

    prev.click(function() {
        lastChild = $('> .slide:last', slider);
        slider.prepend(lastChild.hide().fadeIn(100));
    })

    // prev.click(function() {shiftSlide(1);})
    // next.click(function() {shiftSlide(-1);})

    // function shiftSlide(dir) { // 1 = prev, -1 = next
    //     if(allowShift) {
    //         posInitial = slider.position().left;
    //         slider.css({left: posInitial + slideSize*dir, transition: 'left .3s'});
    //         index += -dir;
            
    //         console.log(posInitial);
    //         console.log(index);
    //     }
    //     allowShift = false;
    // }

    // function checkIndex (){
    //     console.log(`checkIndex: ${index} length:${slidesLength}`);
    //     if (index == -1) {
    //       slider.css({left: -(slidesLength * slideSize) + "px", transition: 'none'});
    //       index = slidesLength - 1;
    //       console.log(`-(${slidesLength} * ${slideSize})px`);
    //     }
    //     if (index == slidesLength) {
    //       slider.css({left: -(1 * slideSize) + "px", transition: 'none'});
    //       index = 0;
    //       console.log(`-(1*${slideSize}px)`);
    //     }
    //     allowShift = true;
    //   }

    //   slider.on('transitionend', checkIndex)

      

}
 
