const form = document.getElementById("form-turmas");

const inicio = document.getElementById("DataInicio");
const fim = document.getElementById("DataFim");

inicio.addEventListener("input", resetDataValidation);
fim.addEventListener("input", resetDataValidation);

function resetDataValidation(event) {
  inicio.setCustomValidity("");
  fim.setCustomValidity("");
}

form.addEventListener("submit", function(event) {
  if (inicio.value == "" || fim.value == "") return;
  if (inicio.value > fim.value) {
    inicio.setCustomValidity("Início não pode ocorrer depois que o fim.");
    fim.setCustomValidity("Fim não pode ocorrer antes que o início.");

    event.preventDefault();

    form.reportValidity();
  }
});
