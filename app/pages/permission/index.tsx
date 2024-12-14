import { MetaFunction } from "@remix-run/react"

export const meta: MetaFunction = ({ matches }) => {
  const parentMeta = matches
    .flatMap((match) => match.meta ?? [])
    .filter((meta) => !("title" in meta));
  return [...parentMeta, { title: "Permissions" }];
};

const Permission = () => {
  return (
    <div>Permission</div>
  )
}

export default Permission