const FoldersService = {
    getAllFolders(knex) {
        return knex('folders').select('*');
    }
}

module.exports = FoldersService;