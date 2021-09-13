let number = 0;
let operator= '';
let flag = 0;
let res= 0;
let decimal = 0;
$(".grid-item").on('click', (event)=>{
    let input= event.target.textContent;
if(input>='0' && input<='9'){
    if (flag==0)
    number = 10*number + Number(input);
    else if(flag==1)
    decimal = Number(decimal*10) + Number(input);
    $('.display').text(number+ (flag&&'.') + (decimal&&(Number(decimal))));
}
else{
    
    switch(input)
    {
        case '+': 
        case '-':
        case 'x':
        case '/': 
        case '=':
            number= Number(String(number)+'.'+String(decimal));
            flag=0;
            decimal=0;
        switch(operator)
        {
               case '+': res+= number; break;
               case '-': res-= number; break;
               case 'x': res*= number; break;
               case '/': res/= number; break;
               case '=': break;
               default:  res= number;
        }
        operator = input;
        $('.display').text(res);
        number = 0;
        break;
       case 'Del': 
       if(flag==0)
       {
        let a = String(number);
       number= Number(a.slice(0,a.length-1));
       }
       else
       {
        let a = String(decimal);
       decimal= Number(a.slice(0,a.length-1));
       }
       $('.display').text(number+ (flag&&'.') + (decimal&&(Number(decimal))));
       break;
       case '.': flag=1;
       break;
       default: 

       location.reload(true);
       
       
    }

}
console.log(number);
console.log(res);
 event.stopPropagation();
});



$('i').on('click', (event)=>{
    $(".fas").toggleClass('fa-toggle-off').toggleClass('fa-toggle-on');
    // $(body).toggleClass('whole-1');
    $('h1').toggleClass('heading-1');
    $('.grid-container').toggleClass('grid-container-1');
    $('.grid-item').toggleClass('grid-item-x');
    $('.grid-item-2').toggleClass('grid-item-2-x').toggleClass('heading-1');
    $('.del').toggleClass('del-x').toggleClass('heading-1');
    $('.display').toggleClass('heading-1').toggleClass('grid-container-1');
    $('.whole').toggleClass('whole-x');
    event.stopPropagation();
}
)