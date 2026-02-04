import { useRouter } from "expo-router";
import { ChevronDown, ChevronLeft } from "lucide-react-native";
import { Image, Pressable, Text, View } from "react-native";

export default function TopBar({ title, tr }: { title: string; tr?: boolean }) {
  const router = useRouter();
  return (
    <View className="flex flex-row justify-between items-center">
      <View style={{ width: 70 }}>
        <Pressable
          className="bg-white rounded-full border-[1px] border-neutral-300"
          onPress={() => router.back()}
          style={{ padding: 8, alignSelf: "flex-start" }}
        >
          <ChevronLeft size={20} strokeWidth={2.4} />
        </Pressable>
      </View>
      <View className="flex flex-row justify-center items-center flex-1 gap-1">
        <Text
          className="font-dmsans6 tracking-tighter text-center"
          style={{ fontSize: 18 }}
        >
          {title}
        </Text>
      </View>
      <View style={{ width: 70 }}>
        {tr && (
          <Pressable className="bg-white rounded-full flex flex-row items-center justify-center gap-1 py-2">
            <Image
              source={require("@/public/us_flag.png")}
              className="rounded-full w-6 h-6"
            />
            <ChevronDown size={18} strokeWidth={2.2} />
          </Pressable>
        )}
      </View>
    </View>
  );
}
