package main

import "log"

func AddNote(n NewNote) error {
	query := `
		INSERT INTO notes (title, content, user_id)
		VALUES ($1, $2, $3)
	`
	if _, err := DB.Exec(
		query,
		n.Title,
		n.Content,
		n.UserID,
	); err != nil {
		return err
	}
	log.Print("Note Added Succesfully")
	return nil
}
func GetNotes(userId int) []NoteResponse {
	var notes []NoteResponse
	query := `
		SELECT id, title, content, folder_id, created_at
		FROM notes
		WHERE user_id = '$1'
	`
	rows, err := DB.Query(
		query,
		userId,
	)
	if err != nil {
		return nil
	}
	defer rows.Close()
	for rows.Next() {
		var nr NoteResponse
		if err := rows.Scan(
			&nr.ID,
			&nr.Title,
			&nr.Content,
			&nr.FolderID,
			&nr.CreatedAt,
		); err != nil {
			log.Println("GetNotes Error")
			return nil
		}
		notes = append(notes, nr)
	}
	return notes
}
