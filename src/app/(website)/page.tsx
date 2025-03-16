import { Button } from "@/components/ui/button";
import { SignInButton, SignUpButton } from "@clerk/nextjs";
import React from "react";

function Homepage() {
  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold">Homepage</h1>

      <section className="flex gap-5 items-center py-5">
        <SignInButton>
          <Button>Sign in</Button>
        </SignInButton>

        <SignUpButton>
          <Button variant={"outline"}>Sign Up</Button>
        </SignUpButton>
      </section>
    </div>
  );
}

export default Homepage;
