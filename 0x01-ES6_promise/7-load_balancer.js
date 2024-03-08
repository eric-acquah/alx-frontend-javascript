/* Returns the promise that resolves the fastest */

export default function loadBalancer(chinaDownload, USDownload) {
  return Promise.race([chinaDownload, USDownload])
    .then((firstResolve) => firstResolve);c
}
