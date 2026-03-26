import { Text, View } from "react-native";
type Consulta = {
  paciente: string;
  data: string;
  hora: string;
};

export default function ConsultaItem({ consulta }: { consulta: Consulta }) {
  return (
    <View style={{ marginTop: 10 }}>
      <Text>Paciente: {consulta.paciente}</Text>
      <Text>Data: {consulta.data}</Text>
      <Text>Hora: {consulta.hora}</Text>
    </View>
  );
}