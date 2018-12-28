import { injectable, unmanaged } from 'inversify';
import {
  DeepPartial,
  EntityManager,
  FindConditions,
  FindManyOptions,
  FindOneOptions,
  getRepository,
  ObjectType,
  RemoveOptions,
  Repository,
} from 'typeorm';

export interface ICrudRepository<TModel> {
  findById(id: string | number): Promise<TModel | undefined>;
  findOne(options?: FindOneOptions<TModel>): Promise<TModel | undefined>;
  findAll(options?: FindManyOptions<TModel>): Promise<TModel[]>;
  create(entity: Partial<TModel>): Promise<TModel>;
  update(entity: Partial<TModel>): Promise<TModel>;
  destroy(id: number): Promise<void>;
  validateUniques(entity: Partial<TModel>): Promise<void>;
}

@injectable()
export abstract class GenericRepository<TEntity extends TModel, TModel> implements ICrudRepository<TModel> {
  protected abstract defaultRelations: string[] = [];
  private baseRepo: Repository<TEntity>;

  constructor(
    @unmanaged() protected objectClass: ObjectType<TEntity>,
    @unmanaged() entityManager?: EntityManager,
  ) {
    this.baseRepo = entityManager
      ? entityManager.getRepository(objectClass)
      : getRepository(objectClass);
  }

  public findAll(options?: FindManyOptions<TEntity>): Promise<TModel[]> {
    return this.baseRepo.find(this.getOptions(options));
  }

  public findById(id: string | number): Promise<TModel | undefined> {
    return this.baseRepo.findOne(id);
  }

  public findOne(options?: FindOneOptions<TEntity>): Promise<TModel | undefined> {
    return this.baseRepo.findOne(undefined, this.getOptions(options));
  }

  public async findAndCount(
    options?: FindOneOptions<TEntity>
  ): Promise<{ data: TModel[]; count: number }> {
    const [data, count] = await this.baseRepo.findAndCount(this.getOptions(options));

    return { data, count };
  }

  public async create(entity: Partial<TModel>): Promise<TModel> {
    return this.baseRepo.save(entity as TModel);
  }

  public update(entity: TModel): Promise<TModel> {
    return this.baseRepo.save(entity);
  }

  public async updateWhere(criteria: FindConditions<TEntity>, entity: DeepPartial<TModel>): Promise<TModel[]> {
    const result = await this.baseRepo.update(criteria, entity as DeepPartial<TEntity>);
    const updatedRows = await this.baseRepo.findByIds(result.generatedMaps);

    return updatedRows;
  }

  public async destroy(id: number): Promise<void> {
    await this.deleteWhere({ id });
  }

  public async deleteWhere(criteria: any, options?: RemoveOptions) {
    return this.baseRepo.delete(criteria, options);
  }

  public async truncate() {
    await this.deleteWhere({}); // generate sql DELETE FROM 'entity'
  }

  public async validateUniques(entity: Partial<TModel>): Promise<void> {
    for (const unique of this.baseRepo.metadata.uniques) {
      if (!unique.givenColumnNames) {
        continue;
      }

      if (Array.isArray(unique.givenColumnNames)) {
        const where: Record<string, TModel> = {};
        unique.givenColumnNames.forEach((columnName: string) => {
          where[columnName] = entity[columnName as keyof TModel] as any;
        });

        const data = await this.findOne({ where });

        if (data) {
          throw new Error(`The value(s) of ${unique.givenColumnNames.join(', ')} must be unique`);
        }
      }
    }
  }

  protected async runQuery(sql: string) {
    return this.baseRepo.query(sql);
  }

  private getOptions(options?: FindManyOptions<TEntity> | FindOneOptions<TEntity>) {
    if (!options) { return; }

    const { relations = this.defaultRelations, ...other } = options;
    return { relations, ...other };
  }
}
