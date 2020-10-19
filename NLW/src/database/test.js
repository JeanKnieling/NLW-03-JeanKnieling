const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async db => {
    // inserir dados na tabela
    await saveOrphanage(db, {
        lat: "-27.222633", 
        lng: "-49.6555874",
        name: "Lar dos meninos",
        about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
        whatsapp: "999159915",
        images: [
            "https://unsplash.com/photos/4K2lIP0zc_k",

            "https://unsplash.com/photos/4_mJ1TbMK8A"
        ].toString(),

        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar",
        opening_hours: "Horários de visitas das 18h até 8h",
        open_on_weekends: "1"
    })

    // consultar dados da tabela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)

    // consultar somente 1 orphanato, pelo id
    /*const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "2"')
    console.log(orphanage)*/

    // deletar dados da tabela
    /*console.log(await db.run('DELETE FROM orphanages WHERE id = "6"'))
    /*console.log(await db.run('DELETE FROM orphanages WHERE id = "5"'))*/
})