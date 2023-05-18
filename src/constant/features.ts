// import icons from astro-heroicons
// @ts-ignore
import Cube from 'astro-heroicons/outline/Cube.astro';
import ClipboardDocumentCheck from 'astro-heroicons/outline/ClipboardDocumentCheck.astro';
import Bolt from 'astro-heroicons/outline/Bolt.astro';
import Squares2X2 from 'astro-heroicons/outline/Squares2X2.astro';
import RectangleGroup from 'astro-heroicons/outline/RectangleGroup.astro';
import FingerPrint from 'astro-heroicons/outline/FingerPrint.astro';
import type {Feature} from "../interface/feature.interface";

export const features_list: Array<Feature> = [
    {
        title: "تغییر آسان DNS رایانه شخصی",
        icon: Cube,
        description:
            "با dnsChanger-desktop به سادگی می‌توانید DNS رایانه خود را تغییر دهید.",
    },
    {
        title: "پشتیبانی از DNS مختلف",
        icon: ClipboardDocumentCheck,
        description: "dnsChanger-desktop از بیش از ۳۰۰۰ DNS مختلف پشتیبانی می‌کند.",
    },
    {
        title: "بدون محدودیت سرعت",
        icon: Bolt,
        description:
            "dnsChanger-desktop هیچگونه محدودیتی در سرعت اینترنت شما ایجاد نمی‌کند.",
    },
    {
        title: "دسته بندی",
        icon: Squares2X2,
        description:
            "با استفاده از دسته بندی میتونید سرور موردنیاز خود رو سریع تر پیدا کنید.",
    },
    {
        title: "شخصی سازی",
        icon: RectangleGroup,
        description:
            "شما میتونید DNS اختصاصی خودتون رو ذخیره کنید و دفعات بعد استفاده کنید.",
    },
    {
        title: "امنـیت",
        icon: FingerPrint,
        description:
            "برنامه به صورت اوپن سورس منتشر شده و تا حالا گزارشی بابـت مشکلات امنیتی دریافت نکرده ایم.",
    },
];