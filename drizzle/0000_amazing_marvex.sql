CREATE TABLE "quote_histories" (
	"id" bigint PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "quote_histories_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START WITH 1 CACHE 1),
	"pid" varchar(255) NOT NULL,
	"day" date DEFAULT now() NOT NULL,
	"high" varchar(255) NOT NULL,
	"last" varchar(255) NOT NULL,
	"low" varchar(255) NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "quote_histories_pid_unique" UNIQUE("pid"),
	CONSTRAINT "quote_histories_pid_day_unique" UNIQUE("pid","day")
);
--> statement-breakpoint
CREATE TABLE "quotes" (
	"id" bigint PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "quotes_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START WITH 1 CACHE 1),
	"name" varchar(255) NOT NULL,
	"symbol" varchar(255) NOT NULL,
	"ask" varchar(255) NOT NULL,
	"pid" varchar(255) NOT NULL,
	"bid" varchar(255) NOT NULL,
	"high" varchar(255) NOT NULL,
	"last" varchar(255) NOT NULL,
	"last_dir" varchar(255) NOT NULL,
	"last_numeric" numeric NOT NULL,
	"last_close" varchar(255),
	"turnover" varchar(255),
	"turnover_numeric" numeric,
	"low" varchar(255) NOT NULL,
	"pc" varchar(255) NOT NULL,
	"pc_col" varchar(255) NOT NULL,
	"pcp" varchar(255) NOT NULL,
	"time" varchar(255) NOT NULL,
	"timestamp" bigint NOT NULL,
	"position" integer DEFAULT 0 NOT NULL,
	"category" varchar(50) NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "quotes_pid_unique" UNIQUE("pid")
);
--> statement-breakpoint
ALTER TABLE "quote_histories" ADD CONSTRAINT "quote_pid_fkey" FOREIGN KEY ("pid") REFERENCES "public"."quotes"("pid") ON DELETE no action ON UPDATE no action;