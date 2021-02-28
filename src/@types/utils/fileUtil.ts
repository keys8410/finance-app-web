export function getFileInfo(file: File) {
  return new Promise<{ width: any; height: any }>((resolve, reject) => {
    const img = new Image();
    img.onload = function () {
      const imagem: any = this;
      resolve({
        height: imagem.height,
        width: imagem.width,
      });
    };
    img.onerror = function () {
      reject(this);
    };
    img.src = URL.createObjectURL(file);
  });
}
