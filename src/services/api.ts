import axios from "axios";
import { langColors } from "./config";

export const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

export const getUser = async (login: string) => api.get(`/users/${login}`);

export const getRepos = async (login: string) => api.get(`/users/${login}/repos`);
interface LanguageStats {
  [key: string]: number;
}
interface RepositoriesProps {
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

  return statsArray;
}
