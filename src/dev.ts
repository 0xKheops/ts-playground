import parseTextFile from "./helpers/parseTextFile";

(async () => {
  const text = await parseTextFile("./data/hello.txt");
  console.log({ text });
})();
