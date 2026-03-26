type Consulta = {
  paciente: string;
  data: string;
  hora: string;
  confirmada: boolean;
};

const consulta: Consulta = {
  paciente: "João",
  data: "25/03/2026",
  hora: "14:00",
  confirmada: false
};

function mostrarConsulta(c: Consulta): void {
  console.log("=== SISTEMA DE CONSULTAS ===");
  console.log(`Paciente: ${c.paciente}`);
  console.log(`Data: ${c.data}`);
  console.log(`Hora: ${c.hora}`);
  console.log(`Status: ${c.confirmada ? "Confirmada" : "Pendente"}`);
}

function confirmarConsulta(c: Consulta): Consulta {
  c.confirmada = true;
  return c;
}

mostrarConsulta(consulta);

console.log("\nConfirmando consulta...\n");

const consultaConfirmada = confirmarConsulta(consulta);

mostrarConsulta(consultaConfirmada);