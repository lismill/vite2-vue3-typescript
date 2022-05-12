/**
 * 下载文件 - 根据文件地址下载
 * @param path
 * @param name
 * @returns
 */
export const downloadByUrl = (path: string, name?: string) => {
  return new Promise((resolve) => {
    const xhr = new XMLHttpRequest();
    xhr.open("get", path);
    xhr.responseType = "blob";
    xhr.send();
    xhr.onload = function xhrOnload() {
      if (this.status === 200 || this.status === 304) {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(this.response);
        fileReader.onload = function fileReaderOnLoad() {
          const a: any = document.createElement("a");
          a.style.display = "none";
          a.href = this.result;
          a.download = name;
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          resolve("");
        };
      }
    };
  });
};

/**
 * 文件流下载
 * @param content
 * @param name
 */
export const downloadByData = (content: string, name: string) => {
  const blobData = [content];
  const blob = new Blob(blobData, {type: "application/octet-stream"});
  const blobURL = window.URL.createObjectURL(blob);
  const tempLink = document.createElement("a");
  tempLink.style.display = "none";
  tempLink.href = blobURL;
  tempLink.setAttribute("download", name);
  if (typeof tempLink.download === "undefined") {
    tempLink.setAttribute("target", "_blank");
  }
  document.body.appendChild(tempLink);
  tempLink.click();
  document.body.removeChild(tempLink);
  window.URL.revokeObjectURL(blobURL);
};
