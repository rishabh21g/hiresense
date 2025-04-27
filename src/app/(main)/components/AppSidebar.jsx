"use client"
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

export default function AppSidebar() {
  const path = usePathname()
  return (
    <Sidebar>
      <SidebarHeader>
        <h1 className="text-center font-bold text-2xl my-4 p-2">Hiresense!</h1>
        <Button>
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
                        <span className={`${path===opt.path&& 'text-amber-300'}`}>{opt.icon}</span>
                        <span className={`${path===opt.path&& 'text-amber-300'}`}>{opt.name}</span>
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
