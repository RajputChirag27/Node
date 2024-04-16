const app = require('express')()
const multer = require('multer')

const upload = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, "uploads")
        },
        filename: function (req, file, cb) {
            cb(null, file.fieldname + "-" + Date.now() + ".jpg")
        }
    })

}).single("user_file")



app.post('/upload', upload, async (req, res) => {
    res.send('File Uploaded')
})

app.listen(4040);