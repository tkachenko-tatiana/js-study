import httpStatus from 'http-status';
import { ICrudRepository } from '../db/repositories/GenericRepository';
import HttpError from '../lib/errors/HttpError';
import { IUserSession } from '../../sdk/models/User';
// import Guard from '../lib/Guard';

abstract class BaseManager<TModel> {
  // protected readonly guard: Guard;

  constructor(
    protected readonly session: IUserSession | null,
    private readonly entityName: string,
    private readonly repository: ICrudRepository<TModel>,
  ) {
    // this.guard = new Guard(this.session);
  }

  public findAll(option?: { relations?: string[], join?: any }) {
    return this.repository.findAll(option);
  }

  public async findByIdOrFail(id: string | number, options?: { relations?: string[] }) {
    const entity = await this.repository.findOne({ where: { id }, ...options });

    if (!entity) {
      throw new HttpError(httpStatus.NOT_FOUND, `${this.entityName} with id ${id} not found`);
    }

    return entity;
  }

  public async create(model: Partial<TModel>) {
    const result = await this.repository.create(model);

    console.log('Entity created', result);
    return result;
  }

  public async update(model: Partial<TModel>) {
    const result = await this.repository.update(model);

    console.log('Entity updated', result);
    return result;
  }

  public async destroy(id: number) {
    await this.repository.destroy(id);

    console.log('Entity destroyed with id: ', id);
    return {};
  }
}

export default BaseManager;
