/** @format */
"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";

// icons
import { MdAccessTimeFilled, MdAccessTime} from "react-icons/md";
import { FiTool } from "react-icons/fi";
import { AiTwotoneTool } from "react-icons/ai";
import { BsQuestionCircleFill, BsQuestionCircle } from "react-icons/bs";
import { FaAngleLeft } from "react-icons/fa";

type Props = {};

interface SideNavItemType {
  icon?: {
    icon: React.ReactNode;
    fillIcon: React.ReactNode;
  };
  label: string;
  href: string;
}

const sidebarItmes: SideNavItemType[] = [
  {
    icon: {
      icon: <FiTool />,
      fillIcon: <AiTwotoneTool className="text-blue-900"/>
    },
    label: "1.Campaign setup",
    href: "/home"
  },
  {
    icon: {
      icon: <BsQuestionCircle />,
      fillIcon: <BsQuestionCircleFill className="text-blue-900" />
    },
    label: "2.Question list",
    href: "/question"
  },
  {
    icon: {
      icon: <MdAccessTime />,
      fillIcon: <MdAccessTimeFilled className="text-blue-900"/>
    },
    label: "3.Timeline",
    href: "/timeline"
  }

];
export default function Sidebar({}: Props) {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="mt-2">
    <HoverContainer>
      <Link href="/review" className="flex items-center cursor-pointer">
      <div className="w-[35px] h-[20px] text-xl"><FaAngleLeft /></div>
      <p className={cn("text-sm hidden md:block pr-4  transition-all ")}>Back to Dashboard</p>
      </Link>
    </HoverContainer>
    <div
      className={cn(
        "min-h-screen max-h-screen flex justify-center overflow-y-auto w-fit md:pr-8 pr-3 flex flex-col pl-[50px]"
      )}
    >
    
      {/* sidenavitems */}

      {sidebarItmes.map((d, i) => (
        <HoverContainer key={i}>
          <SideNavItem
            icon={d.icon}
            href={d.href}
            label={d.label}
          />
        </HoverContainer>
      ))}
    </div>
    </div>
  );
}

function SideNavItem({
  href,
  icon,
  label
}: SideNavItemType) {
  const pathname = usePathname();
  const isActivePage = pathname == href;
  return (
    <Link
      href={href}
      className=" flex items-center cursor-pointer"
    >
      {/* icon */}
      <div className="w-[25px] h-[10px] text-md">
        
        {isActivePage ? icon?.fillIcon : icon?.icon}
      </div>
      {/* label */}
      { (
        <p
          className={cn(
            "text-sm hidden mt-1 md:block transition-all ",
            isActivePage && "font-bold text-blue-900"
          )}
        >
          {label}
        </p>
      )}
    </Link>
  );
}

function HoverContainer({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className="p-3 transition-all rounded-25px cursor-pointer hover:bg-blue-600 w-fit group-hover:bg-blue-900 hover:text-blue-900">
      {children}
    </div>
  );
}