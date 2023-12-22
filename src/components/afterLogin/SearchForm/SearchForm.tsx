import SearchIcon from '../../icons/SearchIcon';
import styles from './SearchForm.module.css';

type SearchFormProps = {
	queryString?: string;
};

export default function SearchForm({ queryString }: SearchFormProps) {
	return (
		<form className={styles.search}>
			<SearchIcon />
			<input type="search" />
		</form>
	);
}
