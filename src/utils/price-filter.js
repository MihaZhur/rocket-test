export const priceFiltered = (cards, { max, min }) => {
  if (Array.isArray(cards)) {
    return cards.filter((card) => {
      if (min <= card.min_price && card.min_price <= max) {
        return card;
      }
    });
  }
};
