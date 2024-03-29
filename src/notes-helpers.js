export const findFolder = (folders=[], folderid) =>
  folders.find(folder => folder.id === folderid)

export const findNote = (notes=[], noteId) => 
notes.find(note => note.id === Number(noteId))
  
export const getNotesForFolder = (notes=[], folderid) => (
  (!folderid)
    ? notes
    : notes.filter(note => note.folderid === Number(folderid))
)

export const countNotesForFolder = (notes=[], folderid) =>
  notes.filter(note => note.folderid === folderid).length

  
//   export const findFolder = (folders=[], folderId) =>
//   folders.find(folder => folder.id === folderId)

// export const findNote = (notes=[], noteId) =>
//   notes.find(note => note.id === noteId)

// export const getNotesForFolder = (notes=[], folderId) => (
//   (!folderId)
//     ? notes
//     : notes.filter(note => note.folderId === folderId)
// )

// export const countNotesForFolder = (notes=[], folderId) =>
//   notes.filter(note => note.folderId === folderId).length
