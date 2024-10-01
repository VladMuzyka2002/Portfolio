DROP DATABASE IF EXISTS portfolio;
CREATE DATABASE portfolio;
\c portfolio;
CREATE TABLE IF NOT EXISTS "projects" (
	"id" serial NOT NULL UNIQUE,
	"name" varchar(255) NOT NULL,
	"body" varchar(255) NOT NULL,
	"created-at" timestamp with time zone NOT NULL,
	PRIMARY KEY ("id")
);

CREATE TABLE IF NOT EXISTS "links" (
	"id" serial NOT NULL UNIQUE,
	"project-id" bigint NOT NULL,
	"link" varchar(255) NOT NULL,
	PRIMARY KEY ("id")
);

CREATE TABLE IF NOT EXISTS "components" (
	"id" serial NOT NULL UNIQUE,
	"project-id" bigint NOT NULL,
	"type" varchar(255) NOT NULL,
	"body" varchar(255) NOT NULL,
	PRIMARY KEY ("id")
);

CREATE TABLE IF NOT EXISTS "messages" (
	"id" serial NOT NULL UNIQUE,
	"body" time without time zone NOT NULL,
	"created-at" timestamp with time zone NOT NULL,
	PRIMARY KEY ("id")
);

CREATE TABLE IF NOT EXISTS "tags" (
	"id" serial NOT NULL UNIQUE,
	"name" varchar(255) NOT NULL,
	"project-id" bigint NOT NULL,
	PRIMARY KEY ("id")
);


ALTER TABLE "links" ADD CONSTRAINT "links_fk1" FOREIGN KEY ("project-id") REFERENCES "projects"("id");
ALTER TABLE "components" ADD CONSTRAINT "components_fk1" FOREIGN KEY ("project-id") REFERENCES "projects"("id");
ALTER TABLE "tags" ADD CONSTRAINT "tags_fk2" FOREIGN KEY ("project-id") REFERENCES "projects"("id");