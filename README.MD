##Desafio##

iniciando containes com docker-compose up -D
* certificar-se do funcionamento dos seguintes containers (php-container, noje-container, mysql-container)

Acessar o banco de dados e importar o script do banco que encontra-se em api/db/database.sql
    
        docker exec -i mysql-container mysql -uroot -pMaster99 < api/db/database.sql

Em caso de sistema Windows executar o script dentro do container
        
        docker exec -it mysql-container mysql
        mysql -uroot -ppassword

E executar  o script api/db/database.sql

Ativar a API Google maps e Criar o arquivo .env.local
incluindo a variavel 

        REACT_APP_GOOGLE_MAPS_API_KEY=
