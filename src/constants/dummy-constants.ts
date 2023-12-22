import { faker } from '@faker-js/faker';

export const me = {
	id: 'jebong',
	nickname: '박제봉',
	image: faker.image.avatar()
};

export const user = {
	id: 'danmuji',
	nickname: '단무지',
	image: faker.image.avatar()
};

export const target = {
	postId: 1,
	User: user,
	content: '안녕하세요 단무지에요',
	createdAt: new Date(),
	Images: [] as { imageId: number; link: string }[]
};

export const messages = [
	{ messageId: 1, roomId: 123, id: 'jebong', content: '안녕하세요.', createdAt: new Date() },
	{ messageId: 2, roomId: 123, id: 'danmuji', content: '안녕히가세요.', createdAt: new Date() }
];

export const messageUser = {
	...user,
	Messages: [
		{ roomId: 123, content: '안녕하세요.', createdAt: new Date() },
		{ roomId: 123, content: '안녕히가세요.', createdAt: new Date() }
	]
};
