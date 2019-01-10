import { MigrationInterface, QueryRunner } from 'typeorm';

export class UserCourse1545834343064 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`
      CREATE TABLE "courses" (
        "id" SERIAL NOT NULL,
        "name" character varying(128) NOT NULL,
        "description" text,
        "created_at" TIMESTAMP NOT NULL DEFAULT now(),
        "updated_at" TIMESTAMP NOT NULL DEFAULT now(),
        CONSTRAINT "PK_courses" PRIMARY KEY ("id"))
    `);
    await queryRunner.query(`
      CREATE TABLE "users" (
        "id" SERIAL NOT NULL,
        "email" character varying(128) NOT NULL,
        "password" character varying(64),
        "salt" character varying(64),
        "activation_token" character varying(128),
        "first_name" character varying(128),
        "last_name" character varying(128),
        "created_at" TIMESTAMP NOT NULL DEFAULT now(),
        "updated_at" TIMESTAMP NOT NULL DEFAULT now(),
        CONSTRAINT "PK_users" PRIMARY KEY ("id"))
    `);
    await queryRunner.query(`
      CREATE TABLE "users_courses" (
        "is_complete" character varying(32) NOT NULL,
        "created_at" TIMESTAMP NOT NULL DEFAULT now(),
        "updated_at" TIMESTAMP NOT NULL DEFAULT now(),
        "user_id" integer NOT NULL,
        "course_id" integer NOT NULL,
        CONSTRAINT "PK_users_courses" PRIMARY KEY ("user_id", "course_id"))
    `);
    await queryRunner.query(`
      ALTER TABLE "users_courses"
      ADD CONSTRAINT "FK_users_courses_user_id"
      FOREIGN KEY ("user_id") REFERENCES "users"("id")
      ON UPDATE CASCADE
      ON DELETE CASCADE
    `);
    await queryRunner.query(`
      ALTER TABLE "users_courses"
      ADD CONSTRAINT "FK_users_courses_course_id"
      FOREIGN KEY ("course_id") REFERENCES "courses"("id")
      ON UPDATE CASCADE
      ON DELETE CASCADE
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`ALTER TABLE "users_courses" DROP CONSTRAINT "FK_users_courses_user_id"`);
    await queryRunner.query(`ALTER TABLE "users_courses" DROP CONSTRAINT "FK_users_courses_course_id"`);
    await queryRunner.query(`DROP TABLE "users_courses"`);
    await queryRunner.query(`DROP TABLE "users"`);
    await queryRunner.query(`DROP TABLE "courses"`);
  }

}
