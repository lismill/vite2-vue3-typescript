/**
 * 下载文件 - 利用base64
 * @param { String } path - 下载地址
 * @param { String } name - 下载文件名称
 */
export const downloadFile = (path: string, name?: string) => {
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

export default {};
