import { BlurView } from "expo-blur";
import { useRouter } from "expo-router";
import { BadgeCheck } from "lucide-react-native";
import { Modal, Pressable, Text, View } from "react-native";

// import * as Clipboard from 'expo-clipboard';
// import { useState } from "react";

export default function SuccessTrans({
  showSuccessModal2,
  setShowSuccessModal2,
  user,
  val,
  serviceFee,
  total,
}: {
  showSuccessModal2: boolean;
  setShowSuccessModal2: (val: boolean) => void;
  user: any;
  val: number;
  serviceFee: number;
  total: number;
}) {
  // npx expo install expo-clipboard
  // const [copiedText, setCopiedText] = useState('');

  // const copyToClipboard = async () => {
  //   await Clipboard.setStringAsync('hello world');
  // };

  // const fetchCopiedText = async () => {
  //   const text = await Clipboard.getStringAsync();
  //   setCopiedText(text);
  // };

  const router = useRouter();

  const date = new Date();

  const formattedDate = date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formattedTime = date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  // Combine and tweak to match your exact string
  const finalString = `${formattedDate}, ${formattedTime}`;

  console.log(finalString); // "10 September 2025 10:35 AM"

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
    <Modal
      transparent
      visible={showSuccessModal2}
      animationType="fade"
      statusBarTranslucent
    >
      <BlurView
        // intensity={20}
        tint="dark"
        className="flex-1 justify-center items-center"
        experimentalBlurMethod="dimezisBlurView"
      >
        {/* tap outside to close */}
        <Pressable
          className="absolute inset-0"
          onPress={() => setShowSuccessModal2(false)}
        />

        {/* modal card */}
        <View className="w-[92%] rounded-[28px] overflow-hidden bg-white">
          <View className="p-4 flex flex-col gap-4">
            <View className="flex items-center pt-6">
              <BadgeCheck size={50} fill="green" color="white" />
              <Text
                className="text-lg font-dmsans7 pt-3"
                style={{ letterSpacing: -0.7 }}
              >
                Transaction successful
              </Text>
              <Text className="font-dmsans6 tracking-tighter text-neutral-600">
                You've sent N{total * 1500} to {user?.name}
              </Text>
            </View>

            <Text className="font-dmsans7 tracking-tighter">
              Transaction details
            </Text>

            <View className="flex flex-row justify-between items-center">
              <Text className="font-dmsans6 tracking-tighter text-neutral-500 text-sm">
                Amount
              </Text>
              <Text className="font-dmsans6 tracking-tighter text-neutral-500">
                ${total}
              </Text>
            </View>

            <View className="flex flex-row justify-between">
              <Text className="font-dmsans6 tracking-tighter text-neutral-500 text-sm">
                Date
              </Text>
              <Text className="font-dmsans6 tracking-tighter text-neutral-500">
                {finalString}
              </Text>
            </View>

            <View className="flex flex-row justify-between">
              <Text className="font-dmsans6 tracking-tighter text-neutral-500 text-sm">
                Service fee
              </Text>
              <Text className="font-dmsans6 tracking-tighter text-neutral-500">
                ${serviceFee}
              </Text>
            </View>

            <View className="flex flex-row justify-between items-center pt-4">
              <Text className="font-dmsans6 tracking-tighter text-neutral-500">
                Total amount
              </Text>
              <Text className="font-dmsans8 tracking-tighter text-[#004efe] text-lg">
                ${val + serviceFee}
              </Text>
            </View>

            <View></View>

            <View className="flex flex-row gap-4">
              <Pressable className="rounded-2xl flex-1 flex flex-row justify-center bg-[#004efe] py-3">
                <Text className="tracking-tighter font-dmsans6 text-white">
                  Download receipt
                </Text>
              </Pressable>
              <Pressable
                className="rounded-2xl flex-1 flex flex-row justify-center bg-[#d4e1fa] py-3"
                onPress={() => {
                  setShowSuccessModal2(false);
                  router.push("/(tabs)");
                }}
              >
                <Text className="tracking-tighter font-dmsans6 text-[#004efe]">
                  Done
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </BlurView>
    </Modal>
  );
}
