/*
    This file contains functions and classes for working with
    files.
    * It does not matter which javascript library/framework 
    * you are using, these functions work wherever you want 
    * to use theme
*/

export function getFileExtension(filename) {
    const lastDotIndex = filename.lastIndexOf('.');
    const fileExtension = filename.slice(lastDotIndex);
    return fileExtension; 
}

export function getFileType(filename) {
    // Define arrays of video and image file extensions
    const videoExtensions = ['.mp4', '.avi', '.mov', '.wmv', '.mkv', '.flv', '.webm'];
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.tiff', '.svg', '.webp'];

    // Get the file extension from the filename
    const extension = filename.slice(((filename.lastIndexOf(".") - 1) >>> 0) + 2).toLowerCase();

    console.log("extenstion: " + extension)
    // Check if the extension is in the video or image arrays
    if (videoExtensions.includes(`.${extension}`)) {
        return 'video';
    } else if (imageExtensions.includes(`.${extension}`)) {
        return 'image';
    } else {
        return undefined;
    }
}