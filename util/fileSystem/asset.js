import * as FileSystem from 'expo-file-system';

const assetDir = FileSystem.cacheDirectory + 'assets/';
const assetFileUri = (assetId, ext) => assetDir + `${ext}/${assetId}.${ext}`;
const assetUrl = (dirId, assetId, ext) => `https://media1.giphy.com/media/${dirId}/${assetId}.${ext}`;

// 检查本地资源目录是否存在, 如果不存在那么创建
async function ensureDirExists () {
  const dirInfo = await FileSystem.getInfoAsync(assetDir);
  if (!dirInfo.exists) {
    console.log("asset directory doesn't exist, creating...");
    await FileSystem.makeDirectoryAsync(assetDir, { intermediates: true });
  }
}

// 通过资源的一些信息进行下载
export async function addMultipleassets (assetInfos) {
  try {
    await ensureDirExists();
    console.log('Downloading', assetIds.length, 'asset files...');
    await Promise.all(assetInfos.map((dirId, assetId, ext) => FileSystem.downloadAsync(assetUrl(dirId, assetId, ext), assetFileUri(dirId, assetId, ext))));
  } catch (e) {
    console.error("Couldn't download asset files:", e);
  }
}

// 返回本地资源的一个路径
// 如果这个资源不存在, 那么下载
export async function getSingleasset (assetInfo) {
  await ensureDirExists();
  let { dirId, assetId, ext } = assetInfo
  const fileUri = assetFileUri(assetId, ext);
  const fileInfo = await FileSystem.getInfoAsync(fileUri);

  if (!fileInfo.exists) {
    console.log("asset isn't cached locally. Downloading...");
    await FileSystem.downloadAsync(assetUrl(dirId, assetId, ext), fileUri);
  }

  return fileUri;
}

// 导出可共享URI-可在应用程序外部共享, 分享某个文件
export async function getassetContentUri (assetInfo) {
  return FileSystem.getContentUriAsync(await getSingleasset(assetInfo));
}

// 删除本地资源目录
export async function deleteAllassets () {
  console.log('Deleting all asset files...');
  await FileSystem.deleteAsync(assetDir);
}