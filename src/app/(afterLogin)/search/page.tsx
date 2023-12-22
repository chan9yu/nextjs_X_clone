import BackButton from '../../../components/afterLogin/BackButton';
import Post from '../../../components/afterLogin/Post';
import SearchForm from '../../../components/afterLogin/SearchForm';
import SearchTab from '../../../components/search/SearchTab';

import styles from './page.module.css';

type SearchPageProps = {
	searchParams: {
		q: string;
		f?: string;
		pf?: string;
	};
};

export default function SearchPage({ searchParams }: SearchPageProps) {
	return (
		<main className={styles.main}>
			<div className={styles.searchTop}>
				<div className={styles.searchZone}>
					<div className={styles.buttonZone}>
						<BackButton />
					</div>
					<div className={styles.formZone}>
						<SearchForm queryString={searchParams.q} />
					</div>
				</div>
				<SearchTab />
			</div>
			<div className={styles.list}>
				<Post />
				<Post />
				<Post />
				<Post />
				<Post />
				<Post />
				<Post />
				<Post />
				<Post />
				<Post />
				<Post />
				{/*<SearchResult searchParams={searchParams} />*/}
			</div>
		</main>
	);
}
