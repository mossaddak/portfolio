const value = $(".category_btn").attr('data-filter');
if (value == "allItem") {
    $('.service_itembox').not('.' + value).hide('slow');
}
$(function () {
    $(".category_btn").click(function () {
        //$(this).addClass('category_btn_active').siblings().removeClass('category_btn_active')

        const value = $(this).attr('data-filter');//for finding individual item
        
        $('.service_itembox').filter('.' + value).show('slow');
        $('.service_itembox').not('.' + value).hide();
    });
});
