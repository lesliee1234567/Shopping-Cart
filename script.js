var product=[];
var price=[];


$(".press").click(function(){
    var productName = $(".prodName").val();
    var cost= parseInt($(".cost").val());
    product.push(productName);
    price.push(cost);
    console.log(product);
    console.log(price);
    $(".addProduct").append("<p>" +productName+ "</p>");
    $(".addPrice").append("<p> $" +cost+ "</p>");
    var num = product.length;
    $(".numProducts").text("items in cart:" + num );
    var number= price.length;
    var total=0;
    price.forEach(function(element){
     total=total + element;
    });
    
    $(".total").append("<div>" +total+ "</div>");
    });

