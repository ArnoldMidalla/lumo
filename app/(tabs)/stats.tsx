import React from "react";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import TopBar from "../components/topBar";

export default function stats() {
  return (
    <SafeAreaView className="bg-background flex-1 pt-6">
      <ScrollView className="flex-1 px-6">
        <TopBar title="Analytics" />
      </ScrollView>
    </SafeAreaView>
  );
}
