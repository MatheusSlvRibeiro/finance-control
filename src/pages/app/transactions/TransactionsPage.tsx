import { PageHeader } from "@components/layout/PageHeader/PageHeader";
import Button from "@components/ui/button/button";
import { Plus } from "lucide-react";
import styles from "./TransactionsPage.module.scss";
import { TransactionsTable } from "./_components/TransactionsTable";

export default function TransactionsPage() {
	return (
		<div className={styles.transactionsPage__container}>
			<PageHeader
				title="Transações"
				subtitle="Gerencie suas receitas e despesas"
			>
				<Button size="sm" variant="register">
					<Plus />
					Nova transação
				</Button>
			</PageHeader>

			<TransactionsTable />
		</div>
	);
}
