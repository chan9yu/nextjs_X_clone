'use client';

import { useRouter } from 'next/navigation';
import { useRef, useState } from 'react';

import { me } from '../../../constants/dummy-constants';
import CloseIcon from '../../icons/CloseIcon';
import ImageIcon from '../../icons/ImageIcon';
import styles from './TweetModal.module.css';

export default function TweetModal() {
	const router = useRouter();

	const [content, setContent] = useState();
	const imageRef = useRef<HTMLInputElement>(null);

	const onSubmit = () => {
		console.log('### onSubmit');
	};

	const onClickClose = () => {
		router.back();
	};

	const onClickButton = () => {
		console.log('### onClickButton');
	};

	const onChangeContent = () => {
		console.log('### onChangeContent');
	};

	return (
		<div className={styles.modalBackground}>
			<div className={styles.modal}>
				<button className={styles.closeButton} onClick={onClickClose}>
					<CloseIcon />
				</button>
				<form className={styles.modalForm} onSubmit={onSubmit}>
					<div className={styles.modalBody}>
						<div className={styles.postUserSection}>
							<div className={styles.postUserImage}>
								<img src={me.image} alt={me.id} />
							</div>
						</div>
						<div className={styles.inputDiv}>
							<textarea
								className={styles.input}
								placeholder="무슨 일이 일어나고 있나요?"
								value={content}
								onChange={onChangeContent}
							/>
						</div>
					</div>
					<div className={styles.modalFooter}>
						<div className={styles.modalDivider} />
						<div className={styles.footerButtons}>
							<div className={styles.footerButtonLeft}>
								<input type="file" name="imageFiles" multiple hidden ref={imageRef} />
								<button className={styles.uploadButton} type="button" onClick={onClickButton}>
									<ImageIcon />
								</button>
							</div>
							<button className={styles.actionButton} disabled={!content}>
								게시하기
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
}
