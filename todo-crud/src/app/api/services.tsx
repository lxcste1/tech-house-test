import axios from "axios";

import { Item } from "../types/Item";

const API_URL = 'https://jsonplaceholder.typicode.com/todos';

export const getItems = async () => {
  const response = await axios.get(API_URL);
  return response.data.slice(0, 3);
};

export const createItem = async (item: Item) => {
  const response = await axios.post(API_URL, item);
  return response.data;
};

export const updateItem = async (id: string, item: Item) => {
  const response = await axios.put(`${API_URL}/${id}`, item);
  return response.data;
};

export const deleteItem = async (id: string) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};