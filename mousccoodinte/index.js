function myfunction(e)
{
    x = e.clientX
    y = e.clientY
    console.log(x,y);
    coor = `corr : ${x},${y}`
    document.getElementById("demo").innerHTML = coor
}

