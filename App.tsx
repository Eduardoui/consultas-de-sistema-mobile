import { Text, View, Button } from "react-native";
import { useState } from "react";

type Consulta = {
  paciente: string;
  data: string;
  hora: string;
};

export default function App() {
  const [consultas, setConsultas] = useState<Consulta[]>([]);

  function gerarConsulta() {
    setConsultas([
      {
        paciente: "Eduardo",
        data: "21/03/2026",
        hora: "14:00",
      },
      {
        paciente: "Rhuan",
        data: "22/01/2025",
        hora: "17:15",
      },
    ]);
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 24, marginBottom: 20 }}>
        Consultas
      </Text>

      <Button title="Gerar Consulta" onPress={gerarConsulta} />

      {consultas.map((consulta, index) => (
        <View key={index} style={{ marginTop: 10 }}>
          <Text>Paciente: {consulta.paciente}</Text>
          <Text>Data: {consulta.data}</Text>
          <Text>Hora: {consulta.hora}</Text>
        </View>
      ))}
    </View>
  );
}