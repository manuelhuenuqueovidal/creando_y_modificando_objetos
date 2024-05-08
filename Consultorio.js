
//Función constructora Consultorio
function Consultorio(nombre, pacientes) {
  this.nombre = nombre;
  this.pacientes = pacientes || [];
}

//Función constructora Paciente
function Paciente(nombre, edad, rut, diagnostico) {
  this.nombre = nombre;
  this.edad = edad;
  this.rut = rut;
  this.diagnostico = diagnostico;
}

//Variables que crean instancias de pacientes
let paciente1 = new Paciente("Vannia", 25, "193333330", "Dolor de garganta");
let paciente2 = new Paciente("Manuel", 45, "14562116k", "Fiebre");
let paciente3 = new Paciente("Carolina", 33, "174445550", "Palpitaciones");
let paciente4 = new Paciente("Canta", 68, "93352760", "Dolor de cabeza");

//Creación de instancias de consultorio y asociación con pacientes
let consultorio = new Consultorio("Consultorio 1", [paciente1, paciente2, paciente3, paciente4]);
let consultorio2 = new Consultorio("Consultorio 2", [paciente2]); 

//Mostrar el nombre del consultorio
console.log(consultorio.nombre);

//Mostrar el nombre de los pacientes en el consultorio
consultorio.pacientes.forEach(paciente => {
  console.log(paciente.nombre);
});
