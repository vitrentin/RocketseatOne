const knex = require('../database/knex');

class UserRepository {
  async create({ name, email, password }) {
    const [userId] = await knex('users').insert({ name, email, password });
    return { id: userId };
  }

  async update(user) {
    const updated_at = knex.fn.now();

    await knex('users')
      .update({ ...user, updated_at })
      .where({ id: user.id });

    return { id: user.id };
  } 

  async findById(id) {
    const user = await knex('users').where({ id }).first();

    return user;
  }

  async findByEmail(email) {
    const user = await knex('users').where({ email }).first();

    return user;
  }
}

module.exports = UserRepository;
