import mockData from './mock.json';

export function findFile(fileId: string) {
  const file = mockData.bmecatFiles.find((f) => f.id === fileId);
  if (!file) throw new Error(`BMEcat file "${fileId}" not found in mock data.`);
  return file;
}
