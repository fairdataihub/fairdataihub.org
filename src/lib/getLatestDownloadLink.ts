interface ReleaseAsset {
  name: string;
  browser_download_url: string;
}

const getOS = async function () {
  const userAgent = window.navigator.userAgent;

  let os;

  if (userAgent.indexOf(`Mac`) !== -1) {
    os = `macOS`;
  } else if (userAgent.indexOf(`like Mac`) !== -1) {
    os = `all`;
  } else if (userAgent.indexOf(`Win`) !== -1) {
    os = `windows`;
  } else if (/Android/.test(userAgent)) {
    os = `all`;
  } else if (userAgent.indexOf(`Linux`)) {
    os = `linux`;
  } else {
    os = `all`;
  }

  return os;
};

const getLatestVersion = async function (repo: string, os: string) {
  const res = await fetch(`https://api.github.com/repos/${repo}/releases`);
  const data = await res.json();
  const release = data[0];
  let link = ``;

  release.assets.forEach((asset: ReleaseAsset) => {
    const file_name = asset.name;
    const file_ext = file_name.split(`.`).pop();
    if (os === `macOS`) {
      if (file_ext === `dmg`) {
        link = asset.browser_download_url;
      }
    }
    if (os === `windows`) {
      if (file_ext === `exe`) {
        link = asset.browser_download_url;
      }
    }
    if (os === `linux`) {
      if (file_ext === `AppImage`) {
        link = asset.browser_download_url;
      }
    }
  });

  return link;
};

export default async function getLatestURL(repo: string) {
  const os = await getOS();

  const downloadLink = await getLatestVersion(repo, os);

  return downloadLink;
}
