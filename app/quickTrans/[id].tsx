import { quickTrans } from "@/data";
import { useLocalSearchParams } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { ChevronDown, CreditCard } from "lucide-react-native";
import { useEffect, useState } from "react";
import {
  Image,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import TopBar from "../components/topBar";

export default function Send() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const item = quickTrans.find((p) => p.name === id);

  const presetVal = [50, 100, 200, 300, 500];

  const [val, setVal] = useState(0);

  const [sr, setSr] = useState<string>();

  let text = "Enter amount";
  let textColor = "black";
  if (val > 0 && val < 50) {
    text = "Amount too low";
    textColor = "red";
  } else if (val >= 50) {
    text = `Sending $${val} to ${item?.name}`;
    textColor = "green";
  }

  return (
    <SafeAreaView className="bg-background flex-1">
      <StatusBar style="dark" />
      <ScrollView className="flex-1 px-6">
        <View
          className="flex flex-col gap-8 pt-6"
          style={{ paddingBottom: 200 }}
        >
          <TopBar title="Send money" />
          <View
            className="flex-1 bg-white flex flex-col gap-2"
            style={{ borderRadius: 18, padding: 16 }}
          >
            <Text className="font-dmsans6 tracking-tighter">To:</Text>
            <View className="flex flex-row justify-between">
              <View className="flex flex-row gap-2">
                <Image
                  className="rounded-full"
                  style={{
                    height: 36,
                    width: 36,
                  }}
                  source={item?.image}
                />
                <View>
                  <Text className="font-dmsans6 tracking-tighter">
                    {item?.name}
                  </Text>
                  <Text className="font-dmsans6 opacity-70 text-sm">
                    {item?.phone}
                  </Text>
                </View>
              </View>
            </View>
          </View>

          <View
            className="flex-1 bg-white flex flex-col gap-2 items-center justify-center"
            style={{ borderRadius: 18, padding: 16 }}
          >
            <Pressable
              className="p-2 rounded-full bg-background flex flex-row items-center gap-1 self-center"
              // style={{ alignSelf: "flex-start" }}
            >
              <CreditCard fill="#004efe" color="white" size="16" />
              <Text className="font-dmsans6 text-sm">****7635 98</Text>
              <ChevronDown size="16" strokeWidth="2.4" />
            </Pressable>
            <View className="flex flex-row items-center">
              <Text style={{ fontSize: 30, fontFamily: "DMSans_400Regular" }}>
                $
              </Text>
              <TextInput
                textAlign="center"
                placeholder="100"
                maxLength={7}
                keyboardType="numeric"
                inputMode="numeric"
                style={{ fontSize: 30, fontFamily: "DMSans_400Regular" }}
                onChangeText={(text) => setVal(Number(text))}
              />
            </View>
            <Text className="font-dmsans6 tracking-tighter opacity-60">
              Enter amount {val}
            </Text>
          </View>

          <View className="flex flex-row gap-2">
            {presetVal.map((pv) => (
              <Pressable
                className="bg-white flex-1 rounded-full flex items-center border-[1px] border-neutral-300"
                style={{ paddingHorizontal: 12, paddingVertical: 8 }}
                key={pv}
                onPress={() => setVal(pv)}
              >
                <Text className="font-dmsans6">{pv}</Text>
              </Pressable>
            ))}
          </View>

          <View
            className="flex-1 bg-white flex flex-col gap-2"
            style={{ borderRadius: 18, padding: 16 }}
          >
            <View className="flex flex-row justify-between">
              <Text className="font-dmsans6 tracking-tighter text-lg">
                Suggested recipients
              </Text>
              <Pressable onPress={() => setSr("")}>
                <Text className="opacity-60 font-dmsans6 text-sm">Clear</Text>
              </Pressable>
            </View>
            <View className="flex flex-col gap-2">
              {quickTrans.map((qt) => (
                <Pressable
                  key={qt.name}
                  className="flex flex-row justify-between items-center"
                  onPress={() => setSr(qt.name)}
                >
                  <View
                    className="flex flex-row gap-3 items-center"
                    style={{ gap: 12 }}
                  >
                    <Image
                      className="rounded-full"
                      style={{
                        height: 44,
                        width: 44,
                      }}
                      source={qt.image}
                    />
                    <View className="flex flex-col">
                      <Text className="font-dmsans6 tracking-tighter">
                        {qt.name}
                      </Text>
                      <Text className="font-dmsans6 tracking-tighter opacity-60 text-sm">
                        {qt.phone}
                      </Text>
                    </View>
                  </View>
                  <View
                    className={`border border-neutral-300 rounded-full transition duration-300 ${sr === qt.name && "bg-black"}`}
                    style={{ height: 16, width: 16 }}
                  />
                </Pressable>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
