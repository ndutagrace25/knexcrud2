const validSticker = sticker => {
  const hasTitle = typeof sticker.title == 'string' && sticker.title.trim() != '';
  const hasURL = typeof sticker.url == 'string' && sticker.url.trim() != '';
  const hasDescription = typeof sticker.description == 'string' && sticker.description.trim() != '';
  const hasRating = !isNaN(sticker.rating);

  return hasTitle && hasURL && hasDescription && hasRating;
}

module.exports = validSticker;