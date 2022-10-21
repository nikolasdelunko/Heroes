exports.postUpload = (req, res) => {
  if (!req.files) {
    return res.status(404).send(`no file uploaded`).end();
  }

  const file = req.files.file;

  if (!file) return res.send("Incorrect input name");

  const newFileName = encodeURI(Date.now() + "-" + file.name);

  file.mv(`${__dirname}../../../public/uploads/${newFileName}`, (err) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.send({
      fileName: `${file.name}`,
      filePath: `/uploads${newFileName}`,
    });
  });
};
