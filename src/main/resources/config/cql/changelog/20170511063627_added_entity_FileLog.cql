
CREATE TABLE IF NOT EXISTS fileLog (
    id uuid,
    fileNo text,
    title text,
    markFrom text,
    markTo text,
    markDate timestamp,
    updateDate timestamp,
    comment text,
    PRIMARY KEY(id)
);
