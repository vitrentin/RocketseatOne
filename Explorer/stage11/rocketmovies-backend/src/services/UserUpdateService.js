const AppError = require('../utils/AppError');
const { hash, compare } = require('bcryptjs');

class UserUpdateService {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async execute({ id, name, email, oldPassword, newPassword }) {
    const user = await this.userRepository.findById(id);

    if (!user) throw new AppError('Usuário não encontrado!');

    const userWhitEmail = await this.userRepository.findByEmail(email);

    if (userWhitEmail && userWhitEmail.id !== user.id) {
      throw new AppError('Email já em uso!');
    }

    user.name = name ?? user.name;
    user.email = email ?? user.email;

    if (newPassword && !oldPassword) {
      throw new AppError(
        'Você precisa informar a senha antiga para definir a nova senha!'
      );
    }

    if (newPassword && oldPassword) {
      const validPassword = await compare(oldPassword, user.password);

      if (!validPassword) {
        throw new AppError('Senha antiga não confere!');
      }

      user.password = await hash(newPassword, 8);
    }

    await this.userRepository.update(user);

    return { id: user.id };
  }
}

module.exports = UserUpdateService;
