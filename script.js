$('.slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: false,
    variableWidth: false,
    adaptiveHeight: false,
    arrows: true,
   
});


function openModal(id) {
    document.getElementById(id).style.display = 'block';
}

function closeModal(id) {
    document.getElementById(id).style.display = 'none';
}


