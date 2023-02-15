CREATE DATABASE IF NOT EXISTS trialdatabase;
USE trialdatabase;
    /* Criando database*/

CREATE TABLE  IF NOT EXISTS cliente(
    id INT(11) AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    rua VARCHAR(255) NOT NULL,
    cidade VARCHAR(255) NOT NULL,
    pais VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

CREATE TABLE IF NOT EXISTS entrega (
    id int(11) AUTO_INCREMENT NOT NULL,
    peso int(11) NOT NULL,
    lat decimal(10,8) NOT NULL,
    lng decimal(10,8) NOT NULL,
    cliente_id int(11) NOT NULL,
    PRIMARY KEY (id),
    KEY cliente_id (cliente_id)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

ALTER TABLE entrega
    ADD CONSTRAINT FK_ClienteEntrega FOREIGN KEY (cliente_id) REFERENCES cliente (id) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;