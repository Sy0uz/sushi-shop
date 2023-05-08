async function get_average_rgb(src: string): Promise<Uint8ClampedArray> {
    return new Promise(resolve => {
        let context = document.createElement('canvas').getContext('2d');
        context!.imageSmoothingEnabled = true;

        let img = new Image();
        img.src = src;
        img.crossOrigin = "";

        img.onload = () => {
            context!.drawImage(img, 0, 0, 1, 1);
            resolve(context!.getImageData(0, 0, 1, 1).data.slice(0, 3));
        };
    });
}

export default get_average_rgb;