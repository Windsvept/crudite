  //to pull up all storage values use
  // localStorage.length as your array length
  // localStorage.key(index) to access by number
  // that returns a list of keys

  // attach event listener to buttons(input?)
  // create function stub for read/write/delete
    // research local storage

  // $().on('click', function(){
  //
  // });

  $(document).ready(function() {
    //console.log('+++ filename: app.js functionName: jquery.ready expected: no error actual: ', $);
    //attach event listener to button(input?)
    //create function stub for read/write/delete
      //research local storage
    // $().click(function(){
  
    // });
  
    $('.store-btn').click(function(event){
      event.preventDefault();
      let titleVal = $('.input-field-title').val();
      let contentVal = $('.input-field-body').val();
      localStorage.setItem('title', titleVal);
      localStorage.setItem('content', contentVal);
    });
    $('.get-btn').click(function(event){
      event.preventDefault();
      let storedTitle = localStorage.getItem('title');
      let storedContent = localStorage.getItem('content');
      if(storedContent === null && storedTitle === null){
        $('.input-display').html(`<p>Nothing to get!</p>`);
      }else{
        $('.input-display').html(`<p>${storedTitle} ${storedContent}</p>`);
      }
    });
    $('.delete-btn').click(function(event){
      event.preventDefault();
      if(localStorage.getItem('title') !== null && localStorage.getItem('content') !== null){
        $('.input-display').html(`<p>Deleted Items</p>`);
        localStorage.removeItem('title');
        localStorage.removeItem('content');
      }else{
        $('.input-display').html(`<p>Nothing to delete!</p>`);
      }
    });
  });