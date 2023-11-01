//**buttons divini alıyoruz bu şekilde! */
const buttons = document.querySelector(".buttons")
//**buradan ise display divini alıyoruz bu şekilde! */
const display = document.querySelector(".display")

//**buttonsarray oluşturuyoruz bu şekilde! */
//**içine numeric olarak değerleri yazıyoruz alt alta 3 rakam bir hesaplama işareti olarak */
let buttonsarray=[
7,
8,
9,
"/",
4,
5,
6,
"*",
1,
2,
3,
"+",
0,
".",
"-",
"=",
"C",
];

//**Değişken açıyoruz let values diye! ismini istediğimiz olarak yazabiliriz! */
//**bu sayede her bir value push edeceğiz burada!*/
let values=[];
//**let cleanvalues diye değişken tanımlıyoruz fakat herhangi bir değer vermiyoruz */
let cleanvalues;
//**0 dan başlatıyoruz a buttonsarray'dan büyükse her defasında bir bir arttırsın diyor */
for (let a=0;a<buttonsarray.length;a++){
//**Şimdi ise buttonlarımızı oluşturuyoruz! createElement */
    let button = document.createElement("button");
    //**button'a bir tane text-content veriyoruz */
    //**buttonsarray'a gidip a'nıncı elemanı buluyoruz */
    button.textContent=buttonsarray[a];
    //**buttons'a appenChild ile yarattığımız buttonu atıyoruz! */
    //**Bu sayede hesap makinesi için tüm işlevsev tuşlarımız gelmiş olacak! */
    buttons.appendChild(button);
}
//**Şimdi ise tüm buttonlarımızı tetikleyeceğiz! */
//**buttons buttons divinin içinde ki tüm buttonları al diyoruz queryselectorAll(".buttons button" ile) */
let calcbuttons = document.querySelectorAll(".buttons button");
//**forEach ile döndürme yapıyoruz */
calcbuttons.forEach((item)=>{
    //**her bir item için eventlistener oluşturuyoruz */
    //**ardından click ile event alıyoruz (e) yani hangi tuşa basarsak ekranımızda gözükecek */
    item.addEventListener("click", (e) => {
        //**clg ile e.target.textContent yapınca consoleda çalışıp çalışmadığını test edebiliriz!*/
        // console.log(e.target.textContent)
    //**yeni bir fonksyon yarayırouz */
    //**event olarak e.target.textContent alıyoruz içine */
    calculateArray(e.target.textContent)
    });
});

//**Yukarıda calculayeArray eventinin fonksiyonunu yaratıyoruz */
//**value alıyoruz direkt */
let calculateArray=(value) =>{
    //**eğer value === ise C */
    if (value==="C"){
        //**values'ı sıfırlasın */
        values=[];
        //**sıfırlama işleminden sonra ekranda tekrar 0 yazsın! */
        display.textContent= "0";
        //**ve ardından return olsun herhangi bir ilerleme kaydetmesin */
        return;
    }

    //**Eğer ki bastığımız value tuşu eşit değilse!= value  */
    if (value != "="){
        //**values pushluyoruz! yani sürekli içeri değer atsın(value)'a */
        values.push(value);
        //**push yaptık mı her yazdığımız rakamdan sonra virgül gelecek bunu iptal etemiz gerekiyor! yani join("") kullanacağız içi boş olacak örnek cleanvalues=values.join(""); */
        cleanvalues=values.join("");
        //**ve bunu text olarak yansıtsın! */
        display.textContent=cleanvalues;
    }
    //**Eşit tuşuna basarsak ne yapsın işlemi */
    else{
        //**değişken tanımlıyoruz */
        //**ve eval metodu ile hesaplama gerçekleştireceğiz */
        let result=eval(cleanvalues);
    //**restulu displaye getiriyoruz */
        display.textContent=result
        value=[];
}
};