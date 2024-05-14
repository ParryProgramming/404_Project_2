const DeckCard = sequelize.define('DeckCard', {
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1, // Assuming at least one copy of each card in the deck
    },
  })
  
  Deck.hasMany(Card, { through: DeckCard, as: 'DeckCards' })
  Card.belongsToMany(Deck, { through: DeckCard })
  Deck.belongsTo(User, {
    as: 'Owner',
    foreignKey: 'userId',
    onDelete: 'CASCADE',
  })
  
  User.hasMany(Deck, {
    as: 'UserDecks',
    foreignKey: 'userId',
    onDelete: 'CASCADE',
  })