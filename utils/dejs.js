import { renderFile } from 'https://deno.land/x/dejs@0.10.2/mod.ts';

export const dejs = async (filename, params = {}) => {
	return await renderFile(`${Deno.cwd()}/views/${filename}`, params);
};
