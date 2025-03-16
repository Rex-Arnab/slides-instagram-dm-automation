import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { SignInButton, SignUpButton } from "@clerk/nextjs";
import React from "react";

function Homepage() {
  return (
    <div className="p-5 flex justify-center items-center h-screen">
      <Card className="w-fit h-[200px] flex flex-col justify-between">
        <CardHeader>
          <CardTitle>
            <h1 className="text-3xl font-bold">Homepage</h1>
          </CardTitle>
          <CardDescription>Instagram DM Automation</CardDescription>
        </CardHeader>
        <CardContent>
          <section className="flex gap-5 items-center py-5">
            <SignInButton>
              <Button>Sign in</Button>
            </SignInButton>

            <SignUpButton>
              <Button variant={"outline"}>Sign Up</Button>
            </SignUpButton>
          </section>
        </CardContent>
      </Card>
    </div>
  );
}

export default Homepage;
