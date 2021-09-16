import fs from "fs";
import path from "path";

const parseTextFileSync = (filepath: string): string => {
  const fullpath = path.resolve(filepath);
  return fs.readFileSync(fullpath, "utf8");
};

export default parseTextFileSync;
