import { sqliteTable, integer, text } from 'drizzle-orm/sqlite-core';

export const contactSubmissions = sqliteTable('contact_submissions', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
  email: text('email').notNull(),
  phone: text('phone'),
  message: text('message').notNull(),
  service_type: text('service_type'),
  read: integer('read', { mode: 'boolean' }).notNull().default(false),
  email_sent_confirmation: integer('email_sent_confirmation', { mode: 'boolean' }).notNull().default(false),
  email_sent_notification: integer('email_sent_notification', { mode: 'boolean' }).notNull().default(false),
  email_sent_at: text('email_sent_at'),
  created_at: text('created_at').notNull().default(new Date().toISOString()),
});