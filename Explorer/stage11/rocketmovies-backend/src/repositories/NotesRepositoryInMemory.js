class NotesRepositoryInMemory {
  notes = [];
  notesTags = [];

  async createNote({ title, rating, description, user_id }) {
    const note = {
      id: this.notes.length + 1,
      title,
      rating,
      description,
      user_id,
    };

    this.notes.push(note);

    return { id: note.id };
  }

  async createNoteTags(tags) {
    const noteTags = {
      id: this.notesTags.length + 1,
      tags,
    };

    this.notesTags.push(noteTags);

    return { id: noteTags.id };
  }
}

module.exports = NotesRepositoryInMemory;
