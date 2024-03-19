import axios from "axios";
import { langColors } from "./config";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

export default api;

interface LanguageStats {
  [key: string]: number;
}

interface RepositoriesProps {
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
}

export function getLangsFrom(repositories: RepositoriesProps[]) {
  const stats = repositories
    .map((repository) => repository.language as string)
    .reduce(
      (data: LanguageStats, language) => ({
        ...data,
        [language]: (data[language] || 0) + 1,
      }),
      {},
    );

  delete stats.null;

  const statsArray = Object.keys(stats)
    .map((language) => ({
      name: language,
      count: stats[language],
      color: langColors[language.toLowerCase()],
    }))
    .sort((a, b) => b.count - a.count);

  console.log(stats);
  console.log(statsArray);

  return statsArray;

  // const stats: LanguageStats = repositories
  //   .filter((repository) => repository.language !== null) // Filtrando para excluir as entradas com language igual a null
  //   .map((repository) => repository.language as string) // Convertendo para string
  //   .reduce((data: LanguageStats, language) => {
  //     data[language] = (data[language] || 0) + 1;
  //     return data;
  //   }, {});
}
