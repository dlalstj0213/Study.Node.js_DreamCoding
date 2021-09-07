// npm i glob
import glob from 'glob';
import path from 'path';

glob.sync('./module_dir/**/*.js').forEach(async (file) => {
	const mod = await import(file);
	mod.print();
});
