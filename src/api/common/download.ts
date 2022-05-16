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
          a.download = name ?? "undefined";
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
export const downloadByData = (content: string, name?: string) => {
  const blobData = [content];
  const blob = new Blob(blobData, {type: "application/octet-stream"});
  const blobURL = window.URL.createObjectURL(blob);
  const tempLink = document.createElement("a");
  tempLink.style.display = "none";
  tempLink.href = blobURL;
  tempLink.setAttribute("download", name ?? "undefined");
  if (typeof tempLink.download === "undefined") {
    tempLink.setAttribute("target", "_blank");
  }
  document.body.appendChild(tempLink);
  tempLink.click();
  document.body.removeChild(tempLink);
  window.URL.revokeObjectURL(blobURL);
};

/**
 * Base64下载
 * @param content
 * @param name
 */
export const downloadByBase64 = (content: string, name?: string) => {
  const arr = content.split(",");
  const bstr = window.atob(arr[1]);
  let n = bstr.length;
  const u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }

  const blobData = [new Blob([u8arr])];
  const blob = new Blob(blobData, {
    type: `image/${name && name.split(".").length === 2 ? name.split(".")[1] : "png"}`,
  });
  const blobURL = window.URL.createObjectURL(blob);
  const tempLink = document.createElement("a");
  tempLink.style.display = "none";
  tempLink.href = blobURL;
  tempLink.setAttribute("download", name ?? "undefined");
  if (typeof tempLink.download === "undefined") {
    tempLink.setAttribute("target", "_blank");
  }
  document.body.appendChild(tempLink);
  tempLink.click();
  document.body.removeChild(tempLink);
  window.URL.revokeObjectURL(blobURL);
};

export const downloadByCanvas = (canvas: HTMLCanvasElement | undefined, name?: string) => {
  downloadByBase64((canvas as HTMLCanvasElement).toDataURL(), name ?? "undefined");
};
