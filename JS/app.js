$(function() {
    $('#nav-search-select').change(function() {
      var selectedText = $(this).find('option:selected').text();
      $('#nav-search').find('.nav-search-label').html(selectedText);
    });
  });
  function loadCoupon(){
    document.getElementById('coupon').style.visibility = 'visible';
    document.getElementById('promo-carousel').style.opacity='0.9'
}

function closeCoupon(){
    document.getElementById('coupon').style.visibility = 'hidden';
    document.getElementById('promo-carousel').style.opacity='1'
}



