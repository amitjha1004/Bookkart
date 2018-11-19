$(document).ready(function(){
  $(".cart-container").hide();
  $(".checkout").hide();
  $(".pay").hide();
  $(".summary").hide();
  $('.add').click(record);
  $('.img').hide();

  $('.cartbutton').click(function(){
  $('.cart-container').show();
  $('.main-container').hide();
  $('.checkout').hide();
  $(".summary").hide();
  $(".pay").hide();
  $('.img').hide();
  });

  $('.continuebutton').click(function(){
  $('.cart-container').hide();
  $('.main-container').show();
  $('.checkout').hide();
  $(".summary").hide();
  $(".pay").hide();
  $('.img').hide();
  });


});

function record(){
  $('#mycart tr:last').show();

  var item = $(this).siblings('.item').text();
  var price = $(this).siblings('.price').text();
  var qty = $(this).siblings('.qty').val();
  var total = price * qty;

  if($("td:contains('" + item + "')").length > 0){
      var lastQty = $("td:contains('" + item + "')").next().text();
      var totalQty = parseInt(lastQty) + parseInt(qty);
      $("td:contains('" + item + "')").siblings('.qty2').text(totalQty);

      total = price * totalQty;

      $("td:contains('" + item + "')").siblings('.total').text(total);

      var sum = 0;
      $(".total").each(function(){
        var val = parseInt($(this).text());
        sum += val;
      });
      $(".subtotal").text(sum);
  }else{
    $("#mycart tr:last").before(
      "<tr>" +
        "<td class='item'>" + item + "</td>" +
        "<td class='qty2'>" + qty + "</td>" +
        "<td class='right price2'><span class='currency'>₹ </span>"+price+"</td>" +
        "<td class='right total'>" + total + "</td>" +
      "</tr>"
    );
    var sum = 0;
    $(".total").each(function(){
      var val = parseInt($(this).text());
      sum += val;
    });
    $(".subtotal").text(sum);
  }
  // $(this).siblings('.qty').val(1);
  console.log(sum);
  $('.checkoutbutton').click(function(){
    $('.checkout').text("Thank you for shopping." + "You total bill amount is " + sum +"."+ " Select your payment method- ");
    $(".pay").show();
    $('.checkout').show();
    $('.cart-container').hide();
    $(".summary").show();
  });

}

$('.paybutton').click(function(){
  if($('.paymentgateway').val()=='Paytm'){
  $('.img').show()
}
});
