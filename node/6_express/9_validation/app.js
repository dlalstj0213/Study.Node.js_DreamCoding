import express from 'express';
import { body, param, validationResult } from 'express-validator';

/*
{
  "name": "E1",
  "age": 1,
  "job": {
    "name": "Hello NodeJS Class",
    "title": "NodeJS"
  },
  "email": "minseo@nodehappy.com"
}
*/

const app = express();
app.use(express.json());

const validate = (req, res, next) => {
	const errors = validationResult(req);
	if (errors.isEmpty()) {
		return next();
	}
	return res.status(400).json({ message: errors.array()[0].msg });
};

app.post(
	'/users',
	[
		// body 필드에 대해서만 유효성 검사
		body('name')
			.trim()
			.isLength({ min: 2 })
			.withMessage('이름은 두글자 이상!')
			.isLength({ max: 4 })
			.withMessage('이름은 4글자 까지만!'), // 이렇게 체이닝이 가능
		body('age').isInt().withMessage('숫자를 입력해'),
		body('email').isEmail().withMessage('이메일 입력해요').normalizeEmail(),
		body('job.name').notEmpty(),
		validate,
	],
	(req, res, next) => {
		console.log(req.body);
		res.sendStatus(201);
	}
);

app.get(
	'/:email',
	// param 필드 에서만 유효성 검사
	[param('email').isEmail().withMessage('이메일 입력해요'), validate],
	(req, res, next) => {
		res.send('💌');
	}
);

/**
 * [More]
 * check() 는 check 필드가 아니라 전체 필드를 대상으로 유효성 검사를 한다는 함수.
 *
 * check, body, param 뿐만아니라
 * cookie, header, quert 함수들도 존재함
 */

app.listen(8080);
