import Head from 'next/head';
import Login from './login';
import Register from './register';
import utilStyles from '../styles/utils.module.css';

export default function Home({ allPostsData }) {
  return (
    <>
      <Login />
    </>
  );
}