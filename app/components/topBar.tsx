import { useRouter } from "expo-router";
import { ChevronLeft } from "lucide-react-native";
import { Pressable, Text, View } from "react-native";

export default function TopBar({ title }: { title: string }) {
  const router = useRouter();
  return (
    <View className="flex flex-row justify-between items-center px-6">
      <View style={{ minWidth: 42 }}>
        <Pressable
          className="bg-white rounded-full border-[1px] border-neutral-300"
          onPress={() => router.back()}
          style={{ padding: 8, alignSelf: "flex-start" }}
        >
          <ChevronLeft size={20} strokeWidth={2.4} />
        </Pressable>
      </View>
      <View className="flex flex-row justify-center items-center flex-1 gap-1">
        <Text className="font-dmsans6 tracking-tighter text-center" style={{fontSize: 18}}>
          {title}
        </Text>
      </View>
      <View style={{ minWidth: 42 }}></View>
    </View>
  );
}
