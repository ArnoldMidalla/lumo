import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import {
  ArrowDownToLine,
  Bell,
  Blocks,
  ChevronDown,
  CircleDollarSign,
  CreditCard,
  Eye,
  EyeOff,
  Globe,
  PlugZap,
  Plus,
  Send,
  TvMinimal,
} from "lucide-react-native";
import React, { useState } from "react";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function index() {
  const [viewBal, setViewBal] = useState(true);

  const categories = [
    {
      Icon: PlugZap,
      name: "Electricity",
    },
    {
      Icon: Globe,
      name: "Internet",
    },
    {
      Icon: TvMinimal,
      name: "Subscribe",
    },
    {
      Icon: CircleDollarSign,
      name: "Convert",
    },
    {
      Icon: Blocks,
      name: "More",
    },
  ];

  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-background pt-6">
      <StatusBar style="dark" animated />

      <ScrollView className="flex-1 px-6">
        <View className="flex flex-col gap-8">
          {/* top welcome user bar */}
          <View className="flex flex-row justify-between">
            <View className=" flex flex-row gap-2 justify-center items-center">
              {/* image placholder */}
              <Image
                source={require("@/public/pp.jpg")}
                className="max-w-[40px] max-h-[40px] bg-black rounded-full"
              />

              {/* good morning user */}
              <View className="flex flex-col justify-center gap-0.5">
                <Text className="font-dmsans5 text-sm opacity-50 tracking-tighter leading-snug">
                  Good evening
                </Text>
                <Text className="font-dmsans6 tracking-tighter text-lg leading-none">
                  Welcome Arnold
                </Text>
              </View>
            </View>

            {/* top bar buttons */}
            <View className="flex flex-row gap-2">
              <Pressable className="bg-white rounded-full flex flex-row items-center justify-center gap-1 px-4">
                <Image
                  source={require("@/public/us_flag.png")}
                  className="rounded-full max-w-6 max-h-6"
                />
                <ChevronDown size={22} />
              </Pressable>

              <Pressable className="bg-white rounded-full flex items-center justify-center p-[12px]">
                <Bell size={18} fill={"black"} />
              </Pressable>
            </View>
          </View>

          {/* card */}
          <View
            className="bg-[#004efe] rounded-[30px] relative"
            style={{ height: 220 }}
          >
            <View className="absolute p-5 flex-1 flex flex-col justify-between h-full w-full">
              <Pressable
                className="p-2 rounded-full bg-white flex flex-row items-center gap-1"
                style={{ alignSelf: "flex-start" }}
              >
                <CreditCard fill="#004efe" color="white" size="16" />
                <Text className="font-dmsans6 text-sm">****7635 98</Text>
                <ChevronDown size="16" strokeWidth="2.4" />
              </Pressable>

              <View className="flex flex-cl">
                <Text className="text-white font-dmsans5 tracking-tighter opacity-70">
                  Available balance
                </Text>
                <View className="flex flex-row gap-2 items-center">
                  <Text className="text-white font-dmsans5 tracking-tighter text-4xl">
                    ${viewBal ? "25,738.30" : "********"}
                  </Text>
                  <Pressable onPress={() => setViewBal(!viewBal)}>
                    {viewBal ? <Eye color="white" /> : <EyeOff color="white" />}
                  </Pressable>
                </View>
              </View>

              <View className=" flex flex-row gap-4">
                <Pressable
                  className="flex flex-row justify-center items-center gap-2 h-12 bg-white rounded-full flex-1"
                  onPress={() => router.push("/send/page")}
                >
                  <Send size={18} />
                  <Text className="font-dmsans6  tracking-tight">Send</Text>
                </Pressable>
                <Pressable className="flex flex-row justify-center items-center gap-2 h-12 bg-white rounded-full flex-1">
                  <ArrowDownToLine size={18} />
                  <Text className="font-dmsans6  tracking-tight">Receive</Text>
                </Pressable>
                <Pressable className="w-12 h-12 flex items-center justify-center bg-white rounded-full">
                  <Plus size={18} />
                </Pressable>
              </View>
            </View>
          </View>

          {/* categories */}
          <View className="flex flex-row justify-between">
            {categories.map((cat) => (
              <Pressable
                key={cat.name}
                className="flex flex-col gap-1 items-center"
              >
                <View
                  className="flex justify-center items-center bg-white rounded-full"
                  style={{ height: 50, width: 50 }}
                >
                  <cat.Icon size={20} />
                </View>
                <Text className="font-dmsans6 tracking-tight text-sm">
                  {cat.name}
                </Text>
              </Pressable>
            ))}
          </View>

          {/* quick trans */}
          <View>
            <Text className="font-dmsans6 tracking-tighter text-lg">
              Quick transfer
            </Text>
            <View className="flex flex-row justify-between"></View>
          </View>

          {/* recent trans */}
          <View>
            <View className="flex flex-row justify-between items-center">
              <Text className="font-dmsans6 tracking-tighter text-lg">
                Recent transactions
              </Text>
              <Pressable onPress={()=>router.push("/receipts")}>

              <Text className="font-dmsans6 tracking-tighter opacity-60">
                View all
              </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
