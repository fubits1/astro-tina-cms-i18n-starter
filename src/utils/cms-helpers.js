export function parseExternalLinks(raw) {
  return raw
    .compiledContent()
    .replaceAll(
      /<a href="https?:\/\/(?!your-website\.com)(.*?)">(.*?)<\/a>/gm,
      '<a href="https://$1" target="_blank" rel="noopener noreferrer">$2</a>'
    );
}
