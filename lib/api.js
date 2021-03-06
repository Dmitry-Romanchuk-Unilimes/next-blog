import client from './sanity';
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(client);

const blogFields = `
  title,
  subtitle,
  'slug': slug.current,
  date,
  coverImage,
  'author': author->{name, 'avatar': avatar.asset->url},
`;

export function urlFor(source) {
  return builder.image(source);
}

export async function getAllBlogs() {
  const results = await client.fetch(`*[_type == "blog"] | order(date desc) {${blogFields}}`);
  return results;
}

export async function getPaginatedBlogs({ offset = 0, date = 'desc' } = { offset: 0, date: 'desc' }) {
  const results = await client.fetch(`*[_type == "blog"] | order(date ${date}) {${blogFields}}[${offset}...${offset + 3}]`);
  return results;
}

export async function getBlogBySlug(slug) {
  const result = await client.fetch(`*[_type == "blog" && slug.current == $slug] {${blogFields} content[]{..., "asset": asset->}}`, { slug }).then(res => res?.[0]);
  return result;
}