
//----------------------------------
//createImageBitmap(100,100,'black');
// substitute black with value you read from ___
// dimensions are 81x53
var counter = 0;
for (var j = 0; j < 81, j++){
    y = j*15;
    for (var i = 0; i < 53; i++){
        x = i*15;
        create(x,y,colors[counter]);
        counter++;
    }
}
//----------------------------------