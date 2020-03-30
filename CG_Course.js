function input_click(){
  for(var i = 0; i < 4; i++){
       for(var j = 0; j < 4; j++){
         var result = 0;
         for(var k = 0; k < 4; k++){
           result += document.getElementById('row' + i + '_col' + k).value
                   * document.getElementById('m2_row' + k + '_col' + j).value;
       }
       document.getElementById('m3_row' + i + '_col' + j).innerHTML = result;
     }
   }

}

function output_click(){
  history.go(0);
}
