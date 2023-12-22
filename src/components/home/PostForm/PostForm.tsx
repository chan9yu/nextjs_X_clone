'use client';

import { ChangeEventHandler, FormEventHandler, useRef, useState } from 'react';

import { me } from '../../../constants/dummy-constants';
import ImageIcon from '../../icons/ImageIcon';
import styles from './PostForm.module.css';

export default function PostForm() {
	const [content, setContent] = useState('');
	const imageRef = useRef<HTMLInputElement>(null);

	const onChange: ChangeEventHandler<HTMLTextAreaElement> = e => {
		setContent(e.target.value);
	};

	const onSubmit: FormEventHandler = e => {
		e.preventDefault();
	};

	const onClickButton = () => {
		imageRef.current?.click();
	};

	return (
		<form className={styles.postForm} onSubmit={onSubmit}>
			<div className={styles.postUserSection}>
				<div className={styles.postUserImage}>
					<img src={me.image} alt={me.id} />
				</div>
			</div>
			<div className={styles.postInputSection}>
				<textarea value={content} onChange={onChange} placeholder="무슨 일이 일어나고 있나요?" />
				<div className={styles.postButtonSection}>
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
			</div>
		</form>
	);
}
