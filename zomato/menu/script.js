//on click add
//add food to cart
//change total
//on submit display modal

var ctr = 0;
var total = 0;
var name="";
var price= 0;

$('.item_category .item .but .button').click(function() {
    if(ctr === 0){
        $('.cart *').remove();
        $(".cart").css({
            'background': '#e7e7e7'
        });
        name = $(this).parent().parent().find(".info h3").text();
        price = $(this).parent().parent().find(".info h4").text();
        total = price;
        $('.cart').html("<div class='checkout'><h2>Cart</h2><div class='pick'><p id='name'>"+name+"</p><p id='rate'>"+price+"</p></div><p class='total'> Total</p><p class='total rate' style='margin-left:150px;font-size:25px'> "+total+"</p></div>")
        ctr++;
        total = 125.00;
    }
    else if(ctr===7){
        alert("Maximum Limit Reached")
    }
    else{
        name = $(this).parent().parent().find(".info h3").text();
        price = $(this).parent().parent().find(".info h4").text();
        total += 200.00;
        $('.cart .checkout').append("<div class='pick'><p id='name'>"+name+"</p><p id='rate'>"+price+"</p></div>");
        $(".cart .checkout .rate").text("₹"+total+".00"); 
    }
    ctr++;
})
