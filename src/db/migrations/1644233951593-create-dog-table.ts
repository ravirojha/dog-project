import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createDogTable1644233951593 implements MigrationInterface {

  public dogTable: Table = new Table({
      name: 'dogs',
      columns: [
      {
        name: 'id',
        type: 'integer',
        isGenerated: true,
        isPrimary: true,
        generationStrategy: 'increment',
          },
          {
            name: 'name',
            type: 'string',
            isNullable: false
        },
          
          {
              name: 'age',
              type: 'number',
              isNullable: false
          },
          {
              name: 'breed',
              type: 'string',
              isNullable: false
          }
      ]
  });

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(this.dogTable);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(this.dogTable);
    }

}


