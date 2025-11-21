export function getAllNotes(req, res) {
  res.status(200).send("You just fetched notes");
}

export function createNote(req, res) {
  res.status(201).json({
    message: "post created successfully",
  });
}
