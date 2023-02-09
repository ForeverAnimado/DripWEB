function copiarIp() {
  var enlace = document.getElementById("enlace");
  var inputFalso = document.createElement("input");

  inputFalso.setAttribute("value", enlace.innerHTML);
  document.body.appendChild(inputFalso);
  inputFalso.select();

  document.execCommand("copy");
  document.body.removeChild(inputFalso);

  swal("IP Copiada", "Ahora colocala en Tu Lista de Servidores", "success");
}