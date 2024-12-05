
"use client";

import { Box, createIcon, Flex, Icon, Text } from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const HomeIcon = createIcon({
  displayName: "HomeIcon",
  viewBox: "0 0 18 18",
  path: (
    <>
      <path
        d="M8.60295 2.88084C8.70841 2.7755 8.85138 2.71633 9.00045 2.71633C9.14951 2.71633 9.29248 2.7755 9.39795 2.88084L15.9154 9.39834C15.9674 9.45204 16.0294 9.49486 16.0981 9.52431C16.1667 9.55375 16.2405 9.56923 16.3152 9.56985C16.3899 9.57046 16.464 9.55619 16.5331 9.52788C16.6022 9.49956 16.665 9.45777 16.7178 9.40493C16.7706 9.35209 16.8123 9.28926 16.8406 9.22012C16.8688 9.15098 16.883 9.0769 16.8823 9.00222C16.8817 8.92753 16.8661 8.85372 16.8366 8.78511C16.8071 8.7165 16.7642 8.65445 16.7104 8.60259L10.1937 2.08508C10.037 1.92838 9.85097 1.80408 9.64623 1.71928C9.44149 1.63447 9.22205 1.59082 9.00045 1.59082C8.77884 1.59082 8.5594 1.63447 8.35466 1.71928C8.14992 1.80408 7.96389 1.92838 7.8072 2.08508L1.2897 8.60259C1.236 8.6545 1.19317 8.71659 1.16373 8.78523C1.13428 8.85387 1.1188 8.92769 1.11818 9.00238C1.11757 9.07707 1.13184 9.15113 1.16015 9.22024C1.18847 9.28936 1.23026 9.35214 1.2831 9.40493C1.33594 9.45772 1.39877 9.49946 1.46791 9.52771C1.53705 9.55596 1.61113 9.57016 1.68582 9.56948C1.7605 9.56879 1.83431 9.55324 1.90292 9.52373C1.97153 9.49422 2.03358 9.45133 2.08545 9.39759L8.60295 2.88084Z"
        fill="currentColor"
      />
      <path
        d="M9 4.07397L15.1193 10.1932C15.1418 10.2157 15.1643 10.2367 15.1875 10.2577V14.9062C15.1875 15.6825 14.5575 16.3125 13.7812 16.3125H11.25C11.1008 16.3125 10.9577 16.2532 10.8523 16.1477C10.7468 16.0422 10.6875 15.8992 10.6875 15.75V12.375C10.6875 12.2258 10.6282 12.0827 10.5227 11.9772C10.4173 11.8717 10.2742 11.8125 10.125 11.8125H7.875C7.72582 11.8125 7.58274 11.8717 7.47725 11.9772C7.37176 12.0827 7.3125 12.2258 7.3125 12.375V15.75C7.3125 15.8992 7.25324 16.0422 7.14775 16.1477C7.04226 16.2532 6.89918 16.3125 6.75 16.3125H4.21875C3.84579 16.3125 3.4881 16.1643 3.22438 15.9006C2.96066 15.6369 2.8125 15.2792 2.8125 14.9062V10.2577C2.83583 10.2369 2.85859 10.2153 2.88075 10.1932L9 4.07397Z"
        fill="currentColor"
      />
    </>
  ),
});

const EarnIcon = createIcon({
  displayName: "EarnIcon",
  viewBox: "0 0 18 18",
  path: (
    <>
      <path
        d="M15.917 4.78125C15.917 6.80025 12.8945 8.4375 9.16699 8.4375C5.43949 8.4375 2.41699 6.80025 2.41699 4.78125C2.41699 2.76225 5.43949 1.125 9.16699 1.125C12.8945 1.125 15.917 2.76225 15.917 4.78125Z"
        fill="currentColor"
      />
      <path
        d="M9.16699 9.56262C11.1807 9.56262 13.0595 9.12312 14.4755 8.35587C14.9966 8.07919 15.4757 7.72968 15.8982 7.31787C15.9102 7.40862 15.917 7.50087 15.917 7.59387C15.917 9.61287 12.8945 11.2501 9.16699 11.2501C5.43949 11.2501 2.41699 9.61287 2.41699 7.59387C2.41699 7.50087 2.42374 7.40862 2.43574 7.31787C2.85831 7.72967 3.33737 8.07917 3.85849 8.35587C5.27374 9.12312 7.15324 9.56262 9.16699 9.56262Z"
        fill="currentColor"
      />
      <path
        d="M9.16699 12.3751C11.1807 12.3751 13.0595 11.9356 14.4755 11.1684C14.9966 10.8917 15.4757 10.5422 15.8982 10.1304C15.9102 10.2211 15.917 10.3134 15.917 10.4064C15.917 12.4254 12.8945 14.0626 9.16699 14.0626C5.43949 14.0626 2.41699 12.4254 2.41699 10.4064C2.41699 10.3134 2.42374 10.2211 2.43574 10.1304C2.8583 10.5422 3.33736 10.8917 3.85849 11.1684C5.27374 11.9356 7.15324 12.3751 9.16699 12.3751Z"
        fill="currentColor"
      />
      <path
        d="M9.16699 15.1876C11.1807 15.1876 13.0595 14.7481 14.4755 13.9809C14.9966 13.7042 15.4757 13.3547 15.8982 12.9429C15.9102 13.0336 15.917 13.1259 15.917 13.2189C15.917 15.2379 12.8945 16.8751 9.16699 16.8751C5.43949 16.8751 2.41699 15.2379 2.41699 13.2189C2.41699 13.1259 2.42374 13.0336 2.43574 12.9429C2.8583 13.3547 3.33736 13.7042 3.85849 13.9809C5.27374 14.7481 7.15324 15.1876 9.16699 15.1876Z"
        fill="currentColor"
      />
    </>
  ),
});

