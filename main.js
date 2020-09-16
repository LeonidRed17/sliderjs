

function autoSlider(){
    //Функция вызывающая функцию после ожидания 4 секунд после загрузки страницы
    setInterval(move,4000); 
   
    //Получаем платформу слайдера - она будет двигаться влево тем самым изображения будут двигаться и отображаться в специальном блоке
    let sliderWrapper = document.getElementById('wrapper');
    //начальный отступ слайдера 
    let wrapperMarginLeft = 0;  

    //Функция движения платформы слайдера вызываемая после ожидания 4 секунд
   function move(){
    //Присваеваем переменной отступа обертки значение
    wrapperMarginLeft -= 800;
    //Инициализируем отступ для обертки 
    sliderWrapper.style.marginLeft = wrapperMarginLeft + 'px'; 
    //Если отступ платформы больше 9600 = сбросить отступ до 0
    if(wrapperMarginLeft <= -9600){
            wrapperMarginLeft = 0;
            sliderWrapper.style.marginLeft = wrapperMarginLeft + 'px';
            
        }
    }
}    
autoSlider()

/* Версия неавтоматизированного слайдера

function sliderMove(){
    //Платформа слайдера на которой лежат изображения
    var sliderWrapper = document.getElementById('wrapper');
    //Изначальный отступ платформы 
    var wrapperMarginLeft = 0; 
    Обработчик события = при клике на картинку вызывать функцию движения платформы.
   sliderWrapper.onclick = move; 

   function move(){
    //Присваеваем переменной отступа платформы значение
    wrapperMarginLeft -= 800; 
    //Инициализируем отступ платформы
    sliderWrapper.style.marginLeft = wrapperMarginLeft + 'px';
     //Если отступ платформы больше 9600 = сбросить отступ до 0
        if(wrapperMarginLeft < -9600){
            wrapperMarginLeft = 0;
            sliderWrapper.style.marginLeft = wrapperMarginLeft + 'px';
        }
    }
}    

sliderMove();
*/