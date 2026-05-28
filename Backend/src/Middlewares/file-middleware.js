import multer from "multer";

const uploade = multer({
    storage: multer.memoryStorage(),
    limits: {
        fileSize: 3 * 1024 * 1024 //3mb
    }
})

export { uploade }