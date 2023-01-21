let number = prompt("กรอกเลขที่ต้องการซื้อ : ")
let random_number = Math.floor(Math.random() * 1000000
)
document.getElementById("random").innerHTML = random_number
document.getElementById("lotto_buy").innerHTML = number

if(number == random_number){
 document.getElementById("result").innerHTML = "เสียใจด้วย!คุณถูกรางวัล !! "

}
else{
    document.getElementById("result").innerHTML = "ดีใจด้วย! คุณไม่ถูกรางวัล! "
}