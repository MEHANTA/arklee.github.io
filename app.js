function cre_num () {
    const ran = Math.random();
    if (ran<0.9) return 2;
    else return 4;
}//获取2或4

function generate (box) {
    let i,j
    i = Math.floor(Math.random()*4)
    j = Math.floor(Math.random()*4)
    if (box[i][j]===0)
        box[i][j] = cre_num()
    else
        generate(box)
}

//在0位置随机生成一个2或4

function show(box) {
    let i,j
    for (i=0;i<4;i++) {
        for (j=0;j<4;j++) {
            if (box[i][j]===0) document.getElementById(String(i) + String(j)).innerHTML = ""
            else document.getElementById(String(i) + String(j)).innerHTML = box[i][j]

            if (box[i][j]===0) {
                document.getElementById(String(i) + String(j)).style.backgroundColor = "#D8DEE9"
                document.getElementById(String(i) + String(j)).style.color = "#3B4252"
            }
            else if (box[i][j]===2) {
                document.getElementById(String(i) + String(j)).style.backgroundColor = "#88afd7"
                document.getElementById(String(i) + String(j)).style.color = "#3B4252"
            }
            else if (box[i][j]===4) {
                document.getElementById(String(i) + String(j)).style.backgroundColor = "#81abc1"
                document.getElementById(String(i) + String(j)).style.color = "#3B4252"
            }
            else if (box[i][j]===8) {
                document.getElementById(String(i) + String(j)).style.backgroundColor = "#88C0D0"
                document.getElementById(String(i) + String(j)).style.color = "#3B4252"
            }
            else if (box[i][j]===16) {
                document.getElementById(String(i) + String(j)).style.backgroundColor = "#8FBCBB"
                document.getElementById(String(i) + String(j)).style.color = "#3B4252"
            }
            else if (box[i][j]===32) {
                document.getElementById(String(i) + String(j)).style.backgroundColor = "#A3BE8C"
                document.getElementById(String(i) + String(j)).style.color = "#3B4252"
            }
            else if (box[i][j]===64) {
                document.getElementById(String(i) + String(j)).style.backgroundColor = "#EBCB8B"
                document.getElementById(String(i) + String(j)).style.color = "#3B4252"
            }
            else if (box[i][j]===128) {
                document.getElementById(String(i) + String(j)).style.backgroundColor = "#D08770"
                document.getElementById(String(i) + String(j)).style.color = "#3B4252"
            }
            else if (box[i][j]===256) {
                document.getElementById(String(i) + String(j)).style.backgroundColor = "#BF616A"
                document.getElementById(String(i) + String(j)).style.color = "#3B4252"
            }
            else if (box[i][j]===512) {
                document.getElementById(String(i) + String(j)).style.backgroundColor = "#B48EAD"
                document.getElementById(String(i) + String(j)).style.color = "#3B4252"
            }
            else if (box[i][j]===1024) {
                document.getElementById(String(i) + String(j)).style.backgroundColor = "#434C5E"
                document.getElementById(String(i) + String(j)).style.color = "#D8DEE9"
            }
            else if (box[i][j]===2048) {
                document.getElementById(String(i) + String(j)).style.backgroundColor = "#3B4252"
                document.getElementById(String(i) + String(j)).style.color = "#D8DEE9"
            }
            else {
                document.getElementById(String(i) + String(j)).style.backgroundColor = "#2E3440"
                document.getElementById(String(i) + String(j)).style.color = "#D8DEE9"
            }
            document.getElementById("score").innerHTML = "分数 "+score
                +"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+"最高分 "+max
        }
    }
}
//刷新div

function u2d (array) {
    let m
    for (m=0;m<4;m++) {
        let i, j
        for (j=3;j>=1;j--)
            for (i=j-1;i>=0;i--) {
                if (array[i][m]===0 || array[j][m]===0) {
                    array[j][m]=array[i][m]+array[j][m]
                    array[i][m]=0
                }
                else if (array[i][m]===array[j][m]) {
                    array[j][m] = array[i][m] + array[j][m]
                    array[i][m] = 0
                    score = score+array[j][m]
                    break
                }
                else break
            }
    }
}

function d2u (array) {
    let m
    for (m=0;m<4;m++) {
        let i, j
        for (i=0;i<3;i++) {
            for (j=i+1;j<4;j++) {
                if (array[i][m]===0 || array[j][m]===0) {
                    array[i][m]=array[i][m]+array[j][m]
                    array[j][m]=0
                }
                else if (array[i][m]===array[j][m]) {
                    array[i][m]=array[i][m]+array[j][m]
                    array[j][m]=0
                    score = score+array[i][m]
                    break
                }
                else break
            }
        }
    }
}

function r2l (array) {
    let m
    for (m=0;m<4;m++) {
        let i, j
        for (i=0;i<4;i++) {
            for (j=i+1;j<4;j++) {
                if (array[m][i]===0 || array[m][j]===0) {
                    array[m][i]=array[m][i]+array[m][j]
                    array[m][j]=0
                }
                else if (array[m][i]===array[m][j]) {
                    array[m][i]=array[m][i]+array[m][j]
                    array[m][j]=0
                    score = score+array[m][i]
                    break
                }
                else break
            }
        }
    }
}

function l2r (array) {
    let m
    for (m = 0; m < 4; m++) {
        let i, j
        for (j = 3; j >= 0; j--)
            for (i = j - 1; i >= 0; i--) {
                if (array[m][i] === 0 || array[m][j] === 0) {
                    array[m][j] = array[m][i] + array[m][j]
                    array[m][i] = 0
                } else if (array[m][i] === array[m][j]) {
                    array[m][j] = array[m][i] + array[m][j]
                    array[m][i] = 0
                    score = score+array[m][j]
                    break
                } else break
            }
    }
}

function start () {
    let box = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]
    score = 0
    generate(box)
    generate(box)
    show(box)
    document.getElementById("start").innerHTML = "重新开始"

    document.onkeydown = function (event) {
        let box1=box.toString()
        if (event.keyCode === 38) d2u(box)
        else if (event.keyCode === 40) u2d(box)
        else if(event.keyCode === 37) r2l(box)
        else if(event.keyCode === 39) l2r(box)
        if (box1!==box.toString()) {
            generate(box)
            if (score>max) {
                max = score
            }
            show(box)
        }
    }
}

var score
var max = 0
