"use client";

import React, { useState } from "react";
import { AppLayout } from "@sikka/hawa";
import {
  BarChart,
  FolderArchive,
  FolderClosed,
  LayoutDashboard,
  PhoneCall,
  Users2,
} from "lucide-react";

export const Layout = (props: any) => {
  const [keepOpen, setKeepOpen] = useState(true);
  return (
    <AppLayout
      profileMenuWidth={"default"}
      currentPage="something"
      keepOpen={keepOpen}
      setKeepOpen={setKeepOpen}
      // onDrawerExpand={handleDrawerExpand}
      topBar={true}
      direction={"rtl"}
      texts={{
        expandSidebar: "expandSidebar",
        collapseSidebar: "collapseSidebar",
      }}
      logoLink="https://sikka-images.s3.ap-southeast-1.amazonaws.com/hawa/hawa-bilingual-wordmark-rtl.png"
      // currentPage={selectedPage}
      drawerItems={[
        {
          label: "لوحة القيادة",
          value: "/home",
          icon: <LayoutDashboard className="hawa-w-4 hawa-h-4" />,
        },

        {
          label: "الإحصائيات",
          value: "/analytics",
          icon: <BarChart className="hawa-w-4 hawa-h-4" />,
        },
        {
          label: "المستخدمين",
          value: "/jobs",
          onClick: () => console.log("going to /jobs"),
          icon: <Users2 className="hawa-w-4 hawa-h-4" />,
        },
        {
          label: "الملفات",
          value: "/items",
          onClick: () => console.log("going to /items"),
          icon: <FolderArchive className="hawa-w-4 hawa-h-4" />,
          subitems: [
            { label: "New Item", value: "/new-item" },
            { label: "New Item", value: "/new-item2" },
            { label: "New Item", value: "/new-item3" },
            { label: "Files Items", value: "/file-item" },
          ],
        },
      ]}
    >
      {props.children}
    </AppLayout>
  );
};
