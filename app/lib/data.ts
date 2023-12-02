import { sql } from '@vercel/postgres';
import { User } from './definitions.js';
import { url } from 'inspector';

export async function getUser(email: string) {
  try {
    const user = await sql`SELECT * FROM users WHERE email=${email}`;
    return user.rows[0] as User;
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}

export const ConfigPath = [
  {
    "url": "https://artistique-filestorage.s3.ap-southeast-1.amazonaws.com/image/02%3A41%3A22+PM-36389.jpg"
  },
  {
    "url": "https://artistique-filestorage.s3.ap-southeast-1.amazonaws.com/image/02%3A41%3A22+PM-36389.jpg"
  }
];

export const UrlList = ConfigPath.map(item => item.url);

export function savePathToConfig(path: string) {
  try {
    ConfigPath.push({"url" : `https://artistique-filestorage.s3.ap-southeast-1.amazonaws.com/${path}`})
  } catch (error) {
    console.error('Error saving path to config:', error);
  }
}

const itemData = [
  {
    img: "/hero-image.jpg",
    title: "Painting1",
  },
  {
    img: "/image-list-2.jpg",
    title: "Painting",
  },
  {
    img: "/image-list-3.jpg",
    title: "Painting",
  },
  {
    img: "/image-list-4.jpg",
    title: "Painting",
  },
  {
    img: "/image-list-5.jpg",
    title: "Painting",
  },
  {
    img: "/image-list-2.jpg",
    title: "Painting",
  },
  {
    img: "/image-list-3.jpg",
    title: "Painting",
  },
  {
    img: "/image-list-4.jpg",
    title: "Painting",
  },
  {
    img: "/image-list-5.jpg",
    title: "Painting",
  },
];

export default itemData;