import { MetaFunction } from "@remix-run/react"

export const meta: MetaFunction = ({ matches }) => {
  const parentMeta = matches
    .flatMap((match) => match.meta ?? [])
    .filter((meta) => !("title" in meta));
  return [...parentMeta, { title: "Home" }];
};

const Home = () => {
  return (
    <div>Home</div>
  )
}

export default Home