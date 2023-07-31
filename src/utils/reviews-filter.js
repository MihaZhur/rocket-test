export const reviewsFilter = (cards, reviews) => {
  if (Array.isArray(cards)) {
    return cards.filter((card) => {
      if (reviews <= card.reviews_amount) {
        return card;
      }
    });
  }
};
