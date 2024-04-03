const AppError = require('../utils/AppError');
const NotesCreateService = require('./NotesCreateService');
const NotesRepositoryInMemory = require('../repositories/NotesRepositoryInMemory');

describe('NotesCreateService', () => {
  let notesRepository = null;
  let notesCreateService = null;

  beforeEach(() => {
    notesRepository = new NotesRepositoryInMemory();
    notesCreateService = new NotesCreateService(notesRepository);
  });

  it('note should be created', async () => {
    const note = {
      user_id: Math.floor(Math.random() + 1000) + 1,
      rating: 5,
      title: 'Movie test',
      description: 'This test is very cool',
    };

    const noteCreated = await notesCreateService.execute(note);

    expect(noteCreated).toHaveProperty('id');
  });

  it('note should not  be created', async () => {
    const note = {
      user_id: Math.floor(Math.random() + 1000) + 1,
      rating: 5,
      description: 'This test is very cool',
    };

    await expect(notesCreateService.execute(note)).rejects.toEqual(
      new AppError('O título é obrigatório!')
    );
  });

  it('note tags should be create', async () => {
    const note = {
      user_id: Math.floor(Math.random() + 1000) + 1,
      rating: 5,
      title: 'Movie test',
      description: 'This test is very cool',
      tags: ['action', 'all family'],
    };

    const noteCreated = await notesCreateService.execute(note);

    expect(noteCreated).toHaveProperty('noteTags_id');
  });
});
