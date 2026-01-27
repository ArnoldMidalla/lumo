import { StatusBar } from "expo-status-bar";
import { Bell, ChevronDown } from "lucide-react-native";
import React from "react";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function index() {
  return (
    <SafeAreaView className="flex-1 bg-background pt-6">
      <StatusBar style="dark" animated />

      <ScrollView className="flex-1 px-6">
        <View className="flex flex-col gap-8">
          {/* top welcome user bar */}
          <View className="flex flex-row justify-between">
            <View className=" flex flex-row gap-2 justify-center">
              {/* image placholder */}
              <Image
                source={require("@/public/pp.jpg")}
                className="w-[40px] h-[40px] bg-black rounded-full"
              />

              {/* good morning user */}
              <View className="flex flex-col justify-center gap-0.5">
                <Text className="font-dmsans6 text-sm opacity-50 tracking-tighter leading-snug">
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
                {/* <View className="bg-black rounded-full w-6 h-6"/> */}
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
            className="bg-[#004efe] rounded-3xl relative"
            style={{ height: 190 }}
          >
            <View className="absolute p-4 flex-1 border border-amber-700 flex flex-col justify-between h-full w-full">
              <Text className="text-white font-dmsans6 tracking-tighter">Hey</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
