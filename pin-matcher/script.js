

document.getElementById('gp').addEventListener('click',function()
{
    var val = Math.floor(1000 + Math.random() * 9000);
    document.getElementById('ps').placeholder=val;
    document.querySelector('.x').placeholder='';
    document.getElementById('match').style.display='none';
    document.getElementById('not-match').style.display='none';
    document.getElementById('action-left').style.display='none';

});


function insert(num) 
{
document.querySelector('.x').placeholder = document.querySelector('.x').placeholder + num;
}


function backspace()
{
var str = document.querySelector('.x').placeholder;
document.querySelector('.x').placeholder =str.substring(0, str.length - 1);; 
}
function reset() {
document.querySelector('.x').placeholder='';
}

document.querySelector('.sbmt').addEventListener('click',function()
{
    if(document.querySelector('.y').placeholder==document.querySelector('.y').placeholder){
        document.getElementById('match').style.display=block;
        alert('match');
    }
    document.getElementById('not-match').style.display=block;
});

function matched(){
    const p=3;
        var x=parseFloat(document.querySelector('.x').placeholder);
        var y=parseFloat(document.querySelector('.y').placeholder);
        if (x === y) {
            document.getElementById('match').style.display='block';
        } 
        else {

            document.getElementById('not-match').style.display='block';
          } 
        
       
}

