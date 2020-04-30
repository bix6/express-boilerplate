CREATE TABLE folders (
    id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    name text NOT NULL
);

CREATE TABLE notes (
    id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    name text NOT NULL,
    content text NOT NULL,
    modified TIMESTAMPTZ DEFAULT now() NOT NULL,
    folderId INTEGER 
        REFERENCES folders(id) ON DELETE CASCADE NOT NULL
);