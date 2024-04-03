const AppError = require('../utils/AppError');

class NotesCreateService {
  constructor(notesRepository) {
    this.notesRepository = notesRepository;
  }

  async execute({ user_id, title, rating, description, tags }) {
    if (!title) throw new AppError('O título é obrigatório!');

    tags = tags ?? [];

    if (rating < 0 || rating > 5) {
      throw new AppError('Avaliação do filme inválida!');
    }

    const { id: note_id } = await this.notesRepository.createNote({
      title,
      rating,
      description,
      user_id,
    });

    let tagsCreated;
    if (tags.length > 0) {
      const tagsInsert = tags.map((tag) => ({
        note_id,
        user_id,
        name: tag.trim(),
      }));

      tagsCreated = await this.notesRepository.createNoteTags(tagsInsert);
    }

    return {
      id: note_id,
      noteTags_id: tagsCreated?.id,
    };
  }
}

module.exports = NotesCreateService;
