export const getWordForm = (number, singular, plural, pluralGenitive) => {
  // singular - форма слова для единственного числа (например, "гостиница")
  // plural - форма слова для множественного числа (например, "гостиницы")
  // pluralGenitive - форма слова для множественного числа в родительном падеже (например, "гостиниц")
  // Проверяем наличие множественного числа (число от 5 до 20)
  if (number >= 5 && number <= 20) {
    return pluralGenitive;
  }
  // Получаем последнюю цифру числа
  const lastDigit = number % 10;
  // Определяем форму слова в зависимости от последней цифры числа
  if (lastDigit === 1) {
    return singular;
  } else if (lastDigit >= 2 && lastDigit <= 4) {
    return plural;
  } else {
    return pluralGenitive;
  }
};
