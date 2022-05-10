
function carregar() {
  var msg = window.document.getElementById("horas");
  var img = window.document.getElementById("tempo2");
  var data = new Date();
  var hora = data.getHours(); 
  msg.innerHTML = `Agora são ${hora} horas`;
  if (hora >= 0 && hora < 12) {
    //   BOM DIA
    img.src = "./img/dia.jpg";
    document.body.style.background = '#25acdf'
  } else if (hora >= 12 && hora < 18) {
    //   BOA TARDE
    img.src = "./img/tarde.jpg";
    document.body.style.background = '#fbbb62'

  } else {
    //   BOA NOITE
    img.src = "./img/noite.jpg";
    document.body.style.background = '#07234A'
  }
}
