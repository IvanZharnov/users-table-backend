const express = require('express');
const userService = require('../services/userService');
const userValidator = require('../validators/validator');

exports.getUsers = async (req, res) => {
  const users = await userService.getUsersService();
  console.log('Get all users');
  return res.send(users.rows);
};

exports.createUser = async (req, res) => {
  const data = {
    first_name: req.body.first_name,
    last_name: req.body.last_name
  };
  const error = await userValidator.userValidation(data);
  if(!error) {
    return res.status(400).send('Bad Request');
  }
  const newUser = await userService.createUserService(data);
  console.log('Create new user');
  return res.status(200).send(newUser.rows[0]);
};

exports.updateUser = async (req, res) => {
  const id = req.params.id;
  const data = {
    first_name: req.body.first_name,
    last_name: req.body.last_name
  };
  const err = await userValidator.userValidation(data);
  if(!err) {
    return res.status(400).send('Bad Request');
  }
  const updatedUser = await userService.updateUserService(id, data);
  console.log('Update user with id: ', id);
  return res.send(updatedUser.rows[0]);
};

exports.deleteUser = async (req, res) => {
  const id = req.params.id;
  const deletedUser = await userService.deleteUserService(id);
  console.log('Delete user with id: ', id);
  return res.send(deletedUser.rows[0]);
};
