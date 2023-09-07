    // Handling image upload
app.post('/upload', upload.single('image'), (req, res) => {
    const { filename, buffer, mimetype } = req.file;
    const rollnumber = req.body.rollnumber;

    const newStudentImage = new StudentImage({
        rollnumber,
        image: {
            data: buffer,
            contentType: mimetype,
        },
    });

    newStudentImage.save((err) => {
        if (err) {
            return res.status(500).send('Error uploading image');
        }
        res.status(200).send('Image uploaded successfully');
    });
});

// Retrieving and displaying an image by rollnumber
app.get('/student/:rollnumber/image', (req, res) => {
    const rollnumber = req.params.rollnumber;

    StudentImage.findOne({ rollnumber }, (err, studentImage) => {
        if (err) {
            return res.status(500).send('Error retrieving image');
        }
        if (!studentImage || !studentImage.image) {
            return res.status(404).send('Image not found');
        }

        const { data, contentType } = studentImage.image;
        res.contentType(contentType);
        res.send(data);
    });
});
