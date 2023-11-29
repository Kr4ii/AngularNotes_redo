CREATE TABLE notes
(
    note_id SERIAL PRIMARY KEY,
    note_header CHARACTER VARYING(25),
    note_text TEXT,
	reminder_date TIMESTAMP	
);
INSERT INTO notes (note_header, note_text, reminder_date) VALUES ('first note', 'Text of the first note', '2023-11-10 12:10:00');
INSERT INTO notes (note_header, note_text, reminder_date) VALUES ('2 note', 'Text of the 2 note', '2023-11-11 15:10:00');
INSERT INTO notes (note_header, note_text, reminder_date) VALUES ('Третья заметка', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', '2025-11-10 17:10:00');

CREATE TABLE tags
(
    tag_id SERIAL PRIMARY KEY,
    tag_text CHARACTER VARYING(25) UNIQUE    
);
INSERT INTO tags (tag_text) VALUES ('tag 1');
INSERT INTO tags (tag_text) VALUES ('Тег-2');

CREATE TABLE notes_tags
(
    id        SERIAL PRIMARY KEY,
    note_id INTEGER NOT NULL REFERENCES notes,
    tag_id   INTEGER NOT NULL REFERENCES tags,
    UNIQUE (note_id, tag_id)
);

INSERT INTO notes_tags (note_id, tag_id)
VALUES (1, 1);