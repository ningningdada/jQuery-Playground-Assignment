const app = {

  
    initialize: () => {
      $('.box').click(e => {
        $(e.currentTarget).toggleClass('transform')  
      });
  
      $('.circle').dblclick(e => {
        $(e.currentTarget).toggleClass('moveMe')      
      });

      $('.circle').click(function () {
        app.changeColor();
        // $('.circle').toggleClass('randomCol')
      });

      $('.image').hover(e =>  {  
        $(e.currentTarget).hide();
        }, function(){
        $(e.currentTarget).show();                  
      });

    },
      
  // I would like to change the color for each circles, but querySelectorAll doesnt work in this function. 
  // Since document.querySelectorAll() returns a nodelist, which is kind of like an array of elements.
  // I guess i need to loop through that nodelist, changing color for each element?
      changeColor: () => {
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        // let randomColCircle = document.querySelectorAll('.circle');
        let randomColCircle = document.querySelector('.circle');
        randomColCircle.style.background = "#" + randomColor;
        // document.body.style.backgroundColor = "#" + randomColor;
      },
  
  }