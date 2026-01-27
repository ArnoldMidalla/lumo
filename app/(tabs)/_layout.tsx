import { Tabs } from "expo-router";
import {
  Bolt,
  ChartColumnBig,
  CreditCard,
  Home,
  ReceiptText,
} from "lucide-react-native";
import { View } from "react-native";

function TabIcon({ focused, icon: Icon, title }: any) {
  return (
    <View
      className={`${focused ? "bg-white" : ""} flex w-12 h-12 items-center justify-center rounded-xl`}
    >
      <Icon
        // outside border
        color={focused ? "white" : "white"}
        // inside color
        fill={focused ? "black" : "#1e1e1e"}
        size={20}
        strokeWidth={focused ? 1 : 2.7}
      />
    </View>
  );
}

export default function _layout() {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#111111",
          height: 100,
          position: "absolute",
          overflow: "hidden",
          //   flexDirection: "row",
          //   alignItems: "center",
          //   justifyContent: "center",
          paddingHorizontal: 20,
          borderTopLeftRadius: 24,
          borderTopRightRadius: 24,
          borderColor: "black",
          borderWidth: 2,
        },
        tabBarIconStyle: {
          marginTop: 18,
          // marginBottom:24
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={Home} />
          ),
        }}
      />
      <Tabs.Screen
        name="receipts"
        options={{
          title: "Receipts",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={ReceiptText} />
          ),
        }}
      />
      <Tabs.Screen
        name="stats"
        options={{
          title: "Stats",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={ChartColumnBig} />
          ),
        }}
      />
      <Tabs.Screen
        name="card"
        options={{
          title: "Card",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={CreditCard} />
          ),
        }}
      />

      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={Bolt} />
          ),
        }}
      />
    </Tabs>
  );
}
