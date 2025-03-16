"use client";
import { usePath } from "@/hooks/user-nav";
import React from "react";
import LogoSmall from "../logo/logosmall";
import Items from "./items";
import { Separator } from "@/components/ui/separator";

type Props = {
  slug: string;
};

function Sidebar({ slug }: Props) {
  const { page } = usePath();
  return (
    <div
      className="
        w-[250px]
        border-2
        radial
        fixed
        left-0
        lg:inline-block
        border-[#545454]
        bg-gradient-to-b
        from-[#768BDD]
        via-[#171717]
        hidden
        bottom-0
        top-0
        m-3
        rounded-3xl
        overflow-hidden
    ">
      <div
        className="
        flex
        flex-col
        gap-y-5
        w-full
        h-full
        p-3
        bg-[#0e0e0e]
        bg-opacity-90
        bg-clip-padding
        backdrop-filter
        backdrop--blue__safari
        backdrop-blue-3xl
      ">
        <div className="flex gap-x-2 items-center p-5 justify-center">
          <LogoSmall />
        </div>
        <div className="flex flex-col py-3">
          <Items page={page} slug={slug} />
        </div>
        <div className="px-16">
          <Separator orientation="horizontal" className="bg-[#333336]" />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
