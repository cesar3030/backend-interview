import HttpStatus from 'http-status-codes';
import BadArgumentError from '../errors/BadArgumentError';

export const success = (res, status) => entity => {
  if (entity) {
    res.status(status || HttpStatus.OK).json(entity);
  }
  return null;
};

export const notFound = res => entity => {
  if (entity) {
    return entity;
  }
  res.status(HttpStatus.notFound).end();
  return null;
};

export const handleResponse = (res, entity, status) => {
  if (entity) {
    res.status(status || HttpStatus.OK).json(entity);
  }
  res.status(HttpStatus.NOT_FOUND).end();
  return null;
};

export const handleError = (res, error) => {
  if (error instanceof BadArgumentError) {
    res.status(HttpStatus.BAD_REQUEST).end();
  }
  res.status(HttpStatus.NOT_FOUND).end();
};
