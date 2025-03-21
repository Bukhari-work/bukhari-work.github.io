const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

const CONTENT_DEPTH = 2;
const JSON_FOLDER = "./.json";

// Define your directories
const PROJECT_FOLDER = "src/content/project";
const BLOG_FOLDER = "src/content/blog";
const AUTHORS_FOLDER = "src/content/authors";

// get data from markdown
const getData = (folder, groupDepth) => {
  const getPath = fs.readdirSync(folder);
  const removeIndex = getPath.filter((item) => !item.startsWith("-"));

  const getPaths = removeIndex.flatMap((filename) => {
    const filepath = path.join(folder, filename);
    const stats = fs.statSync(filepath);
    const isFolder = stats.isDirectory();

    if (isFolder) {
      return getData(filepath, groupDepth);
    } else if (filename.endsWith(".md") || filename.endsWith(".mdx")) {
      const file = fs.readFileSync(filepath, "utf-8");
      const { data, content } = matter(file);
      const pathParts = filepath.split(path.sep);
      const slug =
        data.slug ||
        pathParts
          .slice(CONTENT_DEPTH)
          .join("/")
          .replace(/\.[^/.]+$/, "");
      const group = pathParts[groupDepth];

      return {
        group: group,
        slug: slug,
        frontmatter: data,
        content: content,
      };
    } else {
      return [];
    }
  });

  const publishedPages = getPaths.filter(
    (page) => !page.frontmatter?.draft && page,
  );
  return publishedPages;
};

try {
  // create folder if it doesn't exist
  if (!fs.existsSync(JSON_FOLDER)) {
    fs.mkdirSync(JSON_FOLDER);
  }

  // Get data from each directory
  const projectData = getData(PROJECT_FOLDER, 2);
  const blogData = getData(BLOG_FOLDER, 2);
  const authorsData = getData(AUTHORS_FOLDER, 2);

  // Merge all data into one array
  const combinedData = [...projectData, ...blogData, ...authorsData];

  // Write combined data to posts.json
  fs.writeFileSync(`${JSON_FOLDER}/posts.json`, JSON.stringify(combinedData));

  // Use the combined data for the search index
  fs.writeFileSync(`${JSON_FOLDER}/search.json`, JSON.stringify(combinedData));
} catch (err) {
  console.error(err);
}
