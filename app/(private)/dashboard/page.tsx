"use client";

import { PageHeader } from "@components/layout/PageHeader/PageHeader";
import styles from "./page.module.scss";
import { StatsCard } from "./_components/statsCard/statsCard";
import { ExpenseChart } from "./_components/ExpenseChart/ExpenseChart";
import { CategoryChart } from "./_components/CategoryChart/CategoryChart";

export default function Dashboard() {

	return (
		<div className={styles.dashboard__container}>
			<PageHeader
				title="Dashboard"
				subtitle="Visão geral das suas finanças"
			/>

			<StatsCard />

			<section className={styles.dashboard_charts__container}>
				<div className={styles.dashboard__lineChart}>
					<h3 className={styles.lineChart_title}>Evolução Financeira</h3>

					<ExpenseChart />
				</div>

				<div className={styles.dashboard__pieChart}>
					<h3 className={styles.pieChart_title}>Despesas por Categoria</h3>
					<CategoryChart />
				</div>
			</section>

			<section></section>
		</div>
	);
}
