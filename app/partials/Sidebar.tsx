'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Menu {
    label: string;
    href: string;
}

const menus: Menu[] = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
];

const Sidebar = () => {
    const pathName = usePathname();
    return (
        <>
            <div className="w-[18%] bg-gray-800 h-full flex justify-center p-4 py-10">
                <ul>
                    <li className="mb-10 text-white font-bold text-xl">My Blog</li>
                    {menus.map((menu, index) => (
                    <li key={index} className={`my-6 ${pathName===menu.href?'text-yellow-400 font-bold':'text-white'}`}>
                        <Link href={menu.href}>{menu.label}</Link>
                    </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default Sidebar;