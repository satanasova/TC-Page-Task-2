// slick('contest__wrapper', 4, 1);
slick('testimonials', 2, 1);

infiniteSlider('contest__wrapper');

window.addEventListener('scroll', counterFn);

playVideo('.benefits__video');



function login() {
    $(document).on('click', function(e){
        const overlayClicked = $('.overlay').is(e.target);
        const loginClicked = $('#login *').is(e.target);
        console.log(overlayClicked);
    
        if(loginClicked){
            $('.overlay').addClass('active');
        }
    
        if(!overlayClicked & !loginClicked){
            $('.overlay').removeClass('active');
        }
    })    
}    
login();

