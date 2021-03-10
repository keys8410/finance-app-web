import React, { useEffect, useState } from 'react';
import { useSWRInfinite } from 'swr';
import { TransacaoType } from '../../@types/transacoes';
import { usePaginateFetch } from '../../hooks/usePaginateFetch';

const PAGE_SIZE = 3;
type PostType = { post: { title: string; body: any; id: number } };
function Post({ post }: PostType) {
  const { title, body, id } = post;
  return (
    <div className="Card">
      <h1 className="Card--title">
        {id}. {title}
      </h1>
      <p className="Card--body">{body}</p>
    </div>
  );
}

const getKey = (
  pageIndex: number,
  previousPageData: any,
  repo: string,
  pageSize: number
) => {
  if (previousPageData && !previousPageData.length) return null; // reached the end

  return `/usuario/lancamentos?page=${
    pageIndex + 1
  }&pageSize=${pageSize}&categoriaNome`;
};

const Home = () => {
  return <div>home</div>;
};
export default Home;
