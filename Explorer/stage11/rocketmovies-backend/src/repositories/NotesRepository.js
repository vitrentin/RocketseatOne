const knex = require('../database/knex');

class NotesRepository {
  async createNote({ title, rating, description, user_id }) {
    const note_id = await knex('notes').insert({
      title,
      rating,
      description,
      user_id,
    });
    return { id: note_id };
  }

  async deleteNote(id) {
    await knex('notes').where({ id }).delete();
  }

  async findNoteById(id) {
    const note = await knex('notes').where({ id }).first();

    return note;
  }

  async findUserNotesByTitle({ user_id, title }) {
    const notes = await knex('notes')
      .where({ user_id })
      .whereLike('title', `%${title}%`)
      .orderBy('title');

    return notes;
  }

  async findUserNotesByTags({ user_id, title, tags }) {
    const notes = await knex('tags')
      .select(['notes.id', 'notes.title', 'notes.user_id'])
      .where('notes.user_id', user_id)
      .whereLike('notes.title', `%${title}%`)
      .whereIn('tags.name', tags)
      .innerJoin('notes', 'notes.id', 'tags.note_id')
      .orderBy('notes.title')
      .groupBy('notes.title');
    return notes;
  }

  async createNoteTags(tags) {
    const noteTags = await knex('tags').insert(tags);

    return { id: noteTags };
  }

  async findNoteTags(note_id) {
    const noteTags = await knex('tags').where({ note_id }).orderBy('name');

    return noteTags;
  }

  async findUserTags(user_id) {
    const userTags = await knex('tags').where({ user_id });

    return userTags;
  }
}

module.exports = NotesRepository;
