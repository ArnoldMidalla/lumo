import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import {
  ArrowDownToLine,
  Bell,
  ChevronDown,
  CreditCard,
  Eye,
  EyeOff,
  Plus,
  Send,
} from "lucide-react-native";
import React, { useState } from "react";
import {
  Image,
  Platform,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { categories, quickTrans, recentTrans } from "@/data";

import * as Haptics from "expo-haptics";
import AnimatedStyleUpdateExample from "../components/test";

export default function index() {
  const [viewBal, setViewBal] = useState(true);

  const router = useRouter();

  const hapticTap = () => {
    if (Platform.OS === "android") {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    } else {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    }
  };

  const date = new Date();

  let greeting = "evening";
  if (date.getHours() > 5 && date.getHours() < 12) {
    greeting = "morning";
  } else if (date.getHours() >= 12 && date.getHours() < 17) {
    greeting = "afternoon";
  }

  // Default locale format (varies by browser/region, e.g., "2:05:30 PM")
  // console.log(date.toLocaleTimeString());

  // Specific format (e.g., "14:05" in 24-hour format for UK English)
  // console.log(
  //   date.toLocaleTimeString("en-GB", { hour: "numeric", minute: "numeric" }),
  // );
  // Specific format (e.g., "2:05 PM" in 12-hour format for US English)
  // console.log(date.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }))

  // const hour = date.getHours().toString().padStart(2, "0");
  // const minute = date.getMinutes().toString().padStart(2, "0");
  // const second = date.getSeconds().toString().padStart(2, "0");

  // console.log(`Formatted time: ${hour}:${minute}:${second}`); // Example: "Formatted time: 02:05:30"

  return (
    <SafeAreaView className="flex-1 bg-background">
      <StatusBar style="dark" animated />

      <ScrollView className="flex-1 px-6">
        <View
          className="flex flex-col gap-8 pt-6"
          style={{ paddingBottom: 200 }}
        >
          {/* top welcome user bar */}
          <View className="flex flex-row justify-between">
            <View className=" flex flex-row gap-2 justify-center items-center">
              {/* image placholder */}
              <Image
                source={require("@/public/pp.jpg")}
                className="w-[40px] h-[40px] bg-black rounded-full"
              />

              {/* good morning user */}
              <View className="flex flex-col justify-center gap-0.5">
                <Text className="font-dmsans5 text-sm opacity-50 tracking-tighter leading-snug">
                  Good {greeting}
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
                  className="rounded-full w-6 h-6"
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
                <View className="flex flex-row items-center">
                  <Text className="text-white font-dmsans5 tracking-tighter text-4xl">
                    ${viewBal ? "25,738.30" : "********"}
                  </Text>

                  <Pressable
                    onPress={() => {
                      setViewBal(!viewBal);
                      // Haptics.notificationAsync(
                      //   Haptics.NotificationFeedbackType.Success,
                      // );
                      hapticTap();
                    }}
                    className="h-full flex flex-row items-center px-2"
                  >
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
          <View className="flex flex-col gap-2">
            <Text className="font-dmsans6 tracking-tighter text-lg">
              Quick transfer
            </Text>
            <View className="flex flex-row justify-between">
              {quickTrans.map((qt) => (
                <Pressable
                  key={qt.name}
                  className="flex flex-col gap-1 items-center"
                  onPress={() =>
                    router.push({
                      pathname: "/quickTrans/[id]",
                      params: { id: qt.name },
                    })
                  }
                  // onPress={() =>
                  //   router.push("/quickTrans/[id]")
                  // }
                >
                  {/* <View
                    className="rounded-full"
                    style={{
                      backgroundColor: qt.bgColor,
                      height: 40,
                      width: 40,
                    }}
                  /> */}
                  <Image
                    className="rounded-full"
                    style={{
                      height: 40,
                      width: 40,
                    }}
                    source={qt.image}
                  />
                  <Text className="font-dmsans6 tracking-tighter">
                    {qt.name}
                  </Text>
                </Pressable>
              ))}
            </View>
          </View>

          {/* recent trans */}
          <View className="flex flex-col gap-2">
            <View className="flex flex-row justify-between items-center">
              <Text className="font-dmsans6 tracking-tighter text-lg">
                Recent transactions
              </Text>
              <Pressable onPress={() => router.push("/receipts")}>
                <Text className="font-dmsans6 tracking-tighter opacity-60">
                  View all
                </Text>
              </Pressable>
            </View>

            <View className="flex flex-col gap-2">
              {recentTrans.map((rt) => (
                <View key={rt.name} className="flex flex-row justify-between">
                  <View className="flex flex-row gap-2">
                    <Image
                      className="rounded-full"
                      style={{
                        height: 40,
                        width: 40,
                      }}
                      source={rt.image}
                    />
                    <View className="flex flex-col">
                      <Text className="font-dmsans7 tracking-tight">
                        {rt.name}
                      </Text>
                      <Text className="font-dmsans6 tracking-tight opacity-60 text-sm">
                        {rt.timeHr + ":" + rt.timeMin}
                      </Text>
                    </View>
                  </View>
                  <View
                    className="flex flex-col"
                    style={{ alignItems: "flex-end" }}
                  >
                    <Text className="font-dmsans7 tracking-tighter text-right">
                      {rt.status === "Sent" ? "-" : "+"}
                      {"$" + rt.amount}
                    </Text>
                    <Text
                      className="font-dmsans7 tracking-tighter"
                      style={{
                        color: rt.status === "Sent" ? "#ff4d4d" : "#1eb364",
                      }}
                    >
                      {rt.status}
                    </Text>
                  </View>
                </View>
              ))}
            </View>
          </View>

          <AnimatedStyleUpdateExample />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
