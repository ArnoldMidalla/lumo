import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import TopBar from "../components/topBar";

export default function Send() {
  return (
    <SafeAreaView className="bg-background flex-1 pt-6">
      <TopBar title="Send money" />
      <ScrollView className="flex-1 px-6"></ScrollView>
    </SafeAreaView>
  );
}
