import { BlurView } from "expo-blur";
import { ArrowLeftRight } from "lucide-react-native";
import { Image, Modal, Pressable, Text, View } from "react-native";

export default function ConfirmTrans({
  showSuccessModal,
  setShowSuccessModal,
  item,
  val,
  serviceFee,
}: {
  showSuccessModal: boolean;
  setShowSuccessModal: (val: boolean) => void;
  item: any;
  val: number;
  serviceFee: number;
}) {
  return (
    <Modal
      transparent
      visible={showSuccessModal}
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
          onPress={() => setShowSuccessModal(false)}
        />

        {/* modal card */}
        <View className="w-[88%] rounded-3xl overflow-hidden bg-white">
          <View className="p-4 flex flex-col gap-4">
            <Text className="font-dmsans7 tracking-tighter">
              Confirm transaction
            </Text>

            <View className="flex flex-col">
              {/* from */}
              <View className="bg-[#f3f3f3] p-4 flex flex-col gap-2 rounded-2xl">
                <Text className="font-dmsans6 tracking-tighter text-neutral-700 text-sm">
                  From
                </Text>
                <View className="flex flex-row gap-2">
                  <Image
                    source={require("@/public/pp.jpg")}
                    className="w-[40px] h-[40px] bg-black rounded-full"
                  />
                  <View>
                    <Text className="font-dmsans6 text-neutral-950 tracking-tighter">
                      You
                    </Text>
                    <Text className="font-dmsans6 text-neutral-700 tracking-tighter text-sm">
                      3785 8374 38
                    </Text>
                  </View>
                </View>
              </View>
              <View className="flex flex-row justify-center">
                <ArrowLeftRight color={"#004efe"} />
              </View>

              {/* to */}
              <View className="bg-[#f3f3f3] p-4 flex flex-col gap-2 rounded-2xl">
                <Text className="font-dmsans6 tracking-tighter text-neutral-700 text-sm">
                  To
                </Text>
                <View className="flex flex-row gap-2">
                  <Image
                    source={item?.image}
                    className="w-[40px] h-[40px] bg-black rounded-full"
                  />
                  <View>
                    <Text className="font-dmsans6 text-neutral-950 tracking-tighter">
                      {item?.name}
                    </Text>
                    <Text className="font-dmsans6 text-neutral-700 tracking-tighter text-sm">
                      {item?.phone}
                    </Text>
                  </View>
                </View>
              </View>
            </View>

            <View className="flex flex-row justify-between items-center">
              <Text className="font-dmsans6 tracking-tighter text-neutral-500 text-sm">
                Amount
              </Text>
              <Text className="font-dmsans6 tracking-tighter text-neutral-500">
                ${val}
              </Text>
            </View>

            <View className="flex flex-row justify-between">
              <Text className="font-dmsans6 tracking-tighter text-neutral-500 text-sm">
                Payment method
              </Text>
              <Text className="font-dmsans6 tracking-tighter text-neutral-500">
                ${val}
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

            <View className="flex flex-row justify-between">
              <Text className="font-dmsans6 tracking-tighter text-neutral-500 text-sm">
                Payment method
              </Text>
              <Text className="font-dmsans8 tracking-tighter text-[#004efe] text-lg">
                ${val + serviceFee}
              </Text>
            </View>
          </View>
        </View>
      </BlurView>
    </Modal>
  );
}
