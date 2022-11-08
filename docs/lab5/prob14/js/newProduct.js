'use strict'
function showInputsToPopBox()
{
    let productNumber=document.getElementById('productNumber').value;
    let quantityInStock=document.getElementById('quantityInStock').value;
    let name=document.getElementById('name').value;
    let supplier=document.getElementById('supplier').value;
    let unitPrice=document.getElementById('unitPrice').value;
    let dateSupplied=document.getElementById('dateSupplied').value;

    let message=`
    Product Number: ${productNumber}
    Quantity in Stock:${quantityInStock}
    Product Name:${name}
    Supplier: ${supplier}
    Unit Price:${unitPrice}
    Date Supplied: ${dateSupplied}`;

//alternative solution
    // let message="Product Number: "+productNumber+"\n"+
    // "Quantity in Stock: "+quantityInStock+"\n"+
    // "Product Name: "+name+"\n"+
    // "Supplier: "+supplier+"\n"+
    // "Unit Price: "+unitPrice+"\n"+
    // "DateSupplied: "+dateSupplied+"\n";

    alert(message);
  
}