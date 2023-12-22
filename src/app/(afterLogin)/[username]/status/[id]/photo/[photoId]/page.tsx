import { faker } from '@faker-js/faker';

import ActionButtons from '../../../../../../../components/afterLogin/ActionButtons';
import Post from '../../../../../../../components/afterLogin/Post';
import PhotoModalCloseButton from '../../../../../../../components/photo/PhotoModalCloseButton';
import CommentForm from '../../../../../../../components/status/CommentForm';
import styles from './page.module.css';

type PhotoPageProps = {
	params: {
		username: string;
		id: string;
		photoId: string;
	};
};

export default function PhotoPage({ params }: PhotoPageProps) {
	const photo = {
		imageId: 1,
		link: faker.image.urlLoremFlickr(),
		Post: {
			content: faker.lorem.text()
		}
	};

	return (
		<div className={styles.container}>
			<PhotoModalCloseButton />
			<div className={styles.imageZone}>
				<img src={photo.link} alt={photo.Post?.content} />
				<div className={styles.image} style={{ backgroundImage: `url(${photo.link})` }} />
				<div className={styles.buttonZone}>
					<div className={styles.buttonInner}>
						<ActionButtons white />
					</div>
				</div>
			</div>
			<div className={styles.commentZone}>
				<Post noImage />
				<CommentForm />
				<Post />
				<Post />
				<Post />
				<Post />
				<Post />
				<Post />
				<Post />
			</div>
		</div>
	);
}
