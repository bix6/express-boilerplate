BEGIN;

INSERT INTO folders (name)
VALUES
    ('Important'),
    ('Sparkly'),
    ('Kingly');

INSERT INTO notes (name, folderId, content)
VALUES
    ('Code 101', 1, 'This is how we get down'),
    ('List', 1, 'Do all these things please'),
    ('Trappers Trap Tortoises', 2, 'Run as fast as you can'),
    ('Diamonds', 2, 'Are forever'),
    ('Golden', 3, 'Everything is golden'),
    ('GOLD', 3, 'I''m a king'),
    ('KING', 3, 'KUNTA');

COMMIT;