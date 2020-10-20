const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async db => {
    // inserir dados na tabela
    /*await saveOrphanage(db, {
        lat: "-27.222633", 
        lng: "-49.6455874",
        name: "Lar das meninas",
        about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
        whatsapp: "999149914",
        images: [
            "https://images.unsplash.com/photo-1542353436-312f0e1f67ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=854&q=80",

            "https://images.unsplash.com/photo-1514489024785-d5ba8dfb2198?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=935&q=80"
        ].toString(),

        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar",
        opening_hours: "Horários de visitas das 18h até 8h",
        open_on_weekends: "0"
    })*/

    // consultar dados da tabela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)

    // consultar somente 1 orphanato, pelo id
    /*const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "2"')
    console.log(orphanage)*/

    // deletar dados da tabela
    /*console.log(await db.run('DELETE FROM orphanages WHERE id = "7"'))
    console.log(await db.run('DELETE FROM orphanages WHERE id = "8"'))*/
})