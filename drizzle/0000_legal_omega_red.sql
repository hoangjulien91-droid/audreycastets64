CREATE TABLE `contact_submissions` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`email` text NOT NULL,
	`phone` text,
	`message` text NOT NULL,
	`service_type` text,
	`read` integer DEFAULT false NOT NULL,
	`email_sent_confirmation` integer DEFAULT false NOT NULL,
	`email_sent_notification` integer DEFAULT false NOT NULL,
	`email_sent_at` text,
	`created_at` text DEFAULT '2025-10-31T18:59:02.867Z' NOT NULL
);
