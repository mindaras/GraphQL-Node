module.exports = {
  Query: {
    pets(_, { input }, context) {
      return context.models.Pet.findMany(input);
    },
    pet(_, { input }, context) {
      return context.models.Pet.findOne(input);
    },
    user(_, { input }, context) {
      return context.models.User.findOne({ id: input.id });
    }
  },
  Mutation: {
    pet(_, { input }, context) {
      return context.models.Pet.create(input);
    },
    user(_, { input }, context) {
      return context.models.User.create(input);
    }
  },
  Pet: {
    user(pet, _, context) {
      return context.models.User.findOne({ user: pet.user.id });
    }
  },
  User: {
    pets(user, _, context) {
      return context.models.Pet.findMany({ user: user.id });
    }
  }
};
