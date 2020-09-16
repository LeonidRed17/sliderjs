

function autoSlider(){
    setInterval(move,4000);
   
    //Объявление переменных 
    let sliderWrapper = document.getElementById('wrapper'); //Обертка слайдера для нажатия
    let wrapperMarginLeft = 0; //изначальный отступ слайдера для обработки


    //Функция вызываемая при событии
   function move(){
    wrapperMarginLeft -= 800; //Перемещение обертки
    sliderWrapper.style.marginLeft = wrapperMarginLeft + 'px'; //присваеваем обертке изначальный отступ
        
    if(wrapperMarginLeft <= -9600){
            wrapperMarginLeft = 0;
            sliderWrapper.style.marginLeft = wrapperMarginLeft + 'px';
            
        }
    }
}    
autoSlider()

/* Версия неавтоматизированного слайдера

function sliderMove(){
   
    //Объявление переменных 
    var sliderWrapper = document.getElementById('wrapper'); //Обертка слайдера для нажатия
    var wrapperMarginLeft = 0; //изначальный отступ слайдера для обработки
   
    //Объявление обработчика события
   sliderWrapper.onclick = move; //при нажатии на обертку слайдера происходит вызов функции move 

    //Функция вызываемая при событии
   function move(){
    wrapperMarginLeft -= 800; //Перемещение обертки

    sliderWrapper.style.marginLeft = wrapperMarginLeft + 'px'; //присваеваем обертке изначальный отступ
        if(wrapperMarginLeft < -9600){
            wrapperMarginLeft = 0;
            sliderWrapper.style.marginLeft = wrapperMarginLeft + 'px';
        }
    }
}    

sliderMove();
*/