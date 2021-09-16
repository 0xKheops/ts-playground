import fs from "fs";
import path from "path";

const parseTextFile = async (filepath: string): Promise<string> => {
  const fullpath = path.resolve(filepath);
  return fs.promises.readFile(fullpath, "utf8");
};

export default parseTextFile;
