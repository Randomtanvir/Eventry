import { getPlaiceholder } from "plaiceholder";

export const getBlurData = async (src) => {
  const buffer = await fetch(src).then(async (res) =>
    Buffer.from(await res.arrayBuffer())
  );
  const data = await getPlaiceholder(buffer);
  return data;
};
