//just testing things out in this script file

$(document).ready(function(){
    $(".circle").click(function(){
    changeColor();
    });
  });
  
  
  let randomColCircle = document.querySelectorAll('.circle');
  let boxes = document.querySelectorAll(".box"); 

// Loop through nodelist, just like an array
for (var i = 0; i < randomColCircle.length; i++) {
  
  // Pass in box element and index to createBoxAnimation function
  changeColor(randomColCircle[i], i);
}

  function changeColor() {
    const randomColor = Math.floor(Math.random()*16777215).toString(16); 
    // document.body.style.backgroundColor = "#" + randomColor;
    randomColCircle.style.background = "#" + randomColor;
  }

//   function changeColor() {
//     const randomColor = Math.floor(Math.random()*16777215).toString(16); 
//     // document.body.style.backgroundColor = "#" + randomColor;

//     for(var i=0, len=randomColCircle.length; i<len; i++)
//     {
//         randomColCircle.style.background = "#" + randomColor;
//     }
//   }



//   window.onload=function(){
//     var aColl = document.getElementsByClassName('a'); //Cache the collection here, so that even a new element added with the same class later we can avoid querying this again by using the cached collection.
//     var bColl = document.getElementsByClassName('b');

//     document.getElementById('A').addEventListener('mouseover', function(){
//         changeColor(aColl, 'red');
//     });

//     document.getElementById('B').addEventListener('mouseover', function(){
//         changeColor(bColl, 'blue');
//     });
// }
// function changeColor(coll, color){

//     for(var i=0, len=coll.length; i<len; i++)
//     {
//         coll[i].style["background-color"] = color;
//     }
// }

  
//   : () => {
//     const randomColor = Math.floor(Math.random()*16777215).toString(16);
//     var el = document.querySelectorAll(".circle");
//     document.body.style.backgroundColor = "#" + randomColor;
//     el.style.backgroundColor = "#" + randomColor;
//     // document.getElementsByClassName("randomCol").style.background = "#" + randomColor;
//     // document.getElementsByClassName("circle").style.background = "#" + randomColor;
//     // document.querySelectorAll(".circle").style.background = "#" + randomColor;
//     // document.querySelectorAll(".circle").style.background = "#" + randomColor;
//   },


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

    //     $('.circle').click(function () {
    //     app.changeColor();
    //     // $('.circle').toggleClass('randomCol')
    //   });

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
      
    //   changeColor: () => {
    //     const randomColor = Math.floor(Math.random()*16777215).toString(16);
    //     var el = document.querySelectorAll(".circle");
    //     document.body.style.backgroundColor = "#" + randomColor;
    //     el.style.backgroundColor = "#" + randomColor;
    //     // document.getElementsByClassName("randomCol").style.background = "#" + randomColor;
    //     // document.getElementsByClassName("circle").style.background = "#" + randomColor;
    //     // document.querySelectorAll(".circle").style.background = "#" + randomColor;
    //     // document.querySelectorAll(".circle").style.background = "#" + randomColor;
    //   },
  
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

  