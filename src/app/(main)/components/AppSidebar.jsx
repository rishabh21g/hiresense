"use client";
import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { sidebarOPtions } from "@/app/services/Constant";
import { Plus } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function AppSidebar() {
  const path = usePathname();
  return (
    <Sidebar>
      <SidebarHeader>
        <h1 className="text-center font-bold text-2xl my-4 p-2 flex items-center justify-center">Hiresense!<Image src={"/logo.svg"} width={44} height={44} alt="Hiresense Logo"/></h1>
        <Button className={"bg-[#077a7d] border-2 border-white text-white"}>
          New Interview <Plus />
        </Button>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarContent>
            <SidebarMenu>
              {sidebarOPtions.map((opt, i) => {
                return (
                  <SidebarMenuItem key={i}>
                    <SidebarMenuButton asChild>
                      <Link href={opt.path}>
                        <span>{opt.icon}</span>
                        <span>{opt.name}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
