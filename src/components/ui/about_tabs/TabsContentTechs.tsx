import React from "react";
import { TabsContent } from "../shadcn/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../shadcn/card";
import { Button } from "../shadcn/button";

export default function TabsContentTechs() {
  return (
    <TabsContent value="techs">
      <Card>
        <CardHeader>
          <CardTitle>Technologies I Use</CardTitle>
          <CardDescription>
            I expertly wield cutting-edge technologies to build high-performance
            solutions across the full development lifecycle. By continuously
            adopting the latest industry innovations, I create scalable systems
            ready for future challenges.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6"></CardContent>
        <CardFooter>
          <Button>Save password</Button>
        </CardFooter>
      </Card>
    </TabsContent>
  );
}
