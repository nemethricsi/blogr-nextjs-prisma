import React from "react";
import { GetStaticProps } from "next";
import Layout from "../components/Layout";
import { Button } from "../components/Button";
import Post, { PostProps } from "../components/Post";
import prisma from "../lib/prisma";
import {
  AddIcon,
  ChangeIcon,
  FavouriteIcon,
  LightModeIcon,
} from "../lib/icons";

export const getStaticProps: GetStaticProps = async () => {
  const feed = await prisma.post.findMany({
    where: { published: true },
    include: {
      author: {
        select: { name: true },
      },
    },
  });

  return {
    props: { feed },
    revalidate: 10,
  };
};

type Props = {
  feed: PostProps[];
};

const Blog: React.FC<Props> = (props) => {
  return (
    <Layout>
      <div className="page">
        <h1>Public Feed</h1>
        <Button>Add new</Button>
        <div style={{ display: "flex", gap: 8, margin: "16px 0" }}>
          <button className="ghost-button">
            <ChangeIcon className="w-6 h-6" />
          </button>
          <button className="ghost-button">
            <AddIcon className="w-6 h-6 text-grey" />
          </button>
          <button className="ghost-button">
            <FavouriteIcon className="w-6 h-6 text-red" />
          </button>
          <button className="ghost-button">
            <LightModeIcon className="w-6 h-6 text-grey" />
          </button>
        </div>
        <main>
          {props.feed.map((post) => (
            <div key={post.id} className="post">
              <Post post={post} />
            </div>
          ))}
        </main>
      </div>
      <style jsx>{`
        .post {
          background: white;
          transition: box-shadow 0.1s ease-in;
        }

        .post:hover {
          box-shadow: 1px 1px 3px #aaa;
        }

        .post + .post {
          margin-top: 2rem;
        }
      `}</style>
    </Layout>
  );
};

export default Blog;
