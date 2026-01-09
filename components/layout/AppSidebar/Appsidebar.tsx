import {
	Banknote,
	Landmark,
	LayoutDashboardIcon,
	SquareChartGantt,
} from "lucide-react";
import { usePathname } from "next/navigation";
import styles from "./Appsidebar.module.scss";

interface Sidebar {
	open?: boolean;
	onClose?: () => void;
}

export default function AppSidebar({ open, onClose }: Sidebar) {
	const pathname = usePathname();

	const navitems = [
		{
			icon: <LayoutDashboardIcon />,
			name: "Dashboard",
			path: "/dashboard",
		},
		{
			icon: <Landmark />,
			name: "Contas",
			path: "/accounts",
		},
		{
			icon: <Banknote />,
			name: "Transações",
			path: "/transactions",
		},
		{
			icon: <SquareChartGantt />,
			name: "Categorias",
			path: "/categories",
		},
	];

	return (
		<nav
			className={
				open ? styles.sidebar__container : styles.sidebar__container_closed
			}
		>
			<ul className={styles.sidebar__list}>
				{navitems.map((item) => {
					const isActive = pathname === item.path;

					return (
						<li key={item.name}>
							<a
								onClick={onClose}
								className={
									isActive
										? styles.sidebar__item_active
										: styles.sidebar__item
								}
								href={item.path}
							>
								<div className={styles.sidebar__item_icon}>
									{item.icon}
								</div>
								<span className={styles.sidebar__item_name}>
									{item.name}
								</span>
							</a>
						</li>
					);
				})}
			</ul>
		</nav>
	);
}
