export default function getPublicURL(fileNameWithExt) {
  return `${process.env.PUBLIC_URL}/${fileNameWithExt}`;
}