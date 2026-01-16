import { formatCurrency } from "@utils/formatCurrency";
import { formatDate } from "@utils/formatDate";
import { EllipsisVertical } from "lucide-react";
import styles from "./TransactionsTableMobile.module.scss";

export function TransactionsTableMobile() {
	const today = new Date();
	const yesterday = new Date();
	yesterday.setDate(today.getDate() - 1);

	const mockDataTable = [
		{
			id: "1",
			description: "Salário",
			category: "Trabalho",
			categoryColor: "#22c55e",
			type: "income",
			account: "Nubank",
			value: 7500,
			date: formatDate(today),
		},
		{
			id: "2",
			description: "Aluguel",
			category: "Moradia",
			categoryColor: "#ef4444",
			type: "expense",
			account: "Nubank",
			value: 1100,
			date: formatDate(today),
		},
		{
			id: "3",
			description: "Supermercado",
			category: "Alimentação",
			categoryColor: "#f97316",
			type: "expense",
			account: "Nubank",
			value: 450,
			date: formatDate(today),
		},
		{
			id: "4",
			description: "Novaes Ltda.",
			category: "FreeLance",
			categoryColor: "#14b8a6",
			type: "income",
			account: "Nubank",
			value: 1200,
			date: formatDate(today),
		},
		{
			id: "5",
			description: "Internet",
			category: "Serviços",
			categoryColor: "#3b82f6",
			type: "expense",
			account: "Nubank",
			value: 120,
			date: formatDate(yesterday),
		},
		{
			id: "6",
			description: "Academia",
			category: "Saúde",
			categoryColor: "#8b5cf6",
			type: "expense",
			account: "Inter",
			value: 89,
			date: formatDate(yesterday),
		},
		{
			id: "7",
			description: "Spotify",
			category: "Serviços",
			categoryColor: "#3b82f6",
			type: "expense",
			account: "Inter",
			value: 16.9,
			date: formatDate(yesterday),
		},
	];

	return (
		<table className={styles.transactionsTable}>
			<tbody className={styles.body}>
				{mockDataTable.map((item) => (
					<tr className={styles.bodyRow} key={item.id}>
						<td className={styles.bodyRowMain}>
							<div className={styles.bodyRowAccount}>
								{item.account}
							</div>
							<div className={styles.bodyRowDescription}>
								{item.description}
							</div>
							<div
								className={styles.bodyRowCategory}
								style={{
									backgroundColor: item.categoryColor,
								}}
							>
								{item.category}
							</div>
						</td>

						<td className={styles.bodyRowMeta}>
							<div>
								<div className={styles.bodyRowDate}>
									{item.date}
								</div>
								<div className={styles.bodyRowValue}>
									{formatCurrency(item.value)}
								</div>
							</div>

							<button className={styles.bodyRowButton}>
								<EllipsisVertical />
							</button>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}