const FrensIcon = createIcon({
  displayName: "FrensIcon",
  viewBox: "0 0 18 18",
  path: (
    <>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.02051 5.0625C7.02051 4.31658 7.31682 3.60121 7.84427 3.07376C8.37172 2.54632 9.08709 2.25 9.83301 2.25C10.5789 2.25 11.2943 2.54632 11.8217 3.07376C12.3492 3.60121 12.6455 4.31658 12.6455 5.0625C12.6455 5.80842 12.3492 6.52379 11.8217 7.05124C11.2943 7.57868 10.5789 7.875 9.83301 7.875C9.08709 7.875 8.37172 7.57868 7.84427 7.05124C7.31682 6.52379 7.02051 5.80842 7.02051 5.0625ZM12.6455 7.3125C12.6455 6.71576 12.8826 6.14347 13.3045 5.72151C13.7265 5.29955 14.2988 5.0625 14.8955 5.0625C15.4922 5.0625 16.0645 5.29955 16.4865 5.72151C16.9085 6.14347 17.1455 6.71576 17.1455 7.3125C17.1455 7.90924 16.9085 8.48153 16.4865 8.90349C16.0645 9.32545 15.4922 9.5625 14.8955 9.5625C14.2988 9.5625 13.7265 9.32545 13.3045 8.90349C12.8826 8.48153 12.6455 7.90924 12.6455 7.3125ZM2.52051 7.3125C2.52051 6.71576 2.75756 6.14347 3.17952 5.72151C3.60147 5.29955 4.17377 5.0625 4.77051 5.0625C5.36724 5.0625 5.93954 5.29955 6.3615 5.72151C6.78345 6.14347 7.02051 6.71576 7.02051 7.3125C7.02051 7.90924 6.78345 8.48153 6.3615 8.90349C5.93954 9.32545 5.36724 9.5625 4.77051 9.5625C4.17377 9.5625 3.60147 9.32545 3.17952 8.90349C2.75756 8.48153 2.52051 7.90924 2.52051 7.3125ZM5.56551 11.3377C6.02297 10.6208 6.65382 10.0307 7.39972 9.62208C8.14563 9.21347 8.98252 8.99952 9.83301 9C10.5454 8.99935 11.2498 9.14916 11.9003 9.43962C12.5508 9.73008 13.1325 10.1547 13.6076 10.6855C14.0826 11.2164 14.4401 11.8416 14.6568 12.5202C14.8734 13.1989 14.9443 13.9156 14.8648 14.6235C14.855 14.7114 14.8247 14.7959 14.7762 14.8699C14.7277 14.9439 14.6625 15.0054 14.5858 15.0495C13.1394 15.8794 11.5005 16.3149 9.83301 16.3125C8.10426 16.3125 6.48051 15.8535 5.08026 15.0495C5.00353 15.0054 4.93827 14.9439 4.88979 14.8699C4.84131 14.7959 4.81098 14.7114 4.80126 14.6235C4.6753 13.4735 4.94485 12.3148 5.56551 11.3385V11.3377Z"
        fill="currentColor"
      />
      <path
        d="M4.64457 10.6904C3.90488 11.8322 3.56026 13.1852 3.66357 14.5417C3.2132 14.4734 2.77025 14.3629 2.34057 14.2117L2.25432 14.1817C2.17736 14.1544 2.10998 14.1053 2.06033 14.0405C2.01068 13.9757 1.98089 13.8978 1.97457 13.8164L1.96707 13.7257C1.93677 13.3492 1.98264 12.9704 2.10192 12.612C2.22121 12.2535 2.41147 11.9228 2.66136 11.6396C2.91125 11.3563 3.21564 11.1262 3.55638 10.9632C3.89711 10.8001 4.2672 10.7073 4.64457 10.6904ZM16.0026 14.5417C16.1059 13.1852 15.7613 11.8322 15.0216 10.6904C15.3989 10.7073 15.769 10.8001 16.1098 10.9632C16.4505 11.1262 16.7549 11.3563 17.0048 11.6396C17.2547 11.9228 17.4449 12.2535 17.5642 12.612C17.6835 12.9704 17.7294 13.3492 17.6991 13.7257L17.6916 13.8164C17.6851 13.8977 17.6553 13.9754 17.6056 14.0401C17.556 14.1047 17.4887 14.1537 17.4118 14.1809L17.3256 14.2109C16.9003 14.3609 16.4586 14.4727 16.0026 14.5417Z"
        fill="currentColor"
      />
    </>
  ),
});

