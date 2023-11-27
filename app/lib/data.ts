import { sql } from '@vercel/postgres';
import { User } from './definitions.js';

export async function getUser(email: string) {
  try {
    const user = await sql`SELECT * FROM users WHERE email=${email}`;
    return user.rows[0] as User;
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
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

export default itemData