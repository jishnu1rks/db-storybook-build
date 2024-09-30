import React from "react";
import { Tabs as TabcComp, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Tabs = () => {
  return (
    <TabcComp defaultValue="1" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="1">Tab 1</TabsTrigger>
        <TabsTrigger value="2">Tab 2</TabsTrigger>
        <TabsTrigger value="3">Tab 3</TabsTrigger>
        <TabsTrigger value="4">Tab 4</TabsTrigger>
        <TabsTrigger value="5">Tab 5</TabsTrigger>
      </TabsList>
      <TabsContent value="1">This is tab 1.</TabsContent>
      <TabsContent value="2">This is tab 2.</TabsContent>
      <TabsContent value="3">This is tab 3.</TabsContent>
      <TabsContent value="4">This is tab 4.</TabsContent>
      <TabsContent value="5">This is tab 5.</TabsContent>
    </TabcComp>
  );
};

export default Tabs;
