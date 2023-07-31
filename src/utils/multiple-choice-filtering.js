export function multipleChoiceFiltering(cards, prop, selected) {
  return cards.filter((card) => {
    if (selected.length === 0) {
      return true;
    }
    return selected.includes(card[prop]);
  });
}
