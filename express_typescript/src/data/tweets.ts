// 트윗 타입 정의
type Tweet = {
	id: string;
	text: string;
	createdAt: Date;
	name: string;
	username: string;
	img_url: string;
};

const tweets: Tweet[] = [
	{
		id: '1',
		text: 'Hello this is the First Tweet',
		createdAt: new Date(),
		name: 'Bob',
		username: 'bob',
		img_url: '',
	},
	{
		id: '2',
		text: 'Hello this is the Second Tweet',
		createdAt: new Date(),
		name: 'Steve',
		username: 'steve',
		img_url: '',
	},
	{
		id: '3',
		text: 'Hello this is the Third Tweet',
		createdAt: new Date(),
		name: 'John',
		username: 'john',
		img_url: '',
	},
];

export async function getAll(): Promise<Tweet[]> {
	return tweets;
}
