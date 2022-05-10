import axios from "axios";

const url = "http://localhost:5000/person"

export const DeletePerson = async (id) => await axios.delete(`${url}/${id}`);
export const GetPerson = async () => await axios.get(`${url}`);
export const AddPerson = async (data) => await axios.post(`${url}`, data);
export const SendMail = async (data) => await axios.post(`http://localhost:5000/email`, data);
export const UpdatePerson = async (id, data) => await axios.put(`${url}/${id}`, data);