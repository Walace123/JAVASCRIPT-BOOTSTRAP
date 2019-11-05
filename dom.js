var palavra;/*usuário digita a palavra*/
var dica1;
var dica2;
var dica3;
var resp; /*Usuário digita a palavra de tentativa*/
var certo;
var erro;
var chance=5;
var i;
function funcao(quadro){
info="A primeira dica é: "+dica1+"\n";
quadro.value+=info;
}
function funcao2(quadro){
info="A segunda dica é: "+dica2+"\n";
quadro.value+=info;
}
function funcao3(quadro){
info="A terceira dica é: "+dica3+"\n";
quadro.value+=info;
}
function resultado(quadro){


for (i=0; i<5;i++){

if  (palavra==resp){
alert("Parabéns! você acertou!");
i=5;
}
else if (palavra != resp){
alert ("Voce errou! Restam "+chance+" chances");
chance--;
if (chance==0){
alert("FIM DE JOGO! VOCÊ ERROU!");
}
break;
}
}
} 