let btn = document.getElementById("myBtn")
btn.addEventListener("click",function(){
    myFunc(myText.value);
})

 function myFunc(myValue){
    let myRadio = document.getElementsByName("rg");
    let myBox = document.getElementsByName("cb");
    let price = 0;
    let toppings="";

    for(let i = 0; i<myRadio.length;i++){
        if(myRadio[i].checked){
            price += Number(myRadio[i].value);
        }
    }
    for(let A = 0; A<myBox.length;A++){
        if(myBox[A].checked){
            price +=1.5;
            toppings += myBox[A].value + ", ";
        }
    }

    myParagraph.innerHTML = "hi " + myValue + "! " + "price: "+price.toFixed(2)+", "+"toppings: "+toppings;

 }