const WalletIcon = createIcon({
  displayName: "WalletIcon",
  viewBox: "0 0 18 18",
  path: (
    <>
      <path
        d="M2.20475 4.21875C2.82076 3.6739 3.61511 3.37372 4.4375 3.375H14.5625C15.4183 3.375 16.1997 3.69375 16.7952 4.21875C16.7267 3.67495 16.4621 3.17486 16.051 2.81237C15.6399 2.44987 15.1106 2.2499 14.5625 2.25H4.4375C3.8894 2.2499 3.36012 2.44987 2.94902 2.81237C2.53791 3.17486 2.27326 3.67495 2.20475 4.21875ZM2.20475 6.46875C2.82076 5.9239 3.61511 5.62372 4.4375 5.625H14.5625C15.4183 5.625 16.1997 5.94375 16.7952 6.46875C16.7267 5.92495 16.4621 5.42486 16.051 5.06237C15.6399 4.69987 15.1106 4.4999 14.5625 4.5H4.4375C3.8894 4.4999 3.36012 4.69987 2.94902 5.06237C2.53791 5.42486 2.27326 5.92495 2.20475 6.46875ZM4.4375 6.75C3.84076 6.75 3.26847 6.98705 2.84651 7.40901C2.42455 7.83097 2.1875 8.40326 2.1875 9V13.5C2.1875 14.0967 2.42455 14.669 2.84651 15.091C3.26847 15.5129 3.84076 15.75 4.4375 15.75H14.5625C15.1592 15.75 15.7315 15.5129 16.1535 15.091C16.5754 14.669 16.8125 14.0967 16.8125 13.5V9C16.8125 8.40326 16.5754 7.83097 16.1535 7.40901C15.7315 6.98705 15.1592 6.75 14.5625 6.75H11.75C11.6008 6.75 11.4577 6.80926 11.3523 6.91475C11.2468 7.02024 11.1875 7.16332 11.1875 7.3125C11.1875 7.76005 11.0097 8.18927 10.6932 8.50574C10.3768 8.82221 9.94755 9 9.5 9C9.05245 9 8.62323 8.82221 8.30676 8.50574C7.99029 8.18927 7.8125 7.76005 7.8125 7.3125C7.8125 7.16332 7.75324 7.02024 7.64775 6.91475C7.54226 6.80926 7.39918 6.75 7.25 6.75H4.4375Z"
        fill="currentColor"
      />
    </>
  ),
});

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  to: string;
  activePaths?: string[];
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, to, activePaths = [], }) => {
  const pathname = usePathname();
  const isActive = [to, ...activePaths].includes(pathname);

  return (
    <Box
      className={`flex flex-col items-center w-[66px] h-[61px] p-2 justify-center text-center ${
        isActive ? "text-[#32EAFF]" : "text-[#EAEAEA]"
      }`}
    >
      <Link href={to}>
        {icon}
        <Text className="mt-1 text-xs">{label}</Text>
      </Link>
    </Box>
  );
};

const NavigationBar: React.FC = () => {
  return (
    <Box
      bgImage={"../Background/background.png"}
      bgColor={"#1e1e1e"}
      width={"100%"}
      display={"flex"}
      height={"80px"}
      alignItems={"center"}
      justifyContent={"space-around"}
      position={"fixed"}
      bottom={0}
      right={0}
      p={"10px"}
      zIndex={80}
    >
      <NavItem icon={<HomeIcon />} label="HOME" to="/home" />
      <NavItem icon={<EarnIcon />} label="EARN" to="/earn" />
      <NavItem icon={<FrensIcon />} label="FRENS" to="/friends" activePaths={["/tribe", "/tribelist"]} />
      <NavItem icon={<WalletIcon />} label="WALLET" to="/wallet" activePaths={["/history", "/points"]} />
    </Box>
  );
};

export default NavigationBar;