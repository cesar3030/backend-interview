import data from '../../../data/dogs';
import NotFoundError from '../../errors/NotFoundError';
import BadArgumentError from '../../errors/BadArgumentError';
let dogs = data;

class DogService {
  static findAll() {
    return dogs;
  }

  static findById(id) {
    if (!id) {
      throw new BadArgumentError('Missing dog id');
    }
    const dog = dogs.filter(d => d.id == id);

    if (dog.length === 0) {
      throw new NotFoundError(`Dog#${id} not found`);
    }

    return dog.length > 0 ? dog[0] : null;
  }

  static delete(id) {
    if (!id) {
      throw new BadArgumentError('Missing dog id');
    }

    const dogCount = dogs.length;
    dogs = dogs.filter(d => d.id != id);
    if (dogCount === dogs.length) {
      throw new NotFoundError(`Dog#${id} not found`);
    }
  }

  static update(id, newDog) {
    let dog = DogService.findById(id);
    dog = { ...dog, ...newDog };
    dogs = dogs.map(d => (d.id == id ? dog : d));
    return dog;
  }

  static create(dog) {
    const id = Math.max(...dogs.map(d => d.id)) + 1;
    dog = { ...dog, id };
    dogs.push(dog);
    return dog;
  }
}

export default DogService;
