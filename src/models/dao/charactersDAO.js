class cluster0DAO {
  static async getPersonagens(client) {
    try {
      const cursor = await client
        .db('db')
        .collection('personagens')
        .find({})
        .project({_id : 0});
      const result = await cursor.toArray();
      return result;
    } catch (err) {
      console.log(err);
      throw err;
    } finally {
      await client.close()
    }
  }
}
module.exports = cluster0DAO;