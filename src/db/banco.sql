CREATE TABLE IF NOT EXISTS role (
    id UUID PRIMARY KEY,
    name VARCHAR(128) NOT NULL
);

CREATE TABLE IF NOT EXISTS "user" (
    id UUID PRIMARY KEY,
    name VARCHAR(64) NOT NULL,
    email VARCHAR(128) NOT NULL UNIQUE,
    photo VARCHAR(2000),
    password VARCHAR(255) NOT NULL,
    description TEXT,
    status INT,
    lastActive DATE,
    idRole UUID REFERENCES role(id),
    isAdmin BOOLEAN
);

CREATE TABLE IF NOT EXISTS "group" (
    id UUID PRIMARY KEY,
    title VARCHAR(128) NOT NULL,
    photo VARCHAR(2000),
    description TEXT,
    idAdmin UUID REFERENCES "user"(id),
    isTransmission BOOLEAN,
    isPrivate BOOLEAN
    archived BOOLEAN
);

CREATE TABLE IF NOT EXISTS message (
    id UUID PRIMARY KEY,
    text TEXT NOT NULL,
    date DATE,
    priority INT,
    messageType INT,
    idSentBy UUID REFERENCES "user"(id),
    idGroup UUID REFERENCES "group"(id),
);

CREATE TABLE IF NOT EXISTS user_group_link (
    id UUID PRIMARY KEY,
    idUser UUID REFERENCES "user"(id),
    idGroup UUID REFERENCES "group"(id)
);

CREATE TABLE IF NOT EXISTS user_message_link (
    id UUID PRIMARY KEY,
    idUser UUID REFERENCES "user"(id)
    idMessage UUID REFERENCES message(id),
);
