const Spiderman = require('./../app/spiderman')
describe("Test for spiderman", () => {
    test('Create spiderman object', () => {
      const Tomm = new Spiderman("spiderman 1",27,"Tomm",10,"Disney")

      expect(Tomm.nombre).toBe("spiderman 1")
      expect(Tomm.edad).toBe(27)
      expect(Tomm.actor).toBe("Tomm")
      expect(Tomm.peliculas).toBe(10)
      expect(Tomm.estudios).toBe("Disney")
      
    });
  })