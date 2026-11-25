const botaoTema   = document.getElementById("btn-tema"); 
const corpoPagina = document.body;

if (botaoTema) {
    botaoTema.addEventListener("click", function () {
        corpoPagina.classList.toggle("tema-escuro");
        if (corpoPagina.classList.contains("tema-escuro")){
            botaoTema.textContent = "☀️ Modo claro";
        } else{
            botaoTema.textContent = "🌙 Modo escuro";
        }
    });
}

const poltronas     =  document.querySelectorAll(".assento");
const contador      =  document.getElementById("contador");
const spanTotal     =  document.getElementById("total");
const btnConfirmar  =  document.getElementById("btn-confirmar");
const precoIngresso =  40;
poltronas.forEach(function(poltrona) {
    poltrona.addEventListener("click", function(){
        /*Se a poltrona estiver livre*/
        if (!poltrona.classList.contains("ocupado")) {
           poltrona.classList.toggle("selecionado");
           
           const poltronasVerdes = document.querySelectorAll(".assento.selecionado");
           contador.textContent  = poltronasVerdes.length; 

           const valorTotal = poltronasVerdes.length * precoIngresso;
           spanTotal.textContent = valorTotal.toFixed(2).replace(".", ",");
        }
    });

});

if (btnConfirmar) {
    btnConfirmar.addEventListener("click", function(){
        const selecionadas = document.querySelectorAll(".assento.selecionado");
        if (selecionadas.length === 0){
            alert("Selecione pelo menos uma poltrona.")
            return;
        }

        selecionadas.forEach(function(poltrona){
            poltrona.classList.remove("selecionado");
            poltrona.classList.add("ocupado");
        });

        alert("Reserva confirmada! Divirta-se!");
        contador.textContent = "0";
        spanTotal.textContent = "0,00";
    });
}