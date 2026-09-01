import { drizzle } from 'drizzle-orm/d1';

export default function orm(c) {
	const logger = c.env.orm_log === true || c.env.orm_log === 'true';
	return drizzle(c.env.db, { logger })
}
