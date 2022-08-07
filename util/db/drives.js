import * as FileSystem from 'expo-file-system';

async function openDatabase (pathToDatabaseFile) {
  if (!(await FileSystem.getInfoAsync(FileSystem.documentDirectory + 'SQLite')).exists) {
    await FileSystem.makeDirectoryAsync(FileSystem.documentDirectory + 'SQLite');
  }
  await FileSystem.downloadAsync(
    Asset.fromModule(require(pathToDatabaseFile)).uri,
    FileSystem.documentDirectory + 'SQLite/sollado.db'
  );
  return SQLite.openDatabase('sollado.db');
}