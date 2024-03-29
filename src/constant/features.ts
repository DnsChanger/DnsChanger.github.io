import {
  MdOutlineAddModerator,
  MdOutlineCategory,
  MdOutlineDns,
  MdPublishedWithChanges,
  MdRocketLaunch,
  MdWifiLock,
} from "react-icons/md";

import { Feature } from "../interfaces/feature.interface";

export const features: Array<Feature> = [
  {
    title: "تغییر آسان DNS رایانه شخصی",
    icon: MdPublishedWithChanges,
    description: "به سادگی می‌توانید DNS سیستم عامل خود را تغییر دهید.",
  },
  {
    title: "پشتیبانی از DNS مختلف",
    icon: MdOutlineDns,
    description: "  بیش از ۳۰۰۰ DNS مختلف پشتیبانی می‌کند.",
  },
  {
    title: "بدون محدودیت سرعت",
    icon: MdRocketLaunch,
    description: "هیچگونه محدودیتی در سرعت اینترنت شما ایجاد نمی‌کند.",
  },
  {
    title: "دسته بندی",
    icon: MdOutlineCategory,
    description:
      "با استفاده از دسته بندی میتونید سرور موردنیاز خود رو سریع تر پیدا کنید.",
  },
  {
    title: "شخصی سازی",
    icon: MdOutlineAddModerator,
    description:
      "شما میتونید DNS اختصاصی خودتون رو ذخیره کنید و دفعات بعد استفاده کنید.",
  },
  {
    title: "امنـیت",
    icon: MdWifiLock,
    description:
      "برنامه به صورت اوپن سورس منتشر شده و تا حالا گزارشی بابـت مشکلات امنیتی دریافت نکرده ایم.",
  },
];
