// Select color input
// Select size input
var height, width, color;

// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function (event){
    event.preventDefault();
    height=$('#inputHeight').val();
    width=$('#inputWeight').val();
    makeGrid(height, width);
})

function makeGrid(h, w) {

// Your code goes here!
$('tr').remove (); //to clear previously create grid
for (var i =1; i<=h; i++){
    $('#pixelCanvas').append('<tr id=table' + i + '></tr'); //creating a table row
    for (var j= 1; j<= w; j++){
        $('#table'+ i).append('<td></td>'); //adding a row to the table
        }
    }
//adding color to grid
$('td').click(function addColor(){
    color = $('#colorPicker').val();

    if ($(this).attr('style')){
        $(this).removeAttr('style')
    }
    else {
        $(this).attr('style', 'background-color:' +color);
        }
    })
}
