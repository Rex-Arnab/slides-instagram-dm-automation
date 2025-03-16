import { ModeToggle } from "@/components/ModeToggle";
import { UserButton } from "@clerk/nextjs";
import React from "react";

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <UserButton />
      <ModeToggle />
    </div>
  );
}

export default Dashboard;
