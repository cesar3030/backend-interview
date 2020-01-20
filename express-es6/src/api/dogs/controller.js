import HttpStatus from 'http-status-codes';

import DogService from './service';
import { handleResponse, handleError } from '../../helpers/response';

export default class DogController {
  static index(_, res) {
    handleResponse(res, DogService.findAll());
  }

  static show({ params: { id } }, res) {
    handleResponse(res, DogService.findById(id));
  }

  static delete({ params: { id } }, res) {
    try {
      DogService.delete(id);
      res.status(HttpStatus.NO_CONTENT).end();
    } catch (err) {
      handleError(res, err);
    }
  }

  static update({ params: { id }, body }, res) {
    try {
      const dog = DogService.update(id, body);
      handleResponse(res, dog);
    } catch (err) {
      handleError(res, err);
    }
  }

  static create({ body }, res) {
    handleResponse(res, DogService.create(body));
  }
}
