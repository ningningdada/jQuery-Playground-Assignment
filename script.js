const app = {

  
    initialize: () => {
      $('.box').click(e => {
        $(e.currentTarget).toggleClass('transform')  
      });
  
      // $('.circle').dblclick(e => {
      //   $(e.currentTarget).toggleClass('moveMe')      
      // });

      // $('.circle').click(e => {
       
      //   $(e.currentTarget).toggleClass('randomCol')      
      // });

        $('.circle').click(function () {
        app.changeColor();
        // $('.circle').toggleClass('randomCol')
      });

      $('.image').hover(e =>  {  
        $(e.currentTarget).hide();
        }, function(){
        $(e.currentTarget).show();                  
      });

    //   $('.listBeatles').click(function () {
    //     app.listBeatles();
    //   })
  
    //   $('.compareBands').click(function () {
    //     app.compareBands();
    //   })
    },
      
      changeColor: () => {
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        var el = document.querySelectorAll(".circle");
        document.body.style.backgroundColor = "#" + randomColor;
        el.style.backgroundColor = "#" + randomColor;
        // document.getElementsByClassName("randomCol").style.background = "#" + randomColor;
        // document.getElementsByClassName("circle").style.background = "#" + randomColor;
        // document.querySelectorAll(".circle").style.background = "#" + randomColor;
        // document.querySelectorAll(".circle").style.background = "#" + randomColor;
      },
  
    // listBeatles: () => {
    //   // in this instance can also use this.data, it means the same thing. app.data is safer
    //   app.data.beatles.albums.forEach(album => {
    //     debugger;
    //     $('.beatlesAlbums').append(`<li>${album.name}, ${album.year}</li>`);
    //   });
    // },
  
    // compareBands: () => {
    //   const nirvanaMembers = app.data.nirvana.members;
    //   const beatlesMembers = app.data.beatles.members;
  
    //   $('.bandsComparison').text(
    //     `${nirvanaMembers.length > beatlesMembers.length ? 'Nirvana' : 'Beatles'} 
    //   had more members`);
    // }
  }