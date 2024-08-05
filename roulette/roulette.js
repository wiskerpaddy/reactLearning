let roulette;
let isRunning = false;
let idxFirst = 1;
let idxSecond = 2;
let idxThird = 3;
let kaikyu = ["-60kg","-66kg","-73kg","-81kg","-90kg","-100kg","+100kg"];
// スタートボタンを押したら呼ばれる
function start() {
    if (!isRunning) {
        // 同時にstartボタンを押せないようにする処理
        isRunning = true;

        // 同時にstartボタンを押せないようにする処理
        // 第1引数に実行する関数、第2引数に実行間隔（ミリ秒単位）を指定
        roulette = setInterval(function() {
            // HTML内のタグのidがrouletteの表示する値を変えている
            if(idxFirst < 2){
                idxFirst = 7;
            }else{
                idxFirst--;
            }
            //document.getElementById("roulette").innerHTML = idxFirst;
            document.getElementById("roulette").innerHTML = kaikyu[idxFirst-1];
            if(idxSecond < 2){
                idxSecond = 7;
            }else{
                idxSecond--;
            }
            // document.getElementById("rouletteSecond").innerHTML = idxSecond;
            document.getElementById("rouletteSecond").innerHTML = kaikyu[idxSecond-1];
            if(idxThird < 2){
                idxThird = 7;
            }else{
                idxThird--;
            }
            // document.getElementById("rouletteThird").innerHTML = idxThird;
            document.getElementById("rouletteThird").innerHTML = kaikyu[idxThird-1];
        }, 350);
    }
}
// ストップボタンを押したら呼ばれる
function stop() {
    // isRunningがtrueならインターバルとfalseを消す
    if (isRunning) {
        clearInterval(roulette);
        isRunning = false;
    }
}
