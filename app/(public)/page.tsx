import Link from "next/link";
import styles from "./page.module.scss";
import { Logo } from "@components/logo/logo";
import { Footer } from "@components/footer/footer";
import { ToolsCard } from "./_components/ToolsCard/toolsCard";
import { MoveRight } from "lucide-react";
import EmblaCarousel from "./_components/EmblaCarousel/EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";

export default function Home() {
	const OPTIONS: EmblaOptionsType = {};
	const SLIDES = [
		{
			path: "/images/print1.png",
		},
		{
			path: "/images/print2.png",
		},
		{
			path: "/images/print3.png",
		},
		{
			path: "/images/print4.png",
		},
	];

	return (
		<div className={styles.page}>
			<header className={styles.header}>
				<div className={styles.headerContent}>
					<Logo />

					<Link className={styles.loginBtn} href="/login">
						Entrar
					</Link>
				</div>
			</header>

			<section className={styles.heroSection}>
				<h1 className={styles.title}>
					Organize suas finanças com
					<span> clareza e simplicidade</span>
				</h1>

				<p className={styles.paragraph}>
					Visualize receitas, despesas e evolução do seu patrimônio em
					um dashboard moderno e intuitivo. Tome decisões financeiras
					mais inteligentes.
				</p>

				<div className={styles.heroSectionBtn}>
					<Link className={styles.registerBtn} href="/cadastro">
						Começar agora <MoveRight />
					</Link>

					<Link className={styles.loginBtn} href="/login">
						Já tenho conta
					</Link>
				</div>
			</section>

			<section className={styles.toolsSection}>
				<div className={styles.toolsContent}>
					<h2 className={styles.toolsTitle}>
						Por que escolher o Finance Control?
					</h2>

					<p className={styles.toolsSubtitle}>
						Aqui você tem ferramentas poderosas para ter controle
						total de suas finanças
					</p>
				</div>
				<ToolsCard />
			</section>

			<section className={styles.carouselSection}>
				<div className={styles.carouselContent}>
					<h2 className={styles.carouselTitle}>Dashboard poderoso e intuitivo</h2>

					<p className={styles.carouselSubtitle}>Visualize todas as informações importantes em um único lugar</p>
				</div>
				<EmblaCarousel slides={SLIDES} options={OPTIONS} />
			</section>

			<section className={styles.finalCtaSection}>
				<div className={styles.finalCtaContent}>
					<h2 className={styles.finalCtaTitle}>
						Comece a organizar suas finaças hoje
					</h2>
					<p className={styles.finalCtaSubtitle}>
						Crie sua conta gratuita e tenha controle total do seu
						dinheiro
					</p>
					<Link className={styles.registerBtn} href="/cadastro">
						Criar conta gratuita <MoveRight />
					</Link>
				</div>
			</section>

			<Footer />
		</div>
	);
}
