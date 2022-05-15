function EmojiList({ emojis }) {
  return (
    <>
      <h1>Emoji List</h1>
      <ul>
        {emojis ? (
          emojis.map(function (emoji) {
            return (
              <li key={emoji}>
                {emoji}
              </li>
            );
          })
        ) : (
          <h2>No emoji, yet</h2>
        )}
      </ul>
    </>
  );
}

export default EmojiList;
